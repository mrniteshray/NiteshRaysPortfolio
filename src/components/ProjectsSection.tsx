import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Github, Link, Play, ArrowRight } from 'lucide-react';

const androidProjects = [
  {
    title: 'Blockit',
    longDesc: 'Blockit is an open-source Android app built to help you block distractions like short videos, apps, and websites — so you can focus on what actually matters.',
    image: 'blockit',
    tags: ['Kotlin', 'Jetpack Compose', 'AccessibilityService API', 'MVVM', 'Coroutines'],
    github: 'https://github.com/mrniteshray/Blockit',
    playStoreUrl: undefined,
    downloadlink: "https://github.com/mrniteshray/Blockit/releases/latest"
  },
  {
    title: 'ArogyaSathi',
    longDesc: 'AI-powered voice health assistant that helps users ask health-related queries using voice in multiple languages with real-time responses.',
    image: 'arogyaSathi',
    tags: ['Kotlin','Jetpack Compose', 'Speech-To-Text', 'Text-to-Speech', 'Firebase','MVVM', 'Coroutines', 'Gemini API'],
    github: 'https://github.com/mrniteshray/ArogyaSathi',
    playStoreUrl: undefined,
    downloadlink: "https://github.com/mrniteshray/ArogyaSathi/releases/download/v1/ArogyaSathi.apk"    
  },
  {
    title: 'MyWallet',
    longDesc: 'MyWallet is a personal finance tracking Android app designed to help users efficiently manage their expenses.',
    image: 'mywallet',
    tags: ['Kotlin','XML', 'Firebase','AndroidMP Chart Library','Google SignIn'],
    github: 'https://github.com/mrniteshray/MyWallet',
    playStoreUrl: undefined,
    downloadlink: "https://github.com/mrniteshray/MyWallet/releases/download/v1/MyWallet.apk"    
  }
  ,
  {
    title: 'HandWritefy',
    longDesc: 'Helps students and professionals save hours by generating realistic handwritten pages from digital text with customizable handwriting styles.',
    image: 'handwritefy',
    tags: ['Kotlin','Jetpack Compose', 'AndroidView', 'MediaStore','MVVM'],
    github: 'https://github.com/mrniteshray/HandWritefy',
    playStoreUrl: undefined,
    downloadlink: "https://github.com/mrniteshray/HandWritefy/releases/download/v1/HandWritefy.apk"    
  }
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={`/${project.image.toLowerCase().replace(/ /g, '')}.png`}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}></div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-2xl">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground">{project.longDesc}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <Badge 
              key={idx} 
              variant="secondary" 
              className="text-xs bg-secondary/50 hover:bg-secondary/70 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-wrap gap-2 mt-auto">
        <div className="flex gap-2 w-full">
          {project.downloadlink && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={project.downloadlink} target="_blank" rel="noopener noreferrer">
                <Download size={16} className="mr-2" /> Download APK
              </a>
            </Button>
          )}
          
          {project.github && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" /> Code
              </a>
            </Button>
          )}
        </div>
        
        {project.playStoreUrl && (
          <Button size="sm" asChild className="w-full mt-2">
            <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
              <Play size={16} className="mr-2" /> Get on Play Store
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section bg-gradient-to-b from-muted/10 to-muted/20 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 inline-block">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Some of my best work showcasing Android development expertise
          </p>
        </div>

        <Tabs defaultValue="android" className="w-full">
          <TabsList className="grid w-full grid-cols-1 max-w-xs mx-auto mb-8">
            <TabsTrigger value="android">Android Projects</TabsTrigger>
          </TabsList>
          
          <TabsContent value="android">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {androidProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Want to explore more of my projects?
              </p>
              <Button variant="outline" asChild className="group">
                <a 
                  href="https://github.com/mrniteshray" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github size={18} className="mr-2" /> 
                  View All Projects
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
