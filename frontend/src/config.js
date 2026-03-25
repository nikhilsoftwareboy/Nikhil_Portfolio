export const config = {
    // Theme Toggle: Dark is default
    defaultTheme: 'dark',

    // Custom cursor styling details
    cursor: {
        color: '#00dc82', // bright accent color
        size: 32,
    },

    // Hero Section
    hero: {
        title: "Hi, I'm Nikhil Kumar Singh",
        subtitle: "Full Stack Developer",
        description: "Building scalable platforms, modern interactive interfaces, and efficient algorithms.",
        accentColor: "#00dc82" // e.g. Neon Green
    },

    // About Section
    about: {
        title: "About Me",
        bio: "I am a passionate Full Stack Developer with strong foundations in Data Structures and Algorithms. My expertise spans Python, C++, React, and Backend technologies. I specialize in building secure, scalable applications and designing modern web experiences with a focus on problem-solving.",
        skills: [
            { name: "Python / C++ / Java", level: 90 },
            { name: "HTML / CSS / JS", level: 85 },
            { name: "React & Node.js", level: 80 },
            { name: "FastAPI / Flask", level: 85 },
            { name: "MySQL / MongoDB", level: 80 }
        ],
        certificates: [
            { title: "NPTEL Certification on Privacy and Security", link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs117/Course/NPTEL25CS117S135870154510684630.pdf" },
            { title: "C++ Programming: OOPs and DSA | CSE Pathshala", link: "https://docs.google.com/document/d/143eyqPSnx2o6sI1mpOK-wvwu2F3bI9R3JjGO_veEInM/edit?usp=sharing" },
            { title: "Software Engineering: Implementation and Testing | Coursera", link: "https://www.coursera.org/account/accomplishments/verify/EKX9HYY645CV" },
            { title: "Crash Course on Python (Google) | Coursera", link: "https://www.coursera.org/account/accomplishments/verify/XSH4GGKFJFS3" }
        ],
        achievements: [
            "Secured 5-Stars in Python on HackerRank",
            "Secured 5-Stars in Java on HackerRank",
            "Secured 5-Stars in CPP on HackerRank"
        ]
    },

    // Projects Gallery
    projects: [
        {
            id: 1,
            title: "RentKr - AI-Powered Rental Platform",
            description: "Designed a direct-to-owner rental platform reducing search time by 30%. Engineered secure role-based auth with JWT, fully responsive UI, and AI-powered natural language search.",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80",
            link: "https://github.com/nikhilsoftwareboy/RentKr",
            liveLink: "https://rentkr-drsu.onrender.com/"
        },
        {
            id: 2,
            title: "NiksLMS - Learning Management System",
            description: "Architected a comprehensive LMS with distinct role-based portals for students, instructors, and admins. Features include secure Google OAuth 2.0 integration and a responsive Jinja2/Bootstrap 5 frontend.",
            image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500&q=80",
            link: "https://github.com/nikhilsoftwareboy/NiksLMS",
            liveLink: "https://niksboy.pythonanywhere.com/"
        }
    ],

    // Experience & Education Timeline
    experience: [
        {
            year: "Aug 2023 - Present",
            role: "B.Tech Computer Science",
            company: "Lovely Professional University",
            description: "Pursuing Bachelor of Technology in Computer Science and Engineering. CGPA: 7.0.",
            logo: "/lpu-logo.png" // Replace with your actual logo file name
        },
        {
            year: "June 2025",
            role: "Training: C++ Programming, OOPs & DSA",
            company: "CSE Pathshala",
            description: "Hands-on experience in core C++ development, Object-Oriented Programming (OOP) principles, and algorithmic problem-solving like arrays, linked lists, trees, and graphs.",
            logo: "/cse-pathshala-logo.png" // Replace with your actual logo file name
        },
        {
            year: "April 2022 - March 2023",
            role: "Intermediate (12th)",
            company: "Kendriya Vidyalaya No.2 Delhi Cantt",
            description: "Completed higher secondary education with 66.5%.",
            logo: "/kv-logo.png" // Replace with your actual logo file name
        },
        {
            year: "April 2020 - March 2021",
            role: "Matriculation (10th)",
            company: "Kendriya Vidyalaya No.5 AFS Darjipura",
            description: "Completed secondary education with 85.2%.",
            logo: "/kv-logo.png" // Replace with your actual logo file name
        }
    ],

    // Social Links
    socials: {
        github: "https://github.com/nikhilsoftwareboy",
        linkedin: "https://www.linkedin.com/in/nikhil--kumar--singh/",
        email: "mailto:kumarnikhil0180@gmail.com"
    }
};
