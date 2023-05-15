import { SiLinkedin, SiGithub, SiGmail } from 'react-icons/si';

export const about = [
  `I'm a master's student in Computer Science student at Johns Hopkins University.
I completed my undergraduate studies in Computer Science at JHU
and have gained valuable experience at internships at Meta, JHU APL, and Trayt.Health.`,

  `I'm interested in climate tech (DERs, Buildings, Carbon Accounting/Supply Chain)
and have developed a variety of software skills through my academic and industry experience.`,

  `If you want to more about my experience or discuss potential collaborations,
please feel free to connect with me on Linkedin or send me an email directly.
I'm looking forward to connecting with you!`,
];

export const experiences = [
  {
    company: 'Climate Tech VC',
    website: 'https://www.ctvc.co/',
    image: '../data/logo-Meta.png',
    roles: [
      {
        role: 'Software Engineer Intern',
        date: 'November 2022 - Present',
        location: 'London, UK (Remote)',
        bullets: ['Sup brav'],
      },
    ],
  },
  {
    company: 'Meta',
    website: 'https://about.meta.com/',
    image: './logo-Meta.png',
    roles: [
      {
        role: 'Software Engineer Intern',
        date: 'May 2022 - August 2022',
        location: 'Menlo Park, CA',
        bullets: [
          'Automated process of adding microservices to production-like test environments and redirecting thrift requests to test tiers, enabling customers to verify integration of workflows by developing a Python-based integration testing framework.',
          'Collaborated with two customers to implement framework, gather feedback, and enhance usability.',
          'Improved code quality and productivity by introducing over 50 integration tests to CI/CD pipeline and fixing flaky tests, helping to protect production codebase.',
        ],
      },
    ],
  },
  {
    company: 'JHU CS Department',
    website: 'https://www.cs.jhu.edu/',
    image: '../data/logo-Meta.png',
    roles: [
      {
        role: 'Course Assistant',
        date: '5 semesters',
        location: 'Baltimore, MD',
        bullets: [
          '601.464/664 Artificial Intelligence (Spring 2023)',
          '601.229 Computer System Fundamentals (Fall 2020 - Spring 2021, Spring 2022)',
          '500.112 Gateway Java (Spring 2020)',
          'Worked with students to troubleshoot and resolve coding issues, providing personalized support.',
          'Distilled programming concepts in weekly office hours to aid student comprehension.',
          'Facilitated student learning by grading assignments and assessments.',
        ],
      },
    ],
  },
  {
    company: 'JHU Applied Physics Laboratory',
    website: 'https://www.jhuapl.edu/about',
    image: '../data/logo-Meta.png',
    roles: [
      {
        role: 'Software Developer Intern',
        date: 'June 2021 - August 2021',
        location: 'Laurel, MD',
        bullets: [
          'Improved message processing efficiency by 30% by converting external messages from JSON to Google Protobuf.',
          'Simplified integration of future Protocol Buffer by writing a Python script for compiling proto files and handling ClearCase.',
          'Enhanced flexibility of Asset Control GUI by implementing a multicast listener in C++ adding broadcasted Unmanned Aircraft System (UAS) details, allowing operators to control available UASs rather than being limited to pre-configured options.',
        ],
      },
    ],
  },
  {
    company: 'Trayt.Health',
    website: 'https://trayt.health/',
    image: '../data/logo-Meta.png',
    roles: [
      {
        role: 'Software Engineer Intern',
        date: 'June 2020 - August 2020',
        location: 'Redwood City, CA (Remote)',
        bullets: [
          'Improved user experience by reducing form rendering time in React by 25% in a prototype by migrating from Redux Form to React Hook Form and coding new branching logic for conditional fields.',
          'Investigated sources of evaluation forms’ rendering inefficiencies by analyzing and documenting 3000 lines of code for current patient evaluation distribution method',
        ],
      },
    ],
  },
];

export const projects = [
  {
    title: 'Solar Savings Visualizer',
    subtitle: 'React, Typescript',
    description:
      'Created UI with dynamic graphs to visualize potential cost savings and ROI of solar panel installation using React, Typescript, recharts, and external APIs.',
    image: './project-1.gif',
    link: 'https://renewable-energy-visualizer.vercel.app/',
  },
  {
    title: 'Hourly',
    subtitle: 'PostgreSQL, Express, React, Node',
    description:
      "Developed web app's user routes and React components enhance office hours in a team of 6. Now a part of the Computer-Oriented Learning Lab at JHU",
    image: './project-1.gif',
    link: 'https://collab.cs.jhu.edu/projects/hourly/',
  },
];

export const socials = [
  {
    link: 'https://linkedin.com/in/alexcjwei',
    label: 'Visit my Linkedin',
    icon: SiLinkedin,
  },

  {
    link: 'https://github.com/alexcjwei',
    label: 'Visit my Github',
    icon: SiGithub,
  },
  {
    link: 'mailto:alexcj.wei@gmail.com',
    label: 'Email me',
    icon: SiGmail,
  },
];
