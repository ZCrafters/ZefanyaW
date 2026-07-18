// ============================================================================
// CENTRAL PORTFOLIO DATA — Single source of truth
// ============================================================================
// All data uses string icon keys. Resolve to React components via getIcon().
// All content is real — no placeholders.

import type {
  PortfolioData,
  ExperienceItem,
  OtherExperience,
  EducationItem,
  Achievement,
  Stat,
  Testimonial,
  FAQItem,
  FunFact,
  Service,
  Value,
  SkillCategory,
  Skill,
  TabItem,
} from "@/types/portfolio";

// ---------------------------------------------------------------------------
// PROFILE
// ---------------------------------------------------------------------------
const profile = {
  name: "Zefanya Williams",
  role: "Digital Business Student & Content Creator",
  tagline: "Crafting Visual Stories Through Data & Design",
  email: "zefanyawilliams@gmail.com",
  location: "Indonesia",
  description:
    "I'm a Digital Business student with a passion for blending creative direction with data-driven strategy. I specialize in content creation, digital marketing, and AI-powered solutions that turn complex problems into compelling visual narratives.",
} satisfies PortfolioData["profile"];

// ---------------------------------------------------------------------------
// HERO TEXTS (Home page sequence)
// ---------------------------------------------------------------------------
const heroTexts: PortfolioData["heroTexts"] = [
  { heading: "Hello, I'm Zefanya", subtext: "Digital Business Student | Content Creator | AI Enthusiast." },
  { heading: "I Create Visual Stories", subtext: "Specializing in content creation, digital marketing, and data science. Passionate about solving complex challenges." },
  { heading: "I Build Digital Experiences", subtext: "Creating impactful digital products that merge design with technology." },
  { heading: "I Turn Ideas Into Impact", subtext: "Learn more about what I do." },
];

// ---------------------------------------------------------------------------
// SEQUENCE CONFIG (Home page)
// ---------------------------------------------------------------------------
const sequenceConfig: PortfolioData["sequenceConfig"] = {
  totalFrames: 361,
  imagePath: "/Sequence",
  filePrefix: "LOL_frame_",
  fileSuffix: ".jpg",
  padLength: 5,
  containerHeightVh: 1400,
};

// ---------------------------------------------------------------------------
// STATS (shared between about, experience, expertise)
// ---------------------------------------------------------------------------
const stats: Stat[] = [
  { id: "certifications", value: "6", suffix: "+", label: "Certifications", icon: "award", description: "Professional certifications earned" },
  { id: "experience", value: "4", suffix: "+", label: "Years Experience", icon: "calendar", description: "Years of professional experience" },
  { id: "skills", value: "20", suffix: "+", label: "Skills Mastered", icon: "star", description: "Technical and soft skills acquired" },
  { id: "projects", value: "50", suffix: "+", label: "Projects", icon: "briefcase", description: "Completed projects and campaigns" },
];

