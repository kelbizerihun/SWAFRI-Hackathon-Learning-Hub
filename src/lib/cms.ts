/**
 * UniHub Centralized CMS Data Layer & Content Store
 * Serves structured, template-driven models for Courses, Academic Departments,
 * Student Sources, Events, Careers, and Interactive Classrooms.
 */

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'practice' | 'quiz';
  isPreview?: boolean;
  isCompleted?: boolean;
  isInProgress?: boolean;
  description: string;
}

export interface Module {
  id: string;
  moduleNumber: string;
  title: string;
  duration: string;
  lessonsCount: number;
  lessons: Lesson[];
}

export interface CourseInstructor {
  name: string;
  title: string;
  bio: string;
  avatarText: string;
  avatarBg: string;
  rating: number;
  coursesCount: number;
  studentsCount: string;
}

export interface CourseItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  categoryBadge: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  durationHours: number;
  rating: number;
  reviewsCount: number;
  studentsCount: string;
  imageUrl: string;
  instructor: CourseInstructor;
  tagline: string;
  description: string;
  learningOutcomes: string[];
  prerequisites: string[];
  syllabus: Module[];
  tags: string[];
}

export interface DepartmentItem {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  faculty: string;
  category: string;
  categoryBadge: string;
  rating: number;
  reviews: number;
  resourceCount: string;
  imageUrl: string;
  tagline: string;
  description: string;
  featuredTopics: string[];
}

export interface SourceResource {
  id: string;
  title: string;
  category:
    | 'Medicine'
    | 'Engineering'
    | 'Law'
    | 'Social Sciences'
    | 'Figma & Design'
    | 'Code & Starters'
    | 'Cheatsheets'
    | 'Exam Archives';
  description: string;
  fileFormat: string;
  fileSize: string;
  downloads: string;
  rating: number;
  author: string;
  authorBadge: string;
  tags: string[];
  isFeatured?: boolean;
}

export interface JobPosting {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  stipend: string;
  postedTime: string;
  tags: string[];
  description?: string;
}

export interface PlatformEventItem {
  id: string;
  day: string;
  month: string;
  type: 'WORKSHOP' | 'WEBINAR' | 'HACKATHON';
  typeBadge: string;
  title: string;
  speaker: string;
  time: string;
  pricing: string;
  description: string;
}

