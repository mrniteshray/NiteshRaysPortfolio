import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolioData';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            {portfolioData.bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;