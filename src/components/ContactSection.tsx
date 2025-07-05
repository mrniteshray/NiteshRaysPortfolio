import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Twitter, Mail, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section bg-gradient-to-b from-muted/10 to-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 inline-block">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on your next Android project
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
              Let's work together!
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm currently open to freelance Android development opportunities and internships. 
              If you're building something cool with Jetpack Compose or modern Android technologies, 
              I'd love to hear about it!
            </p>
            
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium text-primary mb-1 flex items-center">
                  <Mail className="w-5 h-5 mr-2" /> Email me at
                </h4>
                <a 
                  href="mailto:niteshr14321@gmail.com" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  niteshr14321@gmail.com
                </a>
              </div>
              
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium text-primary mb-1">Currently seeking</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Android Internships
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Freelance Projects
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="font-medium mb-3">Connect with me:</p>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/mrniteshray" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://x.com/_im_nitesh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/niteshray-51bb85318" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <Card className="border border-muted-foreground/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center">
                <MessageSquare className="w-6 h-6 mr-2 text-primary" />
                Let's Connect & Build Something Awesome
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span className="text-muted-foreground">
                    Currently open for <span className="font-medium text-foreground">Android Internships</span> and <span className="font-medium text-foreground">freelance Android projects</span>.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span className="text-muted-foreground">
                    Working on something exciting with <span className="font-medium text-foreground">Jetpack Compose</span> or modern Android tech? Let's collaborate �
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span className="text-muted-foreground">
                    Always up for tech discussions, collaborations, or just chatting about <span className="font-medium text-foreground">clean code</span> and architecture ☕
                  </span>
                </li>
              </ul>
              <Button 
                asChild 
                className="w-full h-12 text-lg bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all hover:shadow-lg"
              >
                <a href="mailto:niteshr14321@gmail.com">
                  <Mail className="w-5 h-5 mr-2" /> Send me a message
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;