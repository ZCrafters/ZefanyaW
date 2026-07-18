// ============================================================================
// CENTRAL TYPE DEFINITIONS — Single source of truth for all portfolio data
// ============================================================================
// NOTE: No React imports here. Icon fields use string keys that map to
// Lucide icons at the UI layer via iconMap (see src/lib/icons.tsx).

// --- Profile ---
export interface Profile {
  name: string;
  role: string;
  tagline: string;
  email: string;
  location: string;
  description: string;
}

// --- Navigation ---
export interface NavItem {
  href: string;
  label: string;
  icon: string; // FontAwesome class or Lucide key
}

export interface SocialLink {
  href: string;
  label: string;
  icon: string; // FontAwesome class (e.g. "fab fa-instagram")
}

// --- Stats ---
export interface Stat {
  id: string;
  value: string;
  suffix?: string;
  label: string;
  icon: string;
  description?: string;
}

// --- Skills ---
export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  skills: Skill[];
  tools: string[];
}

// --- Experience ---
export type ExperienceType = "work" | "internship" | "freelance" | "leadership" | "volunteer" | "other";

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location?: string;
  period: string;
  type: ExperienceType;
  description: string;
  achievements: string[];
  skills: string[];
  icon: string;
  color: string;
  featured?: boolean;
}

export interface OtherExperience {
  id: string;
  role: string;
  organization: string;
  description: string;
  icon: string;
  highlight?: string;
}

// --- Education ---
export type EducationStatus = "ongoing" | "completed";

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  year: string;
  status: EducationStatus;
  description?: string;
  achievements?: string[];
  icon: string;
  color?: string;
}

// --- Achievements ---
export interface Achievement {
  id: string;
  number: string;
  suffix: string;
  label: string;
  icon: string;
  description: string;
}

// --- Testimonials ---
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

// --- FAQ ---
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  icon: string;
}

// --- Fun Facts ---
export interface FunFact {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

// --- Services ---
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// --- Values ---
export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// --- Hero Text (Home page sequence) ---
export interface HeroText {
  heading: string;
  subtext: string;
}

// --- Sequence Config (Home page) ---
export interface SequenceConfig {
  totalFrames: number;
  imagePath: string;
  filePrefix: string;
  fileSuffix: string;
  padLength: number;
  containerHeightVh: number;
}

// --- About page tabs ---
export interface TabItem {
  id: string;
  label: string;
  icon: string;
}

// --- Homepage sections (PostSequenceContent) ---
export interface HomepageAbout {
  title: string;
  description: string;
  highlights: string[];
}

export interface HomepageSkillCategory {
  name: string;
  items: string[];
}

export interface HomepageSkills {
  title: string;
  categories: HomepageSkillCategory[];
}

export interface HomepageProject {
  name: string;
  description: string;
  tags: string[];
}

export interface HomepageProjects {
  title: string;
  items: HomepageProject[];
}

export interface HomepageExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface HomepageExperience {
  title: string;
  items: HomepageExperienceItem[];
}

// --- Complete Portfolio Schema ---
export interface PortfolioData {
  profile: Profile;
  name: string;
  navigation: NavItem[];
  socialLinks: SocialLink[];
  heroTexts: HeroText[];
  sequenceConfig: SequenceConfig;
  stats: Stat[];
  skillCategories: SkillCategory[];
  experiences: ExperienceItem[];
  otherExperiences: OtherExperience[];
  education: EducationItem[];
  achievements: Achievement[];
  testimonials: Testimonial[];
  faq: FAQItem[];
  funFacts: FunFact[];
  services: Service[];
  values: Value[];
  tabs: TabItem[];
  about: HomepageAbout;
  skills: HomepageSkills;
  projects: HomepageProjects;
  experience: HomepageExperience;
}
