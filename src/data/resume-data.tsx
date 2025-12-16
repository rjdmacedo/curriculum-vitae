import { PolygonLogo, SIIOPLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Rafael Macedo",
  initials: "RM",
  location: "Lisbon, Portugal, WET",
  locationLink: "https://www.google.com/maps/place/Lisbon",
  about:
    "Frontend Engineer focused on building products with extra attention to detail",
  summary:
    "Senior Frontend Engineer with 8+ years of expertise in architecting and scaling high-impact web applications from conception to launch. Specialized in the modern JavaScript ecosystem (TypeScript, React, Node.js, GraphQL). Proven leader in guiding cross-functional teams and cultivating a culture of engineering excellence. Experienced in remote collaboration with global distributed teams. Dedicated contributor to open-source communities and committed to continuous technical evolution.",
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
        "Architected and delivered the comprehensive integration between Vue Storefront and Elastic Path, establishing a seamless e-commerce ecosystem. Engineered a robust abstraction layer using composables, significantly reducing code complexity and accelerating developer velocity. Spearheaded the technical collaboration with the Elastic Path engineering team, resolving critical bottlenecks to ensure a smooth launch. Served as the primary technical liaison, facilitating efficient data synchronization strategies. Led the end-to-end project lifecycle, managing stakeholder expectations and enforcing rigorous Agile practices to guarantee high-quality delivery.",
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
        "Spearheaded the design and implementation of scalable UI components in React, driving consistency across the platform. Optimized application performance and stability by integrating Sentry and New Relic, resulting in reduced downtime and faster load times. Leveraged data-driven insights to refine frontend architecture and enhance user engagement. Expanded the internal UI library for the A/B Testing tool, promoting code reusability and design uniformity. Championed best practices in code quality, including comprehensive testing and adherence to DRY principles, within a fast-paced Kanban environment.",
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
        "Engineered a JavaScript-based Biometric SDK, enabling third-party developers to seamlessly verify user identities. Established a rigorous testing framework using Jest and Cypress, elevating code reliability and maintainability. Implemented Agile workflows to streamline feature delivery and enhance team collaboration.",
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
        "Designed and deployed two mission-critical full-stack applications for a major international client using Laravel and AngularJS. Architected a high-performance backend processing system utilizing Redis queues to handle CPU-intensive workloads. Implemented real-time data synchronization with WebSockets and engineered robust data storage solutions using MySQL and CouchDB. Championed Test Driven Development (TDD) practices to maintain superior code quality and reliability. Modernized the development infrastructure by integrating Webpack and Yarn, significantly improving build times and developer efficiency.",
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
      tags: ["Vue.js", "React", "Frontend Architecture", "Comparison"],
      description:
        "A comprehensive comparison of React and Vue, covering key criteria for choosing the right framework, similarities, differences, and dealing with frequent updates to help developers make an educated decision.",
    },
    {
      title: "How to Master Low Code/No Code",
      link: "https://www.scalablepath.com/front-end/low-code-no-code",
      tags: ["Low-Code", "No-Code", "Rapid Prototyping", "Visual Development"],
      description:
        "Explores the rise of low-code and no-code platforms, their benefits, drawbacks, and use cases, providing an overview of how these tools bridge the gap between demand for software and developer supply.",
    },
  ],
  projects: [
    {
      title: "Headless SDK",
      techStack: ["Node", "GraphQL", "JavaScript", "Apollo Federation"],
      description:
        "A versatile SDK enabling the creation of headless eCommerce solutions with any backend architecture.",
    },
    {
      title: "GDPR Compliance",
      techStack: ["JavaScript", "React", "C#"],
      description:
        "Developed a comprehensive tool facilitating automated GDPR compliance for enterprise organizations.",
    },
    {
      title: "SIIOP",
      techStack: ["Vue", "Laravel", "MySQL", "Docker", "Apache", "Gulp"],
      description:
        "A robust management and monitoring system deployed for the Portuguese Police force.",
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
        "A proprietary identity verification platform utilizing facial, voice, and ID recognition, managed from inception to production deployment.",
      logo: PolygonLogo,
    },
  ],
} as const;
