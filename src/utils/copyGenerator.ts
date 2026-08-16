import { GeneratorInput, GeneratedCopy, HealthTopic, TopicKeyword, BonusItem } from '../types';
import { PRODUCT_CODES } from './cartUtils';

const FDA_DISCLAIMER =
  'Disclaimer: The statements contained on this page have not been evaluated by the Food and Drug Administration. The products and information recommended are not intended to diagnose, treat, cure, or prevent any disease. Always consult with your primary care physician before beginning any nutritional supplement program, especially if you are pregnant, nursing, or taking medications. The information provided is for educational purposes only.';

// --- 17-Step Secret Selling System: shared, compliance-safe scaffolding ---
// These sections are brand/company-level (not topic-specific), so they stay
// consistent and legally defensible across every generated page. Per-topic
// content (headline, agitate, root-cause) still comes from TOPIC_KEYWORDS below.

const CREDENTIALS_TITLE = "Why Trust This Recommendation?";
const CREDENTIALS_BODY = [
  "Dr. Joel Wallach, BS, DVM, ND, spent over 40 years researching mineral deficiency in humans and animals, work that was featured in the landmark documentary \"Unlocking the Mystery of Life.\" His research into the 90 Essential Nutrients laid the scientific foundation for every Youngevity formula.",
  "Pharmacist Ben Fuchs, a licensed pharmacist with decades of clinical experience, developed the \"Root vs. Fruit\" and \"Triangle of Disease\" frameworks used throughout this page to explain why cellular nutrition — not symptom management — is the starting point for lasting wellness.",
  "Youngevity has been formulating doctor-designed nutritional products since 1997, manufactures to strict quality standards, and has shipped its 90 Essential Nutrients-based products to customers in dozens of countries worldwide.",
];

const SOCIAL_PROOF_TITLE = "Backed By Real Science, Not Just Opinion";
const SOCIAL_PROOF_BODY = [
  "Youngevity's core formulas are built directly on Dr. Wallach's published research into the 90 Essential Nutrients, and the company has been manufacturing and shipping these products for over 25 years.",
  "This isn't a single-ingredient fad supplement — it's a comprehensive nutritional system used daily by tens of thousands of customers across the 90 For Life community, alongside guidance from independent distributors like your contact on this page.",
];

const BONUSES_TITLE = "When You Get Started Today, You Also Receive:";
function buildBonuses(input: GeneratorInput): BonusItem[] {
  const bonuses: BonusItem[] = [];
  if (input.healthEvaluationLink) {
    bonuses.push({
      title: "Free Comprehensive Health Evaluation",
      description: "A complimentary, no-obligation evaluation to help identify which nutritional gaps matter most for your specific situation.",
    });
  }
  bonuses.push({
    title: "1-on-1 Personal Support",
    description: `Direct access to ${input.contactName || 'your independent distributor'} for questions, guidance, and protocol adjustments — not a call center.`,
  });
  bonuses.push({
    title: "Getting Started Guide",
    description: "A simple, step-by-step guide so you know exactly how and when to take each product for best results.",
  });
  return bonuses;
}

const GUARANTEE_TITLE = "Try It Risk-Free";
const GUARANTEE_BODY =
  "Youngevity products are backed by the company's standard satisfaction guarantee — if you're not satisfied, contact your distributor about return options within the applicable guarantee period. You're not locked into anything. (Distributor: confirm exact return window/policy with Youngevity before publishing.)";

function buildScarcityText(input: GeneratorInput): string {
  const name = input.contactName || 'your distributor';
  return `${name} personally supports every customer 1-on-1 — that means limited availability. Reach out now while ${name} has room to give your health the attention it deserves.`;
}

function buildTargetAudienceCallout(painPoint: string): string {
  return `This page is for you if you're dealing with ${painPoint} and you're ready to stop guessing and start giving your body what it actually needs.`;
}

function buildForensicCtaBody(input: GeneratorInput): string {
  const steps: string[] = [];
  if (input.healthEvaluationLink) {
    steps.push('Click the button above to complete your free Health Evaluation');
  }
  steps.push(`Message ${input.contactName || 'your distributor'} directly using the contact info below`);
  steps.push('Get your personalized protocol and start your 90 Essential Nutrients foundation today');
  return steps.map((s, i) => `${i + 1}. ${s}`).join('\n');
}

function buildPsText(input: GeneratorInput, painPoint: string): string {
  const name = input.contactName || 'your distributor';
  return `P.S. — Nothing changes if nothing changes. Every day you wait is another day your body operates without the raw materials it needs, while ${painPoint} continues unaddressed. You've seen the research, you've seen the guarantee — the only remaining step is to reach out to ${name} and get started. The cost of doing nothing is simply staying exactly where you are today.`;
}

