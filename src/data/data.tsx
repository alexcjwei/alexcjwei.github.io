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
        bullets: ['Sup brav'],
      },
    ],
  },
  {
    company: 'JHU CS Department',
    website: 'https://www.cs.jhu.edu/',
    image: '../data/logo-Meta.png',
    roles: [
      {
        role: 'Course Assistant - Artificial Intelligence (601.464/664)',
        date: 'January 2023 - May 2023',
        location: 'Baltimore, MD',
        bullets: ['Sup brav'],
      },
      {
        role: 'Course Assistant - Computer System Fundamentals (601.229)',
        date: 'August 2020 - May 2021, January 2022 - May 2022',
        location: 'Baltimore, MD (Remote)',
        bullets: ['Sup brav'],
      },
      {
        role: 'Course Assistant - Gateway Java (500.112)',
        date: 'January 2020 - May 2020',
        location: 'Baltimore, MD (Remote)',
        bullets: ['Sup brav'],
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
        bullets: ['Sup brav'],
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
        bullets: ['Sup brav'],
      },
    ],
  },
];

export const projects = [
  {
    title: 'Temp',
    subtitle: 'MERN Stack',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    image: './project-1.gif',
    link: 'https://alexcjwei.github.io',
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
