// Hero

import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";
import MailLineIcon from "remixicon-react/MailLineIcon";

/* eslint-disable react/jsx-key */
// export const heroIcons = [
//   <InstagramLineIcon />,
//   <FacebookCircleLineIcon />,
//   <DribbbleLineIcon />,
//   <YoutubeLineIcon />,
//   <GithubLineIcon />,
// ];

export const heroIcons = [
  {
    icon: <FacebookCircleLineIcon />,
    link: "https://www.facebook.com/naymur.rohman.nayeem.2025",
  },
  {
    icon: <MailLineIcon />,
    link: "mailto:nayeemofficial80@gmail.com",
  },
  {
    icon: <GithubLineIcon />,
    link: "https://github.com/tendsT0Zero",
  },
];

// About Me
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import Projector2LineIcon from "remixicon-react/Projector2LineIcon";
import GroupLineIcon from "remixicon-react/GroupLineIcon";
import AwardFillIcon from "remixicon-react/AwardFillIcon";

export const aboutData = [
  {
    title: "Github Repos",
    amount: 20,
    icon: <GithubFillIcon />,
  },

  {
    title: "Satisfied clients",
    amount: 2,
    icon: <GroupLineIcon />,
  },
  {
    title: "Awards and Recognition",
    amount: 3,
    icon: <AwardFillIcon />,
  },
];

import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText =
  "Hi, I'm Naymur, a backend developer and researcher. I specialize in building robust, scalable, and efficient systems using Java, Spring Boot, and .NET Core. My work bridges software engineering and intelligent system design — integrating databases, APIs, and machine learning models to create smart, data-driven solutions. I’m passionate about backend architecture, clean code, and transforming real-world problems into powerful digital systems.";
// End of About Me

// Experience
export const experienceData = [
  {
    year: 1,
    title: "Foundation & Curiosity",
    education:
      "College: Developed strong interest in computers, problem-solving, and logic through math and basic programming exposure.",
    experience: [
      "Learned the fundamentals of C and basic programming concepts.",
      "Built small console-based projects and explored how code can solve real-world problems.",
    ],
  },
  {
    year: 1,
    title: "Exploration & Self-Learning",
    education:
      "Undergraduate Studies: Began pursuing a Bachelor’s  degree in Computer Science from 2021, while learning independently through online platforms.",
    experience: [
      "Learned core concepts of OOP, data structures, and algorithms using Java.",
      "Started exploring backend technologies like .NET and Spring Boot.",
      "Built early academic and hobby projects to understand real-world application of software systems.",
    ],
  },
  {
    year: 3,
    title: "Hands-on Development & Applied Learning",
    education:
      "Focused on backend and IoT integration while building project-based learning habits.",
    experience: [
      "Developed an IoT-based Smart Pet Care System using Arduino and sensors.",
      "Learned database design and integration using MySQL and SQL Server.",
      "Explored full-stack web development using ASP.NET Core MVC and TailwindCSS.",
      "Participated in programming contests and solved algorithmic problems regularly.",
    ],
  },
  {
    year: 5,
    title: "Research & Innovation",
    education:
      "Completed academic research focusing on medical data prediction using hybrid feature selection and ensemble ML models.",
    experience: [
      "Published and implemented a PCOS prediction model achieving 97.2% accuracy.",
      "Worked with machine learning libraries (Scikit-learn, SHAP, RFE) for feature selection.",
      "Applied data preprocessing and evaluation techniques (ROC, confusion matrix).",
      "Strengthened project presentation and documentation skills through research work.",
    ],
  },
  {
    year: 5,
    title: "Professional Readiness & Growth",
    education:
      "Graduated with a strong technical foundation and a portfolio of practical projects.",
    experience: [
      "Developed full-stack projects using .NET 8, Spring Boot, and ReactJS.",
      "Built an eCommerce web app and a FatwaFinder AI search engine project.",
      "Competed in ICPC Asia Dhaka Regional and secured top ranks in intra-university contests.",
      "Actively preparing for software engineering roles, focusing on backend development, research, and problem-solving.",
    ],
  },
];

// Skills
export const skillsData = [
  {
    name: ".Net",
    icon: "/skills/dotnet.png",
  },
  {
    name: "Spring Boot",
    icon: "/skills/springboot.png",
  },
  {
    name: "MySQL",
    icon: "/skills/mysql.png",
  },
  {
    name: "SqlServer",
    icon: "/skills/sqlserver.png",
  },
  {
    name: "HTML",
    icon: "/skills/html.png",
  },
  {
    name: "CSS",
    icon: "/skills/css.png",
  },
  {
    name: "JavaScript",
    icon: "/skills/js.png",
  },
  {
    name: "TailwindCSS",
    icon: "/skills/tailwind.png",
  },
  {
    name: "Vite",
    icon: "/skills/vite.png",
  },
  {
    name: "ReactJS",
    icon: "/skills/react.png",
  },
  {
    name: "AI",
    icon: "/skills/ai.png",
  },
  {
    name: "Github",
    icon: "/skills/github.png",
  },
];

