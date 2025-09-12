
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-sm text-muted-foreground">
          © {year} Nitesh Ray. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
