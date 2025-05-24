import React from 'react';

export type ExternalLinkPros = {
    href: string;
    children: React.ReactNode;
  };
const ExternalLink: React.FC<ExternalLinkPros> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default ExternalLink;