// Reviews
import StarFillIcon from "remixicon-react/StarFillIcon";
import StarHalfLineIcon from "remixicon-react/StarHalfLineIcon";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

/* eslint-disable react/jsx-key */
export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />];
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />];

//Review Data
export const reviewsData = [
  {
    image: "/reviews/client-1.png",
    name: "Rakibul Hasan Efty, Teammate at Southeast University",
    comment:
      "Working with Naymur has always been inspiring. His strong grasp of backend systems and clean architectural design make complex projects feel effortless. During our ICPC and university projects, he consistently brought innovative ideas and ensured our solutions were both efficient and scalable.",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: "/reviews/client-2.png",
    name: "Farhan Iasir Rafi, Teammate at Southeast University",
    comment:
      "Naymur is one of the most dedicated and analytical developers I’ve worked with. His ability to merge problem-solving with practical implementation—especially in Java, Spring Boot, and .NET—sets him apart. He’s a true team player who always pushes for excellence in every project.",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: "/reviews/client-4.png",
    name: "Mr. Kaiser, Client",
    comment:
      "I hired Naymur to develop a management system for my business, and the result was beyond expectations. The system was fast, reliable, and tailored perfectly to our workflow. His professionalism, communication, and technical skills made the whole process seamless. I’d definitely recommend him for any backend or full-stack project.",
    stars: [1, 1, 1, 1, 1],
  },
];

// Projects
export const projectsData = [
  {
    name: "SmartPetCareSystem",
    desc: "An IoT-based automated pet feeding and monitoring system featuring scheduled feeding, motion detection, and cleaning mechanisms using Arduino and sensors.",
    url: "/projects/petcare.png",
    tech: ["Arduino", "C", "RTC Module", "Sensor"],
    repo: "https://github.com/yourusername/shopsphere",
  },
  {
    name: "Travel.ai",
    desc: "A full-stack AI-powered travel assistant featuring travel spot recommendations, image generation, and interactive chat using Spring Boot, React, and OpenAI API.",
    url: "/projects/travelai.png",
    tech: ["Spring Boot", "React", "OpenAI API", "JavaScript", "CSS"],
    repo: "https://github.com/tendsT0Zero/Travel.ai",
  },
  {
    name: "PharmaTrack.NET",
    desc: "A complete pharmacy inventory and employee management system with real-time stock tracking, cost analysis, and admin dashboard using .NET 8.",
    url: "/projects/pharma.png",
    tech: [
      "C#",
      ".NET",
      "TailwindCSS",
      "SQL Server",
      "HTML",
      "JavaScript",
      "CSS",
    ],
    repo: "https://github.com/yourusername/shopsphere",
  },
  {
    name: "EZSHOP.COM [under construction]",
    desc: "A full-featured eCommerce application developed using Spring Boot, featuring secure authentication, product catalog, shopping cart, order management, and admin dashboard.",
    url: "/projects/shopsphare.png",
    tech: [
      "Java",
      "SpringBoot",
      "ReactJS",
      "MySQL",
      "Spring Security",
      "HTML",
      "Tailwind",
    ],
    repo: "https://github.com/tendsT0Zero/ezbuy.com",
  },
  {
    name: "Health App",
    desc: "A medical research project applying hybrid feature selection and ensemble ML models to predict PCOS and Obesity Level with 96+ % accuracy using patient data.Along side Brain tumor detection via uploading MRI image on our HealthApp site",
    url: "/projects/pcos.png",
    tech: ["Python", "SVM", "DecisionTree", "KNN", "SHAP", "HTML", "CSS"],
    repo: "https://github.com/tendsT0Zero/health-app",
  },
];

export const projectsButton = [
  "All",
  "SpringBoot",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "TailwindCSS",
  ".NET",
  "Python",
];

// Pricing Plans
export const pricingPlans = [
  {
    title: "Starter",
    pricing: "$150 - $200",
    features: [
      "Up to 5 pages (static or basic dynamic site)",
      "Responsive and modern UI",
      "Basic CRUD operations",
      "Simple database integration (MySQL / PostgreSQL)",
      "Contact form and email integration",
      "1 month of technical support",
    ],
    recommended:
      "Personal portfolios, startup landing pages, small business websites",
  },
  {
    title: "Professional",
    pricing: "$800 - $2,000",
    features: [
      "Up to 15 dynamic pages",
      "Responsive UI with Tailwind / Bootstrap",
      "Authentication and user management",
      "Full CRUD with admin dashboard",
      "API integration (REST / third-party)",
      "Database design and optimization",
      "Basic analytics and reporting",
      "3 months of maintenance & support",
    ],
    recommended:
      "Growing businesses, management systems, and service-based platforms",
  },
  {
    title: "Enterprise",
    pricing: "$1,500 - $3,500+",
    features: [
      "Unlimited pages and modules",
      "Advanced backend using Spring Boot or .NET Core",
      "Role-based authentication and secure APIs",
      "E-commerce or ERP functionality",
      "AI/ML model integration (prediction or automation)",
      "6 months of priority support and updates",
    ],
    recommended:
      "Enterprises, SaaS platforms, AI-driven or data-intensive systems",
  },
];

