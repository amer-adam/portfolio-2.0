import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'ameradam6a@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Adam, I am reaching out to you because...',
    linkedinProfile: 'https://www.linkedin.com/in/adam-abouraya-7b6401263/',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/amer-adam' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/adam-abouraya-7b6401263/' },
];

export const MY_STACK = {
    frontend: [
        { name: 'React', icon: '/logo/react.png' },
        { name: 'Vue.js', icon: '/logo/vue.png' }, // You may want to drop the vue.png or use placeholder/text
        { name: 'Flutter', icon: '/logo/flutter.png' },
    ],
    backend: [
        { name: 'Python', icon: '/logo/python.png' },
        { name: 'C++', icon: '/logo/cpp.png' },
        { name: 'Java', icon: '/logo/java.png' },
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'FastAPI', icon: '/logo/fastapi.png' },
    ],
    database: [
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        { name: 'MySQL', icon: '/logo/mysql.svg' },
        { name: 'MongoDB', icon: '/logo/mongodb.svg' },
        { name: 'Firestore', icon: '/logo/firebase.png' },
    ],
    tools: [
        { name: 'Docker', icon: '/logo/docker.svg' },
        { name: 'GitLab CI/CD', icon: '/logo/gitlab.png' },
        { name: 'Jenkins', icon: '/logo/jenkins.png' },
        { name: 'Linux', icon: '/logo/linux.png' },
        { name: 'Tableau', icon: '/logo/tableau.png' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'LexiFlow',
        slug: 'lexiflow',
        techStack: [
            'FastAPI',
            'Node.js',
            'Speech Recognition',
            'Translation APIs',
            'Python'
        ],
        year: 2026,
        description: `
      AI-Powered Mandarin Learning Platform (FYP). <br/> <br/>
      Built scalable pipeline for multilingual subtitles using modular "pipe-and-filter" architecture. Integrated speech recognition and translation via FastAPI and Node.js.
      `,
        role: 'Developer',
        thumbnail: '/projects/lexiflow/thumb.jpg',
        longThumbnail: '/projects/lexiflow/long.jpg',
        images: [
            '/projects/lexiflow/image1.jpg',
            '/projects/lexiflow/image2.jpg',
        ],
    },
    {
        title: 'Aidelle',
        slug: 'aidelle',
        techStack: [
            'React',
            'Three.js',
            'Vite',
            'Web Speech API',
            'Camb AI TTS',
            'Recharts',
            '@pixiv/three-vrm'
        ],
        thumbnail: '/projects/thumbnail/aidelle.png',
        longThumbnail: '/projects/long/aidelle.png',
        images: [
            '/projects/images/aidelle-1.png',
            '/projects/images/aidelle-2.png',
            '/projects/images/aidelle-3.png'
        ],
        sourceCode:  'https://github.com/amer-adam/aidelle',
        year: 2026,
        description: `Aidelle is a full-stack, AI-powered health monitoring ecosystem designed to care for elderly users. It integrates wearable smart device biometrics, a Python FastAPI data-sync backend, and a LangGraph-powered AI Agent to provide conversational medical assistance, anomaly detection, and emergency alerting.`,
        role: `As the frontend developer in a team of three, I: <br/>
        ● Built the patient and nurse web interfaces from scratch using React 19 and Vite.<br/>
        ● Integrated a lifelike 3D AI nurse avatar using Three.js and @pixiv/three-vrm, complete with procedural lip-syncing and conversational animations.<br/>
        ● Implemented two-way voice interactions using the browser's native Web Speech API for input and Camb AI cloud TTS for spoken responses.<br/>
        ● Developed a comprehensive caregiver dashboard featuring interactive Recharts, live data polling every 5 seconds, and smart sensor management.`
    },
{
        title: 'Google It First!',
        slug: 'google-it-first',
        techStack: [
            'JavaScript',
            'Chrome Extension API',
            'Manifest V3',
            'HTML & CSS',
            'Transformers.js',
            'DuckDuckGo API'
        ],
        year: 2026,
        description: `Google It First! is an eco-friendly Chrome Extension built for Earth Day 2026 to reduce the massive water footprint left by unnecessary LLM queries. It actively monitors major AI platforms (ChatGPT, Gemini, Claude, etc.) and intercepts user prompts. Using a local NLP model, it classifies whether a query requires an LLM or can be answered via a traditional search. If a search is sufficient, it displays an interactive overlay with inline DuckDuckGo results, saving data center cooling water. It also features a tracking dashboard and fun "guilt-trip" penalty animations for bypassing.`,
        role: `As the core extension developer in a team of three, I built the entire extension excluding the NLP model. My contributions included: <br/>
        - Developing the complete Manifest V3 architecture, including background workers, offscreen documents, and content scripts.<br/>
        - Building the prompt interception overlay with interactive water-wasting penalty animations and inline DuckDuckGo search results bridging.<br/>
        - Creating the popup dashboard to track and visualize the milliliters of water saved versus wasted based on user choices.<br/>
        - Integrating the provided local model script to seamlessly pause and evaluate user inputs across 7 major AI chat platforms.`,
        thumbnail: '/projects/thumbnail/google-it-first.png',
        longThumbnail: '/projects/long/google-it-first.png',
        images: [
            '/projects/images/google-it-first-1.png',
            '/projects/images/google-it-first-2.png',
            '/projects/images/google-it-first-3.png',
            '/projects/images/google-it-first-4.png',
            '/projects/images/google-it-first-5.png',
            '/projects/images/google-it-first-6.gif',

        ],
    },
    {
        title: 'Makanplus',
        slug: 'makanplus',
        techStack: [
            'Flutter',
            'Dart',
            'Firebase Auth',
            'Cloud Firestore',
            'Firebase Storage',
            'Provider',
            'REST API'
        ],
        thumbnail: '/projects/thumbnail/makanplus.png',
        longThumbnail: '/projects/long/makanplus.png',
        images: [
            '/projects/images/makanplus-1.png',
        ],
        sourceCode:  'https://github.com/amer-adam/makanplus',
        year: 2025,
        description: `Makanplus is a mobile application built with Flutter and Firebase designed for tracking personal metrics and managing personalized meal plans. The app features secure user authentication, profile customization with image uploads, dynamic meal plan tracking, and device integrations like mapping and content sharing.`,
        role: `As a core developer in a team of two, I was responsible for the entire application build, excluding the Gemini AI integration. My contributions included: <br/>
        - Developing the complete frontend interface using Flutter and managing application state with Provider.<br/>
        - Setting up and integrating the Firebase backend (Auth, Firestore, Storage) from scratch.<br/>
        - Writing strict Firebase security rules to validate user data (like height/weight metrics) and secure meal plans and profile pictures.<br/>
        - Implementing native device features using packages like image_picker, maps_launcher, and share_plus.`
    }
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineering Intern',
        company: 'ViTrox Technologies Sdn. Bhd.',
        duration: 'July 2025 - Feb 2026',
        points: [
            'Designed and implemented a cross-language networking library (C++ with Java via JNI) for high-throughput TCP/UDP communication.',
            'Automated large-scale data collection using Python, computer vision, and LLM-driven UI control, reducing turnaround time from ~3 business days to overnight.',
            'Processed datasets (50K to 20M+ records) and built Tableau dashboards.',
            'Developed React-based inspection interface and a C++ deployment utility (near-instant execution).',
            'Introduced unit testing (Catch2) and integrated automated testing into CI/CD pipelines.',
            'Contributed via GitLab, Jenkins, and Jira in an agile environment.'
        ]
    },
    {
        title: 'Software Engineer',
        company: 'UTM ROBOCON',
        duration: 'Oct 2022 - Sep 2024',
        points: [
            'Developed real-time robotics systems using Python and C++ on embedded platforms.',
            'Deployed computer vision models (YOLOv10, SAM) on NVIDIA Jetson.',
            'Integrated ROS2 and micro-ROS for low-latency communication.',
            'Surpassed 12 countries in 2024 Robocon for image processing FPS, accuracy, and efficiency.'
        ]
    },
];
