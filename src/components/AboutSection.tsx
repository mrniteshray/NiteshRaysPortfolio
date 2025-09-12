import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolioData';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            About
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {portfolioData.bio}
          </p>
        </div>

        {/* Skills */}
        <div className="space-y-8">
          <h3 className="text-xl font-medium text-center text-foreground">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {portfolioData.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-muted/50 text-muted-foreground rounded-full text-sm transition-colors hover:bg-muted/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;