const TOPIC_KEYWORDS: TopicKeyword[] = [
  {
    topic: 'digestion',
    keywords: [
      'digest', 'bloat', 'gut', 'stomach', 'bowel', 'constipation', 'diarrhea',
      'ibs', 'acid reflux', 'heartburn', 'indigestion', 'microbiome', 'probiotic',
      'leaky gut', 'gas', 'cramping', 'nausea', 'food sensitivity', 'gluten',
      'absorption', 'nutrient absorption', 'enzymes', 'flora',
      'colitis', 'crohn', 'inflammatory bowel', 'ulcerative',
      'gastritis', 'h. pylori', 'helicobacter', 'stomach ulcer',
      'malabsorption', 'villi', 'sibo', 'dysbiosis',
    ],
    painPoint: 'digestive distress and poor nutrient absorption',
    headlineTemplate:
      'Your Gut Is Crying for Help — And It\'s Not "Just What You Eat"',
    subHeadlineTemplate:
      'If you\'re tired of feeling bloated, sluggish, and uncomfortable after every meal, there\'s a scientifically-backed reason why — and it starts at the cellular level.',
    topicTitle: 'The Real Story Behind Your Digestive Struggles',
    topicBody: [
      'You\'ve tried the probiotics. You\'ve cut out the gluten. You\'ve eliminated the dairy. And yet — the bloating, the discomfort, the unpredictable digestion... it all keeps coming back. Here\'s why: you\'re treating the fruit, not the root.',
      'As Pharmacist Ben Fuchs explains with his "Root vs. Fruit" analogy, your digestive symptoms are just the "fruit" — the visible expression of a deeper problem happening at the cellular level. The real issue? Your body lacks the raw materials it needs to maintain a healthy gastrointestinal tract, and without them, your digestive system simply cannot function the way it was designed to.',
      'When your digestion is compromised, everything downstream suffers. You aren\'t what you eat — you\'re what you absorb. Even the healthiest organic meal is useless if your body can\'t break it down and deliver those nutrients to your cells. This is what Pharmacist Ben calls the "Triangle of Disease" — when digestion breaks down, blood sugar regulation and adrenal/liver function soon follow.',
    ],
    starvingBody: [
      'Your digestive system is a miracle of biological engineering, constantly renewing its lining and producing enzymes to break down food. But it cannot do this without raw materials. Dr. Joel Wallach identified that the body requires 90 Essential Nutrients — 60 minerals, 16 vitamins, 12 amino acids, and 3 essential fatty acids — just to maintain basic structure and function.',
      'The problem? Our modern, over-farmed soils have been stripped of their mineral content. Plants cannot manufacture minerals — they can only absorb what\'s in the soil. And when the soil is empty, your food is empty, no matter how "clean" you eat. This is why Plant Derived Minerals — highly absorbable, negatively charged minerals from prehistoric plant deposits — are so critical for digestive health. They provide the spark plugs your digestive enzymes need to function.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BODY_DIGESTION_PAK_2_0,
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.BASIC_MIGHTY_90,
    ],
  },
  {
    topic: 'blood_sugar',
    keywords: [
      'blood sugar', 'diabetes', 'diabetic', 'glucose', 'insulin', 'sugar crash',
      'craving', 'cravings', 'sweet', 'sweets', 'hypoglycemia', 'hyperglycemia',
      'a1c', 'metabolic', 'metabolism', 'prediabetic', 'pre-diabetic', 'sugar spike',
      'energy crash', 'sugar addiction', 'carb craving', 'insulin resistance',
    ],
    painPoint: 'blood sugar instability and metabolic dysfunction',
    headlineTemplate:
      'The Blood Sugar Roller Coaster Is Wrecking Your Body — Here\'s How to Get Off',
    subHeadlineTemplate:
      'If you\'re trapped in the cycle of sugar crashes, cravings, and energy swings, the problem isn\'t your willpower — it\'s a cellular deficiency that mainstream health advice completely ignores.',
    topicTitle: 'The Real Story Behind Your Blood Sugar Struggles',
    topicBody: [
      'You wake up tired. You need coffee to function. By 3 PM, you\'re crashing hard and reaching for something sweet. Sound familiar? This isn\'t a discipline problem — it\'s a nutritional deficiency problem, and it\'s far more common than you think.',
      'Pharmacist Ben Fuchs explains this through his "Triangle of Disease" concept: blood sugar regulation is one of the three pillars. When your cells lack the trace minerals needed to support healthy glucose metabolism — specifically chromium and vanadium — your body simply cannot maintain stable blood sugar levels, no matter how "good" you try to eat.',
      'The mainstream approach tells you to cut carbs, count calories, and exercise more. But as Dr. Joel Wallach has shown through decades of research, the real answer lies in giving your body the raw materials it needs to support its own natural regulatory systems. You don\'t need another restrictive diet — you need nutritional saturation.',
    ],
    starvingBody: [
      'Your body has an incredible ability to regulate blood sugar — but only when it has the nutrients required to do so. Dr. Wallach\'s research identified 90 Essential Nutrients that the body cannot make on its own and must get from outside sources. Among these, specific trace minerals like chromium and vanadium play a critical role in supporting healthy glucose metabolism.',
      'The tragedy is that these minerals used to be abundant in our soil and water. Today, due to over-farming and modern agricultural practices, they\'ve been largely depleted. This is why Plant Derived Minerals — containing up to 77 minerals from prehistoric plant deposits — are so essential. They deliver the raw materials your body needs to support its natural blood sugar regulation systems.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BLOOD_SUGAR_PAK_2_0,
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.BASIC_MIGHTY_90,
    ],
  },
  {
    topic: 'brain_heart',
    keywords: [
      'brain', 'heart', 'cardio', 'cardiovascular', 'memory', 'focus', 'concentration',
      'fog', 'brain fog', 'cognitive', 'circulation', 'blood pressure', 'cholesterol',
      'stroke', 'heart attack', 'neuro', 'neurological', 'dementia', 'alzheimer',
      'mental clarity', 'sharp', 'thinking', 'cardiac', 'artery', 'veins',
      'hypertension', 'high blood pressure', 'afib', 'atrial fibrillation',
      'vascular', 'circulation',
    ],
    painPoint: 'cognitive decline and cardiovascular concerns',
    headlineTemplate:
      'Brain Fog and Heart Health Are Connected — And the Solution Isn\'t What You Think',
    subHeadlineTemplate:
      'If your memory isn\'t what it used to be and you\'re worried about your heart, there\'s a surprising connection that mainstream medicine overlooks — and it starts with what your cells are missing.',
    topicTitle: 'The Real Story Behind Brain Fog and Heart Health',
    topicBody: [
      'You forget why you walked into a room. You lose your train of thought mid-sentence. Your focus isn\'t what it used to be. And if you\'re honest, that nagging concern about your heart health is always there in the back of your mind. Here\'s what nobody\'s telling you: your brain and your heart share the same fundamental need — essential fatty acids and a broad spectrum of minerals.',
      'Dr. Joel Wallach\'s research revealed that the brain and cardiovascular system require specific raw materials to maintain optimal structure and function. Without adequate essential fatty acids, your brain cells cannot maintain their protective myelin sheaths. Without the right minerals, your heart muscle cannot maintain its rhythmic electrical signaling.',
      'Pharmacist Ben Fuchs explains this through his concept of "Dirty Blood" — when your blood lacks the nutrients needed to carry oxygen and remove waste efficiently, every organ suffers, especially the brain and heart. The solution isn\'t another medication — it\'s giving your body the raw materials it needs to clean the blood and support optimal circulation.',
    ],
    starvingBody: [
      'Your brain is roughly 60% fat, and your heart beats approximately 100,000 times per day. Both require a constant supply of essential fatty acids, minerals, and vitamins to function optimally. Dr. Wallach identified 90 Essential Nutrients that the body must obtain from outside sources — and among these, the essential fatty acids (Omega-3, 6, and 9) are absolutely critical for brain and heart health.',
      'The problem? Modern diets are heavily skewed toward inflammatory fats while being desperately deficient in the essential fatty acids the brain and heart need. Combined with mineral-depleted soil that leaves our food nutritionally empty, it\'s no wonder cognitive and cardiovascular concerns are at epidemic levels. This is why a comprehensive approach — one that delivers all 90 essential nutrients plus targeted support — is so important.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BRAIN_AND_HEART_PAK_2_0,
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.BASIC_MIGHTY_90,
    ],
  },
  {
    topic: 'energy_fatigue',
    keywords: [
      'energy', 'fatigue', 'tired', 'exhausted', 'exhaustion', 'sluggish', 'drained',
      'no energy', 'chronic fatigue', 'adrenal', 'adrenal fatigue', 'burnout',
      'wired', 'tired but wired', 'morning fatigue', 'afternoon crash', 'lethargic',
      'weakness', 'stamina', 'endurance', 'vitality', 'vibrant',
    ],
    painPoint: 'chronic fatigue and low energy',
    headlineTemplate:
      'Always Tired? Your Body Isn\'t Lazy — It\'s Starving for What Mainstream Medicine Won\'t Give It',
    subHeadlineTemplate:
      'If you\'re exhausted all the time despite getting enough sleep, the problem isn\'t your work ethic — it\'s a cellular deficiency that\'s quietly draining your energy from the inside out.',
    topicTitle: 'The Real Story Behind Your Constant Fatigue',
    topicBody: [
      'You sleep eight hours and still wake up tired. You drag yourself through the morning, rely on caffeine to function, and crash by mid-afternoon. You\'ve been told it\'s "just stress" or "just aging." But what if none of that is true?',
      'Pharmacist Ben Fuchs identifies the adrenals as one of the three pillars of his "Triangle of Disease." When your adrenal glands — which regulate energy production and stress response — are starved of the nutrients they need, they simply cannot keep up with the demands of modern life. The result? You feel wired but tired, exhausted but unable to sleep, and drained no matter what you do.',
      'Dr. Joel Wallach\'s research shows that fatigue at the cellular level is almost always a result of nutritional deficiency. Your cells need specific minerals and vitamins to produce ATP — the energy currency of your body. Without these raw materials, your cellular engines simply cannot run efficiently, no matter how much rest you get.',
    ],
    starvingBody: [
      'Your body is an energy-producing machine — every cell contains mitochondria that generate the ATP you need to think, move, and live. But these cellular powerhouses require a constant supply of raw materials: 60 minerals, 16 vitamins, 12 amino acids, and 3 essential fatty acids. Dr. Wallach called these the "90 Essential Nutrients" — and he proved that without all 90, the body simply cannot maintain optimal energy production.',
      'The tragedy of modern life is that our food supply has been stripped of these critical nutrients. Over-farmed soil, processed foods, and "bad foods" (as Dr. Wallach calls them — gluten, fried foods, processed meats, sugar) all block absorption and deplete what little nutrition remains. This is why nutritional saturation — flooding the body with all 90 essential nutrients — is the key to reclaiming your natural energy.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.BASIC_MIGHTY_90,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.HEALTHY_BRAIN_AND_HEART_PAK_2_0,
    ],
  },
  {
    topic: 'sleep',
    keywords: [
      'sleep', 'insomnia', 'can\'t sleep', 'sleepless', 'restless', 'wake up',
      'waking up', 'tired in morning', 'sleep quality', 'melatonin', 'circadian',
      'night', 'bedtime', 'toss and turn', 'sleep aid', 'sleep disorder',
    ],
    painPoint: 'poor sleep quality and insomnia',
    headlineTemplate:
      'Can\'t Sleep? It\'s Not Your Mattress — It\'s Your Minerals',
    subHeadlineTemplate:
      'If you\'re tossing and turning all night, the real solution has nothing to do with sleep aids and everything to do with giving your nervous system the raw materials it needs to wind down naturally.',
    topicTitle: 'The Real Story Behind Your Sleep Struggles',
    topicBody: [
      'You lie awake for hours. Your mind won\'t shut off. You wake up at 3 AM and can\'t get back to sleep. You\'ve tried melatonin, magnesium, sleep teas, and every "sleep hack" on the internet — and nothing works long-term.',
      'Here\'s what Pharmacist Ben Fuchs would say: sleep isn\'t a pill problem, it\'s a nutrient problem. Your nervous system requires specific minerals — particularly magnesium and calcium — to transition from a sympathetic (fight-or-flight) state to a parasympathetic (rest-and-digest) state. When these minerals are deficient, your body physically cannot "switch off" for sleep.',
      'Dr. Joel Wallach\'s research shows that sleep issues are almost always connected to mineral deficiencies and what he calls "bad foods" that block nutrient absorption. The solution isn\'t another sleep aid — it\'s removing the blockers and saturating your body with the 90 essential nutrients it needs to regulate its own sleep cycles naturally.',
    ],
    starvingBody: [
      'Your body has an incredibly sophisticated sleep regulation system — but it runs on minerals. Magnesium, calcium, and other trace minerals are the raw materials your nervous system uses to calm down, repair, and recharge during sleep. Dr. Wallach identified 60 essential minerals as part of the 90 Essential Nutrients, and without them, your body\'s natural sleep mechanisms simply cannot function properly.',
      'The problem is compounded by the fact that our soils are mineral-depleted. Even if you eat a perfect diet, you\'re likely not getting the minerals your body needs for restful sleep. This is why Plant Derived Minerals — with up to 77 minerals from prehistoric plant deposits — are so critical. They provide the raw materials your nervous system has been begging for.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.BASIC_MIGHTY_90,
      PRODUCT_CODES.HEALTHY_BODY_DIGESTION_PAK_2_0,
    ],
  },
  {
    topic: 'joint_pain',
    keywords: [
      'joint', 'arthritis', 'pain', 'ache', 'stiff', 'stiffness', 'inflammation',
      'knee', 'hip', 'back pain', 'neck pain', 'shoulder', 'mobility', 'flexibility',
      'bone', 'bones', 'osteo', 'cartilage', 'connective tissue',
      'muscle pain', 'sore', 'soreness', 'cracking', 'popping',
      'rheumatoid', 'ra', 'bone spur', 'heel spur', 'hernia',
    ],
    painPoint: 'joint pain, stiffness, and inflammation',
    headlineTemplate:
      'Your Joint Pain Isn\'t "Just Aging" — It\'s Your Body Begging for Raw Materials',
    subHeadlineTemplate:
      'If you\'re stiff, sore, and slowing down, mainstream medicine says it\'s inevitable. Dr. Wallach says otherwise — and his research on 90 essential nutrients tells a very different story.',
    topicTitle: 'The Real Story Behind Your Joint and Bone Pain',
    topicBody: [
      'You wake up stiff. Your knees ache going up stairs. Your back hurts after sitting too long. You\'ve been told it\'s "just part of getting older" — but Dr. Joel Wallach spent decades proving that joint and bone deterioration is not inevitable. It\'s a nutritional deficiency.',
      'As Pharmacist Ben Fuchs explains with his "Root vs. Fruit" analogy, your joint pain is the "fruit" — the visible symptom. The "root" is what\'s happening at the cellular level: your body doesn\'t have the raw materials it needs to maintain healthy cartilage, bone density, and connective tissue. Without adequate minerals — especially calcium, magnesium, and the trace minerals — your body literally cannot rebuild what daily wear and tear breaks down.',
      'The mainstream approach offers pain relievers and anti-inflammatories that mask the symptom while the underlying deficiency continues to worsen. The real solution? Give your body the 90 essential nutrients it needs to support its own natural repair and maintenance systems.',
    ],
    starvingBody: [
      'Your bones and joints are living, dynamic tissues that constantly break down and rebuild. This process requires a steady supply of raw materials — 60 minerals (including calcium, magnesium, boron, and dozens of trace minerals), 16 vitamins, 12 amino acids, and 3 essential fatty acids. Dr. Wallach called these the "90 Essential Nutrients," and he showed that when the body has all 90, it can maintain remarkable structural integrity well into old age.',
      'The crisis is that our modern food supply is catastrophically deficient in minerals. Over-farmed soil, processed foods, and what Dr. Wallach calls "bad foods" (gluten, fried foods, processed meats, sugar) all deplete and block the absorption of the very nutrients your joints and bones need. This is why Plant Derived Minerals — highly bioavailable minerals from prehistoric plant deposits — are so essential for structural health.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.BASIC_MIGHTY_90,
      PRODUCT_CODES.HEALTHY_BRAIN_AND_HEART_PAK_2_0,
    ],
  },
  {
    topic: 'immune',
    keywords: [
      'immune', 'immunity', 'sick', 'cold', 'flu', 'virus', 'infection',
      'antibodies', 'white blood cell', 'autoimmune', 'allergy', 'allergies',
      'inflammation', 'chronic inflammation', 'recovery', 'healing', 'wound',
    ],
    painPoint: 'frequent illness and immune system weakness',
    headlineTemplate:
      'Always Getting Sick? Your Immune System Isn\'t Weak — It\'s Starving',
    subHeadlineTemplate:
      'If you catch every cold that goes around and can\'t seem to shake it, the problem isn\'t your immune system — it\'s the raw materials your immune system needs to function.',
    topicTitle: 'The Real Story Behind Your Immune Struggles',
    topicBody: [
      'You seem to catch every bug that goes around. When you do get sick, it lingers for weeks. You\'ve tried vitamin C, zinc lozenges, and every immune "boost" on the market — but nothing seems to make a lasting difference.',
      'Here\'s the truth that Pharmacist Ben Fuchs and Dr. Joel Wallach have been teaching for decades: your immune system is only as strong as the nutrients available to it. White blood cells require specific vitamins, minerals, and amino acids to function. When those are deficient — which they are for almost everyone on a modern diet — your immune response is compromised at the cellular level.',
      'The concept of "nutritional saturation" is key here. Dr. Wallach showed that when you flood the body with all 90 essential nutrients, every system — including the immune system — has the raw materials it needs to function optimally. It\'s not about "boosting" your immune system with a single supplement; it\'s about giving your body the complete nutritional foundation it needs to support its own natural defenses.',
    ],
    starvingBody: [
      'Your immune system is a sophisticated network of cells, tissues, and organs that requires constant nutritional support. Dr. Wallach identified 90 Essential Nutrients that the body cannot make on its own — and every single one plays a role in immune function. Vitamin C, zinc, selenium, and the amino acids are just the beginning. Without the full spectrum of 90 nutrients, your immune system is like an army trying to fight without ammunition.',
      'The modern diet, with its mineral-depleted soil and processed foods, simply cannot provide what your immune system needs. This is why a comprehensive approach — starting with the 90 essential nutrients and adding Plant Derived Minerals for maximum mineral absorption — is so critical for supporting your body\'s natural defense systems.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.BASIC_MIGHTY_90,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.HEALTHY_BRAIN_AND_HEART_PAK_2_0,
    ],
  },
  {
    topic: 'weight',
    keywords: [
      'weight', 'weight loss', 'lose weight', 'fat', 'obese', 'obesity',
      'overweight', 'diet', 'metabolism', 'metabolic', 'calories', 'thin',
      'slim', 'belly fat', 'body fat', 'scale', 'pounds', 'cravings',
    ],
    painPoint: 'weight management struggles and metabolic issues',
    headlineTemplate:
      'Can\'t Lose Weight No Matter What You Try? It\'s Not Your Fault — It\'s Your Cells',
    subHeadlineTemplate:
      'If you\'ve tried every diet and still can\'t lose the weight, the problem isn\'t your willpower — it\'s a cellular deficiency that\'s keeping your metabolism stuck in survival mode.',
    topicTitle: 'The Real Story Behind Your Weight Struggles',
    topicBody: [
      'You\'ve counted calories. You\'ve cut carbs. You\'ve tried keto, intermittent fasting, and every other trend. And yet the weight won\'t budge — or it comes right back. Here\'s what nobody\'s telling you: weight management is not a calorie problem, it\'s a nutrient problem.',
      'Pharmacist Ben Fuchs explains this through his "Triangle of Disease" — when blood sugar regulation, digestion, and adrenal function are all compromised by nutritional deficiency, the body goes into survival mode. It holds onto fat because it doesn\'t trust that it\'s getting the nutrients it needs. This is what he calls "Dirty Blood" — blood that\'s nutrient-poor and toxin-rich, causing the body to store rather than release.',
      'Dr. Joel Wallach\'s research shows that the body requires 90 essential nutrients to maintain optimal metabolic function. When these are deficient, the body cannot efficiently convert food into energy — instead, it stores it as fat. The solution isn\'t another restrictive diet; it\'s nutritional saturation.',
    ],
    starvingBody: [
      'Your metabolism is a complex system that requires dozens of minerals, vitamins, and amino acids to function properly. Chromium and vanadium support healthy blood sugar regulation. B vitamins drive energy production. Amino acids build the muscle that burns fat. Dr. Wallach identified all 90 essential nutrients as critical for optimal metabolic function — and when any are missing, the system slows down.',
      'The modern food supply is a metabolic disaster: high in calories, catastrophically low in nutrients. Mineral-depleted soil means even "healthy" foods don\'t deliver what your metabolism needs. This is why the foundation of any effective weight management approach must start with nutritional saturation — giving your body all 90 essential nutrients so it can support its own natural metabolic processes.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BLOOD_SUGAR_PAK_2_0,
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.BASIC_MIGHTY_90,
    ],
  },
  {
    topic: 'skin_hair',
    keywords: [
      'skin', 'hair', 'nails', 'acne', 'wrinkle', 'wrinkles', 'aging skin',
      'dry skin', 'eczema', 'psoriasis', 'dermatitis', 'rash', 'collagen',
      'hair loss', 'thinning hair', 'bald', 'brittle nails', 'complexion',
      'beauty', 'anti-aging', 'youthful', 'alopecia', 'moisturizer',
      'lipedema', 'cellulite', 'exfoliate',
    ],
    painPoint: 'skin, hair, and nail concerns',
    headlineTemplate:
      'Your Skin, Hair, and Nails Are Mirrors — And They\'re Reflecting a Nutritional Crisis',
    subHeadlineTemplate:
      'If you\'re spending a fortune on creams, serums, and treatments that don\'t work, the real solution isn\'t topical — it\'s cellular. Beautiful skin starts from within.',
    topicTitle: 'The Real Story Behind Your Skin, Hair, and Nail Concerns',
    topicBody: [
      'You buy the expensive creams. You try the latest serums. You follow all the skincare routines. And yet — your skin still looks tired, your hair is thinning, and your nails keep breaking. Here\'s why: you\'re treating the outside while starving the inside.',
      'Pharmacist Ben Fuchs uses the "Root vs. Fruit" analogy perfectly here: your skin, hair, and nails are the "fruit" — the visible expression of what\'s happening at the cellular root. No amount of topical treatment can compensate for a body that\'s deficient in the raw materials needed to build healthy skin cells, hair follicles, and nail tissue.',
      'Dr. Joel Wallach\'s research shows that skin, hair, and nail health requires a specific combination of minerals (especially sulfur, zinc, and silica), vitamins, amino acids, and essential fatty acids. When these are deficient — which they almost always are on a modern diet — the body prioritizes vital organs over "cosmetic" tissues, and your skin, hair, and nails are the first to suffer.',
    ],
    starvingBody: [
      'Your skin is your largest organ, and it\'s constantly renewing itself. Every 28 days, you have entirely new skin. But this renewal process requires raw materials: the 90 essential nutrients that Dr. Wallach identified as non-negotiable for optimal structure and function. Without adequate minerals, vitamins, amino acids, and essential fatty acids, your body simply cannot produce healthy skin cells, strong hair, or resilient nails.',
      'The modern beauty industry focuses on the outside, but the real secret to radiant skin, thick hair, and strong nails is nutritional saturation from within. Plant Derived Minerals — with up to 77 minerals from prehistoric plant deposits — provide the trace minerals your body needs to support collagen production, hair growth, and nail strength at the cellular level.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.BASIC_MIGHTY_90,
      PRODUCT_CODES.HEALTHY_BRAIN_AND_HEART_PAK_2_0,
    ],
  },
  {
    topic: 'mood_mental',
    keywords: [
      'mood', 'depression', 'depressed', 'anxiety', 'anxious', 'stress',
      'stressed', 'mental health', 'emotional', 'mood swing', 'irritable',
      'anger', 'sad', 'hopeless', 'motivation', 'drive', 'passion',
      'serotonin', 'dopamine', 'mental wellness', 'wellbeing',
    ],
    painPoint: 'mood instability and mental wellness concerns',
    headlineTemplate:
      'Your Mood Isn\'t "All in Your Head" — It\'s in Your Cells',
    subHeadlineTemplate:
      'If you\'re feeling anxious, irritable, or emotionally flat, the root cause may not be psychological — it may be a cellular deficiency that\'s quietly undermining your nervous system.',
    topicTitle: 'The Real Story Behind Your Mood Struggles',
    topicBody: [
      'You feel on edge for no reason. Your moods swing unpredictably. You\'ve lost your motivation and drive. You\'ve been told it\'s "just stress" or that you need therapy or medication. But what if the root cause is actually nutritional?',
      'Pharmacist Ben Fuchs includes the adrenals as a key pillar of his "Triangle of Disease" — and the adrenals are directly connected to mood regulation. When your adrenal glands are starved of the nutrients they need (particularly B vitamins, vitamin C, and specific minerals), they cannot produce the hormones that regulate stress response and emotional balance. The result? Anxiety, irritability, and emotional exhaustion.',
      'Dr. Joel Wallach\'s research shows that the nervous system requires all 90 essential nutrients to function optimally. Neurotransmitters like serotonin and dopamine are literally built from amino acids and require specific vitamins and minerals as co-factors. Without these raw materials, your body physically cannot produce the chemical messengers that regulate mood.',
    ],
    starvingBody: [
      'Your brain and nervous system are the most nutrient-demanding organs in your body. They require a constant supply of B vitamins, minerals (especially magnesium and zinc), amino acids (the building blocks of neurotransmitters), and essential fatty acids. Dr. Wallach identified all 90 essential nutrients as critical for optimal neurological function — and when any are deficient, mood and mental wellness are often the first casualties.',
      'The modern diet is a neurological nightmare: high in sugar and processed foods that disrupt blood sugar (and therefore mood), while being catastrophically deficient in the nutrients the nervous system needs. This is why nutritional saturation — flooding the body with all 90 essential nutrients — is so critical for supporting emotional balance and mental wellness naturally.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BRAIN_AND_HEART_PAK_2_0,
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.BASIC_MIGHTY_90,
    ],
  },
  {
    topic: 'neuropathy',
    keywords: [
      'neuropathy', 'nerve pain', 'numbness', 'numb', 'tingling', 'pins and needles',
      'peripheral', 'diabetic nerve', 'nerve damage', 'burning feet', 'burning hands',
      'wooden', 'loss of sensation', 'foot pain', 'hand pain', 'extremities',
      'glycation', 'myelin', 'nerve sheath', 'thiamine', 'b1',
    ],
    painPoint: 'nerve pain, numbness, and tingling in extremities',
    headlineTemplate:
      'Your Nerve Pain Isn\'t Permanent — It\'s a Cellular Cry for B-Vitamins and Minerals',
    subHeadlineTemplate:
      'If your hands and feet burn, tingle, or feel numb, the real problem isn\'t nerve damage — it\'s sugar-damaged capillaries starving your nerves of oxygen and nutrients.',
    topicTitle: 'The Real Story Behind Your Nerve Pain',
    topicBody: [
      'Your fingers tingle. Your feet burn. You feel like you\'re walking on wooden blocks. And your doctor says it\'s "just neuropathy" — nerve damage that can\'t be fixed. But that\'s not the full story.',
      'Pharmacist Ben Fuchs explains that peripheral neuropathy is a dead ringer symptom of metabolic syndrome. Elevated blood sugar is caustic — it literally caramelizes and burns the delicate capillaries and nerve sheaths at your body\'s furthest extremities, leaving nerves starved of oxygen and nutrients. The burning and numbness you feel is your nerves screaming for help.',
      'The mainstream approach offers pain medications that mask the symptom while the underlying cellular starvation continues. The real solution? Aggressively restrict fast-burning carbohydrates to stop the glycation burn, and saturate with the specific nutrients your nerves need to repair — especially Vitamin B1 (Thiamine), the most critical nutrient for nerve conduction.',
    ],
    starvingBody: [
      'Your nervous system is an electrical network that requires specific raw materials to maintain its protective myelin sheath and conduct signals properly. Dr. Wallach identified 90 Essential Nutrients — and among these, B-vitamins (especially Thiamine/B1), essential fatty acids, and magnesium are absolutely critical for nerve health. Without them, nerves cannot repair the damage caused by elevated blood sugar.',
      'The tragedy is that these nutrients are severely depleted in modern diets. Over-farmed soil lacks the minerals, processed foods strip out the B-vitamins, and sugar actively depletes the very nutrients your nerves need. This is why nutritional saturation — flooding the body with all 90 essential nutrients, including high-dose B1 from Beyond Tangy Tangerine and Ultimate EFAs to rebuild the myelin sheath — is so critical for supporting nerve health naturally.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BLOOD_SUGAR_PAK_2_0,
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.BASIC_MIGHTY_90,
    ],
  },
  {
    topic: 'tinnitus',
    keywords: [
      'tinnitus', 'ringing ears', 'ringing in ears', 'ear ringing', 'ear noise',
      'buzzing ears', 'humming ears', 'hearing noise', 'auditory', 'inner ear',
      'ear pressure', 'head noise', 'whooshing',
    ],
    painPoint: 'ringing in the ears and auditory distress',
    headlineTemplate:
      'That Ringing in Your Ears Isn\'t "Just Aging" — It\'s Inflammation You Can Address',
    subHeadlineTemplate:
      'If you\'re living with constant ringing, buzzing, or humming in your ears, the real cause isn\'t your ears at all — it\'s micro-inflammation in your brain\'s auditory center, driven by dirty blood and nutrient starvation.',
    topicTitle: 'The Real Story Behind Your Tinnitus',
    topicBody: [
      'The ringing never stops. It\'s there when you wake up, when you try to sleep, when you try to focus. You\'ve been told there\'s nothing that can be done — "just learn to live with it." But Pharmacist Ben Fuchs tells a very different story.',
      'Tinnitus is not an ear disease — it\'s an inflammatory and vascular brain issue. The inner ear and auditory nerves are tiny, highly complex structures that are exceptionally vulnerable to micro-inflammation, nutrient starvation, and oxygen deprivation. This inflammation is frequently driven by systemic "dirty blood" originating from leaky gut, food allergies, or intracranial pressure.',
      'The mainstream approach says it\'s irreversible. But when you address the root cause — repairing the gut barrier to stop the influx of inflammatory toxins, calming the sympathetic nervous system, and saturating with the specific nutrients your auditory nerves need — your body has a remarkable capacity to support its own natural repair systems.',
    ],
    starvingBody: [
      'Your auditory system is one of the most nutrient-sensitive structures in your body. The tiny capillaries and nerves of the inner ear require a constant supply of magnesium, GABA, essential fatty acids, and specific trace minerals to function properly. Dr. Wallach\'s research showed that without the full spectrum of 90 essential nutrients, these delicate structures become inflamed and dysfunctional.',
      'The modern diet is catastrophic for auditory health: mineral-depleted soil means your food lacks the magnesium and trace minerals your inner ear needs, while sugar and processed foods drive the systemic inflammation that causes the ringing. This is why nutritional saturation — including Ultimate EFAs to calm neuro-inflammation, Magnesium (Osteo Mag) to calm neuromuscular irritability, and Fucoid Z to repair the gut barrier — is so critical for supporting auditory health naturally.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.BASIC_MIGHTY_90,
      PRODUCT_CODES.HEALTHY_BRAIN_AND_HEART_PAK_2_0,
    ],
  },
  {
    topic: 'prostate',
    keywords: [
      'prostate', 'bph', 'enlarged prostate', 'prostate health', 'urinary flow',
      'frequent urination', 'nighttime urination', 'bladder', 'urination',
      'urinary', 'beta-sitosterol', 'psa', 'prostatitis',
    ],
    painPoint: 'prostate enlargement and urinary difficulties',
    headlineTemplate:
      'Your Prostate Problems Aren\'t Inevitable — They\'re Driven by Sugar and Bad Fats',
    subHeadlineTemplate:
      'If you\'re waking up multiple times a night to urinate, struggling with weak flow, or worried about your prostate, the real cause isn\'t aging — it\'s a metabolic and nutritional issue you can address.',
    topicTitle: 'The Real Story Behind Your Prostate Concerns',
    topicBody: [
      'You wake up three times a night to urinate. The stream is weak. You feel like you can\'t fully empty your bladder. And your doctor says it\'s "just part of getting older" for men. But Pharmacist Ben Fuchs reveals a completely different root cause.',
      'The prostate is a fatty gland whose cellular growth and inflammation are governed by the types of fats you consume and your blood sugar levels. Benign Prostatic Hypertrophy (BPH) is driven by hyperinsulinemia — high insulin from carbohydrate consumption acts as a powerful cell division hormone, causing the prostate to swell and pinch the urethra. Furthermore, processed, heated, or fried fats act like biological shrapnel, inflaming this fatty gland.',
      'The mainstream approach offers medications or surgery. But the real solution starts with eliminating inflammatory fats and sugars, treating your body like a diabetic to drop insulin levels, and saturating with the specific nutrients your prostate needs — including Zinc, Selenium, and Beta-Sitosterol, which acts as an "almost miracle" to naturally support prostate health.',
    ],
    starvingBody: [
      'Your prostate is a fatty gland that requires specific raw materials to maintain healthy size and function. Dr. Wallach\'s research identified 90 Essential Nutrients — and among these, Zinc, Selenium, essential fatty acids, and fat-soluble vitamins (A, D, and E) are absolutely critical for prostate health. Without them, the prostate cannot regulate its own cellular growth.',
      'The modern diet is a prostate disaster: high in sugar that drives insulin-driven growth, loaded with inflammatory heated oils, and catastrophically deficient in the zinc, selenium, and essential fatty acids the prostate needs. This is why nutritional saturation — flooding the body with all 90 essential nutrients, including Ultimate EFAs for anti-inflammatory fats and Plant Derived Minerals for zinc and selenium — is so critical for supporting prostate health naturally.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.BASIC_MIGHTY_90,
      PRODUCT_CODES.HEALTHY_BLOOD_SUGAR_PAK_2_0,
    ],
  },
  {
    topic: 'thyroid',
    keywords: [
      'thyroid', 'hashimoto', 'graves', 'hypothyroid', 'hyperthyroid',
      'thyroiditis', 'iodine', 'selenium', 'thyroid function', 'underactive thyroid',
      'overactive thyroid', 'goiter', 'thyroid antibody',
      'autoimmune thyroid',
    ],
    painPoint: 'thyroid dysfunction and autoimmune thyroid concerns',
    headlineTemplate:
      'Your Thyroid Isn\'t Broken — It\'s Under Attack From Your Gut',
    subHeadlineTemplate:
      'If you\'ve been diagnosed with Hashimoto\'s or Graves\', told it\'s irreversible, and put on lifelong medication, the real root cause isn\'t your thyroid — it\'s a digestive and blood sugar issue.',
    topicTitle: 'The Real Story Behind Your Thyroid Condition',
    topicBody: [
      'You\'re tired, cold, gaining weight, and your hair is thinning. Or maybe you\'re anxious, racing, and can\'t sleep. Either way, your thyroid is blamed, and you\'re told it\'s an autoimmune disease — your immune system is "confused" and attacking your thyroid. But Pharmacist Ben Fuchs completely refutes this framing.',
      'Thyroid autoimmunity is fundamentally not a thyroid problem — it\'s a digestive and blood sugar issue. When leaky gut allows undigested food proteins and bacterial fragments into the blood, they cause systemic toxicity. This toxicity gets dumped into the thyroid tissue. Through "molecular mimicry," these foreign toxins look similar to thyroid cells. Your immune system isn\'t attacking your thyroid — it\'s attacking the toxins hiding in your thyroid.',
      'The mainstream approach offers lifelong thyroid medication without addressing the root cause. But when you dismantle the toxicity by eliminating gut-inflaming foods, fasting to clear circulating immune complexes, and saturating with the specific nutrients your thyroid needs — especially Iodine, Selenium, and sulfur compounds — your body has a remarkable capacity to support its own natural regulatory systems.',
    ],
    starvingBody: [
      'Your thyroid gland requires specific raw materials to produce and regulate hormones. Dr. Wallach\'s research identified 90 Essential Nutrients — and among these, Iodine, Selenium, and trace minerals are absolutely critical for thyroid function. Without them, the thyroid cannot produce adequate hormone or regulate its own immune response.',
      'The modern diet is catastrophic for thyroid health: mineral-depleted soil means iodine and selenium are severely deficient, processed foods inflame the gut and drive the leaky gut that triggers autoimmunity, and cruciferous vegetables (when raw) inhibit iodine uptake. This is why nutritional saturation — including Ultimate Selenium for immune modulation, Plant Derived Minerals for iodine and trace minerals, and Fucoid Z to repair the intestinal barrier — is so critical for supporting thyroid health naturally.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.BASIC_MIGHTY_90,
      PRODUCT_CODES.HEALTHY_BODY_DIGESTION_PAK_2_0,
    ],
  },
  {
    topic: 'kidney',
    keywords: [
      'kidney', 'kidneys', 'kidney stones', 'kidney disease', 'renal',
      'nephron', 'protein in urine', 'creatinine', 'gfr', 'dialysis',
      'urinary tract', 'bladder infection', 'uti', 'crystals',
    ],
    painPoint: 'kidney health concerns and stone formation',
    headlineTemplate:
      'Your Kidneys Aren\'t Failing — They\'re Being Burned by Sugar and Starved of Minerals',
    subHeadlineTemplate:
      'If you\'re worried about kidney function or prone to kidney stones, the real cause isn\'t genetics — it\'s blood sugar damage and mineral deficiency in your kidney\'s delicate filtration system.',
    topicTitle: 'The Real Story Behind Your Kidney Concerns',
    topicBody: [
      'Your lab numbers are creeping in the wrong direction. You\'ve been told to "watch your protein" and "drink more water." Or maybe you\'ve passed a kidney stone and never want to experience that pain again. But nobody has explained why your kidneys are struggling in the first place.',
      'Pharmacist Ben Fuchs teaches that kidney disease should always be regarded as a blood sugar and blood toxicity issue. Your kidneys are biological filters made of over 100 miles of microscopically thin capillary vessels. High blood sugar glycates — literally caramelizes and burns — these delicate filters, causing protein to leak into the urine. When blood is thick and super-saturated with metabolic acids, minerals can\'t stay dissolved and precipitate out as crystals, forming kidney stones.',
      'The mainstream approach offers blood pressure medications and dietary restrictions that don\'t address the root cause. The real solution? Treat your body like a strict diabetic to protect the remaining healthy kidney capillaries, and saturate with the specific nutrients that support kidney health — including Plant-Derived Minerals for nutritional chelation, Vitamin C, Selenium, and MSM to safely clear toxins from the blood.',
    ],
    starvingBody: [
      'Your kidneys are extraordinary filtration organs that require specific raw materials to maintain their delicate capillary network. Dr. Wallach\'s research identified 90 Essential Nutrients — and among these, Vitamin C, Selenium, MSM (sulfur), and the full spectrum of plant-derived minerals are absolutely critical for kidney health. Without them, the kidneys cannot effectively filter toxins or maintain mineral solubility in the blood.',
      'The modern diet is a kidney disaster: high sugar that burns the filtration capillaries, mineral-depleted food that leaves the blood super-saturated with unbuffered acids, and processed foods that thicken the blood and increase the kidneys\' workload. This is why nutritional saturation — including Plant Derived Minerals for chelation, Ultimate Selenium, and Fucoid Z to fluidize the blood — is so critical for supporting kidney health naturally.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BLOOD_SUGAR_PAK_2_0,
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.BASIC_MIGHTY_90,
    ],
  },
  {
    topic: 'chronic_pain',
    keywords: [
      'chronic pain', 'fibromyalgia', 'muscle pain', 'muscle soreness',
      'body pain', 'widespread pain', 'pain management', 'inflammation pain',
      'sore muscles', 'stiff muscles', 'pain relief', 'living with pain',
      'fibro', 'tender points', 'trigger points', 'white muscle disease',
    ],
    painPoint: 'chronic pain and muscle soreness',
    headlineTemplate:
      'Your Chronic Pain Isn\'t "All in Your Head" — It\'s in Your Cells',
    subHeadlineTemplate:
      'If you\'re living with widespread pain, fibromyalgia, or constant muscle soreness, the real solution isn\'t another pain pill — it\'s giving your body the raw materials it needs to quench the inflammatory fire at the cellular level.',
    topicTitle: 'The Real Story Behind Your Chronic Pain',
    topicBody: [
      'You hurt everywhere. Some days it\'s your back, some days it\'s your legs, some days it\'s everything. You\'ve been told it\'s fibromyalgia, or "just inflammation," or worse — that it\'s all in your head. But Pharmacist Ben Fuchs and Dr. Wallach tell a very different story.',
      'In the livestock industry, what we call "fibromyalgia" in humans is called "White Muscle Disease" — and it\'s a Selenium deficiency that causes muscle tissue to turn into scar tissue. Pain itself is your body\'s alarm signal: when cells are placed under severe duress from starvation, oxygen deprivation, or toxicity, they literally explode, spewing corrosive internal acids into surrounding tissues. The immune system builds a microscopic "beaver\'s dam" of fluid and inflammatory fibers to wall off the damage — and that localized swelling is what causes the excruciating pain.',
      'The mainstream approach offers pain relievers and anti-inflammatories that mask the symptom while the underlying cellular starvation continues. The real solution? High doses of Ultimate EFAs (Nature\'s Aspirin) to quench the inflammatory fire, Ultimate Enzymes on an empty stomach to digest the inflammatory debris, and mega-dose Selenium to halt the oxidative breakdown causing muscle tissue to scar.',
    ],
    starvingBody: [
      'Your muscles and tissues require specific raw materials to maintain healthy function and repair daily wear and tear. Dr. Wallach\'s research identified 90 Essential Nutrients — and among these, Selenium, Vitamin E, essential fatty acids, and Magnesium are absolutely critical for muscle health. Without them, muscle tissue degrades, scars, and becomes chronically painful.',
      'The modern diet is catastrophic for muscle health: mineral-depleted soil means selenium and magnesium are severely deficient, processed foods drive systemic inflammation, and sugar depletes the very nutrients your muscles need to repair. This is why nutritional saturation — including Ultimate EFAs as Nature\'s Aspirin, Magnesium (Osteo Mag) for muscle relaxation, and Plant Derived Minerals for the full spectrum of trace minerals — is so critical for supporting muscle health and natural pain relief.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.BASIC_MIGHTY_90,
      PRODUCT_CODES.HEALTHY_BRAIN_AND_HEART_PAK_2_0,
    ],
  },
  {
    topic: 'osteoporosis',
    keywords: [
      'osteoporosis', 'bone density', 'bone loss', 'bone demineralization',
      'bone fracture', 'fragile bones', 'bone health', 'dexa', 'dexa scan',
      't-score', 'calcium deficiency', 'bone thinning', 'osteopenia',
    ],
    painPoint: 'bone density loss and osteoporosis',
    headlineTemplate:
      'Osteoporosis Isn\'t a Calcium Deficiency — It\'s a Mineral Starvation Crisis',
    subHeadlineTemplate:
      'If you\'ve been told your bones are thinning and calcium is the answer, you\'re only getting a fraction of the story. The real root cause is acidic, mineral-depleted blood — and the solution is nutritional saturation.',
    topicTitle: 'The Real Story Behind Your Bone Density Loss',
    topicBody: [
      'Your DEXA scan shows declining bone density. You\'ve been told to take more calcium and do weight-bearing exercise. But the fractures keep happening, or the numbers keep dropping. Here\'s what nobody\'s telling you: osteoporosis is fundamentally not a lack of calcium — it\'s a sign of toxic, acidic blood.',
      'Pharmacist Ben Fuchs explains that bone is a living connective tissue matrix hardened by minerals. Under conditions of chronic stress, nutritional deficiencies, low oxygen, and high sugar diets, acidic waste rapidly builds up in the blood. Because blood pH must stay strictly balanced, the body engages an emergency survival response: it leaches calcium (an alkaline mineral) out of your bones to buffer and neutralize the acid. Your bones are literally being dissolved to neutralize your acidic blood.',
      'The mainstream approach offers calcium supplements and bone-building drugs. But without addressing the acidic blood, the leaching continues. The real solution? Stop consuming acid-producing refined sugars and processed foods, rebuild the bone matrix with collagen-building nutrients, and saturate with the full spectrum of 60 minerals — not just calcium — that your bones need.',
    ],
    starvingBody: [
      'Your bones are living, dynamic tissues that constantly break down and rebuild. This process requires far more than just calcium — it requires the full spectrum of 60 minerals that Dr. Wallach identified as part of the 90 Essential Nutrients, plus 16 vitamins, 12 amino acids, and 3 essential fatty acids. Without all 90, the body cannot maintain optimal bone density.',
      'The modern diet is a bone disaster: mineral-depleted soil means our food lacks the 60 minerals bones need, sugar and processed foods make the blood acidic (triggering calcium leaching), and processed foods block the absorption of what little nutrition remains. This is why Plant Derived Minerals — with up to 77 minerals from prehistoric plant deposits — combined with collagen-building nutrients and the full Mighty 90, are so critical for supporting bone health naturally.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.BASIC_MIGHTY_90,
      PRODUCT_CODES.HEALTHY_BODY_DIGESTION_PAK_2_0,
    ],
  },
  {
    topic: 'ms',
    keywords: [
      'multiple sclerosis', 'ms', 'myelin', 'demyelination', 'ms diagnosis',
      'lesion', 'brain lesion', 'neurological disorder', 'autoimmune disease',
      'cic', 'circulating immune complex', 'nerve sheath damage',
    ],
    painPoint: 'multiple sclerosis and neurological demyelination',
    headlineTemplate:
      'MS Isn\'t Your Immune System Gone Rogue — It\'s Dirty Blood Depositing Toxins in Your Nerves',
    subHeadlineTemplate:
      'If you\'ve been diagnosed with MS and told your immune system is "attacking" your myelin sheaths for no reason, Pharmacist Ben Fuchs reveals the real root cause — and it starts in your gut.',
    topicTitle: 'The Real Story Behind Multiple Sclerosis',
    topicBody: [
      'You\'ve been told your immune system has gone haywire — inexplicably attacking the myelin sheaths that protect your nerves. The diagnosis is MS, and the explanation is "autoimmune." But Pharmacist Ben Fuchs completely refutes this framing.',
      'MS is fundamentally a digestive disease and a "dirty blood" issue. When leaky gut allows jagged bacterial components and food particles to flood the blood, the immune system surrounds them to form Circulating Immune Complexes (CICs). The body dumps these toxic complexes into the soft tissues — specifically the myelin sheaths of the nerves. Your immune system isn\'t attacking your myelin; it\'s attacking the toxins hiding in your myelin.',
      'The mainstream approach offers immunosuppressive drugs that weaken the body\'s defenses without addressing the root cause. The real solution? Caloric restriction and fasting to give the immune system a rest, a strict grain-free ketogenic diet, and massive doses of Ultimate EFAs (up to 12-16 capsules daily) to rebuild the nerve sheaths and lower systemic inflammation.',
    ],
    starvingBody: [
      'Your nervous system requires specific raw materials to maintain its protective myelin sheath — the fatty insulation that allows nerve signals to travel properly. Dr. Wallach identified 90 Essential Nutrients — and among these, essential fatty acids, trace minerals, and the B-vitamins are absolutely critical for myelin repair. Without them, the nerve sheaths cannot rebuild after toxic damage.',
      'The modern diet is catastrophic for MS patients: mineral-depleted soil, processed foods that drive leaky gut, and inflammatory fats that damage the myelin. This is why nutritional saturation — including massive doses of Ultimate EFAs to insulate nerve sheaths, the Healthy Start Pack for foundational minerals, and Fucoid Z plus Collagen Peptides to patch the intestinal lining — is so critical for supporting neurological health naturally.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.HEALTHY_BRAIN_AND_HEART_PAK_2_0,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.BASIC_MIGHTY_90,
    ],
  },
  {
    topic: 'glaucoma',
    keywords: [
      'glaucoma', 'eye pressure', 'intraocular pressure', 'eye health',
      'vision loss', 'optic nerve', 'macular degeneration', 'cataracts',
      'eye pressure', 'ocular', 'retina', 'lutein', 'zeaxanthin',
      'vision fx', 'ocutiv',
    ],
    painPoint: 'glaucoma, eye pressure, and vision concerns',
    headlineTemplate:
      'Glaucoma Isn\'t Just Eye Pressure — It\'s "Osteoporosis of the Eye"',
    subHeadlineTemplate:
      'If your eye pressure is rising and your vision is narrowing, the real root cause isn\'t your eyes alone — it\'s blood sugar damage and connective tissue starvation weakening the structure of your eyeball.',
    topicTitle: 'The Real Story Behind Your Eye Health',
    topicBody: [
      'Your eye pressure is creeping up. Your peripheral vision is narrowing. You\'ve been told it\'s glaucoma and the only option is eye drops or surgery. But nobody has explained why the pressure is rising in the first place.',
      'Pharmacist Ben Fuchs teaches that glaucoma is not an isolated optical defect — it\'s "osteoporosis of the eye" or "arthritis of the eye." The eyeball is a highly complex physical structure primarily constructed out of connective tissue and hyaluronic acid. When high blood sugar caramelizes (glycates) the eye\'s delicate microscopic blood vessels and structural matrix, the tissue weakens, "melts," and loses its ability to regulate fluid pressure properly. This is why eye pressure is intimately linked to diabetes and metabolic syndrome.',
      'The mainstream approach offers pressure-lowering drops that treat the symptom. The real solution? Starve the sugar fire by eliminating refined carbs, rebuild the ocular scaffolding with connective tissue builders, and mega-dose Vitamin C — the biological rate-limiting cofactor for building new collagen in the eye.',
    ],
    starvingBody: [
      'Your eyes are connective tissue structures that require specific raw materials to maintain their shape, pressure regulation, and vascular health. Dr. Wallach identified 90 Essential Nutrients — and among these, Vitamin C, collagen-building nutrients, hyaluronic acid, and the macular pigments (lutein, zeaxanthin) are absolutely critical for eye health. Without them, the eye\'s structural matrix weakens and pressure regulation fails.',
      'The modern diet is catastrophic for eye health: high sugar that glycates the eye\'s delicate vessels, mineral-depleted food that starves the connective tissue, and a lack of the fat-soluble pigments (lutein, zeaxanthin) that protect the retina. This is why nutritional saturation — including the Healthy Bone and Joint Pack for connective tissue rebuilding, high-dose Vitamin C for collagen, and Vision FX for macular pigments — is so critical for supporting eye health naturally.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.BASIC_MIGHTY_90,
      PRODUCT_CODES.HEALTHY_BRAIN_AND_HEART_PAK_2_0,
    ],
  },
  {
    topic: 'fibroids_pcos',
    keywords: [
      'fibroid', 'fibroids', 'uterine fibroid', 'ovarian cyst', 'pcos',
      'pmos', 'polycystic', 'estrogen dominance', 'estrogen excess',
      'progesterone', 'hormonal imbalance', 'female hormones',
      'endometriosis', 'heavy bleeding', 'irregular period',
    ],
    painPoint: 'uterine fibroids, ovarian cysts, and hormonal imbalance',
    headlineTemplate:
      'Your Fibroids and PCOS Aren\'t Genetic — They\'re Driven by Sugar and Toxic Estrogen',
    subHeadlineTemplate:
      'If you\'re dealing with fibroids, cysts, or PCOS, the real cause isn\'t bad luck — it\'s excess insulin acting as a growth hormone and a sluggish liver that can\'t clear toxic estrogen.',
    topicTitle: 'The Real Story Behind Your Fibroids and Hormonal Issues',
    topicBody: [
      'You\'re dealing with heavy bleeding, painful cycles, fibroids, or cysts. You\'ve been told it\'s hormonal and the options are birth control, surgery, or "wait and see." But Pharmacist Ben Fuchs reveals a completely different root cause.',
      'Uterine fibroids, ovarian cysts, and PCOS (now renamed Polycystic Metabolic Ovarian Syndrome) are growths driven by excess insulin and estrogen. Estrogen is the "sow hormone" designed to command rapid cell growth and division, while insulin acts as its powerful metabolic amplifier. When the liver, gallbladder, and gut bacteria (the estrobolome) cannot properly clear estrogen, it recirculates as highly toxic "catechol estrogen" — acting like fertilizer for reproductive growths.',
      'The mainstream approach offers hormones or surgery without addressing the root cause. The real solution? Treat yourself like a diabetic to lower insulin and starve the growth, support the liver and gallbladder to flush toxic estrogen through bile, and apply topical progesterone to balance estrogen\'s growth signals.',
    ],
    starvingBody: [
      'Your reproductive system requires specific raw materials to maintain healthy hormonal balance and tissue regulation. Dr. Wallach identified 90 Essential Nutrients — and among these, the trace minerals, essential fatty acids, and fat-soluble vitamins are absolutely critical for hormone production and estrogen clearance. Without them, the body cannot properly metabolize and eliminate excess estrogen.',
      'The modern diet is a hormonal disaster: high sugar that drives insulin-driven growth, processed foods that overwhelm the liver\'s detoxification pathways, and mineral-depleted soil that leaves the body without the cofactors needed for hormone balance. This is why nutritional saturation — including the Healthy Blood Sugar Pack to lower insulin, Plant Derived Minerals for trace mineral cofactors, and Ultimate EFAs for anti-inflammatory hormonal support — is so critical for supporting reproductive health naturally.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BLOOD_SUGAR_PAK_2_0,
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.BASIC_MIGHTY_90,
    ],
  },
  {
    topic: 'pots',
    keywords: [
      'pots', 'postural orthostatic', 'orthostatic hypotension', 'dizziness',
      'dizzy', 'lightheaded', 'wooziness', 'racing heart', 'heart racing',
      'standing up dizzy', 'fainting', 'near fainting', 'presyncope',
      'adrenal fatigue', 'adrenal exhaustion', 'dysautonomia',
    ],
    painPoint: 'dizziness, racing heart, and postural hypotension',
    headlineTemplate:
      'Your Dizziness and Racing Heart Aren\'t "Anxiety" — They\'re Adrenal Distress',
    subHeadlineTemplate:
      'If you feel dizzy when you stand up and your heart races for no reason, the real problem isn\'t your cardiovascular system — it\'s overtaxed adrenal glands and an overstressed nervous system starving for raw materials.',
    topicTitle: 'The Real Story Behind Your Dizziness and Racing Heart',
    topicBody: [
      'You stand up and the room spins. Your heart pounds in your chest. You feel woozy, lightheaded, and sometimes nearly faint. You\'ve been told it\'s POTS, anxiety, or "just stress." But Pharmacist Ben Fuchs identifies a very specific root cause.',
      'This is not a cardiovascular defect — it\'s a sign of adrenal gland duress and an overstressed sympathetic nervous system. The adrenal glands regulate blood pressure. When you\'re under chronic stress — both psychological and physical (from sludgy blood and fluctuating sugar levels) — the adrenals become overtaxed and lose their tight control over fluid dynamics. Standing up causes blood pressure to plummet, and the heart has to beat frantically to pump oxygen to the brain.',
      'The mainstream approach offers beta-blockers and increased salt intake. The real solution? Rebuild the adrenal glands with D-Stress (containing B-vitamins, magnesium, and raw adrenal substance), replenish electrolytes with Plant-Derived Minerals and Beyond Tangy Tangerine, and reset the nervous system with slow, deep breathing and warm baths to shift from fight-or-flight into healing mode.',
    ],
    starvingBody: [
      'Your adrenal glands and nervous system require specific raw materials to regulate blood pressure, stress response, and fluid dynamics. Dr. Wallach identified 90 Essential Nutrients — and among these, B-vitamins, magnesium, Vitamin C, and the full spectrum of trace minerals are absolutely critical for adrenal health. Without them, the adrenals cannot produce the hormones needed to regulate blood pressure and stress response.',
      'The modern diet is catastrophic for adrenal health: chronic stress depletes B-vitamins and magnesium faster than any diet can replace them, mineral-depleted soil means electrolytes are severely deficient, and sugar causes the blood sugar swings that keep the adrenals in constant crisis mode. This is why nutritional saturation — including Plant Derived Minerals for electrolyte restoration, Beyond Tangy Tangerine for B-vitamins, and the Healthy Start Pack for foundational support — is so critical for supporting adrenal and nervous system health naturally.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.BASIC_MIGHTY_90,
      PRODUCT_CODES.HEALTHY_BRAIN_AND_HEART_PAK_2_0,
    ],
  },
  {
    topic: 'general',
    keywords: [
      'health', 'wellness', 'nutrition', 'supplement', 'vitamin', 'mineral',
      'nutrient', 'youngevity', '90 for life', 'wallach', 'ben fuchs',
      'pharmacist', ' holistic', 'natural', 'organic', 'detox', 'cleanse',
    ],
    painPoint: 'overall health and nutritional deficiency',
    headlineTemplate:
      'Your Body Is a Miracle of Engineering — But It Can\'t Run on Empty',
    subHeadlineTemplate:
      'If you sense that something is "off" with your health but can\'t pinpoint why, the answer may be simpler than you think: your body is starving for the 90 essential nutrients it needs to thrive.',
    topicTitle: 'The Real Story Behind Why You Don\'t Feel Your Best',
    topicBody: [
      'You can\'t put your finger on it exactly, but you know something isn\'t right. You don\'t feel as vibrant as you used to. Something is "off." You\'ve been told it\'s just part of getting older, but deep down, you know that\'s not the full story.',
      'Dr. Joel Wallach spent decades proving that the body requires 90 Essential Nutrients to maintain optimal structure and function — and that when any of these are deficient, the body begins to break down. Not because of genetics. Not because of aging. Because of nutritional deficiency. His research showed that the body is a self-repairing miracle — but only when it has the raw materials it needs.',
      'Pharmacist Ben Fuchs builds on this with his concept of the "Triangle of Disease" — digestion, blood sugar, and adrenals/liver. When any of these three pillars are compromised by nutritional deficiency, the entire system begins to falter. The solution isn\'t to treat individual symptoms — it\'s to address the root cause by providing the body with everything it needs.',
    ],
    starvingBody: [
      'Your body is constantly rebuilding itself. Every day, billions of cells are replaced. But this miraculous process requires raw materials: 60 minerals, 16 vitamins, 12 amino acids, and 3 essential fatty acids. Dr. Wallach called these the "90 Essential Nutrients" — and he proved that without all 90, the body cannot maintain optimal health.',
      'The crisis of modern life is that our food supply has been stripped of these critical nutrients. Over-farmed soil is mineral-depleted. Processed foods are nutritionally empty. And what Dr. Wallach calls "bad foods" — gluten, fried foods, processed meats, sugar — actively block the absorption of what little nutrition remains. This is why nutritional saturation, starting with Plant Derived Minerals and the 90 essential nutrients, is the foundation of optimal health.',
    ],
    recommendedProductCodes: [
      PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0,
      PRODUCT_CODES.BASIC_MIGHTY_90,
      PRODUCT_CODES.PLANT_DERIVED_MINERALS,
      PRODUCT_CODES.HEALTHY_BRAIN_AND_HEART_PAK_2_0,
    ],
  },
];

