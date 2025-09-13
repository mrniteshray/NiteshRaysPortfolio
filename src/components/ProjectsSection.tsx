import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Github, Play } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const androidProjects = [
  {
    title: 'Blockit',
    longDesc: 'Blockit is an open-source Android app built to help you block distractions like short videos, apps, and websites — so you can focus on what actually matters.',
    image: 'blockit',
    tags: ['Kotlin', 'Jetpack Compose', 'AccessibilityService API', 'MVVM', 'Coroutines'],
    github: 'https://github.com/mrniteshray/Blockit',
    playStoreUrl: "https://play.google.com/store/apps/details?id=xcom.niteshray.xapps.xblockit",
    downloadlink: "https://github.com/mrniteshray/Blockit/releases/latest"
  },
  {
    title: 'ArogyaSathi',
    longDesc: 'AI-powered voice health assistant that helps users ask health-related queries using voice in multiple languages with real-time responses.',
    image: 'arogyasathi',
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

const ProjectCard = ({ project, index }) => {
  return (
    <Card className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}>
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="aspect-video overflow-hidden bg-muted/20">
          <img
            src={`/${project.image.toLowerCase().replace(/ /g, '')}.png`}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content Section */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.longDesc}
            </p>
          </div>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="text-xs px-2 py-1 bg-secondary/60"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <Badge variant="outline" className="text-xs px-2 py-1">
                +{project.tags.length - 4}
              </Badge>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.github && (
              <Button variant="outline" size="sm" asChild className="h-8 px-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={14} className="mr-1.5" /> 
                  Code
                </a>
              </Button>
            )}
            
            {project.playStoreUrl && (
              <Button size="sm" asChild className="h-8 px-3 bg-primary hover:bg-primary/90">
                <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                  <Play size={14} className="mr-1.5" /> 
                  Play Store
                </a>
              </Button>
            )}
            
            {project.downloadlink && (
              <Button variant="outline" size="sm" asChild className="h-8 px-3">
                <a href={project.downloadlink} target="_blank" rel="noopener noreferrer">
                  <Download size={14} className="mr-1.5" /> 
                  APK
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Android applications built with modern technologies and clean architecture
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {androidProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" asChild className="group">
            <a 
              href="https://github.com/mrniteshray" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Github size={18} className="mr-2" /> 
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
