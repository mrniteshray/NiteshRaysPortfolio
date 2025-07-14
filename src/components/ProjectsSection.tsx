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
      className="flex flex-col md:flex-row items-stretch bg-card rounded-xl shadow-md overflow-hidden mb-10 transition-all duration-300 hover:shadow-xl hover:border-primary/30 border border-border max-w-[1200px] mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="md:w-[600px] w-full flex-shrink-0 flex items-center justify-center bg-muted/40 p-4 md:p-10 relative">
  <div className="w-full aspect-[16/9] max-w-[1200px]">
    <img
      src={`/${project.image.toLowerCase().replace(/ /g, '')}.png`}
      alt={project.title}
      className={`rounded-lg shadow-lg object-cover w-full h-full transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
    />
  </div>
  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}></div>
</div>
      {/* Info Section */}
      <div className="flex flex-col justify-between p-6 md:p-8 w-full">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">{project.title}</h3>
          <p className="text-base md:text-lg text-muted-foreground mb-4">{project.longDesc}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="text-xs bg-secondary/60 hover:bg-secondary/80 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          {project.downloadlink && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.downloadlink} target="_blank" rel="noopener noreferrer">
                <Download size={16} className="mr-2" /> Download APK
              </a>
            </Button>
          )}
          {project.github && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" /> Code
              </a>
            </Button>
          )}
          {project.playStoreUrl && (
            <Button size="sm" asChild>
              <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                <Play size={16} className="mr-2" /> Get on Play Store
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section bg-gradient-to-b from-muted/10 to-muted/20 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
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
            <div className="flex flex-col gap-8 mb-12">
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