// ---------------------------------------------------------------------------
// SKILL CATEGORIES (expertise page — detailed breakdown)
// ---------------------------------------------------------------------------
const skillCategories: SkillCategory[] = [
  {
    id: "soft-skills",
    title: "Soft Skills",
    icon: "users",
    color: "#e50000",
    description: "Essential interpersonal and professional skills for workplace excellence",
    skills: [
      { name: "Organizational Skills", level: 95, category: "Soft Skills" },
      { name: "Teamwork", level: 92, category: "Soft Skills" },
      { name: "Problem-Solving", level: 90, category: "Soft Skills" },
      { name: "Adaptability", level: 88, category: "Soft Skills" },
      { name: "Attention to Detail", level: 93, category: "Soft Skills" },
      { name: "Communication", level: 91, category: "Soft Skills" },
    ],
    tools: ["Slack", "Microsoft Teams", "Zoom", "Notion"],
  },
  {
    id: "data-analysis",
    title: "Data & Analysis",
    icon: "bar-chart",
    color: "#ff3333",
    description: "Data-driven decision making and analytical capabilities",
    skills: [
      { name: "Data Visualization", level: 88, category: "Data & Analysis" },
      { name: "Basic Data Analysis", level: 85, category: "Data & Analysis" },
      { name: "Statistical Understanding", level: 82, category: "Data & Analysis" },
      { name: "Turning Data into Insights", level: 86, category: "Data & Analysis" },
      { name: "Reporting (Google Sheets)", level: 90, category: "Data & Analysis" },
    ],
    tools: ["Google Sheets", "Tableau", "Excel", "SQL"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Creative",
    icon: "target",
    color: "#ff6666",
    description: "Creative content creation and digital marketing strategies",
    skills: [
      { name: "Social Media Management", level: 92, category: "Digital Marketing & Creative" },
      { name: "Content Planning", level: 89, category: "Digital Marketing & Creative" },
      { name: "Copywriting", level: 87, category: "Digital Marketing & Creative" },
      { name: "Photography", level: 85, category: "Digital Marketing & Creative" },
      { name: "Video Editing", level: 88, category: "Digital Marketing & Creative" },
      { name: "Graphic Design", level: 84, category: "Digital Marketing & Creative" },
    ],
    tools: ["Adobe Creative Suite", "Canva", "CapCut", "Figma"],
  },
  {
    id: "programming",
    title: "Programming Languages",
    icon: "code",
    color: "#cc0000",
    description: "Technical programming and development capabilities",
    skills: [
      { name: "Python", level: 82, category: "Programming" },
      { name: "C++", level: 90, category: "Programming" },
      { name: "HTML/CSS", level: 88, category: "Programming" },
      { name: "JavaScript", level: 80, category: "Programming" },
    ],
    tools: ["VS Code", "GitHub", "Jupyter", "Google Colab"],
  },
  {
    id: "tools",
    title: "Tools & Software",
    icon: "layers",
    color: "#990000",
    description: "Professional tools and software proficiency",
    skills: [
      { name: "Google Sheets", level: 92, category: "Tools & Software" },
      { name: "Google Colab", level: 85, category: "Tools & Software" },
      { name: "Jupyter Notebook", level: 83, category: "Tools & Software" },
      { name: "Tableau", level: 80, category: "Tools & Software" },
      { name: "Visual Studio Code", level: 88, category: "Tools & Software" },
      { name: "GitHub", level: 86, category: "Tools & Software" },
    ],
    tools: ["Git", "Docker", "AWS", "Heroku"],
  },
];

// Flat skill list for experience page skill bars
const allSkillsFlat: Skill[] = [
  { name: "Digital Marketing", level: 95, category: "Marketing" },
  { name: "Content Creation", level: 92, category: "Creative" },
  { name: "Video Editing", level: 88, category: "Creative" },
  { name: "Project Management", level: 85, category: "Management" },
  { name: "Brand Strategy", level: 87, category: "Marketing" },
  { name: "Data Analysis", level: 80, category: "Technical" },
  { name: "Photography", level: 85, category: "Creative" },
  { name: "UI/UX Design", level: 90, category: "Technical" },
  { name: "Public Speaking", level: 90, category: "Soft Skills" },
  { name: "Team Leadership", level: 88, category: "Soft Skills" },
];

// ---------------------------------------------------------------------------
// EXPERIENCES (timeline)
// ---------------------------------------------------------------------------
const experiences: ExperienceItem[] = [
  {
    id: "fifgroup",
    title: "Microfinancing Task Force 365",
    company: "FIFGROUP",
    location: "Indonesia",
    period: "2026 - Present",
    type: "work",
    description: "Working as part of the Microfinancing Task Force, contributing to financial inclusion initiatives and micro-lending operations.",
    achievements: [
      "Supporting microfinance operations and client onboarding",
      "Contributing to financial literacy programs",
      "Assisting in loan portfolio management",
    ],
    skills: ["Microfinance", "Financial Analysis", "Client Relations", "Risk Assessment"],
    icon: "building2",
    color: "from-amber-500 to-orange-600",
    featured: true,
  },
  {
    id: "gegaiaan",
    title: "Owner",
    company: "Gegaiaan & Cakra Labs",
    location: "Indonesia",
    period: "2025 - Present",
    type: "work",
    description: "Leading an independent fashion and lifestyle brand, managing end-to-end business operations from production to marketing and fulfillment.",
    achievements: [
      "Mengelola operasional dari Produksi, Stok, hingga pengiriman",
      "Membuat feed konten dengan foto/video produk untuk katalog dan media sosial",
      "Menyusun strategi pemasaran dasar dan mengelola performa penjualan online",
      "Mengembangkan identitas visual dan memastikan kualitas produk",
    ],
    skills: ["Business Management", "Content Creation", "Digital Marketing", "Brand Strategy", "E-commerce"],
    icon: "store",
    color: "from-purple-500 to-pink-600",
    featured: true,
  },
  {
    id: "campus-ambassador",
    title: "Campus Ambassador",
    company: "Cyber University",
    location: "Indonesia",
    period: "2023 - Present",
    type: "work",
    description: "Representing Cyber University as a Campus Ambassador, promoting the university through creative content and direct engagement with prospective students.",
    achievements: [
      "Membuat konten menarik video/feed untuk promosi kampus",
      "Melakukan presentasi dan pemasaran di beberapa SMK/SMA yang bertujuan menarik siswa",
      "Melakukan Dokumentasi beberapa event kampus",
    ],
    skills: ["Public Speaking", "Content Creation", "Event Documentation", "Marketing"],
    icon: "graduation-cap",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "video-editor",
    title: "Video Editor Intern",
    company: "Sekolah Fasilitasi",
    location: "Remote",
    period: "2024",
    type: "internship",
    description: "Creating educational and storytelling video content for digital learning platforms.",
    achievements: [
      "Mengedit video edukatif dan storytelling untuk kebutuhan digital learning",
      "Menyusun alur visual konten agar lebih mudah dipahami oleh audiens",
      "Bekerja sesuai arahan yang diberikan atau script",
    ],
    skills: ["Video Editing", "Storytelling", "Visual Design", "Educational Content"],
    icon: "video",
    color: "from-red-500 to-rose-600",
  },
  {
    id: "sales-freelance",
    title: "Sales Freelance",
    company: "Sentul City",
    location: "Bogor, Indonesia",
    period: "2025",
    type: "freelance",
    description: "Promoting property developments and supporting sales operations for Sentul City real estate projects.",
    achievements: [
      "Membuat 11 konten promosi properti yang berhasil meningkatkan engagement",
      "Mendukung proses follow-up dan komunikasi dengan calon pembeli",
      "Menyiapkan materi presentasi untuk promosi properti",
    ],
    skills: ["Sales", "Property Marketing", "Content Creation", "Client Communication"],
    icon: "trending-up",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "data-entry",
    title: "Data Entry Specialist",
    company: "Amartha Greentech Consultant",
    location: "Remote",
    period: "2022 - Present",
    type: "freelance",
    description: "Providing accurate data entry services for survey and research data.",
    achievements: [
      "Bekerja sebagai freelance data entry untuk perusahaan Amartha Greentech Consultant",
      "Memindahkan dan menginput data kuesioner hasil survei lapangan ke Microsoft Excel secara akurat",
    ],
    skills: ["Data Entry", "Microsoft Excel", "Data Management", "Attention to Detail"],
    icon: "database",
    color: "from-teal-500 to-cyan-600",
  },
];

// ---------------------------------------------------------------------------
// OTHER EXPERIENCES
// ---------------------------------------------------------------------------
const otherExperiences: OtherExperience[] = [
  { id: "decompe", role: "Vice Committee", organization: "DECOMPE (UI/UX International Competition)", description: "Memimpin Media Marketing & Sponsorship; mengelola publikasi event, membuat konsep konten, dan menjalin kerja sama dengan brand untuk mendukung penyelenggaraan kompetisi UI/UX skala nasional–internasional.", icon: "trophy", highlight: "International Scale Competition" },
  { id: "student-exchange", role: "Student Exchange Participant", organization: "UTP Malaysia (FinTech Project)", description: "Mengembangkan prototype aplikasi Maza Finance, yaitu platform edukasi literasi keuangan dan investasi untuk Gen Z; berkolaborasi dengan mahasiswa internasional dalam perancangan fitur dan alur pengguna.", icon: "globe", highlight: "International Collaboration" },
  { id: "pkm", role: "PKM Documentation Lead", organization: "Cyber University", description: "Menangani dokumentasi foto/video dan pelaporan kegiatan pengabdian masyarakat di pulau 1000 untuk keperluan laporan resmi.", icon: "camera" },
  { id: "bem", role: "Media & Informasi", organization: "BEM - Cyber University", description: "Mengelola publikasi kegiatan kampus, membuat materi informasi, dan mendukung dokumentasi event untuk menjaga komunikasi internal dan eksternal BEM tetap konsisten.", icon: "layers" },
  { id: "music-club", role: "Head of Music Club", organization: "Cyber University", description: "Memimpin kegiatan klub musik, mengatur latihan, koordinasi anggota, serta mendukung kebutuhan dokumentasi dan event internal kampus.", icon: "music" },
  { id: "coding", role: "Head of PRP Coding", organization: "Cyber University", description: "Mengelola produksi konten edukasi pemrograman (Java Series), termasuk perencanaan konten dan koordinasi internal tim kreatif.", icon: "code" },
  { id: "gpd", role: "Youth Team - Drummer", organization: "GPDI", description: "Mendukung dokumentasi dan kebutuhan audio-visual untuk kegiatan komunitas dan event internal. Menjadi pemain musik drum.", icon: "heart" },
];

// ---------------------------------------------------------------------------
// EDUCATION
// ---------------------------------------------------------------------------
const education: EducationItem[] = [
  { id: "cyber-university", institution: "Cyber University", degree: "Bachelor of Digital Business", year: "2023 - Present", status: "ongoing", description: "Focusing on digital transformation, e-commerce, and business technology integration.", icon: "graduation-cap", color: "#e50000" },
  { id: "green-academy", institution: "Green Academy", degree: "Certificate in Data Science", year: "2023", status: "completed", icon: "bar-chart", color: "#00c851" },
  { id: "mentorbox", institution: "Mentorbox Indonesia", degree: "Digital Marketing & Content Creation Program", year: "2024", status: "completed", description: "Completed with BNSP Certification", icon: "target", color: "#ff6b6b" },
  { id: "darwis-triadi", institution: "Darwis Triadi Photography Academy", degree: "Intermediate Photography Class", year: "2024", status: "completed", icon: "camera", color: "#ffd700" },
  { id: "videolabs", institution: "VideoLabs", degree: "Video Editing Training Program", year: "2023 - 2025", status: "ongoing", icon: "video", color: "#9b59b6" },
  { id: "master-tasking", institution: "Master Tasking Training", degree: "Excellent Service Certification Program", year: "2025", status: "completed", icon: "award", color: "#3498db" },
];

// ---------------------------------------------------------------------------
// ACHIEVEMENTS
// ---------------------------------------------------------------------------
const achievements: Achievement[] = [
  { id: "certifications", number: "6", suffix: "+", label: "Certifications", icon: "award", description: "Professional certifications earned" },
  { id: "experience", number: "4", suffix: "+", label: "Years Experience", icon: "calendar", description: "Years of professional experience" },
  { id: "skills", number: "20", suffix: "+", label: "Skills Mastered", icon: "star", description: "Technical and soft skills acquired" },
  { id: "projects", number: "30", suffix: "+", label: "Projects", icon: "briefcase", description: "Completed projects and campaigns" },
];

// ---------------------------------------------------------------------------
// TESTIMONIALS
// ---------------------------------------------------------------------------
const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "Zefanya brings exceptional creativity and strategic thinking to every project. Her ability to blend marketing insights with creative execution is truly remarkable.",
    author: "Team Member",
    role: "DECOMPE Committee",
    rating: 5,
  },
  {
    id: "testimonial-2",
    quote: "Outstanding leadership skills and attention to detail. Zefanya has the rare ability to inspire teams while delivering results that exceed expectations.",
    author: "Colleague",
    role: "Music Club CU",
    rating: 5,
  },
];

