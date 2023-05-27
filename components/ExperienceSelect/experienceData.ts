export type ExperienceType = {
  company: string;
  title: string;
  duration: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
};
export const experienceData: ExperienceType[] = [
  {
    company: "ULedger",
    title: "Web Developer",
    duration: "AUG 2022 - PRESENT",
    description:
      "ULedger is a data integrity platform providing enterprise-grade blockchain infrastructure.",
    technologies: [
      "TypeScript",
      "React.js",
      "Next.js",
      "HTML",
      "Scss",
      "Nest.js",
      "GraphQL",
      "Git",
      "Npm",
      "Jest",
      "Agile Methodologies",
    ],
    responsibilities: [
      "Developed User portal, integrated with ULedger SDK (KMS & BMS) for managing organizations users, Web3 app marketplace, and explorer.",
      "Front-End development and maintenance of UL's applications.",
      "Developed public 'Blockchain Explorer' connected to BE ULedger SDK.",
      "Developed ULedger Verify, a secure email verification service that uses the ULedger blockchain.",
      "Full-Stack integration of ULedger SDK to UL’s API in Nest.js.",
      "Created UL Microservices Management to connect Frontend Apps to ULedger Blockchain, test coverage, and documentation.",
      "Developed Versa POC integrating Construction BIM models to Web3 UI interface built with React+Three.js.",
    ],
  },
  {
    company: "Abstract Development Studio",
    title: "Frontend Web Developer",
    duration: "AUG 2022 - PRESENT",
    description:
      "Abstract Development Studio is a web development company that offers web and mobile development, artificial intelligence, blockchain development, cloud services, and digital transformation solutions to organizations.",
    technologies: [
      "TypeScript",
      "React.js",
      "Next.js",
      "HTML",
      "Scss",
      "Nest.js",
      "GraphQL",
      "Git",
      "Npm",
      "Jest",
      "Strapi CMS",
    ],
    responsibilities: [
      "Front-End Development for Contadito App (SaaS).",
      "Develop UI & CMS for Contadito with Next.js, GraphQL, Strapi CMS.",
      "Achieved 100% test coverage (Jest + React Testing Library).",
      "UI/UX Design of Landing + CMR integration (Next.js + Tailwind).",
    ],
  },
  {
    company: "Heimat (Startup)",
    title: "Frontend Web Developer",
    duration: "MAY 2021 - JULY 2022",
    description:
      "Heimat is a startup that provides digital solutions for various SaaS companies.",
    technologies: [
      "TypeScript",
      "React.js",
      "Next.js",
      "HTML",
      "Scss",
      "Nest.js",
      "GraphQL",
      "Git",
      "Npm",
      "Jest",
      "Strapi CMS",
    ],
    responsibilities: [
      "Implemented features for React applications, users module (CRUD) and activity calendar (React + Redux).",
      "Built UI/UX reusable components with React.Js + TypeScript, fully tested with Jest and React Testing Library.",
    ],
  },
];