import CheckLineIcon from "remixicon-react/CheckLineIcon";

export const checkIcon = <CheckLineIcon />;

// Q & A
export const questions = [
  {
    question: "Can you tell us about your background and technical journey?",
    answer:
      "I’m a self-taught technology enthusiast and a recent graduate with a strong passion for building meaningful solutions using code. Although I don’t have formal industry experience yet, I’ve spent the last few years exploring different technologies like .NET, Spring Boot, and Machine Learning. I’ve built several personal and research-based projects that helped me strengthen my problem-solving and system design skills.",
  },
  {
    question: "How do you approach problem-solving as a developer?",
    answer:
      "I love solving problems logically and efficiently. My approach usually starts with understanding the core issue, breaking it into smaller steps, and identifying possible patterns or algorithms that fit. I’m comfortable experimenting with different solutions — from clean code optimizations to applying data structures or automation. I also enjoy collaborating and discussing approaches with peers, as it often leads to more creative solutions.",
  },
  {
    question:
      "Can you describe a project that reflects your creativity and technical skill?",
    answer:
      "One of my favorite projects is the SmartPetCareSystem — an IoT-based solution that automates pet feeding, cleaning, and monitoring using Arduino and sensors. I designed it to open and close the feeding chamber based on time and pet presence. It taught me how to blend creativity with logic, manage real-time inputs, and build systems that actually solve real-world problems.",
  },
  {
    question:
      "How do you keep yourself motivated and up-to-date with new technologies?",
    answer:
      "As a self-learner, curiosity drives me. I constantly explore new frameworks, watch tech talks, and experiment with small projects. I also read documentation and research papers to understand not just how a technology works but why it’s built that way. Recently, I’ve been focusing on improving my backend skills with Spring Boot and .NET Core, while learning more about AI integration in web applications.",
  },
  {
    question:
      "What do you think makes you a good fit for a software engineering role?",
    answer:
      "Even as a fresher, I bring strong analytical thinking, adaptability, and a genuine passion for technology. I’m not afraid to face challenges — in fact, I enjoy debugging and problem-solving. I believe my self-driven learning attitude, combined with hands-on experience from personal projects and research, allows me to contribute quickly and grow into a valuable team member.",
  },
];

import ArrowDropDownLineIcon from "remixicon-react/ArrowDropDownLineIcon";
export const questionArrow = <ArrowDropDownLineIcon />;

// Navbar
import CopyrightLineIcon from "remixicon-react/CopyrightLineIcon";

export const copyRightIcon = <CopyrightLineIcon />;

import Home5LineIcon from "remixicon-react/Home5LineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import HistoryLineIcon from "remixicon-react/HistoryLineIcon";
import BriefcaseLineIcon from "remixicon-react/BriefcaseLineIcon";
import UserStarLineIcon from "remixicon-react/UserStarLineIcon";
import ProjectorLineIcon from "remixicon-react/ProjectorLineIcon";
import PriceTag3LineIcon from "remixicon-react/PriceTag3LineIcon";
import ContactsBook2LineIcon from "remixicon-react/ContactsBook2LineIcon";
import QuestionAnswerLineIcon from "remixicon-react/QuestionAnswerLineIcon";

export const navbarData = [
  {
    id: "home",
    name: "Home",
    icon: <Home5LineIcon />,
  },
  {
    id: "about",
    name: "About",
    icon: <UserLineIcon />,
  },
  {
    id: "experience",
    name: "MyRoad",
    icon: <HistoryLineIcon />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <BriefcaseLineIcon />,
  },
  {
    id: "reviews",
    name: "Reviews",
    icon: <UserStarLineIcon />,
  },
  {
    id: "projects",
    name: "Projects",
    icon: <ProjectorLineIcon />,
  },
  {
    id: "pricing",
    name: "Pricing",
    icon: <PriceTag3LineIcon />,
  },
  {
    id: "contact",
    name: "Contact",
    icon: <ContactsBook2LineIcon />,
  },
  {
    id: "questions",
    name: "Questions",
    icon: <QuestionAnswerLineIcon />,
  },
];

// Toggle
import MoonFoggyFillIcon from "remixicon-react/MoonFoggyFillIcon";
import SunFoggyFillIcon from "remixicon-react/SunFoggyFillIcon";

export const sunIcon = <SunFoggyFillIcon />;
export const moonIcon = <MoonFoggyFillIcon />;
