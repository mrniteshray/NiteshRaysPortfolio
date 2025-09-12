import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Name */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-foreground">
            Nitesh Ray
          </h1>
          <h2 className="text-xl sm:text-2xl font-normal text-muted-foreground">
            Android Developer
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Building modern Android applications with Kotlin and Jetpack Compose. 
          Focused on clean architecture, elegant design, and exceptional user experiences.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button asChild className="w-full sm:w-auto px-8 h-12">
            <a href="#projects">
              View Projects <ArrowRight size={18} className="ml-2" />
            </a>
          </Button>
          <Button variant="outline" asChild className="w-full sm:w-auto px-8 h-12">
            <a href="mailto:niteshr14321@gmail.com">
              Get In Touch
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-8">
          <a 
            href="https://github.com/mrniteshray" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/nitesh-ray-51bb85318" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:niteshr14321@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;