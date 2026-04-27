import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  meera,
  scrapa,
  solar,
  esirt,
  bitb,
  pixel
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Fullstack Developer',
    icon: backend,
  },
  // {
  //   title: 'UI/UX Design',
  //   icon: ux,
  // },
  {
    title: 'Software Developer',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Fullstack Developer Intern',
    company_name: 'Azziptech',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Sep 2023 - Mar 2024',
  },
  // {
  //   title: 'Mentor (Volunteer)',
  //   company_name: 'Microverse',
  //   icon: microverse,
  //   iconBg: '#333333',
  //   date: 'Mar 2022 - May 2022',
  // },
  {
    title: 'Junior Frontend Engineer',
    company_name: 'Azziptech',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Apr 2024 - Oct 2025',
  },
  // {
  //   title: 'Full Stack Developer',
  //   company_name: 'Diversity Cyber Council',
  //   icon: dcc,
  //   iconBg: '#333333',
  //   date: 'Apr 2022 - Present',
  // },
];

const projects = [
  {
    id: 'project-1',
    name: 'Scrapanova',
    description: 'A B2B Scrape treding plateform for buying and selling scrap.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: scrapa,
    repo: 'https://github.com/m-jasani/Scrapanova.git',
    demo: 'https://scrapanova.com/#',
  },
  {
    id: 'project-2',
    name: 'GetSolar',
    description:
      'A Solar Energy company application for australian business.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: solar,
    repo: 'https://github.com/m-jasani/GetSolar.git',
    demo: 'https://getsolar.cloud/',
  },
  {
    id: 'project-3',
    name: 'eSirt',
    description: 'This is a hospital management system and e learning platform for a hospital called Sirt-T .',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: esirt,
    repo: 'https://github.com/m-jasani/EsirT.git',
    demo: 'https://esirt.co.in/',
  },
  {
    id: 'project-4',
    name: 'BitBank Finance',
    description: `It is a finance management application that allows users to track their expenses, set budgets, and visualize their financial data through charts and graphs. It provides a user-friendly interface for managing personal finances effectively.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: bitb,
    repo: 'https://github.com/m-jasani/BitBank_Finance.git',
    demo: 'https://bitbankfinance.vercel.app/',
  },
  {
    id: 'project-5',
    name: 'pixelflow',
    description:
      'it is a web application for digital agency that provides a platform for showcasing their portfolio, services, and client testimonials. The website is designed to be visually appealing and user-friendly, allowing potential clients to easily navigate through the agency’s offerings and get in touch for inquiries.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: pixel,
    repo: 'https://github.com/m-jasani/Pixel-flow.git',
    demo: 'https://pixelflow-kohl.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
