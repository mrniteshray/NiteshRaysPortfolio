import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Github, Play, Star, TrendingUp, ExternalLink, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';


const androidProjects = [
  {
    title: 'FlowBit',
    longDesc: 'FlowBit boosts productivity with a Pomodoro timer and focus sounds. It helps break scroll addiction by blocking Reels, Shorts, distracting apps, and websites, allowing you to reclaim your time.',
    image: 'flowbit',
    tags: ['Kotlin', 'Jetpack Compose', 'AccessibilityService API', 'MVVM', 'Coroutines'],
    github: 'https://github.com/mrniteshray/Blockit',
    playStoreUrl: "https://play.google.com/store/apps/details?id=xcom.niteshray.xapps.xblockit",
    downloadlink: "https://github.com/mrniteshray/Blockit/releases/latest",
    featured: true,
    downloads: '100+'
  },
  {
    title: 'SliqSwipe',
    longDesc: 'Tinder for your gallery! Delete unwanted photos, videos, and audios by swiping left, keep by swiping right. Organize everything month-wise for a cleaner device.',
    image: 'sliqswipe',
    tags: ['Kotlin', 'Jetpack Compose', 'MediaStore API', 'MVVM', 'Coroutines'],
    github: 'https://github.com/mrniteshray/SliqSwipe',
    playStoreUrl: "https://play.google.com/store/apps/details?id=xcom.niteshray.xapps.sliqswipe",
    downloadlink: "https://github.com/mrniteshray/SliqSwipe/releases/latest",
    featured: true,
    downloads: '50+'
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
  },
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
    <div 
      className="group relative flex flex-col md:flex-row gap-6 md:gap-8 items-start opacity-0 animate-fade-in-up" 
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      {/* Image Section */}
      <div className="w-full md:w-5/12 lg:w-1/2 relative overflow-hidden rounded-xl border border-border/40 bg-muted/30 shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:border-primary/20">
        <div className="aspect-video md:aspect-[4/3] lg:aspect-video relative">
            {/* Achievement Badges */}
            {project.featured && (
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                {project.downloads && (
                <div className="flex items-center gap-1.5 bg-background/80 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm border border-border/50">
                    <TrendingUp size={12} className="text-green-500" />
                    <span className="text-foreground text-[10px] font-semibold tracking-wide uppercase">{project.downloads} Downloads</span>
                </div>
                )}
            </div>
            )}
            
            <img
            src={`/${project.image.toLowerCase().replace(/ /g, '')}.png`}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
        </div>
      </div>
      
      {/* Content Section */}
      <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col justify-center space-y-4 py-2">
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed text-base">
            {project.longDesc}
          </p>
        </div>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <Badge
              key={idx}
              variant="secondary"
              className="px-2.5 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent transition-colors duration-200 rounded-md"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          {project.playStoreUrl && (
            <Button 
              size="sm" 
              className="rounded-full px-5 font-medium bg-foreground text-background hover:bg-foreground/90 transition-all"
              asChild
            >
              <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                <Play size={14} className="mr-2 fill-current" /> 
                Play Store
              </a>
            </Button>
          )}
          
          {project.github && (
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full px-5 font-medium border-border/60 hover:border-foreground/20 hover:bg-secondary/50"
              asChild 
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github size={14} className="mr-2" /> 
                Code
              </a>
            </Button>
          )}

          {project.downloadlink && !project.playStoreUrl && (
            <Button 
                variant="outline" 
                size="sm"
                className="rounded-full px-5 font-medium border-border/60 hover:border-foreground/20 hover:bg-secondary/50"
                asChild
            >
                <a href={project.downloadlink} target="_blank" rel="noopener noreferrer">
                    <Download size={14} className="mr-2" /> 
                    APK
                </a>
            </Button>
            )}
        </div>
      </div>
    </div>
  );
};


const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-muted/10">      
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <Badge variant="outline" className="px-3 py-1 text-[10px] tracking-wider uppercase border-primary/20 text-primary/80">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A collection of applications focusing on productivity and user experience.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {androidProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-20">
          <Button variant="ghost" className="group rounded-full text-muted-foreground hover:text-foreground" asChild>
                <a href="https://github.com/mrniteshray" target="_blank" rel="noopener noreferrer">
                    View more on GitHub <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
           </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