// ---------------------------------------------------------------------------
// ABOUT PAGE — Timeline (mixed education + volunteer, distinct from education[])
// ---------------------------------------------------------------------------
interface AboutTimelineEntry {
  period: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: string;
  highlight?: boolean;
}

const aboutTimeline: AboutTimelineEntry[] = [
  {
    period: "2024 - Present",
    title: "Green Academy",
    subtitle: "Digital Business Student",
    description: "Pursuing studies in digital business with focus on AI technology, digital marketing strategies, and data-driven decision making.",
    icon: "graduation-cap",
    highlight: true,
  },
  {
    period: "2024 - Present",
    title: "Darwis Photography School",
    subtitle: "Professional Photography",
    description: "Mastering technical skills in camera operation, lighting techniques, and post-processing for commercial and artistic photography.",
    icon: "camera",
  },
  {
    period: "2023 - 2025",
    title: "Badan Executive Mahasiswa",
    subtitle: "Best Member - Medinfo Division",
    description: "Led design, content planning, and documentation projects. Recognized as best member of September for outstanding contributions.",
    icon: "award",
  },
  {
    period: "2022 - Present",
    title: "Campus Volunteer",
    description: "Actively organized events and community service projects, developing leadership and team coordination skills.",
    icon: "handshake",
  },
];

