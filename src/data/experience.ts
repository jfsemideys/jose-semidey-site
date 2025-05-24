
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
      'Developed and maintained backends, frontend and console applications for complains, subpoena, evidence tracking for supporting a agency.',
      'Used React, .NET/C#,  to deliver new features.',
      'Integrated Azure services like Cosmos DB and Blob Storage.',
    ],
  },{
      title: 'Senior Software Developer',
      company: 'Vanco',
      dates: 'June 2022 – Jun 2023',
      location: 'Remote',
      description: [
        'Developed and maintained applications for managing donation campaigns.',
        'Used React Hooks and .NET/C# to deliver new features.',
        'Integrated Azure services like Cosmos DB and Blob Storage.',
      ],
    },
    {
      title: 'Senior Software Engineer',
      company: 'TaxAct',
      dates: 'Jan 2021 – May 2022',
      location: 'Remote',
      description: [
        'Built authentication features (login, password recovery, MFA).',
        'Used Angular, React, and .NET Core.',
        'Collaborated with AWS infrastructure teams.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Chevron',
      dates: 'Apr 2018 – Dec 2020',
      location: 'Houston, TX',
      description: [
        'Created dashboards to manage IT infrastructure.',
        'Optimized performance of frontend and backend systems.',
      ],
    },
    {
      title: 'Senior Software Developer',
      company: 'Permian CC',
      dates: 'Mar 2017 – Apr 2018',
      location: 'Remote',
      description: [
        'Developed healthcare systems for scheduling and billing.',
        'Modernized legacy systems using Angular and EF.',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Kestra Financial',
      dates: 'Aug 2014 – Mar 2017',
      location: 'Austin, TX',
      description: [
        'Worked on financial systems for account management.',
        'Built APIs and integrated third-party services.',
      ],
    },
  ];