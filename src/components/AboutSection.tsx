import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Smartphone, Code, Laptop, Rocket } from 'lucide-react';

const services = [
  {
    title: 'Modern Android Apps',
    description: 'Build elegant and scalable Android apps with Kotlin and Jetpack Compose',
    icon: Smartphone,
    color: 'text-blue-500'
  },
  {
    title: 'Clean Architecture',
    description: 'Structured apps with MVVM, clean architecture, and proper separation of concerns',
    icon: Code,
    color: 'text-emerald-500'
  },
  {
    title: 'Firebase Integration',
    description: 'Implement real-time features with Authentication, Firestore, and Cloud Messaging',
    icon: Laptop,
    color: 'text-amber-500'
  },
  {
    title: 'API Integration',
    description: 'Connect apps with RESTful APIs using Retrofit and efficient data flow patterns',
    icon: Rocket,
    color: 'text-purple-500'
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="section bg-gradient-to-b from-muted/10 to-muted/20 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 inline-block">
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate Android developer creating exceptional mobile experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/90">
              <span className="font-semibold text-primary">Hey, I'm Nitesh</span> — a passionate Android Developer specializing in building modern, clean mobile apps using Kotlin and Jetpack Compose.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              Over time, I've worked on diverse Android projects — from productivity tools to AI-based assistants — with a focus on clean architecture, smooth UI/UX, and maintainable code. I enjoy working with modern tech stacks like Hilt, Coroutines, Firebase, and MVVM.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Kotlin</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Jetpack Compose</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Clean Architecture</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Firebase</span>
            </div>
          </div>
          
          <Card className="border border-muted-foreground/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">My Expertise</CardTitle>
              <CardDescription className="text-muted-foreground">
                Core services and technical capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-start p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200 group"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br from-primary/10 to-${service.color}/10 mr-4 group-hover:scale-105 transition-transform`}>
                      <service.icon className={`w-5 h-5 ${service.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-1.5">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;