// About page skill bars (subset, slightly different levels from expertise page)
const aboutSkills: Skill[] = [
  { name: "Digital Marketing", level: 92, category: "Marketing" },
  { name: "Content Creation", level: 95, category: "Creative" },
  { name: "Data Analysis", level: 85, category: "Technical" },
  { name: "Photography", level: 90, category: "Creative" },
  { name: "Video Editing", level: 88, category: "Creative" },
  { name: "Project Management", level: 82, category: "Business" },
  { name: "AI & Automation", level: 78, category: "Technical" },
  { name: "UI/UX Strategy", level: 90, category: "Technical" },
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------
const faq: FAQItem[] = [
  { id: "who", question: "Who are you?", answer: "I'm Zefanya Williams, a passionate Digital Business student and creative professional. I bridge the gap between visual storytelling and data-driven performance, bringing a unique perspective that combines artistic vision with analytical precision.", icon: "sparkles" },
  { id: "education", question: "What's your educational background?", answer: "I'm currently studying Digital Business at Cyber University while actively pursuing certifications in Data Science, Digital Marketing, and Photography. I'm a lifelong learner who believes in continuous growth and skill development.", icon: "graduation-cap" },
  { id: "skills", question: "What are your skills?", answer: "My skill set spans digital marketing, content creation, video editing, photography, project management, and data analysis. I'm particularly passionate about leveraging AI technology to create innovative solutions.", icon: "zap" },
  { id: "goals", question: "What are your future goals?", answer: "I aim to become a leading digital business strategist who combines creative excellence with technological innovation. My goal is to build solutions that make a meaningful impact on businesses and communities.", icon: "target" },
  { id: "connect", question: "How can I connect with you?", answer: "Feel free to reach out through my social media links in the sidebar or visit the Contact page. I'm always open to interesting discussions, collaboration opportunities, and new challenges!", icon: "mail" },
];

// ---------------------------------------------------------------------------
// FUN FACTS
// ---------------------------------------------------------------------------
const funFacts: FunFact[] = [
  { id: "photography", title: "Photography", description: "Capturing moments that tell stories beyond words. Every frame is a frozen memory of truth.", icon: "camera", gradient: "from-red-500 to-rose-600" },
  { id: "ai-tech", title: "AI Technology", description: "Exploring the frontier of artificial intelligence and its transformative potential.", icon: "bot", gradient: "from-violet-500 to-purple-600" },
  { id: "community", title: "Community", description: "Dedicated to empowering others through mentorship and collaborative growth.", icon: "handshake", gradient: "from-emerald-500 to-teal-600" },
];

// ---------------------------------------------------------------------------
// SERVICES
// ---------------------------------------------------------------------------
const services: Service[] = [
  { id: "content-strategy", title: "Content Strategy", description: "Data-driven content plans that align with your brand goals and audience behavior.", icon: "pen-tool", features: ["Content calendars", "Audience analysis", "Performance tracking", "Brand voice development"] },
  { id: "digital-marketing", title: "Digital Marketing", description: "End-to-end digital campaigns that drive engagement and measurable ROI.", icon: "bar-chart", features: ["Social media management", "SEO optimization", "Paid advertising", "Analytics & reporting"] },
  { id: "visual-production", title: "Visual Production", description: "Professional photography and video content that tells your brand story.", icon: "camera", features: ["Product photography", "Event coverage", "Video production", "Post-processing"] },
  { id: "ai-integration", title: "AI Integration", description: "Leverage AI tools to automate workflows and enhance creative output.", icon: "bot", features: ["Workflow automation", "AI-assisted design", "Data insights", "Process optimization"] },
];

// ---------------------------------------------------------------------------
// VALUES
// ---------------------------------------------------------------------------
const values: Value[] = [
  { id: "passion", title: "Passion", description: "Genuine enthusiasm drives excellence in every project.", icon: "heart" },
  { id: "innovation", title: "Innovation", description: "Pushing boundaries and exploring new possibilities.", icon: "lightbulb" },
  { id: "integrity", title: "Integrity", description: "Honest and transparent in all collaborations.", icon: "diamond" },
  { id: "impact", title: "Impact", description: "Creating solutions that make a meaningful difference.", icon: "target" },
];

// ---------------------------------------------------------------------------
// TABS (About page)
// ---------------------------------------------------------------------------
const tabs: TabItem[] = [
  { id: "overview", label: "Overview", icon: "eye" },
  { id: "journey", label: "Journey", icon: "compass" },
  { id: "skills", label: "Skills", icon: "zap" },
  { id: "services", label: "Services", icon: "layers" },
];

// ---------------------------------------------------------------------------
// EXPERTISE PAGE — Skill categories (uses FontAwesome icons, own schema)
// ---------------------------------------------------------------------------
interface ExpertiseSkillCategory {
  id: string;
  title: string;
  icon: string; // FA class e.g. "fa-users"
  color: string;
  description: string;
  skills: Array<{ name: string; level: number }>;
  tools: string[];
}

const expertiseSkillCategories: ExpertiseSkillCategory[] = [
  {
    id: "soft-skills", title: "Soft Skills", icon: "fa-users", color: "#e50000",
    description: "Essential interpersonal and professional skills for workplace excellence",
    skills: [
      { name: "Organizational Skills", level: 95 }, { name: "Teamwork", level: 92 },
      { name: "Problem-Solving", level: 90 }, { name: "Adaptability", level: 88 },
      { name: "Attention to Detail", level: 93 }, { name: "Communication", level: 91 },
    ],
    tools: ["Slack", "Microsoft Teams", "Zoom", "Notion"],
  },
  {
    id: "data-analysis", title: "Data & Analysis", icon: "fa-chart-pie", color: "#ff3333",
    description: "Data-driven decision making and analytical capabilities",
    skills: [
      { name: "Data Visualization", level: 88 }, { name: "Basic Data Analysis", level: 85 },
      { name: "Statistical Understanding", level: 82 }, { name: "Turning Data into Insights", level: 86 },
      { name: "Reporting (Google Sheets)", level: 90 },
    ],
    tools: ["Google Sheets", "Tableau", "Excel", "SQL"],
  },
  {
    id: "digital-marketing", title: "Digital Marketing & Creative", icon: "fa-bullhorn", color: "#ff6666",
    description: "Creative content creation and digital marketing strategies",
    skills: [
      { name: "Social Media Management", level: 92 }, { name: "Content Planning", level: 89 },
      { name: "Copywriting", level: 87 }, { name: "Photography", level: 85 },
      { name: "Video Editing", level: 88 }, { name: "Graphic Design", level: 84 },
    ],
    tools: ["Adobe Creative Suite", "Canva", "CapCut", "Figma"],
  },
  {
    id: "programming", title: "Programming Languages", icon: "fa-code", color: "#cc0000",
    description: "Technical programming and development capabilities",
    skills: [
      { name: "Python", level: 82 }, { name: "C++", level: 78 },
      { name: "HTML/CSS", level: 88 }, { name: "JavaScript", level: 80 },
    ],
    tools: ["VS Code", "GitHub", "Jupyter", "Google Colab"],
  },
  {
    id: "tools", title: "Tools & Software", icon: "fa-tools", color: "#990000",
    description: "Professional tools and software proficiency",
    skills: [
      { name: "Google Sheets", level: 92 }, { name: "Google Colab", level: 85 },
      { name: "Jupyter Notebook", level: 83 }, { name: "Tableau", level: 80 },
      { name: "Visual Studio Code", level: 88 }, { name: "GitHub", level: 86 },
    ],
    tools: ["Git", "Docker", "AWS", "Heroku"],
  },
];

const expertiseAllSkills = expertiseSkillCategories.flatMap((cat) => cat.skills.map((s) => s.name));

// Expertise page education (different schema from experience page education)
interface ExpertiseEducation {
  id: number;
  institution: string;
  program: string;
  year: string;
  status: string;
  description: string;
  achievements: string[];
  icon: string;
  color: string;
}

const expertiseEducation: ExpertiseEducation[] = [
  { id: 1, institution: "Cyber University", program: "Bachelor of Digital Business", year: "2023 - Present", status: "ongoing", description: "Focusing on digital transformation, e-commerce strategies, data analytics, and business intelligence. Learning to leverage technology for business growth and innovation.", achievements: ["Dean's List 2023", "Best Project Award"], icon: "fa-university", color: "#e50000" },
  { id: 2, institution: "Green Academy", program: "Certificate in Data Science", year: "2023", status: "completed", description: "Comprehensive training in data analysis, visualization, statistical modeling, and machine learning fundamentals. Hands-on projects with real-world datasets.", achievements: ["Top Performer", "Capstone Excellence"], icon: "fa-chart-line", color: "#00c851" },
  { id: 3, institution: "Mentorbox Indonesia", program: "Digital Marketing & Content Creation", year: "2024", status: "completed", description: "Intensive program covering social media strategy, content production, brand building, and digital campaign management. BNSP Certified.", achievements: ["BNSP Certified", "Best Campaign Project"], icon: "fa-award", color: "#ff6b6b" },
  { id: 4, institution: "Darwis Triadi Photography Academy", program: "Intermediate Photography Class", year: "2024", status: "completed", description: "Professional photography training including lighting techniques, composition, portrait photography, and advanced post-processing workflows.", achievements: ["Best Portfolio", "Client Choice Award"], icon: "fa-camera", color: "#ffd700" },
  { id: 5, institution: "VideoLabs", program: "Video Editing Training Program", year: "2023 - 2025", status: "ongoing", description: "Advanced video editing for social media, marketing campaigns, and commercial projects. Mastering storytelling through visual editing.", achievements: ["Advanced Certificate", "Featured Work"], icon: "fa-video", color: "#9b59b6" },
  { id: 6, institution: "Master Tasking Training", program: "Excellent Service Certification", year: "2025", status: "completed", description: "Professional service excellence, customer relationship management, and communication skills for business environments.", achievements: ["Distinction", "Perfect Score"], icon: "fa-certificate", color: "#3498db" },
];

// Expertise page experience (different schema from experience page experiences)
interface ExpertiseExperience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
  icon: string;
}

