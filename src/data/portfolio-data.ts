import { Project, SkillCategory, ExperienceItem, EducationItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Gautam Vaja',
  firstName: 'Gautam',
  brandName: 'GAUTAM',
  titles: [
    'Flutter Developer',
    'Mobile Application Engineer',
    'Software Developer',
  ],
  headline: 'Building Responsive, High-Performance Mobile Experiences from Concept to Deployment.',
  summary:
    'Flutter Developer and BCA graduate with hands-on experience building responsive, cross-platform mobile applications from concept to deployment. Hands-on internship experience at Derived Web Technologies Pvt. Ltd. building production features with RESTful APIs, Firebase, and SQLite, alongside four independent projects spanning AI integration, real-time data, and full-stack app architecture. Foundational knowledge of iOS development, including running and testing Flutter apps on the iOS Simulator using Xcode and adapting UI with Cupertino widgets. Strong foundation in OOP, data structures, and clean, maintainable code, with a track record of shipping polished, production-ready mobile products end to end.',
  location: 'Ahmedabad, Gujarat',
  phone: '+91 8320000411',
  status: 'Open to full-time roles & high-impact projects',
  email: 'gautamvaja403@gmail.com',
  github: 'https://github.com/Gautam-Vaja',
  githubUser: 'Gautam-Vaja',
  portfolioRepo: 'https://github.com/Gautam-Vaja/PortfolioApp',
  linkedin: 'https://linkedin.com/in/gautam-vaja',
  linkedinUser: 'gautam-vaja',
  experienceLevel: 'Internship Experience | Derived Web Technologies',
  educationSummary: 'MCA (GTU) | BCA (8.33 CGPA, BKNMU)',
  philosophy: 'Clean architecture, modular UI components, robust offline-first persistence, and seamless API performance.',
};