/* =========================================================================
   1. COURSES COLLECTION (CMS Model)
========================================================================== */
export const CMS_COURSES: CourseItem[] = [
  {
    id: 'c-ui-design',
    slug: 'ui-design',
    title: 'UI/UX Design Essentials',
    category: 'Design',
    categoryBadge: 'Bestseller',
    level: 'Beginner',
    duration: '6h 20m',
    durationHours: 6.3,
    rating: 4.9,
    reviewsCount: 328,
    studentsCount: '2,840',
    imageUrl: '/images/ui_design.jpg',
    instructor: {
      name: 'Dr. Solomon Abebe',
      title: 'Senior Product Designer at Notion & AAU Faculty Lead',
      bio: 'Over 12 years creating digital design systems for African startups and global SaaS products. Passionate about bilingual typography, 8pt spatial rhythm, and accessible design.',
      avatarText: 'SA',
      avatarBg: 'from-amber-500 to-rose-500',
      rating: 4.9,
      coursesCount: 4,
      studentsCount: '8,400+',
    },
    tagline: 'Learn visual hierarchy, typography, 8pt spatial grids, and modern Figma prototyping.',
    description:
      'Great interfaces don’t happen by chance. In this hands-on course, you’ll explore the principles behind thoughtful digital products—from typography and color to layouts, components and accessibility.\n\nFollow practical Figma demonstrations, try short exercises, and bring everything together in a portfolio-ready mobile app screen. Come curious. Leave with a process you can use on every project.',
    learningOutcomes: [
      'Master the 8pt spatial grid system and responsive auto-layout frames in Figma.',
      'Construct scalable design tokens, accessible color palettes, and Amharic/English bilingual typography hierarchies.',
      'Design modular components with variant properties, boolean toggles, and interactive states.',
      'Build realistic interactive mobile prototypes with smart-animate transitions.',
      'Prepare production-ready Figma files with developer handoff specs and design tokens.',
    ],
    prerequisites: [
      'A computer with a modern web browser and free Figma account',
      'No prior design or coding experience required',
    ],
    tags: ['Figma', 'UI Design', 'Design Systems', 'UX Architecture'],
    syllabus: [
      {
        id: 'mod-1',
        moduleNumber: '01',
        title: 'Seeing like a designer',
        duration: '42m',
        lessonsCount: 4,
        lessons: [
          {
            id: 'l1',
            title: 'Welcome to the course & curriculum roadmap',
            duration: '04:32',
            type: 'video',
            isPreview: true,
            isCompleted: true,
            description: 'Meet Dr. Solomon Abebe and explore how this curriculum is structured to build your portfolio.',
          },
          {
            id: 'l2',
            title: 'What makes an interface feel intuitive?',
            duration: '12:15',
            type: 'video',
            isPreview: false,
            isInProgress: true,
            description: 'Learn mental models, feedback loops, and affordances in everyday mobile apps.',
          },
          {
            id: 'l3',
            title: 'Your Figma workspace, tools & shortcuts',
            duration: '14:40',
            type: 'video',
            description: 'Set up your Figma canvas, essential shortcut keys, and frame presets.',
          },
          {
            id: 'l4',
            title: 'Spot the design principles in action',
            duration: '10:00',
            type: 'practice',
            description: 'Audit 3 real mobile apps and identify alignment, contrast, and visual rhythm.',
          },
        ],
      },
      {
        id: 'mod-2',
        moduleNumber: '02',
        title: 'Typography & visual hierarchy',
        duration: '1h 10m',
        lessonsCount: 5,
        lessons: [
          {
            id: 'l2-1',
            title: 'Type scales, weights & reading rhythm',
            duration: '14:20',
            type: 'video',
            description: 'How to build harmonious modular scales from caption text to display titles.',
          },
          {
            id: 'l2-2',
            title: 'Bilingual typography: Amharic Fidel & English pairing',
            duration: '18:10',
            type: 'video',
            description: 'Handling line-heights, descender safety, and font pairings for Ethiopian interfaces.',
          },
          {
            id: 'l2-3',
            title: 'Color theory & accessible WCAG contrast',
            duration: '15:30',
            type: 'video',
            description: 'Create harmonious 60-30-10 color schemes that pass AAA accessibility checks.',
          },
          {
            id: 'l2-4',
            title: 'Building semantic design tokens',
            duration: '12:40',
            type: 'video',
            description: 'Define reusable color and elevation variables for scalable dark & light modes.',
          },
          {
            id: 'l2-5',
            title: 'Typography & contrast audit quiz',
            duration: '09:00',
            type: 'quiz',
            description: 'Test your understanding of type hierarchies and accessibility ratios.',
          },
        ],
      },
      {
        id: 'mod-3',
        moduleNumber: '03',
        title: 'The 8pt spatial grid & auto-layout',
        duration: '58m',
        lessonsCount: 4,
        lessons: [
          {
            id: 'l3-1',
            title: 'Why top tech products use the 8pt grid',
            duration: '11:15',
            type: 'video',
            description: 'Mathematical spacing rhythms that eliminate guessing and align dev implementation.',
          },
          {
            id: 'l3-2',
            title: 'Mastering Figma Auto-Layout 5.0',
            duration: '18:50',
            type: 'video',
            description: 'Hug, fill, fixed constraints, negative spacing, and absolute positioning.',
          },
          {
            id: 'l3-3',
            title: 'Responsive cards & list items',
            duration: '16:20',
            type: 'practice',
            description: 'Build flexible card components that adapt fluidly between phone and desktop.',
          },
          {
            id: 'l3-4',
            title: 'Spatial layout challenge',
            duration: '11:00',
            type: 'practice',
            description: 'Fix broken alignment and spacing in a mock fintech dashboard screen.',
          },
        ],
      },
      {
        id: 'mod-4',
        moduleNumber: '04',
        title: 'Component design systems & variants',
        duration: '1h 25m',
        lessonsCount: 4,
        lessons: [
          {
            id: 'l4-1',
            title: 'Atomic components: Buttons, inputs & badges',
            duration: '22:10',
            type: 'video',
            description: 'Construct primary, secondary, and ghost button sets with icon slots.',
          },
          {
            id: 'l4-2',
            title: 'Component properties & boolean flags',
            duration: '19:40',
            type: 'video',
            description: 'Simplify complex component variants with modern Figma properties.',
          },
          {
            id: 'l4-3',
            title: 'Interactive hover & active states',
            duration: '25:00',
            type: 'video',
            description: 'Wire up realistic micro-interactions that trigger automatically during prototypes.',
          },
          {
            id: 'l4-4',
            title: 'Design system evaluation checkpoint',
            duration: '18:00',
            type: 'quiz',
            description: 'Verify your component library structure before starting capstone projects.',
          },
        ],
      },
      {
        id: 'mod-5',
        moduleNumber: '05',
        title: 'Capstone: Mobile app prototyping & handoff',
        duration: '1h 45m',
        lessonsCount: 3,
        lessons: [
          {
            id: 'l5-1',
            title: 'Wireframing an Ethiopian fintech student app',
            duration: '35:00',
            type: 'video',
            description: 'Step-by-step wireframe to high-fidelity user journey.',
          },
          {
            id: 'l5-2',
            title: 'Smart-animate transitions & presentation flow',
            duration: '40:00',
            type: 'video',
            description: 'Connect checkout modals, slide overlays, and confirmation states.',
          },
          {
            id: 'l5-3',
            title: 'Final capstone submission & portfolio write-up',
            duration: '30:00',
            type: 'practice',
            description: 'Submit your completed Figma link for mentor review and verified certificate issuance.',
          },
        ],
      },
    ],
  },
  {
    id: 'c-web-dev',
    slug: 'web-dev',
    title: 'Full-Stack Web Development',
    category: 'Development',
    categoryBadge: 'Trending',
    level: 'Intermediate',
    duration: '14 hours',
    durationHours: 14,
    rating: 4.9,
    reviewsCount: 512,
    studentsCount: '3,420',
    imageUrl: '/images/web_dev.jpg',
    instructor: {
      name: 'Sarah Williams',
      title: 'Principal Software Engineer & Cloud Architect',
      bio: 'Full-stack engineer specializing in Next.js 14, TypeScript, GraphQL, and serverless infrastructure with real-world enterprise deployments across Africa.',
      avatarText: 'SW',
      avatarBg: 'from-blue-600 to-indigo-600',
      rating: 4.9,
      coursesCount: 3,
      studentsCount: '11,200+',
    },
    tagline: 'Master modern frontend & backend development with TypeScript, React, Next.js, and APIs.',
    description:
      'Build responsive, production-ready web applications from scratch. You will master modern JavaScript/TypeScript, React Server Components, server actions, PostgreSQL schemas, and full authentication pipelines.',
    learningOutcomes: [
      'Write type-safe TypeScript code for clean frontend and backend architectures.',
      'Build full-stack applications with Next.js 14 App Router and Tailwind CSS.',
      'Design relational databases with PostgreSQL, Supabase, and Prisma ORM.',
      'Implement secure authentication flows with JWTs and session tokens.',
      'Deploy resilient production apps on Vercel and cloud platforms.',
    ],
    prerequisites: ['Basic familiarity with HTML, CSS, and elementary programming concepts'],
    tags: ['Next.js 14', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Full-Stack'],
    syllabus: [
      {
        id: 'wd-mod-1',
        moduleNumber: '01',
        title: 'Modern TypeScript & Frontend Foundations',
        duration: '2h 15m',
        lessonsCount: 4,
        lessons: [
          {
            id: 'wd-1',
            title: 'TypeScript essentials for React developers',
            duration: '28:00',
            type: 'video',
            isPreview: true,
            isCompleted: true,
            description: 'Interfaces, types, generics, and strict type checking in modern apps.',
          },
          {
            id: 'wd-2',
            title: 'React 18 fundamentals & custom hooks',
            duration: '35:00',
            type: 'video',
            isInProgress: true,
            description: 'State management, useEffect guidelines, and resilient hook abstraction.',
          },
          {
            id: 'wd-3',
            title: 'Tailwind CSS utility workflows & dark modes',
            duration: '32:00',
            type: 'video',
            description: 'Build sleek responsive interfaces without writing repetitive vanilla CSS.',
          },
          {
            id: 'wd-4',
            title: 'Code challenge: Type-safe dashboard widget',
            duration: '40:00',
            type: 'practice',
            description: 'Build and test a reusable TypeScript metrics widget.',
          },
        ],
      },
      {
        id: 'wd-mod-2',
        moduleNumber: '02',
        title: 'Next.js 14 App Router & Server Components',
        duration: '3h 30m',
        lessonsCount: 4,
        lessons: [
          {
            id: 'wd-5',
            title: 'Client vs Server Components architecture',
            duration: '45:00',
            type: 'video',
            description: 'When and why to split server data fetching from client interactivity.',
          },
          {
            id: 'wd-6',
            title: 'Server Actions & mutations without API boilerplate',
            duration: '50:00',
            type: 'video',
            description: 'Mutate database records directly with type-safe server actions.',
          },
          {
            id: 'wd-7',
            title: 'Dynamic routes, parallel routes & intercepting routes',
            duration: '40:00',
            type: 'video',
            description: 'Master advanced Next.js routing patterns for modal windows and dashboards.',
          },
          {
            id: 'wd-8',
            title: 'App Router capstone: University event portal',
            duration: '1h 15m',
            type: 'practice',
            description: 'Ship a full-stack campus event registration portal.',
          },
        ],
      },
    ],
  },
  {
    id: 'c-data-science',
    slug: 'data-science',
    title: 'Data Science with Python',
    category: 'Data Science',
    categoryBadge: 'High Demand',
    level: 'Intermediate',
    duration: '10 hours',
    durationHours: 10,
    rating: 4.8,
    reviewsCount: 184,
    studentsCount: '2,150',
    imageUrl: '/images/data_science.jpg',
    instructor: {
      name: 'Alex Chen',
      title: 'Lead Data Scientist & ML Researcher',
      bio: 'Senior analytics engineer working on predictive statistical models, geospatial insights, and automated data pipelines for emerging market financial services.',
      avatarText: 'AC',
      avatarBg: 'from-emerald-500 to-teal-600',
      rating: 4.8,
      coursesCount: 2,
      studentsCount: '6,200+',
    },
    tagline: 'Analyze data, build predictive machine learning models, and manipulate datasets with pandas.',
    description:
      'Turn raw numbers into actionable insight. This course teaches you data wrangling with Pandas and NumPy, data visualization with Matplotlib and Seaborn, and introductory machine learning algorithms with Scikit-Learn.',
    learningOutcomes: [
      'Clean, reshape, and filter complex real-world datasets with Pandas DataFrames.',
      'Perform exploratory data analysis (EDA) and discover statistical correlations.',
      'Build predictive regression and classification models using Scikit-Learn.',
      'Generate publication-ready visualizations and data dashboards.',
      'Complete a real-world Ethiopian agricultural & economic data capstone.',
    ],
    prerequisites: ['Basic Python syntax (loops, conditionals, functions)'],
    tags: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Data Science'],
    syllabus: [
      {
        id: 'ds-mod-1',
        moduleNumber: '01',
        title: 'NumPy arrays & Vectorized Operations',
        duration: '2h 00m',
        lessonsCount: 3,
        lessons: [
          {
            id: 'ds-1',
            title: 'Vectorized computing vs Python loops',
            duration: '30:00',
            type: 'video',
            isPreview: true,
            isCompleted: true,
            description: 'Understand memory layouts and fast broadcast computations in NumPy.',
          },
          {
            id: 'ds-2',
            title: 'Array indexing, slicing & boolean masks',
            duration: '45:00',
            type: 'video',
            description: 'Filter multi-dimensional matrices with precision.',
          },
          {
            id: 'ds-3',
            title: 'Practice: Matrix computations',
            duration: '45:00',
            type: 'practice',
            description: 'Solve real linear algebra and statistical problems in Jupyter Notebooks.',
          },
        ],
      },
      {
        id: 'ds-mod-2',
        moduleNumber: '02',
        title: 'Pandas DataFrames & Data Cleaning',
        duration: '3h 15m',
        lessonsCount: 3,
        lessons: [
          {
            id: 'ds-4',
            title: 'Loading CSVs, handling missing values & data types',
            duration: '50:00',
            type: 'video',
            isInProgress: true,
            description: 'Clean irregular datasets, format timestamps, and interpolate missing rows.',
          },
          {
            id: 'ds-5',
            title: 'Groupby aggregations, pivot tables & joins',
            duration: '55:00',
            type: 'video',
            description: 'Aggregate regional university metrics and cross-reference demographic records.',
          },
          {
            id: 'ds-6',
            title: 'Capstone: Ethiopian crop yield forecasting dataset',
            duration: '1h 30m',
            type: 'practice',
            description: 'Clean and visualize a 5-year agricultural dataset.',
          },
        ],
      },
    ],
  },
  {
    id: 'c-ai-productivity',
    slug: 'ai-productivity',
    title: 'AI for Everyday Productivity',
    category: 'Artificial Intelligence',
    categoryBadge: 'New',
    level: 'Beginner',
    duration: '4 hours',
    durationHours: 4,
    rating: 4.9,
    reviewsCount: 320,
    studentsCount: '1,980',
    imageUrl: '/images/ai_robot.jpg',
    instructor: {
      name: 'Dr. Maya Patel',
      title: 'AI Research Director & Author',
      bio: 'Leading researcher in generative AI, prompt optimization, and AI-augmented human workflows. Advises academic institutions on responsible AI education.',
      avatarText: 'MP',
      avatarBg: 'from-purple-500 to-pink-500',
      rating: 4.9,
      coursesCount: 3,
      studentsCount: '7,500+',
    },
    tagline: 'Supercharge your daily study and coding workflows with modern AI sidekicks and LLM tools.',
    description:
      'Learn how to leverage AI tools ethically and effectively to multiply your study speed, synthesize literature, debug code, and draft high-quality academic papers.',
    learningOutcomes: [
      'Master prompt engineering (Few-Shot, Chain-of-Thought, Persona prompting).',
      'Integrate AI coding assistants into VS Code to write, test, and refactor code.',
      'Summarize academic research papers and extract data matrices in seconds.',
      'Automate repetitive student workflows and schedule management.',
    ],
    prerequisites: ['No technical background needed; open to all university students'],
    tags: ['AI Prompting', 'LLMs', 'Productivity', 'Study Tools'],
    syllabus: [
      {
        id: 'ai-mod-1',
        moduleNumber: '01',
        title: 'Prompt Engineering Foundations',
        duration: '1h 45m',
        lessonsCount: 3,
        lessons: [
          {
            id: 'ai-1',
            title: 'The mechanics of LLMs and token generation',
            duration: '25:00',
            type: 'video',
            isPreview: true,
            isCompleted: true,
            description: 'How modern transformer models process prompts and predict answers.',
          },
          {
            id: 'ai-2',
            title: 'Structuring high-precision academic prompts',
            duration: '40:00',
            type: 'video',
            description: 'Avoid hallucinations and guide AI toward verified, cited answers.',
          },
          {
            id: 'ai-3',
            title: 'Practice: Constructing custom study companion system prompts',
            duration: '40:00',
            type: 'practice',
            description: 'Create an AI assistant configured to quiz you on your university syllabus.',
          },
        ],
      },
    ],
  },
];

/* =========================================================================
   2. ACADEMIC DEPARTMENTS COLLECTION (CMS Model)
========================================================================== */
export const CMS_DEPARTMENTS: DepartmentItem[] = [
  {
    id: 'dept-medicine',
    slug: 'medicine',
    name: 'Medicine Department',
    shortName: 'Medicine',
    faculty: 'AAU College of Health Sciences · Tikur Anbessa Specialized Hospital',
    category: 'Medicine',
    categoryBadge: 'Clinical Slides',
    rating: 4.9,
    reviews: 480,
    resourceCount: '120+ Slides & Guides',
    imageUrl: '/images/medicine_sources.jpg',
    tagline:
      'Human anatomy atlas slides, pharmacology reference charts, internal medicine lecture notes, and pathology exam archives.',
    description:
      'The comprehensive digital archive for Ethiopian medical students. Access clinical slide decks from Tikur Anbessa Hospital, pediatric diagnostic flowcharts, surgical rotation manuals, and board review questions.',
    featuredTopics: ['Human Anatomy', 'Pathology', 'Pharmacology', 'Internal Medicine', 'Surgery'],
  },
  {
    id: 'dept-engineering',
    slug: 'engineering',
    name: 'Engineering Department',
    shortName: 'Engineering',
    faculty: 'Addis Ababa Institute of Technology (AAiT)',
    category: 'Engineering',
    categoryBadge: 'CAD & Schematics',
    rating: 4.9,
    reviews: 610,
    resourceCount: '95+ Slide Decks & CAD',
    imageUrl: '/images/engineering_sources.jpg',
    tagline:
      'Electrical circuit schematics, structural mechanics problem sets, CAD blueprint templates, and software architecture slides.',
    description:
      'Curated technical slide sets and design files from AAiT and partner engineering faculties. Includes circuit design diagrams, civil structural analysis problem sets, and mechanical CAD models.',
    featuredTopics: [
      'Circuit Analysis',
      'Structural Mechanics',
      'CAD Modeling',
      'Signal Processing',
      'Embedded Systems',
    ],
  },
  {
    id: 'dept-law',
    slug: 'law',
    name: 'Law Department',
    shortName: 'Law',
    faculty: 'AAU School of Law & Jurisprudence',
    category: 'Law',
    categoryBadge: 'Codes & Precedents',
    rating: 4.8,
    reviews: 340,
    resourceCount: '85+ Case Briefs & Decks',
    imageUrl: '/images/law_sources.jpg',
    tagline:
      'Ethiopian Civil Code summaries, constitutional law slide decks, supreme court case precedents, and moot court trial briefs.',
    description:
      'Authoritative legal study resources covering the Ethiopian Civil Code, Commercial Code revisions, Cassation Court landmark rulings, human rights treaties, and moot court competition briefs.',
    featuredTopics: [
      'Ethiopian Civil Code',
      'Constitutional Law',
      'Cassation Precedents',
      'Contract Law',
      'Moot Court Trial Briefs',
    ],
  },
  {
    id: 'dept-social',
    slug: 'social-sciences',
    name: 'Social Department',
    shortName: 'Social Science',
    faculty: 'AAU College of Social Sciences & Humanities',
    category: 'Social Science',
    categoryBadge: 'Field Archives',
    rating: 4.8,
    reviews: 290,
    resourceCount: '75+ Research Sets',
    imageUrl: '/images/social_sources.jpg',
    tagline:
      'Sociology research methodology decks, Ethiopian economic history archives, development policy papers, and anthropology field notes.',
    description:
      'Comprehensive research and lecture decks covering sociological field research in the Horn of Africa, macroeconomic growth models, rural development policy analyses, and historical archives.',
    featuredTopics: [
      'Sociological Field Methods',
      'Ethiopian Macroeconomics',
      'Anthropology',
      'Development Policy',
      'East African History',
    ],
  },
];

/* =========================================================================
   3. STUDENT SOURCES & STUDY KITS (CMS Model)
========================================================================== */
export const CMS_SOURCES: SourceResource[] = [
  {
    id: 'src-med-1',
    title: 'AAU Medical Faculty Human Anatomy Lecture Slides & Histology Atlas',
    category: 'Medicine',
    description:
      'Complete curriculum slide deck covering cardiovascular, neuroanatomy, musculoskeletal systems, and histology slide micrographs from Tikur Anbessa Specialized Hospital.',
    fileFormat: 'PPTX / PDF',
    fileSize: '42.5 MB',
    downloads: '3,480',
    rating: 4.9,
    author: 'AAU College of Health Sciences',
    authorBadge: 'Faculty Archive',
    tags: ['Medicine', 'Anatomy', 'Histology', 'Clinical Slides'],
    isFeatured: true,
  },
  {
    id: 'src-eng-1',
    title: 'AAiT Electrical Circuit Schematics & Microcontroller Lab Slides',
    category: 'Engineering',
    description:
      'Comprehensive slide decks and CAD schematics for AC/DC network analysis, digital logic design, operational amplifiers, and embedded STM32 lab guides.',
    fileFormat: 'PDF / CAD',
    fileSize: '24.2 MB',
    downloads: '4,120',
    rating: 4.9,
    author: 'Addis Ababa Institute of Technology (AAiT)',
    authorBadge: 'Engineering Faculty',
    tags: ['Engineering', 'Circuits', 'CAD', 'Lab Slides'],
    isFeatured: true,
  },
  {
    id: 'src-law-1',
    title: 'Ethiopian Civil Code & Constitutional Case Law Briefs 2026',
    category: 'Law',
    description:
      'High-yield judicial summaries, contract law lecture slide decks, tort precedents, and Federal Supreme Court Cassation Division landmark decisions.',
    fileFormat: 'PDF / DOCX',
    fileSize: '9.8 MB',
    downloads: '2,310',
    rating: 4.8,
    author: 'AAU School of Law & Jurisprudence',
    authorBadge: 'Law Review',
    tags: ['Law', 'Civil Code', 'Court Precedents', 'Case Briefs'],
    isFeatured: true,
  },
  {
    id: 'src-soc-1',
    title: 'Sociology Research Methodology & Ethiopian Economic History Slides',
    category: 'Social Sciences',
    description:
      'Lecture slide sets covering quantitative survey design, qualitative ethnography in East Africa, and development policy analyses from AAU faculty.',
    fileFormat: 'PPTX / PDF',
    fileSize: '11.5 MB',
    downloads: '1,940',
    rating: 4.8,
    author: 'AAU College of Social Sciences',
    authorBadge: 'Faculty Research',
    tags: ['Social Sciences', 'Sociology', 'Economics', 'Research Slides'],
    isFeatured: true,
  },
  {
    id: 'src-fig-1',
    title: 'Ethiopian Design System & UI Kit v2.0',
    category: 'Figma & Design',
    description:
      'Complete Figma component library featuring 8pt grid tokens, Amharic typography styles, Ethiopian flag palettes, and 120+ accessible mobile & desktop components.',
    fileFormat: '.FIG',
    fileSize: '14.8 MB',
    downloads: '2,480',
    rating: 4.9,
    author: 'Dr. Solomon Abebe',
    authorBadge: 'Notion Design Lead',
    tags: ['Figma', 'UI Kit', 'Design Tokens', 'Mobile & Web'],
    isFeatured: true,
  },
  {
    id: 'src-next-1',
    title: 'Next.js 14 + Tailwind SaaS Production Boilerplate',
    category: 'Code & Starters',
    description:
      'Full-stack TypeScript starter kit with App Router, authentication flows, PostgreSQL schema, Lucide icons, and pre-configured responsive layouts.',
    fileFormat: 'GITHUB / ZIP',
    fileSize: '4.2 MB',
    downloads: '3,150',
    rating: 4.9,
    author: 'Sarah Williams',
    authorBadge: 'Principal Engineer',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Auth'],
    isFeatured: true,
  },
  {
    id: 'src-pandas-1',
    title: 'Pandas & NumPy Data Science Master Cheatsheet',
    category: 'Cheatsheets',
    description:
      'Concise, high-yield reference guide for data manipulation, DataFrame slicing, groupby operations, lambda cleaning, and visualization idioms in Python.',
    fileFormat: 'PDF',
    fileSize: '1.8 MB',
    downloads: '4,210',
    rating: 4.8,
    author: 'Alex Chen',
    authorBadge: 'Lead Data Scientist',
    tags: ['Python', 'Pandas', 'NumPy', 'Data Analysis'],
  },
  {
    id: 'src-exam-1',
    title: 'Addis Ababa University CS Final Exam Archive (2020-2025)',
    category: 'Exam Archives',
    description:
      'Curated repository of past midterms, finals, and lab practicals for Algorithms, Operating Systems, Computer Architecture, and Database Systems.',
    fileFormat: 'ZIP / PDF',
    fileSize: '38.5 MB',
    downloads: '5,840',
    rating: 4.9,
    author: 'AAU Tech Student Council',
    authorBadge: 'Verified Archive',
    tags: ['AAU', 'Exams', 'Algorithms', 'Databases'],
  },
];

/* =========================================================================
   4. CAREER OPPORTUNITIES & INTERNSHIPS (CMS Model)
========================================================================== */
export const CMS_JOBS: JobPosting[] = [
  {
    id: 'job-1',
    title: 'Product Design Intern',
    company: 'FinTech Solutions Addis Ababa',
    location: 'Addis Ababa (Bole) · On-site',
    type: 'Paid Internship',
    stipend: '35,000 ETB / mo',
    postedTime: 'Posted today',
    tags: ['Figma', 'UI Design', 'Mobile'],
    description:
      'Join our product team to design mobile payment flows and student banking interfaces. Mentorship provided by senior design leads.',
  },
  {
    id: 'job-2',
    title: 'Junior Frontend Developer (React/Next.js)',
    company: 'Tech Ethiopia Labs',
    location: 'Addis Ababa · Hybrid',
    type: 'Full-time Entry Level',
    stipend: '45,000 ETB / mo',
    postedTime: 'Posted yesterday',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    description:
      'Build responsive client interfaces for enterprise logistics software across East Africa. Excellent mentorship environment for recent graduates.',
  },
  {
    id: 'job-3',
    title: 'Data Science & Analytics Associate',
    company: 'Nile Insights & Growth Advisory',
    location: 'Addis Ababa (Kazanchis) · Hybrid',
    type: 'Full-time',
    stipend: '42,000 ETB / mo',
    postedTime: 'Posted 2 days ago',
    tags: ['Python', 'Pandas', 'SQL', 'Tableau'],
    description:
      'Analyze consumer trends and compile data models for institutional investors and local enterprises.',
  },
];

/* =========================================================================
   5. WORKSHOPS & HACKATHONS (CMS Model)
========================================================================== */
export const CMS_EVENTS: PlatformEventItem[] = [
  {
    id: 'ev-1',
    day: '12',
    month: 'OCT',
    type: 'WORKSHOP',
    typeBadge: 'WORKSHOP',
    title: 'Design Your First Portfolio-Ready Mobile Screen',
    speaker: 'With Dr. Solomon Abebe, Product Designer',
    time: 'OCT 12 · 10:00 AM - 12:00 PM EAT',
    pricing: 'Free for Ethiopian University Students',
    description:
      'Hands-on Figma masterclass with Dr. Solomon Abebe. Audit interfaces and build production components.',
  },
  {
    id: 'ev-2',
    day: '18',
    month: 'OCT',
    type: 'WEBINAR',
    typeBadge: 'WEBINAR',
    title: 'Your Next Chapter: A Career in Tech in 2026',
    speaker: 'With Sarah Williams & Tech Ethiopia Leads',
    time: 'OCT 18 · 02:00 PM - 03:30 PM EAT',
    pricing: 'Free for All Students',
    description:
      'Panel discussion with engineering leads from FinTech Solutions and Sheba Tech Hub on landing junior roles.',
  },
  {
    id: 'ev-3',
    day: '24',
    month: 'OCT',
    type: 'HACKATHON',
    typeBadge: 'HACKATHON',
    title: 'Build with AI: National Student Weekend Challenge',
    speaker: 'Hosted by UniHub & Addis Ababa University',
    time: 'OCT 24 · 48H SPRINT',
    pricing: '50,000 ETB Prize Pool',
    description:
      'Team up with peers across Ethiopian universities. 50,000 ETB prize pool + internship interviews for winners.',
  },
];

/* =========================================================================
   6. REGISTERED STUDENT PROGRESS (Misgana Berhane)
========================================================================== */
export const CMS_STUDENT_REGISTERED_COURSES = [
  {
    id: 'reg-1',
    courseSlug: 'data-science',
    title: 'Python for Data Science',
    category: 'Data Science',
    instructor: 'Alex Chen',
    instructorTitle: 'Lead Data Scientist',
    progress: 75,
    completedLessons: 18,
    totalLessons: 24,
    currentModule: 'Module 5 of 6: Exploring data with pandas',
    upNext: 'Lesson 19 · DataFrames, filtering & groupby aggregation',
    nextDuration: '24 min',
    imageUrl: '/images/data_science.jpg',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    badgeColor: 'bg-emerald-600',
    actionHref: '/learn/data-science',
    actionText: 'Continue Learning',
    lastAccessed: 'Today at 11:20 AM',
  },
  {
    id: 'reg-2',
    courseSlug: 'ui-design',
    title: 'UI/UX Design Essentials',
    category: 'Design',
    instructor: 'Dr. Solomon Abebe',
    instructorTitle: 'Senior Product Designer at Notion',
    progress: 40,
    completedLessons: 8,
    totalLessons: 28,
    currentModule: 'Module 2 of 5: Typography & visual hierarchy',
    upNext: 'Lesson 8 · 8pt Grid spacing & responsive auto-layout',
    nextDuration: '42 min',
    imageUrl: '/images/ui_design.jpg',
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    badgeColor: 'bg-blue-600',
    actionHref: '/courses/ui-design',
    actionText: 'Resume Course',
    lastAccessed: 'Yesterday at 4:15 PM',
  },
  {
    id: 'reg-3',
    courseSlug: 'web-dev',
    title: 'Full-Stack Web Development',
    category: 'Development',
    instructor: 'Sarah Williams',
    instructorTitle: 'Principal Software Engineer',
    progress: 15,
    completedLessons: 3,
    totalLessons: 20,
    currentModule: 'Module 1 of 8: Modern Frontend with Next.js',
    upNext: 'Lesson 4 · TypeScript generics, React hooks & server state',
    nextDuration: '35 min',
    imageUrl: '/images/web_dev.jpg',
    color: 'bg-purple-50 text-purple-700 border-purple-200',
    badgeColor: 'bg-purple-600',
    actionHref: '/learn/web-dev',
    actionText: 'Resume Course',
    lastAccessed: '3 days ago',
  },
];

/* =========================================================================
   7. CMS QUERY FUNCTIONS (Data Access Layer)
========================================================================== */

export function getCmsCourses(): CourseItem[] {
  return CMS_COURSES;
}

export function getCmsCourseBySlug(slug: string): CourseItem | undefined {
  return (
    CMS_COURSES.find((c) => c.slug === slug) ||
    CMS_COURSES.find((c) => c.slug === 'ui-design') // default fallback
  );
}

export function getCmsDepartments(): DepartmentItem[] {
  return CMS_DEPARTMENTS;
}

export function getCmsDepartmentBySlug(slug: string): DepartmentItem | undefined {
  return CMS_DEPARTMENTS.find((d) => d.slug === slug);
}

export function getCmsSources(category?: string, query?: string): SourceResource[] {
  let list = CMS_SOURCES;
  if (category && category !== 'All') {
    list = list.filter((s) => s.category.toLowerCase() === category.toLowerCase());
  }
  if (query && query.trim()) {
    const q = query.toLowerCase();
    list = list.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.author.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q))
    );
  }
  return list;
}

