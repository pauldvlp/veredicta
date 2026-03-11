export interface PracticeArea {
  id: string;
  number: string;
  name: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  city?: string;
  initials: string;
  color: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
  sublabel?: string;
}

export interface Advantage {
  icon: string;
  title: string;
  description: string;
  highlighted?: boolean;
}
