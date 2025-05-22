export type Article = {
    title: string;
    description: string;
    link: string;
  };
  
  export const articles: Article[] = [
    {
      title: 'Understanding Exceptions in C#',
      description: 'In C# programming, exceptions are a fundamental part of error handling...',
      link: 'https://www.linkedin.com/pulse/understanding-exceptions-c-best-practices-re-throwing-jose-semidey-e1icc',
    },
    {
      title: 'Managing React State Across Page Refreshing',
      description: 'Persisting State Across Page Refreshes in Redux and Context API Using Session and Local Storage',
      link: 'https://www.linkedin.com/pulse/persisting-state-across-page-refreshes-redux-context-api-jose-semidey-dqiec',
    },
    {
      title: 'Understanding yield in C#: A Deep Dive into Lazy Iteration and State Management',
      description: 'The yield keyword in C# is a powerful feature that enables developers to write more efficient and cleaner code when working with collections or sequences. By understanding how yield works...',
      link: 'https://www.linkedin.com/pulse/understanding-yield-c-deep-dive-lazy-iteration-state-jose-semidey-jqykc',
    },
    {
      title: 'Redux vs. Context API',
      description: 'When building React applications, managing state effectively is critical to ensuring a smooth and predictable user experience. Two popular approaches to state management in React are Redux and...',
      link: 'https://www.linkedin.com/pulse/redux-vs-context-api-jose-semidey-sd2cc',
    },
    // Add more as needed
  ];
  