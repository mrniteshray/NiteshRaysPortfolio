
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-lg font-bold">
              Nitesh<span className="text-primary">.Kt</span>
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Android Developer
            </p>  
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link 
              to="/privacypolicy" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <div className="text-sm text-muted-foreground">
              <p>© {year} Nitesh Ray. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