const PRODUCT_DESCRIPTIONS: Record<string, { name: string; description: string }> = {
  [PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0]: {
    name: 'Healthy Start Pak™ 2.0',
    description:
      'The ultimate foundation. This delivers the complete spectrum of the 90 essential nutrients your body requires daily to support overall vitality and fill the massive gaps left by modern diets.',
  },
  [PRODUCT_CODES.BASIC_MIGHTY_90]: {
    name: 'Basic Mighty 90',
    description:
      'A streamlined approach to the 90 essential nutrients. This foundational system provides the core vitamins, minerals, and amino acids your body needs in a simple, daily format.',
  },
  [PRODUCT_CODES.HEALTHY_BRAIN_AND_HEART_PAK_2_0]: {
    name: 'Healthy Brain and Heart Pak™ 2.0',
    description:
      'A specialized formulation of 215 nutrients designed to promote healthy circulation, support cardiovascular function, and provide the essential fatty acids required for optimal brain and nerve health.',
  },
  [PRODUCT_CODES.HEALTHY_BODY_DIGESTION_PAK_2_0]: {
    name: 'Healthy Body Digestion Pak™ 2.0',
    description:
      'You aren\'t what you eat; you are what you absorb. This pak supports a healthy gastrointestinal tract and microbiome, ensuring the nutrients you consume actually make it into your bloodstream.',
  },
  [PRODUCT_CODES.HEALTHY_BLOOD_SUGAR_PAK_2_0]: {
    name: 'Healthy Blood Sugar Pak™ 2.0',
    description:
      'Designed to support the body\'s natural regulation of blood glucose levels. It provides targeted botanicals and trace minerals like chromium and vanadium to support a healthy metabolism.',
  },
  [PRODUCT_CODES.PLANT_DERIVED_MINERALS]: {
    name: 'Plant Derived Minerals™',
    description:
      'The crucial spark plugs of life. Because plants cannot make minerals, and our soils are depleted, this liquid gold delivers highly absorbable, negatively charged minerals to support thousands of biological reactions.',
  },
};

