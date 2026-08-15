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

export interface GeneratedCopy {
  headline: string;
  subHeadline: string;
  topicSectionTitle: string;
  topicSectionBody: string[];
  bodyStarvingTitle: string;
  bodyStarvingBody: string[];
  foundationIntro: string;
  productDescriptions: Record<string, string>;
  ctaTitle: string;
  ctaBody: string;
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
  | 'mood_mental';

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