export const PROJECTS: Project[] = [
  {
    id: 'pilonmagic',
    title: 'PilonMagic (GPS Tracking App)',
    subtitle: 'GPS & Asset Management System',
    category: 'mobile',
    badge: 'Live Production Project',
    accentColor: '#FF7A1A',
    description:
      'Live GPS asset tracking mobile application featuring QR/VIN lookup, GetX state management, REST API integration, ownership PDF exports, and English/French localization.',
    longDescription:
      'Engineered during internship at Derived Web Technologies. Built asset search, QR/VIN lookup, and profile management by integrating REST APIs with Flutter, Dart, and GetX state management. Implemented ownership report PDF exports and English/French localization for production deployment, resolving complex Android bugs through GitLab version control.',
    technologies: ['Flutter', 'Dart', 'GetX', 'REST APIs', 'PDF Export', 'i18n Localization', 'GitLab'],
    features: [
      'Real-time GPS coordinate tracking and dynamic asset mapping',
      'High-speed QR code and VIN lookup for immediate asset inspection',
      'Clean state management using GetX architecture',
      'Automated ownership report generation and PDF export',
      'Full bilingual localization (English / French)',
      'GitLab collaborative version control and sprint deliverables',
    ],
    githubUrl: 'https://github.com/Gautam-Vaja/PilonMagic',
    demoUrl: '#demo-pilonmagic',
    visualType: 'pilonmagic',
  },
  {
    id: 'ai-assistant',
    title: 'Chat App (AI Assistant)',
    subtitle: 'Gemini-Powered Conversational App',
    category: 'ai-backend',
    badge: 'Flutter + Gemini AI',
    accentColor: '#9B8CFF',
    description:
      'Intelligent cross-platform AI chat assistant integrated with Google Gemini API for real-time generative responses with SQLite offline persistence and GoRouter.',
    longDescription:
      'Engineered an intelligent cross-platform AI chat assistant integrated with Google Gemini API for real-time generative responses. Built an offline-first persistence engine with SQLite, dynamic dark/light theme switching, and smooth navigation via GoRouter. Optimized for low-latency streaming and formatted Markdown dialogue output.',
    technologies: ['Flutter', 'Dart', 'Google Gemini API', 'SQLite', 'GoRouter', 'State Management'],
    features: [
      'Real-time generative conversational streaming via Google Gemini API',
      'Offline-first message history caching with local SQLite database',
      'Declarative routing and deep navigation powered by GoRouter',
      'Dynamic dark and light theme switching with responsive chat bubbles',
      'Clean asynchronous streaming architecture with instant local recall',
    ],
    githubUrl: 'https://github.com/Gautam-Vaja/Chat_App',
    demoUrl: '#demo-ai-assistant',
    visualType: 'ai-assistant',
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    subtitle: 'Real-Time Meteorological Monitor',
    category: 'mobile',
    badge: 'Flutter + OpenWeather',
    accentColor: '#38BDF8',
    description:
      'Real-time weather monitoring app with GPS positioning, interactive map coordinates, detailed atmospheric metrics, and 7-day extended forecasts.',
    longDescription:
      'Developed a real-time weather monitoring application utilizing GPS positioning and interactive map coordinates. Parsed detailed REST API payloads to display temperature, air quality, humidity, wind velocity, UV index, and 7-day extended forecasts with dynamic visual condition states.',
    technologies: ['Flutter', 'Dart', 'OpenWeather API', 'Geolocation', 'REST API', 'JSON Serialization'],
    features: [
      'Accurate real-time meteorological metrics via OpenWeather API',
      'Automatic geolocation detection through device GPS coordinates',
      '7-day extended forecast curves and hourly weather projections',
      'Comprehensive atmospheric metrics: UV index, air quality, humidity, and wind speed',
      'Responsive, adaptive weather card layouts with theme synchronization',
    ],
    githubUrl: 'https://github.com/Gautam-Vaja/Weather_App',
    demoUrl: '#demo-weather',
    visualType: 'weather',
  },
  {
    id: 'mini-social',
    title: 'Mini Social Media Application',
    subtitle: 'Full-Featured Community Platform',
    category: 'mobile',
    badge: 'Flutter + Firebase',
    accentColor: '#F472B6',
    description:
      'Full-featured mobile social platform with Firebase Authentication, real-time Firestore feed syncing, Cloud Storage media uploads, likes, and comments.',
    longDescription:
      'Constructed a full-featured social platform featuring authentication, real-time feed synchronization, user profile management, image uploads, dynamic follower systems, likes, and comment threads built with Flutter and Firebase Cloud architecture.',
    technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Cloud Storage', 'Image Uploads'],
    features: [
      'Secure user registration, login, and profile editing via Firebase Auth',
      'Real-time community feed subscriptions with Cloud Firestore',
      'High-resolution image uploads hosted on Firebase Cloud Storage',
      'Interactive follower ecosystem, live post likes, and nested comment threads',
      'Cross-platform responsive design with native iOS and Android performance',
    ],
    githubUrl: 'https://github.com/Gautam-Vaja/Mini_Social_Media_Application',
    demoUrl: '#demo-social',
    visualType: 'mini-social',
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker App',
    subtitle: 'Personal Finance & Budget Analytics',
    category: 'mobile',
    badge: 'Flutter Finance App',
    accentColor: '#C6FF5E',
    description:
      'Personal finance tracker allowing users to log, categorize, and filter transactions with integrated analytics charts and budget visualizers.',
    longDescription:
      'Created a personal finance tracker allowing users to log, categorize, and filter transactions. Integrated financial analytics widgets and interactive charts to help users visualize spending habits and budget allocations with local data persistence.',
    technologies: ['Flutter', 'Dart', 'Local Storage', 'UI Charts', 'Data Filtering', 'State Management'],
    features: [
      'Fast expense and income entry with visual category tags',
      'Interactive visual charts breaking down monthly budget distributions',
      'Multi-parameter filtering (by date, category, and expenditure volume)',
      'Local offline storage ensuring zero data loss and instant boot times',
      'Comprehensive financial summary calculating balances and savings goals',
    ],
    githubUrl: 'https://github.com/Gautam-Vaja/Expenses_Tracker_App',
    demoUrl: '#demo-expense',
    visualType: 'expense',
  },
  {
    id: 'smart-attendance',
    title: 'Smart Attendance System',
    subtitle: 'Offline-First Attendance Verification',
    category: 'mobile',
    badge: 'Flutter + SQLite',
    accentColor: '#FBBF24',
    description:
      'Offline-first mobile attendance management system with local SQLite database, instant status verification, and exportable attendance reports.',
    longDescription:
      'An offline-capable mobile attendance verification application built with Flutter and SQLite. Designed for environments with low or unreliable internet connectivity, enabling swift attendance marking, student/employee roster organization, and historical attendance summary generation.',
    technologies: ['Flutter', 'Dart', 'SQLite', 'sqflite', 'Offline-First', 'Data Persistence'],
    features: [
      'Reliable offline-first persistence using local SQLite (sqflite)',
      'Rapid attendance status marking (Present, Absent, Late) with visual counters',
      'Comprehensive attendance summary reports and historical audit logs',
      'Student and employee roster organization with search and filtering',
      'Zero-latency performance designed for continuous field operation',
    ],
    githubUrl: 'https://github.com/Gautam-Vaja/Smart_Attendance_System',
    demoUrl: '#demo-attendance',
    visualType: 'attendance',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'mobile',
    title: 'Mobile Development',
    skills: [
      { name: 'Flutter', level: 'Core', highlight: true, description: 'Cross-platform mobile apps with responsive layouts & custom widgets' },
      { name: 'Dart', level: 'Core', highlight: true, description: 'Strong typing, async streams, and clean OOP architecture' },
      { name: 'GetX', level: 'Core', highlight: true, description: 'Reactive state management, dependency injection, and route handling' },
      { name: 'Material Design', level: 'Core', description: 'Production-ready component design and mobile theme systems' },
      { name: 'Responsive Layouts', level: 'Core', description: 'Pixel-perfect mobile adaptation across phone and tablet aspect ratios' },
    ],
  },
  {
    id: 'ios',
    title: 'iOS Development',
    skills: [
      { name: 'Swift', level: 'Fundamentals', highlight: true, description: 'Core syntax, optionals, closures, and iOS runtime basics' },
      { name: 'Xcode', level: 'Proficient', highlight: true, description: 'iOS Simulator builds, provisioning profiles, and debugging' },
      { name: 'iOS Simulator', level: 'Core', description: 'Running, profiling, and testing Flutter applications on iOS devices' },
      { name: 'SwiftUI', level: 'Familiar', description: 'Modern declarative user interface programming for Apple platforms' },
      { name: 'UIKit', level: 'Familiar', description: 'Imperative iOS UI foundation and Cupertino widget bridge adapters' },
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: [
      { name: 'Dart', level: 'Core', highlight: true, description: 'Primary language for Flutter applications and reactive streams' },
      { name: 'Java', level: 'Core', highlight: true, description: 'Object-oriented programming, data structures, and Android foundation' },
      { name: 'Python', level: 'Proficient', description: 'Scripting, backend logic, data processing, and AI integrations' },
      { name: 'C / C++', level: 'Proficient', description: 'Low-level memory principles, pointer semantics, and algorithmic logic' },
      { name: 'JavaScript', level: 'Proficient', description: 'Web logic, asynchronous operations, and JSON payload handling' },
      { name: 'Swift', level: 'Fundamentals', description: 'Apple platform development and native bridging' },
    ],
  },
  {
    id: 'apis',
    title: 'APIs & Networking',
    skills: [
      { name: 'REST APIs', level: 'Core', highlight: true, description: 'Client integration, endpoints, HTTP methods, and token authentication' },
      { name: 'Dio', level: 'Core', highlight: true, description: 'Advanced HTTP networking, interceptors, request retry, and error logging' },
      { name: 'HTTP Client', level: 'Core', description: 'Native Dart asynchronous network transport and stream routing' },
      { name: 'JSON Serialization', level: 'Core', description: 'Type-safe model mapping, code generation, and payload parsing' },
      { name: 'Postman', level: 'Core', description: 'API contract testing, endpoint debugging, and mock response validation' },
    ],
  },
  {
    id: 'backend',
    title: 'Databases & Backend',
    skills: [
      { name: 'SQLite / sqflite', level: 'Core', highlight: true, description: 'Local offline-first relational persistence, schema design, and query optimization' },
      { name: 'Firebase Firestore', level: 'Core', highlight: true, description: 'Real-time document store, live stream subscriptions, and security rules' },
      { name: 'Firebase Auth', level: 'Core', description: 'User authentication, email/password workflows, and session state' },
      { name: 'Firebase Storage', level: 'Core', description: 'Cloud asset and media hosting for profile pictures and post uploads' },
      { name: 'MySQL', level: 'Proficient', description: 'Relational database queries, foreign keys, indexing, and joins' },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    skills: [
      { name: 'Git & GitHub', level: 'Core', highlight: true, description: 'Feature-branch workflows, collaborative PR reviews, and versioning' },
      { name: 'GitLab', level: 'Core', highlight: true, description: 'Enterprise repository workflows, sprint tasks, and bug tracking' },
      { name: 'Android Studio', level: 'Core', description: 'Android emulator management, profiling, and APK generation' },
      { name: 'Xcode', level: 'Proficient', description: 'iOS target configuration, simulator deployment, and build archive testing' },
      { name: 'VS Code', level: 'Core', description: 'Primary IDE with custom Dart, Flutter, and Tailwind tool extensions' },
      { name: 'Flutter DevTools', level: 'Core', description: 'Performance profiling, widget tree inspection, and memory leak diagnosis' },
    ],
  },
  {
    id: 'core-cs',
    title: 'Core CS Concepts',
    skills: [
      { name: 'Object-Oriented Programming (OOP)', level: 'Core', highlight: true, description: 'Encapsulation, inheritance, polymorphism, and abstraction principles' },
      { name: 'Data Structures & Algorithms', level: 'Core', highlight: true, description: 'Lists, trees, hash maps, sorting, and computational complexity' },
      { name: 'DBMS', level: 'Core', description: 'Relational database architecture, normalization, ACID properties, and transactions' },
      { name: 'Operating Systems', level: 'Core', description: 'Processes, concurrency, threads, file systems, and memory hierarchy' },
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'Derived Web Technologies Pvt. Ltd.',
    role: 'Flutter Developer Intern',
    duration: 'Jul 2026 – Oct 2026 (3-Month Internship)',
    location: 'Ahmedabad, Gujarat',
    type: 'Internship',
    description:
      'Engineered production features for client mobile applications using Flutter, Dart, RESTful APIs, Firebase, and SQLite with agile collaborative workflows.',
    technologies: ['Flutter', 'Dart', 'REST APIs', 'Dio', 'HTTP', 'SQLite', 'Firebase Firestore', 'Git', 'GitHub', 'Flutter DevTools'],
    achievements: [
      'Engineered and optimized modular, cross-platform UI components using Flutter & Dart, ensuring seamless responsiveness across diverse mobile screen resolutions.',
      'Integrated complex RESTful APIs via Dio & HTTP libraries with secure JSON serialization, improving asynchronous data handling and screen load speed.',
      'Implemented local data caching and persistence utilizing SQLite & Firebase Firestore to provide uninterrupted offline application functionality.',
      'Leveraged Git & GitHub for feature-branch workflows, collaborative PR reviews, bug fixes, and performance profiling with Flutter DevTools.',
    ],
    projectTitle: 'Live Project – PilonMagic (GPS Tracking App)',
    projectPeriod: 'Sep 2026 – Oct 2026',
    projectAchievements: [
      'Built asset search, QR/VIN lookup and profile features by integrating REST APIs with Flutter, Dart and GetX state management.',
      'Implemented ownership report PDF export and English/French localization for the production app.',
      'Delivered Android bug fixes and updates, collaborating through GitLab version control.',
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Narandas Jethalal Sonecha Management & Technical Institute, GTU',
    period: '2026 – Present',
    status: 'Currently Pursuing',
    description: 'Advanced graduate coursework in software engineering, cloud computing, advanced algorithms, and enterprise systems.',
    keyAreas: ['Advanced Data Structures', 'Cloud Architectures', 'Enterprise Software Design', 'Mobile Engineering'],
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Shri K.M. & Smt. K.K. Savjani BBA/BCA College, BKNMU',
    period: '2023 – 2026',
    status: 'Graduated',
    grade: 'CGPA: 8.33 / 10',
    description: 'Core computer science degree with academic excellence in software paradigms, database management, and mobile engineering.',
    keyAreas: ['Object-Oriented Programming (Java/C++)', 'Data Structures & Algorithms', 'DBMS & SQL', 'Mobile & Web Development'],
  },
  {
    degree: 'Higher Secondary Certificate (12th, GSEB)',
    institution: 'Sunrise School, Veraval',
    period: '2023',
    status: 'Completed',
    grade: '75%',
    description: 'Higher secondary education with concentration in Science and Mathematics.',
  },
  {
    degree: 'Secondary School Certificate (10th, GSEB)',
    institution: 'Sunrise School, Veraval',
    period: '2021',
    status: 'Completed',
    grade: '82%',
    description: 'Secondary school education with high academic achievement across mathematics and sciences.',
  },
];