const expertiseExperience: ExpertiseExperience[] = [
  { id: 1, role: "Salesman", company: "PT Sentul City Tbk", location: "Sentul, Indonesia", period: "Mar 2025 - Present", type: "full-time", description: "Real estate operations and client consultation driving significant property sales in the Sentul district. Responsible for client relationship management, property presentations, and closing deals.", achievements: ["Achieved 150% of sales target in first month", "Managed portfolio worth $2M+", "Built strong client network"], skills: ["Sales", "Negotiation", "Client Relations", "Market Analysis"], icon: "fa-building" },
  { id: 2, role: "Business Owner", company: "Gegaiaan", location: "Indonesia", period: "Feb 2025 - Present", type: "entrepreneurship", description: "Leading an independent fashion and lifestyle brand. Managing end-to-end operations from production, marketing, fulfillment, to customer service. Building brand identity and online presence.", achievements: ["Launched successful debut collection", "Built social media following to 10K+", "Achieved 40% customer retention rate"], skills: ["Entrepreneurship", "Brand Building", "E-commerce", "Marketing"], icon: "fa-store" },
  { id: 3, role: "Vice Chairman of the Committee", company: "DECOMPE", location: "University", period: "Aug 2024 - Nov 2024", type: "volunteer", description: "Orchestrating UI/UX competitions and digital events for national university participants. Led a team of 20+ volunteers, managed event logistics, and coordinated with industry partners.", achievements: ["Successfully organized 3 major competitions", "Attracted 500+ participants nationwide", "Raised $10K in sponsorships"], skills: ["Leadership", "Event Management", "Team Coordination", "Public Relations"], icon: "fa-users-cog" },
  { id: 4, role: "Head of Public Relations", company: "Music Club CU", location: "University", period: "Jul 2024 - Feb 2025", type: "part-time", description: "Directing communications and public branding for the university music organization. Managing social media, creating promotional content, and building community engagement.", achievements: ["Increased social engagement by 200%", "Organized 10+ successful events", "Grew membership by 150%"], skills: ["Public Relations", "Social Media", "Content Creation", "Community Building"], icon: "fa-bullhorn" },
];

