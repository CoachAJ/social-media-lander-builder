import { GeneratorInput, GeneratedCopy, HealthTopic, TopicKeyword } from '../types';
import { PRODUCT_CODES } from './cartUtils';

const FDA_DISCLAIMER =
  'Disclaimer: The statements contained on this page have not been evaluated by the Food and Drug Administration. The products and information recommended are not intended to diagnose, treat, cure, or prevent any disease. Always consult with your primary care physician before beginning any nutritional supplement program, especially if you are pregnant, nursing, or taking medications. The information provided is for educational purposes only.';

const TOPIC_KEYWORDS: TopicKeyword[] = [
  {
    topic: 'digestion',
    keywords: [
      'digest', 'bloat', 'gut', 'stomach', 'bowel', 'constipation', 'diarrhea',
      'ibs', 'acid reflux', 'heartburn', 'indigestion', 'microbiome', 'probiotic',
      'leaky gut', 'gas', 'cramping', 'nausea', 'food sensitivity', 'gluten',
      'absorption', 'nutrient absorption', 'enzymes', 'flora',
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
      'bone', 'bones', 'osteo', 'osteoporosis', 'cartilage', 'connective tissue',
      'muscle pain', 'sore', 'soreness', 'cracking', 'popping',
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
      'beauty', 'anti-aging', 'youthful',
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
    topicSectionTitle: topicData.topicTitle,
    topicSectionBody: topicData.topicBody,
    bodyStarvingTitle: 'Your Body Isn\'t Broken, It\'s Starving',
    bodyStarvingBody: topicData.starvingBody,
    foundationIntro:
      'To support your body\'s natural ability to maintain optimal structure and function, you must saturate the cells with the exact nutrients they are begging for. Based on your specific needs, these are the foundational raw materials:',
    productDescriptions,
    ctaTitle: 'Take Control of Your Health Journey Today',
    ctaBody:
      'Stop guessing and start giving your body exactly what it needs to thrive.',
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
  ctaTitle: string;
  ctaBody: string;
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
      !Array.isArray(ai.bodyStarvingBody) ||
      !ai.ctaTitle ||
      !ai.ctaBody
    ) {
      return fallback;
    }

    return {
      ...fallback,
      headline: ai.headline,
      subHeadline: ai.subHeadline,
      topicSectionTitle: ai.topicSectionTitle,
      topicSectionBody: ai.topicSectionBody,
      bodyStarvingBody: ai.bodyStarvingBody,
      ctaTitle: ai.ctaTitle,
      ctaBody: ai.ctaBody,
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
