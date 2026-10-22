export interface ProjectItem {
  id: string;
  title: string;
  category: 'bolsos' | 'tapices' | 'hogar' | 'navidad';
  technique: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  estimatedTime: string;
  cordType: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface BonusItem {
  id: number;
  title: string;
  subtitle: string;
  originalPrice: number;
  description: string;
  iconName: string;
  tag: string;
  includes: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  age: number;
  location: string;
  role: string;
  quote: string;
  finishedProject: string;
  rating: number;
  avatarUrl?: string;
  story: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'materiales' | 'acceso' | 'pagos';
}

export interface StepRoadmap {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyAction: string;
  timeframe: string;
}
