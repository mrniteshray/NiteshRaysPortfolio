import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Let's collaborate on your next Android project. I'm always interested in discussing new opportunities and innovative ideas.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted/50 rounded-full">
            <Mail size={20} className="text-muted-foreground" />
            <a 
              href={`mailto:${portfolioData.contact.email}`}
              className="text-foreground hover:text-primary transition-colors"
            >
              {portfolioData.contact.email}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href={portfolioData.contact.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href={portfolioData.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button asChild size="lg" className="px-8">
              <a href={`mailto:${portfolioData.contact.email}`}>
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;