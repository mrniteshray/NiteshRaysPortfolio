import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Code, 
  Cloud, 
  Settings,
  Layers,
  TestTube
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Kotlin', 'Java', 'XML', 'SQL'],
    color: 'text-blue-500'
  },
  {
    title: 'UI Frameworks',
    icon: Smartphone,
    skills: ['Jetpack Compose', 'XML'],
    color: 'text-purple-500'
  },
  {
    title: 'Architecture & Concepts',
    icon: Layers,
    skills: [
      'MVVM',
      'Dependency Injection (Hilt)',
      'Coroutines',
      'API Integration'
    ],
    color: 'text-emerald-500'
  },
  {
    title: 'Libraries & Tools',
    icon: Settings,
    skills: [
      'Android SDK',
      'Retrofit',
      'Glide',
      'Coil',
      'Room',
      'Hilt',
      'Firebase',
      'Git',
      'GitHub',
      'TensorFlow Lite'
    ],
    color: 'text-amber-500'
  },
  {
    title: 'Cloud & Backend',
    icon: Cloud,
    skills: [
      'Firebase Firestore',
      'Firebase Realtime Database',
      'Firebase Auth',
      'Firebase Cloud Messaging (FCM)'
    ],
    color: 'text-rose-500'
  },
  {
    title: 'Dev Tools',
    icon: TestTube,
    skills: [
      'Android Studio',
      'GitHub',
      'Firebase Console'
    ],
    color: 'text-indigo-500'
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build exceptional Android applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-md transition-all duration-300 border border-border/50 bg-card hover:border-primary/20"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className={`p-2.5 rounded-lg bg-muted/50 group-hover:bg-primary/5 transition-colors duration-300`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="font-normal text-xs px-2.5 py-1 bg-muted/30 text-muted-foreground border border-transparent hover:border-primary/20 transition-all duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;