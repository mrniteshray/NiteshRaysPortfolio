
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Code, Laptop, Rocket } from 'lucide-react';

const services = [
  {
    title: 'Modern Android Apps',
    description: 'Build elegant and scalable Android apps with Kotlin and Jetpack Compose',
    icon: Smartphone
  },
  {
    title: 'Clean Architecture & MVVM Implementation',
    description: 'I structure apps with clean architecture, MVVM, and proper separation of concerns for better maintainability and testability',
    icon: Code
  },
  {
    title: 'Firebase Integration',
    description: 'I implement real-time features using Firebase services like Authentication, Firestore, Cloud Messaging, and more.',
    icon: Laptop
  },
  {
    title: ' API Integration',
    description: 'I connect apps with RESTful APIs using Retrofit, Coroutines, and handle data flow efficiently across layers',
    icon: Rocket
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="section bg-muted/30">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg mb-4">
            Hey, I’m Nitesh — a passionate Android Developer who specializes in building modern, clean mobile apps using Kotlin and Jetpack Compose. 
            </p>
            <p className="mb-4">
            Over the time, I’ve worked on a variety of Android projects — from productivity tools to AI-based assistants — always with a focus on clean architecture, smooth UI/UX, and writing maintainable code. I enjoy working with modern tech stacks like Hilt, Coroutines, Firebase, and MVVM.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <Card>
              <CardHeader>
                <CardTitle>What I Do</CardTitle>
                <CardDescription>My core services and expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="mt-0.5 bg-primary/10 p-2 rounded-md text-primary">
                        <service.icon size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{service.title}</h3>
                        <p className="text-xs text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
