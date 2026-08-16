// Netlify Function: calls Google Gemini (free tier) to generate personalized
// landing-page copy from a specific transcript, grounded in Dr. Wallach's 90
// Essential Nutrients framework, Pharmacist Ben Fuchs' cellular health
// philosophy, and two exhaustive reference documents covering 20+ health
// conditions with biochemical reasoning + protocols. The Gemini API key stays
// server-side (GEMINI_API_KEY env var) and is never exposed to the browser.

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { readFileSync } from 'node:fs';

// Netlify sometimes bundles .mjs as CJS at runtime, so import.meta.url is
// undefined. Use the CJS __dirname when it exists; otherwise fall back to ESM.
const functionDir = typeof __dirname !== 'undefined' ? __dirname : dirname(fileURLToPath(import.meta.url));

const GEMINI_MODEL = 'gemini-2.5-flash';
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

// Load the two reference documents at cold-start so they're available for every
// invocation without re-reading from disk on each request.
let HEALTH_PROTOCOLS = '';
let WALLACH_MANUAL = '';
try {
  HEALTH_PROTOCOLS = readFileSync(join(functionDir, 'Health_Protocols_and_Biochemical_Reasoning.md'), 'utf-8');
} catch { /* file may not be present in local dev */ }
try {
  WALLACH_MANUAL = readFileSync(join(functionDir, 'Dr_Wallachs_Master_Reference_Manual.md'), 'utf-8');
} catch { /* file may not be present in local dev */ }

const KNOWLEDGE_BASE = `
You are writing compliant, high-converting direct-response copy for a Youngevity
"90 For Life" health supplement landing page. Ground every claim in the framework
and reference documents below.

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

=== REFERENCE DOCUMENT 1: HEALTH PROTOCOLS & BIOCHEMICAL REASONING ===
${HEALTH_PROTOCOLS}

=== REFERENCE DOCUMENT 2: DR. WALLACH'S MASTER REFERENCE MANUAL ===
${WALLACH_MANUAL}

=== END REFERENCE DOCUMENTS ===

Use the reference documents to:
1. Identify the specific health condition(s) discussed in the transcript and pull
   the matching biochemical reasoning to explain the root cause accurately.
2. Reference the specific protocol nutrients and products (e.g., Beyond Tangy
   Tangerine, Ultimate EFAs, Plant-Derived Minerals, Fucoid Z, etc.) that
   support the body's natural repair for that condition.
3. Use the correct terminology and mechanisms from the documents (e.g., glycation,
   leaky gut, myelin sheath, Circulating Immune Complexes, etc.).
4. Match the transcript topic to the closest condition in the reference docs and
   write copy that demonstrates deep, specific knowledge of that condition's
   biochemical root cause — not generic health statements.

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

function buildPrompt({ transcript, topic, painPoint, contactName, contactPhone, contactEmail, healthEvaluationLink, ygyId }) {
  return `${KNOWLEDGE_BASE}

=== 17-STEP SECRET SELLING SYSTEM ===
You are writing copy following a proven 17-step direct-response psychological selling
system with five core elements. Every section you generate must embody these principles:

1. PATTERN INTERRUPT HEADLINE: Bold, contrarian, specific — shatters the visitor's
   current belief about their condition. Not generic. Reference the specific pain.
2. AMPLIFY & EMPATHIZE (Sub-headline + Target Audience Callout): Expand the headline,
   then call out the specific person so they know "this is for me."
3. THE NARRATIVE (Topic Section): Tell the real story behind their condition using
   biochemical reasoning from the reference docs. Agitate the problem. Introduce
   "Root vs. Fruit" — their symptom is the fruit, cellular deficiency is the root.
4. THE REVEAL (Body Starving Section): The 90 Essential Nutrients framework. Why
   their body is starving. Modern soil depletion. Nutritional saturation concept.
5. AUTHORITY & CREDIBILITY (Credentials): Establish trust — Dr. Wallach's 40+ years
   of research, Pharmacist Ben Fuchs' cellular health philosophy, Youngevity's track
   record. Use verifiable authority, not fabricated testimonials.
6. SOCIAL PROOF: Aggregate, verifiable proof points. Not fake individual testimonials.
   Reference the millions of people already using the 90 For Life system.
