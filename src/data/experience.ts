export type Experience = {
  title: string;
  company: string;
  dates: string;
  location: string;
  description: string[];
};

export const experience: Experience[] = [
  {
    title: 'Senior Software Developer',
    company: 'ProSphere',
    dates: 'June 2023 – Present',
    location: 'Remote',
    description: [
      'Designed and implemented full-stack solutions supporting complaint management, subpoena processing, and evidence tracking for a government agency.',
      'Led the development of scalable features using React and .NET/C# to enhance user experience and system reliability.',
      'Integrated Azure services, including Cosmos DB and Blob Storage, to optimize data storage and cloud operations.',
    ],
  },
  {
    title: 'Senior Software Developer',
    company: 'Vanco',
    dates: 'June 2022 – June 2023',
    location: 'Remote',
    description: [
      'Engineered and maintained donation campaign management platforms to streamline user contributions and reporting.',
      'Utilized React Hooks and .NET/C# to implement dynamic, responsive user interfaces and backend APIs.',
      'Connected Azure components such as Cosmos DB and Blob Storage to ensure robust, cloud-native data solutions.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'TaxAct',
    dates: 'January 2021 – May 2022',
    location: 'Remote',
    description: [
      'Developed secure authentication modules, including login, multi-factor authentication (MFA), and password recovery workflows.',
      'Contributed to frontend development using Angular and React, and backend services with .NET Core.',
      'Collaborated with AWS infrastructure teams to ensure performance, scalability, and security across cloud deployments.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Chevron',
    dates: 'April 2018 – December 2020',
    location: 'Houston, TX',
    description: [
      'Designed and built internal dashboards for real-time IT infrastructure monitoring and management.',
      'Enhanced performance of web and backend systems through code optimization and architectural improvements.',
    ],
  },
  {
    title: 'Senior Software Developer',
    company: 'Permian CC',
    dates: 'March 2017 – April 2018',
    location: 'Remote',
    description: [
      'Built healthcare applications to manage patient scheduling and billing, improving operational efficiency.',
      'Modernized legacy systems by implementing Angular frontends and Entity Framework backends, reducing maintenance costs.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Kestra Financial',
    dates: 'August 2014 – March 2017',
    location: 'Austin, TX',
    description: [
      'Developed financial tools for account and portfolio management to improve client services and data accuracy.',
      'Created RESTful APIs and integrated third-party platforms, enhancing platform extensibility and interoperability.',
    ],
  },
];
