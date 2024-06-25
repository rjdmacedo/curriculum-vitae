import { SIIOPLogo, PolygonLogo } from "@/images/logos";
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
    "As a Frontend Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world. I am a fast learner and I am always looking for new challenges. I am a big fan of open-source and I try to contribute to it as much as I can.",
  avatarUrl: "https://avatars.githubusercontent.com/u/16735002?v=4",
  personalWebsiteUrl: "https://github.com/rjdmacedo",
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
      title: "Senior Frontend Engineer",
      start: "2022",
      end: "present",
      description:
        'Developed a store integration using Vue Storefront Core for seamless communication with Elastic Path. Implemented an abstraction layer through composables to simplify interaction complexity and boost developer productivity. Collaborated closely with the Elastic Path Engineering team to overcome technical challenges and ensure a successful integration. Served as a middleware between Vue Storefront and Elastic Path, facilitating data exchange and synchronization. Led the integration project, taking responsibility for delivery and managing stakeholder expectations. Enforced Agile methodologies with well-defined tasks, a groomed backlog, and clear "Definition of Done" and "Definition of Ready" parameters.',
    },
    {
      company: "Creoate",
      link: "https://creoate.com",
      badges: ["Remote"],
      title: "Senior Software Engineer",
      start: "2021",
      end: "2022",
      description:
        "Contributed to an Agile environment, collaborating with cross-functional teams to deliver high-quality software solutions. Developed applications with Next.js, capitalizing on its server-side rendering and performance optimization features. Utilized Material UI for creating consistent and visually appealing user interfaces. Designed the storefront's frontend architecture to ensure scalability and maintainability. Implemented a GraphQL federated service that orchestrated GraphQL microservices, enhancing communication through Kafka.",
    },
    {
      company: "Farfetch",
      link: "https://farfetch.com/",
      badges: [],
      title: "Senior Software Engineer",
      start: "2018",
      end: "2021",
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
      description:
        "Have a robust background in software development and testing, having implemented Jest for unit testing and Cypress for end-to-end testing to ensure codebase reliability. Additionally, I developed a Biometric Software Development Kit in JavaScript, empowering developers to integrate biometric capabilities. In an Agile environment using Kanban, I collaborated with cross-functional teams and demonstrated leadership by managing the integration project between Vue Storefront and Elastic Path. Acting as middleware, I facilitated seamless communication and data exchange, while also enforcing Agile methodologies for efficient project delivery. Overall, my experience spans technical innovation, collaboration with diverse teams, and successful project leadership.",
    },
    {
      company: "Alter Solutions",
      link: "https://www.alter-solutions.pt/",
      badges: [],
      title: "Software Engineer",
      start: "2016",
      end: "2018",
      description:
        "I have a strong background in web development, having built and enhanced two applications for a French client. Leveraging Laravel on the backend and AngularJS on the frontend, I optimized performance with Redis queues for CPU-intensive jobs. I conducted ongoing maintenance, implemented component development practices, and collaborated closely with end-users for testing and problem analysis. In frontend development, I used Laravel's Eloquent ORM, Vue.js, and AngularJS, incorporating real-time updates with sockets. Database solutions involved MySQL and CouchDB, showcasing adaptability to diverse data storage needs. I practiced Test Driven Development (TDD) with PHPUnit and Mocha.js, ensuring code quality. Efficient code versioning and collaboration were managed using Git, and I streamlined the development workflow with Webpack, Yarn, and Node.js. Overall, my experience reflects a comprehensive approach to web development, emphasizing technical proficiency, collaboration, and a commitment to high-quality solutions.",
    },
  ],
  skills: [
    "SEO",
    "Jest",
    "Remix",
    "React",
    "Prisma",
    "Vue.js",
    "Node.js",
    "Next.js",
    "Nuxt.js",
    "GraphQL",
    "Vuetify",
    "Laravel",
    "Shopify",
    "HTML/CSS",
    "REST API",
    "JavaScript",
    "TypeScript",
    "Ant Design",
    "Material UI",
    "Tailwind CSS",
    "React Router",
    "React Context",
    "Apollo GraphQL",
    "Design Patterns",
    "React Hook Form",
    "Apollo Federation",
    "Styled Components",
    "Gateway Integration",
    "Frontend Development",
  ],
  projects: [
    {
      title: "Headless SDK",
      techStack: [
        "Node",
        "GraphQL",
        "JavaScript",
        "Senior Engineer",
        "Apollo Federation",
      ],
      description:
        "Headless SDK is a tool that allows you to build a headless eCommerce solutions using any backend you want.",
    },
    {
      title: "GDPR Compliance",
      techStack: ["Frontend Engineer", "JavaScript", "React", "C#"],
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
      techStack: ["Lead Engineer", "JavaScript", "TypeScript", "Nest.js"],
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
