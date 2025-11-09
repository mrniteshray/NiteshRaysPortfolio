import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Github, Play, Star, TrendingUp, ExternalLink, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';


const androidProjects = [
  {
    title: 'Blockit',
    longDesc: 'Blockit is an open-source Android app built to help you block distractions like short videos, apps, and websites — so you can focus on what actually matters.',
    image: 'blockit',
    tags: ['Kotlin', 'Jetpack Compose', 'AccessibilityService API', 'MVVM', 'Coroutines'],
    github: 'https://github.com/mrniteshray/Blockit',
    playStoreUrl: "https://play.google.com/store/apps/details?id=xcom.niteshray.xapps.xblockit",
    downloadlink: "https://github.com/mrniteshray/Blockit/releases/latest",
    featured: true,
    downloads: '100+'
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
      className="group relative opacity-0 animate-fade-in-up" 
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
      
      <Card className="relative overflow-hidden border border-border/40 bg-card/95 backdrop-blur-xl rounded-2xl transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">
        <CardContent className="p-0">
          <div className="flex flex-col lg:flex-row gap-0">
            {/* Image Section - Increased width from lg:w-2/5 to lg:w-1/2 */}
            <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden bg-gradient-to-br from-muted/50 to-muted/20">
              {/* Achievement Badges */}
              {project.featured && (
                <div className="absolute top-6 left-6 z-10 flex flex-col gap-2.5">
                  {project.downloads && (
                    <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-white/20">
                      <TrendingUp size={14} className="text-white" />
                      <span className="text-white text-xs font-semibold">{project.downloads} Downloads</span>
                    </div>
                  )}
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              
              <img
                src={`/${project.image.toLowerCase().replace(/ /g, '')}.png`}
                alt={project.title}
                className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Content Section - Adjusted width from lg:w-3/5 to lg:w-1/2 */}
            <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-between">
              <div className="space-y-6">
                {/* Title */}
                <div className="space-y-3">
                  <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/70 transition-all duration-500">
                    {project.title}
                  </h3>
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
                      className="px-3 py-1 text-xs font-medium bg-secondary/50 hover:bg-secondary/80 border border-border/50 transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-6">
                {project.github && (
                  <Button 
                    variant="outline" 
                    size="default" 
                    asChild 
                    className="group/btn border-border/60 hover:border-primary/50 hover:bg-primary/5"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" /> 
                      Source Code
                    </a>
                  </Button>
                )}
                
                {project.playStoreUrl && (
                  <Button 
                    size="default" 
                    asChild 
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                  >
                    <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                      <Play size={16} className="mr-2 fill-current" /> 
                      Play Store
                    </a>
                  </Button>
                )}
                
                {project.downloadlink && !project.playStoreUrl && (
                  <Button 
                    variant="outline" 
                    size="default" 
                    asChild
                    className="border-border/60 hover:border-primary/50 hover:bg-primary/5"
                  >
                    <a href={project.downloadlink} target="_blank" rel="noopener noreferrer">
                      <Download size={16} className="mr-2" /> 
                      Download APK
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};


const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-xs font-medium border-primary/30 text-primary">
              PORTFOLIO
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
            Building innovative Android applications with cutting-edge technologies
          </p>
        </div>


        {/* Projects Vertical List */}
        <div className="space-y-8">
          {androidProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>


        {/* View More */}
        <div className="text-center mt-20">
          <Button 
            variant="outline" 
            asChild 
            className="group px-8 h-12 text-base border-border/60 hover:border-primary/50 hover:bg-primary/5 rounded-full transition-all hover:scale-105"
          >
            <a 
              href="https://github.com/mrniteshray" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Github size={20} className="mr-2" /> 
              View All Projects
              <ExternalLink size={16} className="ml-2 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};


export default ProjectsSection;
