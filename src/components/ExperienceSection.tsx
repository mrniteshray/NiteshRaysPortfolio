import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Trophy, Code, Users } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    title: "Android Developer Intern",
    company: "Indilingo Labs LLP",
    location: "Remote",
    period: "July 2024 - Present",
    type: "Internship",
    description: "Contributed to enhancing the Indilingo app with modern features and a cleaner, user-friendly design.",
    achievements: [
      "Migrated 80% of the Android native codebase to Kotlin Multiplatform (KMP) to enable cross-platform support.",
      "Integrated Google Sign-In for seamless authentication.",
      "Redesigned multiple app screens using Jetpack Compose, delivering a clean, modern, and responsive UI aligned with material design guidelines."
    ],
    technologies: ["Kotlin", "Jetpack Compose", "MVVM","Hilt", "Coroutines", "KMP","CMP","Koin" , "KTOR","Retrofit","Firebase"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-background via-muted/5 to-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Career Highlights
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
            My journey in Android development and key milestones along the way
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line - positioned on the left */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50"></div>

          {/* Experience items */}
          <div className="space-y-10">
            {experienceData.map((experience, index) => (
              <div
                key={experience.id}
                className="relative flex items-start"
              >
                {/* Timeline dot - positioned on the left */}
                <div className="absolute left-6 transform -translate-x-1/2 top-8 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg z-10 hover:scale-110 transition-transform duration-300"></div>

                {/* Content card - all cards on the right */}
                <div className="w-full pl-16">
                  <Card className="border border-border/20 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm hover:from-card/95 hover:to-card/85 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
                    <CardContent className="p-8 space-y-6">
                      {/* Header */}
                      <div className="space-y-3">
                        <div className="flex items-start justify-between flex-wrap gap-3">
                          <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors">{experience.title}</h3>
                          <Badge variant="outline" className="text-sm px-3 py-1.5 font-medium">
                            {experience.type}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-3 text-base text-muted-foreground">
                          <Code size={18} className="text-primary" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-primary/70" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-primary/70" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-base font-medium text-foreground">
                          <Trophy size={18} className="text-primary" />
                          <span>Key Achievements</span>
                        </div>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-3">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-base font-medium text-foreground">
                          <Users size={18} className="text-primary" />
                          <span>Technologies</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-sm px-3 py-1.5 bg-secondary/60"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;