export interface GeneratorInput {
  ygyId: string;
  transcript: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  healthEvaluationLink: string;
}

export interface ProductInfo {
  code: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'foundation' | 'targeted' | 'individual';
}

export interface BonusItem {
  title: string;
  description: string;
}

export interface GeneratedCopy {
  /** Big, bold benefit headline — the single most important element on the page. */
  headline: string;
  /** Expands the headline and glides the reader into the body copy. */
  subHeadline: string;
  /** Calls out the specific target audience so the right reader knows "this is for me". */
  targetAudienceCallout: string;
  topicSectionTitle: string;
  topicSectionBody: string[];
  bodyStarvingTitle: string;
  bodyStarvingBody: string[];
  foundationIntro: string;
  productDescriptions: Record<string, string>;
  /** Authority/credentials section establishing trust (Wallach/Fuchs/Youngevity track record). */
  credentialsTitle: string;
  credentialsBody: string[];
  /** Aggregate, verifiable proof points (not fabricated individual testimonials). */
  socialProofTitle: string;
  socialProofBody: string[];
  /** 2-3 stacked bonuses to increase perceived value of the offer. */
  bonusesTitle: string;
  bonuses: BonusItem[];
  /** Risk-reversal guarantee, reversing the transaction risk for the buyer. */
  guaranteeTitle: string;
  guaranteeBody: string;
  /** Genuine urgency/scarcity framing (e.g. limited 1:1 distributor availability). */
  scarcityText: string;
  ctaTitle: string;
  /** Forensic, explicit next-step instructions — no ambiguity about what to do. */
  ctaBody: string;
  /** The P.S. micro-landing-page: recaps offer + guarantee + cost of doing nothing. */
  psText: string;
  primaryTopic: HealthTopic;
  recommendedProducts: string[];
}

export type HealthTopic =
  | 'digestion'
  | 'blood_sugar'
  | 'brain_heart'
  | 'energy_fatigue'
  | 'sleep'
  | 'joint_pain'
  | 'immune'
  | 'weight'
  | 'general'
  | 'skin_hair'
  | 'mood_mental'
  | 'neuropathy'
  | 'tinnitus'
  | 'prostate'
  | 'thyroid'
  | 'kidney'
  | 'chronic_pain'
  | 'osteoporosis';

export interface TopicKeyword {
  topic: HealthTopic;
  keywords: string[];
  painPoint: string;
  headlineTemplate: string;
  subHeadlineTemplate: string;
  topicTitle: string;
  topicBody: string[];
  starvingBody: string[];
  recommendedProductCodes: string[];
}
