import { PolygonLogo, SIIOPLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

const now = new Date().getFullYear();

export const RESUME_DATA = {
  name: "Rafael Macedo",
  initials: "RM",
  location: "Lisbon, Portugal, WET",
  locationLink: "https://www.google.com/maps/place/Lisbon",
  about:
    "Frontend Engineer focused on building products with extra attention to detail",
  summary:
    "Frontend Engineer with over 8 years of experience taking multiple products from 0 to 1. Specialized in TypeScript, React, Node.js, and GraphQL. Proven track record of leading teams effectively and fostering environments where people do their best work. Extensive experience working remotely with global companies. Passionate about open-source and continuous learning.",
  ui: {
    sectionHeaders: {
      about: "About",
      articles: "Articles",
      work: "Work Experience",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
    },
    commandMenu: {
      actions: "Actions",
      print: "Print",
      links: "Links",
      placeholder: "Type a command or search...",
      noResults: "No results found.",
      open: {
        beforeCmd: "Press",
        afterCmd: "to open the command menu",
        cmd: "⌘J",
      },
    },
  },
  avatarUrl: "https://avatars.githubusercontent.com/u/16735002?v=4",
  personalWebsiteUrl: "https://rjdmacedo.github.io/curriculum-vitae",
  contact: {
    email: "rafaelmacedo4@gmail.com",
    tel: "+351912685890",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/rjdmacedo",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rjdmacedo/",
        icon: LinkedInIcon,
      },
      {
        name: "X (formerly Twitter)",
        url: "https://x.com/rafaeljdm",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Instituto Superior de Engenharia de Lisboa",
      degree: "Bachelor's Degree in Computer Science",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Alokai",
      link: "https://alokai.com",
      badges: ["Remote"],
      title: "Senior Software Engineer",
      start: "2021",
      end: "Present",
      techStack: [
        "Vue.js",
        "Nuxt.js",
        "TypeScript",
        "GraphQL",
        "Tailwind CSS",
        "Node.js",
      ],
      description:
        'Developed a store integration using Vue Storefront Core for seamless communication with Elastic Path. Implemented an abstraction layer through composables to simplify interaction complexity and boost developer productivity. Collaborated closely with the Elastic Path Engineering team to overcome technical challenges and ensure a successful integration. Served as a middleware between Vue Storefront and Elastic Path, facilitating data exchange and synchronization. Led the integration project, taking responsibility for delivery and managing stakeholder expectations. Enforced Agile methodologies with well-defined tasks, a groomed backlog, and clear "Definition of Done" and "Definition of Ready" parameters.',
    },
    {
      company: "Farfetch",
      link: "https://farfetch.com/",
      badges: [],
      title: "Senior Software Engineer",
      start: "2018",
      end: "2021",
      techStack: ["React", "Redux", "TypeScript", "Node.js", "Jest"],
      description:
        "Led UI component design and development using React, creating responsive and interactive interfaces. Translated designs into high-quality code, debugged, and optimized performance with tools like Sentry JS and New Relic. Collected and analyzed front-end user data for insightful decision-making. Developed features using Vue.js and React, emphasizing reusability and maintaining consistent design patterns. Contributed to Farfetch's A/B Testing tool UI, expanding the React components library. Worked in a Kanban environment, collaborated on UI design, and actively participated in peer reviews and continuous deployment. Proficient in advanced Git techniques, ensuring comprehensive test coverage and following the DRY principle for code efficiency. Collaborated with the development team to align UI ideas with business goals, reviewed requirements, and ensured compatibility with existing applications.",
    },
    {
      company: "Polygon",
      link: "https://biometrid.com/",
      badges: ["Hybrid"],
      title: "Senior Software Engineer",
      start: "2018",
      end: "2019",
      techStack: ["JavaScript", "HTML/CSS", "Unit Testing", "Jest", "Cypress"],
      description:
        "Developed a Biometric Software Development Kit in JavaScript, empowering developers to integrate biometric capabilities. Implemented Jest for unit testing and Cypress for end-to-end testing, significantly improving codebase reliability. Managed the integration project between Vue Storefront and Elastic Path, facilitating seamless communication and data exchange. Enforced Agile methodologies (Kanban) to ensure efficient project delivery and effective cross-functional collaboration.",
    },
    {
      company: "Alter Solutions",
      link: "https://www.alter-solutions.pt/",
      badges: [],
      title: "Software Engineer",
      start: "2016",
      end: "2018",
      techStack: ["Laravel", "AngularJS", "Vue.js", "MySQL", "Redis"],
      description:
        "Built and enhanced two full-stack web applications for a major French client using Laravel and AngularJS. Optimized system performance by implementing Redis queues for CPU-intensive tasks. Integrated real-time updates using WebSockets and managed diverse data storage needs with MySQL and CouchDB. Practiced Test Driven Development (TDD) using PHPUnit and Mocha.js to ensure high code quality. Streamlined development workflows by introducing Webpack and Yarn, and maintained efficient version control with Git.",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "HTML/CSS"],
    },
    {
      category: "Frontend Frameworks",
      items: ["React", "Next.js", "Remix", "Vue.js", "Nuxt.js"],
    },
    {
      category: "Backend & Data",
      items: ["Node.js", "GraphQL", "Prisma", "Laravel", "Apollo GraphQL"],
    },
    {
      category: "UI & Styling",
      items: [
        "Tailwind CSS",
        "Material UI",
        "Ant Design",
        "Vuetify",
        "Styled Components",
      ],
    },
    {
      category: "Tools & Concepts",
      items: [
        "Jest",
        "Cypress",
        "Git",
        "Docker",
        "SEO",
        "Design Patterns",
        "REST API",
      ],
    },
  ],
  articles: [
    {
      title: "Vue vs React",
      link: "https://www.scalablepath.com/front-end/vue-vs-react",
      tags: ["Vue", "React", "Comparison", "Tech Stack"],
      description:
        "We compare Vue.js and React, including the differences between the two frameworks, their strengths and weaknesses, and when to use each.",
    },
    {
      title: "How to Master Low Code/No Code",
      link: "https://www.scalablepath.com/front-end/low-code-no-code",
      tags: ["No/Low Code", "Tools", "WYSIWYG", "Development"],
      description:
        "We explore low-code and no-code development, including the benefits and use cases for developers. Plus, an overview of low-code platforms and best practices.",
    },
  ],
  projects: [
    {
      title: "Headless SDK",
      techStack: [
        "Node",
        "GraphQL",
        "JavaScript",
        "Apollo Federation",
      ],
      description:
        "Headless SDK is a tool that allows you to build a headless eCommerce solutions using any backend you want.",
    },
    {
      title: "GDPR Compliance",
      techStack: ["JavaScript", "React", "C#"],
      description:
        "Built a GDPR compliance tool that helps companies to comply with GDPR regulations",
    },
    {
      title: "SIIOP",
      techStack: ["Vue", "Laravel", "MySQL", "Docker", "Apache", "Gulp"],
      description:
        "SIIOP is a system for managing and monitoring the work of the police. It is used by the Portuguese Police",
      logo: SIIOPLogo,
    },
    {
      title: "Biometrid SDK",
      techStack: ["JavaScript", "TypeScript", "Nest.js"],
      link: {
        label: "Biometrid",
        href: "https://biometrid.com",
      },
      description:
        "Biometrid is a platform that allows you to verify your identity using your face, voice, and ID card. This project was built from scratch and is currently in production.",
      logo: PolygonLogo,
    },
  ],
} as const;