function analyzeTranscript(transcript: string): HealthTopic {
  const lowerTranscript = transcript.toLowerCase();
  const topicScores: Record<HealthTopic, number> = {
    digestion: 0,
    blood_sugar: 0,
    brain_heart: 0,
    energy_fatigue: 0,
    sleep: 0,
    joint_pain: 0,
    immune: 0,
    weight: 0,
    general: 0,
    skin_hair: 0,
    mood_mental: 0,
    neuropathy: 0,
    tinnitus: 0,
    prostate: 0,
    thyroid: 0,
    kidney: 0,
    chronic_pain: 0,
    osteoporosis: 0,
    ms: 0,
    glaucoma: 0,
    fibroids_pcos: 0,
    pots: 0,
  };

  for (const topicKeyword of TOPIC_KEYWORDS) {
    for (const keyword of topicKeyword.keywords) {
      if (lowerTranscript.includes(keyword)) {
        topicScores[topicKeyword.topic] += 1;
      }
    }
  }

  let bestTopic: HealthTopic = 'general';
  let bestScore = 0;

  for (const topicKeyword of TOPIC_KEYWORDS) {
    if (topicScores[topicKeyword.topic] > bestScore) {
      bestScore = topicScores[topicKeyword.topic];
      bestTopic = topicKeyword.topic;
    }
  }

  return bestTopic;
}

