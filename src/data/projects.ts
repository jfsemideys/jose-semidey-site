import type {Content} from '../data/types/content'
  
  
  export const projects: Content[] = [
    {
      id: 1,
      title: 'Portafolio',
      description:
        'It is the present application that allows to expose the resume, projects, articles to prospect employers',
      tech: ['React', 'C#', '.NET Core', 'SqlServer', 'Typescript'],
      link: 'https://github.com/jfsemideys/jose-semidey-site',
      linkName: 'view code in github',
      categoryId: 1,
      details: [
        'Hosted and code in github.',
        'Responsive mobile first.',
        'Project section where all the projects are showed Cards.',
        'Project Detail section that shows de details of a project.',
        'Articles that shows all the writen articles by me and the link to them.',
        'Resume section that shows the education, experience and a download button.',
        'About section where shows additional information about me.',
        'Contact section where an email can be send to me filling a form and clicking submit..',
        'The contacy section has validation yup and form using formik',
        'A Chatbot that was trained to anwers question about me.'
      ]
    },
    {
      id: 2,
      title: 'Equipment Management',
      description:
        'Allows manage the communication and security equipment in several building in different cities',
      tech: ['React', 'C#', '.NET Core', 'Entity Framework', 'Sql Server', 'MUI', 'Fomik', 'yup'],
      link: '',
      categoryId: 2,
      details: [
        'Building section where information of the building is entered along with office spaces.',
        'The space section includes area, number of persons and workstations.',
        'Equipment section is divided in two tabs: Communication Equipments and Security Equipments',
        'On each equipment tab infomation about equipment type and quantity is in each space',
      ]
    },
    {
      id: 3,
      title: 'Evidence Tracker',
      description:
        'Manages the creation, storage and disposal of evidences used in investigation cases',
      tech: ['React', 'C#', '.NET Core', 'Entity Framework', 'Sql Server', 'javascript', 'Formik', 'yup'],
      link: '',
      categoryId: 6,
      details: [
        'The evidence items can be: drugs, alcohol, firearms and others.',
        'Record the building, office and shelf where the evidence is kept.',
        'Handles and track where the evidence is moved.',
        'Mananage the status of the evidence: submited, in process, returned, disposed',
        'Administration section to grand permission to the users',
        'Electronic signing section that allows the user to sign a form and download as pdf.',
      ]
    },
    {
      id: 4,
      title: 'Subpoena',
      description:
        'Manages the creation, change status of subpoenas',
      tech: ['React', 'C#', '.NET Core', 'Sql Server', 'javascript'],
      link: '',
      categoryId: 6,
      details: [
        'Manage the subpoenas.',
        'Allow to change the status of the subpoenas',
        'Admin section to grand permissin to the users.'

      ]
    },
    {
      id: 5,
      title: 'Hotline complains',
      description:
        'Allows the user to file a complain. Manages complain input, change of the status from submitted to closed',
      tech: ['React', 'C#', '.NET Core', 'Sql Server', 'javascript'],
      link: '',
      categoryId: 6,
      details: [
        'Receives input from users.',
        'The information received is user name, address, description of the complain, dates, witness.',
        'Manages the status of the complain such as submited, approved, returned and closed',
        'Admin section to assign roles to the users and assign permissions to the roles'
      ]
    },
    {
      id: 6,
      title: 'Project Tracking',
      description:
        'An application for the user to enter the time spent in they projects',
      tech: ['React', 'C#', '.NET Core', 'Entity Framework', 'Sql Server', 'javascript'],
      link: '',
      categoryId: 8,
      details: [
        'This part of other application,',
        'The user can enter the time daily and the project in which was worked.'
      ]
    },
    {
      id: 7,
      title: 'Synchonize Users',
      description:
        'A nightly batch job to take the users for one application and create or update the second application',
      tech: ['C#', '.NET Core', 'ServiceNow', 'Sql Server', 'Hangfire'],
      link: '',
      categoryId: 7,
      details: [
        'A batch job that runs nightly.',
        'Read information information from ServiceNow and update other database.',
        'If the user does not exists, create a new one.',
        'The job can be stopped and started using Hanfire page.'
      ]
    },
    {
      id: 8,
      title: 'Voice Out',
      description:
        'Allows to user express themselves and other user comments, like, unlike and rate with stars the complain',
      tech: ['React', 'C#', '.NET Core', 'PostgreSQL', 'Linux'],
      link: '',
      categoryId: 13,
      details: [
        'The user can enter any comment about anything.',
        'Other users can see the comment and rate it with stars from one to five.',
        'The comment of the user can be rated and commentd as well.'
      ]
    },
    {
      id: 9,
      title: 'Equipment Maintenance',
      description:
        'The application manages the maintenance of the equipments in facilities. It allows to track the maintenance of equipments in a given facility',
      tech: ['React', 'C#', '.NET Core', 'Entity Framework', 'Sql Server','NodeJs', 'Express'],
      link: '',
      categoryId: 9,
      details: [
        'The application allows a user to register and create a company.',
        'The user can loging and manage the facilities (create, edit and delete.',
        'The information of the facility is: name, address, area and more.',
        'A facility contains equipments.',
        'The equipment information are: name, brand, model, serial, capacity etc.',
        'The equipment has maintenances.',
        'The maintenance infomation are: name, type, frequecy etc',
        'A work order is created indicating the mantenance to be performed.',
        'The work order also indicate the dates and if the maintenance is has frequency, several order will be created.',
        'Each section has a area write comments.'
      ]
    },
    {
      id: 10,
      title: 'Church Donation System',
      description:
        'Built for Vanco, this application allows users to manage, track, and analyze donation campaigns. Integrated with Azure Blob Storage and Cosmos DB.',
      tech: ['React', 'C#', '.NET Core', 'Azure', 'Sql Server'],
      link: '',
      categoryId: 3,
      details: [
        'A register section for churchs register.',
        'An administration section that allows the church to create a donation campaign.',
        'The campain has a picture to motivate the users, a text talking about  the campain.',
        'The campain also has start date and the duration.',
        'A section with a basked and payment with credit card or bank account to the user donation,'
      ]
    },
    {
      id: 11,
      title: 'Users Authentication',
      description:
        'Created secure login, password recovery, and account features using Angular and React. Collaborated with AWS teams for cloud deployment.',
      tech: ['Vue', 'React', '.NET Core', 'AWS'],
      categoryId: 12,
      details: [
        'Authenticate the user that is going to do the taxes online',
        'Integrated with AWS.',
        'Allows password recuperation.',
        'Configures to factor authentication.',
        'Tracks user logins and failed logins.',
        'Allows identity verification with IDology.',
      ]
    },
    {
      id: 12,
      title: 'IT Infrastructure Evaluation',
      description:
        'A performance-optimized dashboard for Chevron to manage IT resources, built with React, .NET Core, and Azure cloud functions.',
      tech: ['React', 'C#', 'Azure Functions', 'Typescript', 'Sql Server'],
      categoryId: 4,
      details:[
        'Allow rating of aprox. 2500 applications.',
        'Each application is rates in diferents areas such functionality, performance, usability, security and compatibility.',
        'The evaluacion of each area is done with stars, from one to five',
        'The evaluation is done authomaticaly and manual',
        'Azure functions are used to get infomation about other applications and rate them',
        'Users also can evaluate the applications using the application',
        'Decision are made such what application to discontinue working, improved etc.'

      ]
    },
    {
      id: 13,
      title: 'Healthcare Management',
      description:
        'System for scheduling, diagnostics, and billing in mental health centers. Modernized a legacy app using Angular, Bootstrap, and Entity Framework.',
      tech: ['Angular', 'Bootstrap', 'Entity Framework', 'Sql Server'],
      categoryId: 5,
      details: [
        'Registering new patients.',
        'Login section.',
        'Schedule appointments.',
        'Practicioner diagnostic and comments',
        'Patient review,'
      ]
    },
  ];
  