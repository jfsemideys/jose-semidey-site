export type Project = {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
  };
  
  export const projects: Project[] = [
    {
      title: 'Donation Management System',
      description:
        'Built for Vanco, this application allows users to manage, track, and analyze donation campaigns. Integrated with Azure Blob Storage and Cosmos DB.',
      tech: ['React', 'C#', '.NET Core', 'Azure'],
      github: '',
    },
    {
      title: 'Authentication System',
      description:
        'Created secure login, password recovery, and account features using Angular and React. Collaborated with AWS teams for cloud deployment.',
      tech: ['Angular', 'React', '.NET Core', 'AWS'],
    },
    {
      title: 'IT Infrastructure Dashboard',
      description:
        'A performance-optimized dashboard for Chevron to manage IT resources, built with React, .NET Core, and Azure cloud functions.',
      tech: ['React', 'C#', 'Azure Functions'],
    },
    {
      title: 'Healthcare Management System',
      description:
        'System for scheduling, diagnostics, and billing in mental health centers. Modernized a legacy app using Angular, Bootstrap, and Entity Framework.',
      tech: ['Angular', 'Bootstrap', 'Entity Framework'],
    },
  ];
  