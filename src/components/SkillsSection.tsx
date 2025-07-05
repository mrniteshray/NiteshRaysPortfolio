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
    skills: ['Kotlin', 'Java', 'XML', 'SQL']
  },
  {
    title: 'UI Frameworks',
    icon: Smartphone,
    skills: ['Jetpack Compose', 'XML']
  },
  {
    title: 'Architecture & Concepts',
    icon: Layers,
    skills: [
      'MVVM',
      'Dependency Injection (Hilt)',
      'Coroutines',
      'API Integration'
    ]
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
    ]
  },
  {
    title: 'Cloud & Backend',
    icon: Cloud,
    skills: [
      'Firebase Firestore',
      'Firebase Realtime Database',
      'Firebase Auth',
      'Firebase Cloud Messaging (FCM)'
    ]
  },
  {
    title: 'Dev Tools',
    icon: TestTube,
    skills: [
      'Android Studio',
      'GitHub',
      'Firebase Console'
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section bg-muted/30">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="bg-background/60 text-base font-medium px-3 py-1 rounded-lg"
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