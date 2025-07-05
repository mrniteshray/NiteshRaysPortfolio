import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Github, Link, Play } from 'lucide-react';

const androidProjects = [
  {
    title: 'Blockit',
    longDesc: 'Blockit is an open-source Android app built to help you block distractions like short videos, apps, and websites — so you can focus on what actually matters.',
    image: 'blockit',
    tags: ['Kotlin', 'Jetpack Compose', 'AccessibilityService API', 'MVVM', 'Coroutines'],
    github: 'https://github.com/mrniteshray/Blockit',
    playStoreUrl: undefined,
    downloadlink : "https://github.com/mrniteshray/Blockit/releases/download/v1/Blockit.apk"
  },
  {
    title: 'ArogyaSathi',
    longDesc: 'ArogyaSathi is an AI-powered voice health assistant that that helps users ask health-related queries using voice in Multiple Languages.',
    image: 'arogyaSathi',
    tags: ['Kotlin','Jetpack Compose', 'Speech-To-Text API', 'Text-to-Speech API', 'Firebase','MVVM', 'Coroutines' , 'Gemini API'],
    github: 'https://github.com/mrniteshray/ArogyaSathi',
    playStoreUrl: undefined,
    downloadlink : "https://github.com/mrniteshray/ArogyaSathi/releases/download/v1/ArogyaSathi.apk"    
  },
  {
    title: 'HandWritefy',
    longDesc: 'Handwritefy helps students and professionals save hours of time by generating realistic handwritten pages from digital Handwritten style text',
    image: 'handwritefy',
    tags: ['Kotlin','Jetpack Compose', 'AndroidView', 'MediaStore','MVVM'],
    github: 'https://github.com/mrniteshray/HandWritefy',
    playStoreUrl: undefined,
    downloadlink : "https://github.com/mrniteshray/HandWritefy/releases/download/v1/HandWritefy.apk"    
  }
];

const ProjectGrid = ({ projects, githubUrl }) => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {projects.map((project, index) => (
        <Card key={index} className="project-card flex flex-col h-full">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
              <img 
                src={`/${project.image.toLowerCase().replace(/ /g, '')}.png`} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.longDesc}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.tags.map((tag, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">{tag}</Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
              <a href={project.downloadlink} target="_blank" rel="noopener noreferrer">
                <Download size={22} className="mr-1" />
              </a>
          </CardFooter>

          <CardFooter className="flex gap-2">
            {project.github && (
              <Button variant="outline" size="sm" asChild className="flex-1">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="mr-1" /> Github
                </a>
              </Button>
            )}
          </CardFooter>
          <CardFooter className="flex gap-2">
            {project.playStoreUrl && (
              <Button variant="outline" size="sm" asChild className="flex-1">
                <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                  <Play size={16} className="mr-1" /> Available on PlayStore
                </a>
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>

    <div className="text-center">
      <p className="text-muted-foreground mb-4">
        Want to see more of my work?
      </p>
      <Button variant="outline" asChild>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Github size={18} className="mr-2" /> View All Projects
        </a>
      </Button>
    </div>
  </>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="section bg-muted/30">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <Tabs defaultValue="android" className="w-full">
          
          <TabsContent value="android">
            <ProjectGrid 
              projects={androidProjects} 
              githubUrl="https://github.com/mrniteshray"
            />
          </TabsContent>
          
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