export function getCmsJobs(): JobPosting[] {
  return CMS_JOBS;
}

export function getCmsEvents(): PlatformEventItem[] {
  return CMS_EVENTS;
}

export function getCmsStudentCourses() {
  return CMS_STUDENT_REGISTERED_COURSES;
}

export const registrationOptions = {
  roles: ['Student', 'Instructor'],
  academicStatuses: [
    'Freshman',
    'Sophomore',
    'Junior',
    'Senior',
    'Graduate',
    "Master's",
    'PhD',
    'Alumni',
  ],
  universities: [
    { name: 'University of Addis Abeba', city: 'Addis Ababa, Ethiopia' },
    { name: 'Kotebe Metropolitan University', city: 'Addis Ababa, Ethiopia' },
    { name: 'Addis Ababa Science & Technology University (AASTU)', city: 'Addis Ababa, Ethiopia' },
    { name: 'Adama Science & Technology University (ASTU)', city: 'Adama, Ethiopia' },
    { name: 'Unity University', city: 'Addis Ababa, Ethiopia' },
  ],
  fieldsOfStudy: [
    'Computer Science',
    'Computer Engineering',
    'Software Engineering',
    'Comparative Literature',
    'Information Systems',
    'Electrical & Computer Engineering',
  ],
  regions: [
    'Addis Ababa',
    'Oromia',
    'Amhara',
    'Dire Dawa',
    'Sidama',
    'Tigray',
    'Harari',
    'SNNP',
  ],
};