7. BONUS STACK: 3 stacked bonuses that increase perceived value of the offer.
8. RISK REVERSAL (Guarantee): Reverse the transaction risk for the buyer.
9. SCARCITY/URGENCY: Genuine urgency — limited 1:1 distributor availability.
10. FORENSIC CTA: Explicit, step-by-step next actions. No ambiguity. Include the
    distributor's contact info (name, phone, email) and health evaluation link.
11. P.S. SECTION: Micro-landing-page recap — offer + guarantee + cost of doing nothing.

DISTRIBUTOR INFO (use these in CTA and P.S.):
- Distributor name: ${contactName || 'your Youngevity distributor'}
- Phone: ${contactPhone || '(not provided)'}
- Email: ${contactEmail || '(not provided)'}
- Health evaluation link: ${healthEvaluationLink || '(not provided)'}
- Youngevity ID: ${ygyId || '(not provided)'}

TASK: Based on the following TikTok/social media transcript, write ALL sections of
the landing page copy following the 17-step system above. The identified health topic
is "${topic}" (pain point: "${painPoint}").

TRANSCRIPT:
"""
${transcript}
"""

Return ONLY valid JSON (no markdown fences) matching exactly this shape:
{
  "headline": "string, punchy pattern-interrupt big bold benefit headline, max ~15 words, specific to the transcript topic",
  "subHeadline": "string, 1-2 sentences expanding the headline, empathetic, referencing the specific pain",
  "targetAudienceCallout": "string, calls out the specific audience, e.g. 'If you're struggling with ___...'",
  "topicSectionTitle": "string, curiosity-hook section title, e.g. 'The Real Story Behind Your ___'",
  "topicSectionBody": ["2-3 paragraphs as separate strings, using biochemical reasoning from the reference docs to explain the root cause, agitating the specific problem with transcript details"],
  "bodyStarvingBody": ["1-2 paragraphs explaining the 90 essential nutrients / mineral depletion / nutritional saturation angle relevant to this topic"],
  "credentialsBody": ["1-2 paragraphs establishing authority — Dr. Wallach's research, Ben Fuchs' philosophy, Youngevity's track record. Verifiable, not fabricated."],
  "socialProofBody": ["1-2 paragraphs of aggregate verifiable proof points about the 90 For Life system. NOT fake individual testimonials."],
  "bonuses": [{"title": "string", "description": "string"}, {"title": "string", "description": "string"}, {"title": "string", "description": "string"}],
  "guaranteeBody": "string, risk-reversal guarantee reversing transaction risk for the buyer",
  "ctaTitle": "string, action-oriented CTA headline",
  "ctaBody": "string, forensic step-by-step next actions including contacting ${contactName || 'the distributor'}${contactPhone ? ' at ' + contactPhone : ''}${contactEmail ? ' or ' + contactEmail : ''}. Include health evaluation link if provided. Use \\\\n for line breaks.",
  "psText": "string, P.S. recap — offer + guarantee + cost of doing nothing. Mention ${contactName || 'the distributor'} by name."
}`;
}

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  console.log('GEMINI_API_KEY present:', !!apiKey, 'length:', apiKey ? apiKey.length : 0);
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

  const { transcript, topic, painPoint, contactName, contactPhone, contactEmail, healthEvaluationLink, ygyId } = payload;
  if (!transcript || typeof transcript !== 'string' || transcript.trim().length < 10) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Transcript is required' }) };
  }

  const prompt = buildPrompt({ transcript, topic, painPoint, contactName, contactPhone, contactEmail, healthEvaluationLink, ygyId });

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

    console.log('Gemini response status:', response.status);

    if (!response.ok) {
      const errText = await response.text();
      console.log('Gemini error body:', errText.slice(0, 500));
      try {
        const errJson = JSON.parse(errText);
        const message = errJson?.error?.message || errJson?.error?.status || errText;
        return { statusCode: 502, body: JSON.stringify({ error: 'Gemini API error', detail: message }) };
      } catch {
        return { statusCode: 502, body: JSON.stringify({ error: 'Gemini API error', detail: errText }) };
      }
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      console.log('Gemini response had no text:', JSON.stringify(data).slice(0, 300));
      return { statusCode: 502, body: JSON.stringify({ error: 'Empty response from Gemini' }) };
    }

    // Strip optional markdown JSON fences before parsing
    const cleaned = text.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim();
    const parsed = JSON.parse(cleaned);

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
