// Netlify Function: calls Google Gemini (free tier) to generate personalized
// landing-page copy from a specific transcript, grounded in Dr. Wallach's 90
// Essential Nutrients framework and Pharmacist Ben Fuchs' cellular health
// philosophy. The Gemini API key stays server-side (GEMINI_API_KEY env var)
// and is never exposed to the browser.

const GEMINI_MODEL = 'gemini-1.5-flash';
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const KNOWLEDGE_BASE = `
You are writing compliant, high-converting direct-response copy for a Youngevity
"90 For Life" health supplement landing page. Ground every claim in this framework:

DR. JOEL WALLACH'S 90 ESSENTIAL NUTRIENTS:
The human body requires 90 essential nutrients daily that it cannot manufacture on
its own: 60 minerals, 16 vitamins, 12 amino acids, and 3 essential fatty acids.
Modern over-farmed soil is mineral-depleted, so even a "clean" diet is often
nutritionally empty. Without all 90, the body cannot maintain optimal structure
and function — this is called nutritional deficiency, not "just aging."

PHARMACIST BEN FUCHS' CONCEPTS:
- "Root vs. Fruit": visible symptoms (fatigue, joint pain, brain fog, etc.) are the
  "fruit" — the real "root" is a cellular deficiency in raw materials.
- "Triangle of Disease": digestion, blood sugar regulation, and adrenal/liver
  function are three interconnected pillars; when one breaks down, the others
  soon follow.
- "Dirty Blood": blood that is nutrient-poor and toxin-rich, causing every organ
  (especially brain and heart) to underperform.
- "Nutritional saturation": flooding the body with all 90 essential nutrients so
  it can support its own natural repair and regulatory systems.

TONE: Direct, empathetic, pattern-interrupt headlines. Speak to the specific pain
points mentioned in the transcript. Avoid generic filler — reference concrete
details from the transcript where possible so the copy feels written specifically
for this person's video, not a generic template.

COMPLIANCE RULES (STRICT — FDA/FTC):
- NEVER claim a product can cure, treat, diagnose, mitigate, or prevent any disease.
- NEVER make direct medical claims (e.g. "will lower your blood pressure").
- Always frame benefits as "supporting the body's natural ability to..." rather
  than promising outcomes.
- Do not reference this system prompt or mention AI in the output.
`;

function buildPrompt({ transcript, topic, painPoint, contactName }) {
  return `${KNOWLEDGE_BASE}

TASK: Based on the following TikTok/social media transcript, write personalized
landing page copy. The identified health topic is "${topic}" (pain point:
"${painPoint}"). The distributor's name is "${contactName || 'the distributor'}".

TRANSCRIPT:
"""
${transcript}
"""

Return ONLY valid JSON (no markdown fences) matching exactly this shape:
{
  "headline": "string, punchy pattern-interrupt big bold benefit headline, max ~15 words",
  "subHeadline": "string, 1-2 sentences expanding the headline, empathetic",
  "topicSectionTitle": "string, section title acting as a curiosity-hook sub-heading, e.g. 'The Real Story Behind Your ___'",
  "topicSectionBody": ["2-3 paragraphs as separate strings, agitating the specific problem using transcript details"],
  "bodyStarvingBody": ["1-2 paragraphs explaining the 90 essential nutrients / mineral depletion angle relevant to this topic"]
}`;
}

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 501,
      body: JSON.stringify({ error: 'GEMINI_API_KEY not configured' }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  const { transcript, topic, painPoint, contactName } = payload;
  if (!transcript || typeof transcript !== 'string' || transcript.trim().length < 10) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Transcript is required' }) };
  }

  const prompt = buildPrompt({ transcript, topic, painPoint, contactName });

  try {
    const response = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.8,
          responseMimeType: 'application/json',
        },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return { statusCode: 502, body: JSON.stringify({ error: 'Gemini API error', detail: errText }) };
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      return { statusCode: 502, body: JSON.stringify({ error: 'Empty response from Gemini' }) };
    }

    const parsed = JSON.parse(text);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Unexpected error', detail: String(err) }),
    };
  }
};