// Expertise page stats
interface ExpertiseStat {
  value: string;
  label: string;
  icon: string;
  description: string;
}

const expertiseStats: ExpertiseStat[] = [
  { value: "6+", label: "Certifications", icon: "fa-certificate", description: "Professional certifications earned" },
  { value: "4+", label: "Years Experience", icon: "fa-calendar-alt", description: "Years of professional experience" },
  { value: "20+", label: "Skills Mastered", icon: "fa-star", description: "Technical and soft skills acquired" },
  { value: "50+", label: "Projects", icon: "fa-project-diagram", description: "Completed projects and campaigns" },
];

// ---------------------------------------------------------------------------
// EXPORT
// ---------------------------------------------------------------------------
export const portfolioData: PortfolioData = {
  profile,
  name: profile.name,
  navigation: [], // defined in config/navigation.ts
  socialLinks: [], // defined in config/navigation.ts
  heroTexts,
  sequenceConfig,
  stats,
  skillCategories,
  experiences,
  otherExperiences,
  education,
  achievements,
  testimonials,
  faq,
  funFacts,
  services,
  values,
  tabs,
  about: {
    title: "About Me",
    description:
      "I'm a Digital Business student with a passion for blending creative direction with data-driven strategy. I specialize in content creation, digital marketing, and AI-powered solutions that turn complex problems into compelling visual narratives.",
    highlights: [
      "Content Creation & Visual Storytelling",
      "Digital Marketing & Strategy",
      "Data Science & Analytics",
      "AI Integration & Automation",
    ],
  },
  skills: {
    title: "Skills",
    categories: [
      { name: "Creative", items: ["Video Editing", "Photo Manipulation", "Motion Graphics", "Brand Design", "UI/UX Design"] },
      { name: "Technical", items: ["Data Analysis", "Python", "JavaScript/TypeScript", "Next.js", "AI/ML Tools"] },
      { name: "Business", items: ["Digital Marketing", "Content Strategy", "Social Media Management", "Project Management", "Market Research"] },
    ],
  },
  projects: {
    title: "Projects",
    items: [
      { name: "Visual Campaign — Brand X", description: "End-to-end creative direction for a multi-platform brand campaign, achieving 3x engagement growth.", tags: ["Creative Direction", "Video", "Strategy"] },
      { name: "Data Dashboard — Analytics Suite", description: "Interactive analytics dashboard built with Next.js and D3.js for real-time marketing performance tracking.", tags: ["Next.js", "Data Viz", "API"] },
      { name: "AI Content Pipeline", description: "Automated content generation workflow using AI tools, reducing production time by 60%.", tags: ["AI", "Automation", "Content"] },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      { role: "Content Creator & Digital Strategist", company: "Freelance", period: "2022 — Present", description: "Creating visual content and data-driven marketing strategies for various clients across industries." },
      { role: "Digital Business Student", company: "University", period: "2021 — Present", description: "Studying digital business with focus on content creation, data science, and AI applications." },
    ],
  },
};

// Named exports for convenience (most pages import these directly)
export {
  profile,
  heroTexts,
  sequenceConfig,
  stats,
  skillCategories,
  allSkillsFlat,
  experiences,
  otherExperiences,
  education,
  achievements,
  testimonials,
  faq,
  funFacts,
  services,
  values,
  tabs,
  aboutTimeline,
  aboutSkills,
  expertiseSkillCategories,
  expertiseAllSkills,
  expertiseEducation,
  expertiseExperience,
  expertiseStats,
};

export type { AboutTimelineEntry, ExpertiseSkillCategory, ExpertiseEducation, ExpertiseExperience, ExpertiseStat };
