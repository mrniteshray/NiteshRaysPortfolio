
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-sm text-muted-foreground">
          © {year} Nitesh Ray. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground font-medium">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
