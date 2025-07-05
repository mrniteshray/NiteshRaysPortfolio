
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Android Developer";
  const typingSpeed = 100; // milliseconds per character
  const deletingSpeed = 50; // milliseconds per character
  const pauseTime = 2000; // pause time at full text

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (displayText !== fullText) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, pauseTime / 2);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping]);

  return (
    <div className="min-h-screen flex flex-col justify-center pt-20 pb-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-primary font-mono font-medium">Hi, my name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Nitesh Ray
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muted-foreground leading-tight h-14">
              <span className="inline-block">{displayText}</span>
              <span className="inline-block w-0.5 h-7 bg-primary ml-1 animate-blink"></span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I specialize in building modern Android apps with <span className="highlight">Kotlin</span> and <span className="highlight">Jetpack Compose</span>,
              creating elegant, scalable, and user-friendly mobile experiences with a focus on
              <span className="highlight"> clean architecture</span> and best practices.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild>
                <a href="#projects">
                  View Projects <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="https://github.com/mrniteshray/" target="_blank" rel="noopener noreferrer" 
                className="social-icon bg-secondary hover:bg-primary hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://x.com/_im_nitesh" target="_blank" rel="noopener noreferrer" 
                className="social-icon bg-secondary hover:bg-primary hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nitesh-ray-51bb85318/" target="_blank" rel="noopener noreferrer" 
                className="social-icon bg-secondary hover:bg-primary hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-kotlin to-android p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <code className="text-primary font-mono text-sm sm:text-base p-6 text-center">
                    @Composable<br />
                    fun NiteshPortfolio() {"{"}<br />
                    &nbsp;&nbsp;// build(Android Apps 🚀)<br />
                    &nbsp;&nbsp;// growEveryday()<br />
                    {"}"}
                  </code>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-compose flex items-center justify-center text-white">
                <span className="font-bold">Kotlin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