function extractHook(transcript: string): string {
  const sentences = transcript
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 10);
  if (sentences.length === 0) return '';
  return sentences[0];
}

export function generateCopy(input: GeneratorInput): GeneratedCopy {
  const topic = analyzeTranscript(input.transcript);
  const topicData = TOPIC_KEYWORDS.find((t) => t.topic === topic) || TOPIC_KEYWORDS.find((t) => t.topic === 'general')!;
  const hook = extractHook(input.transcript);

  const headline = topicData.headlineTemplate;
  const subHeadline = topicData.subHeadlineTemplate;

  const productDescriptions: Record<string, string> = {};
  for (const code of topicData.recommendedProductCodes) {
    if (PRODUCT_DESCRIPTIONS[code]) {
      productDescriptions[code] = PRODUCT_DESCRIPTIONS[code].description;
    }
  }

  return {
    headline,
    subHeadline,
    targetAudienceCallout: buildTargetAudienceCallout(topicData.painPoint),
    topicSectionTitle: topicData.topicTitle,
    topicSectionBody: topicData.topicBody,
    bodyStarvingTitle: 'Your Body Isn\'t Broken, It\'s Starving',
    bodyStarvingBody: topicData.starvingBody,
    foundationIntro:
      'To support your body\'s natural ability to maintain optimal structure and function, you must saturate the cells with the exact nutrients they are begging for. Based on your specific needs, these are the foundational raw materials:',
    productDescriptions,
    credentialsTitle: CREDENTIALS_TITLE,
    credentialsBody: CREDENTIALS_BODY,
    socialProofTitle: SOCIAL_PROOF_TITLE,
    socialProofBody: SOCIAL_PROOF_BODY,
    bonusesTitle: BONUSES_TITLE,
    bonuses: buildBonuses(input),
    guaranteeTitle: GUARANTEE_TITLE,
    guaranteeBody: GUARANTEE_BODY,
    scarcityText: buildScarcityText(input),
    ctaTitle: 'Take Control of Your Health Journey Today',
    ctaBody: buildForensicCtaBody(input),
    psText: buildPsText(input, topicData.painPoint),
    primaryTopic: topic,
    recommendedProducts: topicData.recommendedProductCodes,
  };
}

