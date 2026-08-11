export type AIModelId = 'chatgpt' | 'gemini' | 'claude' | 'perplexity' | 'copilot';

export type UserLevel = 'beginner' | 'intermediate' | 'advanced';

export type CategoryType = 'all' | 'writing' | 'coding' | 'research' | 'business' | 'creative';

export interface AIModel {
  id: AIModelId;
  name: string;
  vendor: string;
  tagline: string;
  badgeBg: string;
  badgeText: string;
  accentColor: string;
  borderColor: string;
  gradient: string;
  pricing: {
    free: string;
    paid: string;
  };
  keyFeatures: string[];
  strengths: string[];
  weaknesses: string[];
  bestFor: string[];
  contextWindow: string;
  webSearch: boolean;
  imageGen: boolean;
  dataAnalysis: boolean;
  customGPTsGems: boolean;
  scoreCard: {
    writing: number;
    coding: number;
    research: number;
    speed: number;
    easeOfUse: number;
  };
}

export interface LevelGuideContent {
  level: UserLevel;
  levelTitle: string;
  levelDescription: string;
  iconName: string;
  chapters: {
    id: string;
    title: string;
    summary: string;
    targetAI?: AIModelId[];
    steps: {
      stepNumber: number;
      title: string;
      description: string;
      examplePrompt?: string;
      expectedResult?: string;
      tip?: string;
    }[];
  }[];
}

export interface StepTutorial {
  stepNumber: number;
  title: string;
  instruction: string;
  promptToCopy: string;
  simulatedResponse: string;
  proTip: string;
  commonMistake?: string;
}

export interface PracticeTutorial {
  id: string;
  title: string;
  category: CategoryType;
  difficulty: '초급' | '중급' | '고급';
  targetAIs: AIModelId[];
  summary: string;
  estimatedMinutes: number;
  steps: StepTutorial[];
}

export interface PromptTemplate {
  id: string;
  title: string;
  framework: string;
  category: CategoryType;
  recommendedAI: string;
  description: string;
  promptText: string;
  variables: string[];
  exampleOutput: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  sent: boolean;
}
