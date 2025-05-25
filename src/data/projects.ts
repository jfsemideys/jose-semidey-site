import type {Content} from '../data/types/content'
  
  
  export const projects: Content[] = [
    {
      title: 'Portafolio',
      description:
        'It is the present application that allows to expose the resume, projects, articles to prospect employers',
      tech: ['React', 'C#', '.NET Core', 'SqlServer'],
      link: 'https://github.com/jfsemideys/jose-semidey-site',
      linkName: 'view code in github',
      categoryId: 1,
    },
    {
      title: 'Equipment..',
      description:
        'Allows manage the communication and security equipment in several building in different cities',
      tech: ['React', 'C#', '.NET Core', 'SqlServer'],
      link: '',
      categoryId: 2,
    },
    {
      title: 'Evidence Tracker',
      description:
        'Manages the creation, storage and disposal of evidences used in investigation cases',
      tech: ['React', 'C#', '.NET Core', 'SqlServer'],
      link: '',
      categoryId: 6,
    },
    {
      title: 'Subpoena',
      description:
        'Manages the creation, change status of subpoenas',
      tech: ['React', 'C#', '.NET Core', 'SqlServer'],
      link: '',
      categoryId: 6,
    },
    {
      title: 'Hotline complains',
      description:
        'Allows the user to file a complain. Manages complain input, change of the status from submitted to closed',
      tech: ['React', 'C#', '.NET Core', 'SqlServer'],
      link: '',
      categoryId: 6,
    },
    {
      title: 'Project Tracking',
      description:
        'An application for the user to enter the time spent in they projects',
      tech: ['React', 'C#', '.NET Core', 'SqlServer'],
      link: '',
      categoryId: 8,
    },
    {
      title: 'Synchonize Users',
      description:
        'A nightly batch job to take the users for one application and create or update the second application',
      tech: ['C#', '.NET Core', 'ServiceNow', 'SqlServer'],
      link: '',
      categoryId: 7,
    },
    {
      title: 'Complain System',
      description:
        'Allows to user express themselves and other user comments, like, unlike and rate with stars the complain',
      tech: ['React', 'C#', '.NET Core', 'PostgreSQL', 'Linux'],
      link: '',
      categoryId: 6,
    },
    {
      title: 'Maintenance..',
      description:
        'The application manages the maintenance of the equipments in facilities. It allows to track the maintenance of equipments in a given facility',
      tech: ['React', 'C#', '.NET Core', 'PostgreSQL'],
      link: '',
      categoryId: 9,
    },
    {
      title: 'Donation..',
      description:
        'Built for Vanco, this application allows users to manage, track, and analyze donation campaigns. Integrated with Azure Blob Storage and Cosmos DB.',
      tech: ['React', 'C#', '.NET Core', 'Azure'],
      link: '',
      categoryId: 3,
    },
    {
      title: 'Authentication System',
      description:
        'Created secure login, password recovery, and account features using Angular and React. Collaborated with AWS teams for cloud deployment.',
      tech: ['Angular', 'React', '.NET Core', 'AWS'],
      categoryId: 12,
    },
    {
      title: 'IT Infrastructure..',
      description:
        'A performance-optimized dashboard for Chevron to manage IT resources, built with React, .NET Core, and Azure cloud functions.',
      tech: ['React', 'C#', 'Azure Functions'],
      categoryId: 4,
    },
    {
      title: 'Healthcare Management',
      description:
        'System for scheduling, diagnostics, and billing in mental health centers. Modernized a legacy app using Angular, Bootstrap, and Entity Framework.',
      tech: ['Angular', 'Bootstrap', 'Entity Framework'],
      categoryId: 5,
    },
  ];
  