interface AiCopyResponse {
  headline: string;
  subHeadline: string;
  topicSectionTitle: string;
  topicSectionBody: string[];
  bodyStarvingBody: string[];
}

/**
 * Generates landing page copy personalized to this specific transcript via the
 * `generate-copy` Netlify Function (Gemini). Falls back to the static,
 * topic-templated copy from `generateCopy()` if the AI call fails or the
 * GEMINI_API_KEY isn't configured, so the tool always produces a working page.
 */
export async function generateCopyWithAI(input: GeneratorInput): Promise<GeneratedCopy> {
  const fallback = generateCopy(input);

  try {
    const topic = fallback.primaryTopic;
    const topicData = TOPIC_KEYWORDS.find((t) => t.topic === topic);

    const response = await fetch('/.netlify/functions/generate-copy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        transcript: input.transcript,
        topic,
        painPoint: topicData?.painPoint || '',
        contactName: input.contactName,
      }),
    });

    if (!response.ok) {
      return fallback;
    }

    const ai = (await response.json()) as Partial<AiCopyResponse>;

    if (
      !ai.headline ||
      !ai.subHeadline ||
      !ai.topicSectionTitle ||
      !Array.isArray(ai.topicSectionBody) ||
      !Array.isArray(ai.bodyStarvingBody)
    ) {
      return fallback;
    }

    // Note: ctaBody/psText/guaranteeBody stay deterministic (forensic CTA, PS,
    // guarantee) — these carry legal/compliance weight and shouldn't vary by AI
    // output. Only the narrative sections are personalized per transcript.
    return {
      ...fallback,
      headline: ai.headline,
      subHeadline: ai.subHeadline,
      targetAudienceCallout: fallback.targetAudienceCallout,
      topicSectionTitle: ai.topicSectionTitle,
      topicSectionBody: ai.topicSectionBody,
      bodyStarvingBody: ai.bodyStarvingBody,
    };
  } catch {
    return fallback;
  }
}

export function getFdaDisclaimer(): string {
  return FDA_DISCLAIMER;
}

export function getProductInfo(code: string): { name: string; description: string } | undefined {
  return PRODUCT_DESCRIPTIONS[code];
}

export { PRODUCT_DESCRIPTIONS };
