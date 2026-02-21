import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Let's work together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm currently available for freelance work and open to new opportunities. 
            If you have a project in mind or just want to say hi, get in touch!
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Button asChild size="lg" className="rounded-full px-8 h-12 text-base">
              <a href={`mailto:${portfolioData.contact.email}`}>
                <Mail className="mr-2 h-4 w-4" /> Say Hello
              </a>
          </Button>

          <div className="flex items-center gap-6 mt-8">
            <a 
              href={portfolioData.contact.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full"
            >
              <Github size={24} />
            </a>
            <a 
              href={portfolioData.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full"
            >
              <Linkedin size={24} />
            </a>
          </div>
          
           <p className="text-sm text-muted-foreground mt-8">
            © {new Date().getFullYear()} Nitesh Ray. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;