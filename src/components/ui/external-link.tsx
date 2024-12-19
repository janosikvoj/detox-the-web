import React from 'react';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="font-medium text-primary underline underline-offset-4 decoration-transparent hover:decoration-current transition-all mr-2 inline-block"
      target="_blank"
    >
      <ExternalLinkIcon
        className="mr-0.5 inline align-text-bottom mt-2"
        size={16}
      />
      {children}
    </a>
  );
};

export default ExternalLink;
