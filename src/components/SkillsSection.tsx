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
    <section id="skills" className="section bg-gradient-to-b from-muted/10 to-muted/30 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 inline-block">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build exceptional Android applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-muted-foreground/10 hover:border-primary/20"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-primary/10 to-${category.color}/10`}>
                    <category.icon className={`w-7 h-7 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="bg-background/80 hover:bg-primary/10 transition-colors text-foreground/90 font-medium px-3 py-1.5 rounded-lg border-muted-foreground/20 shadow-sm"
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