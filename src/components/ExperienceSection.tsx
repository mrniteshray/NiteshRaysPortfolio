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
          {/* Timeline line - responsive positioning */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50"></div>

          {/* Experience items */}
          <div className="space-y-8 md:space-y-10">
            {experienceData.map((experience, index) => (
              <div
                key={experience.id}
                className="relative flex items-start opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Timeline dot - responsive positioning */}
                <div className="absolute left-4 md:left-6 transform -translate-x-1/2 top-6 md:top-8 w-4 h-4 md:w-5 md:h-5 bg-primary rounded-full border-3 md:border-4 border-background shadow-lg z-10 hover:scale-110 transition-all duration-300"></div>

                {/* Content card - responsive spacing */}
                <div className="w-full pl-10 md:pl-16">
                  <Card className="border border-border/20 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm hover:from-card/95 hover:to-card/85 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-primary/20 group">
                    <CardContent className="p-4 md:p-8 space-y-4 md:space-y-6">
                      {/* Header */}
                      <div className="space-y-2 md:space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3">
                          <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{experience.title}</h3>
                          <Badge variant="outline" className="text-xs md:text-sm px-2 md:px-3 py-1 md:py-1.5 font-medium self-start">
                            {experience.type}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-muted-foreground">
                          <Code size={16} className="text-primary flex-shrink-0" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs md:text-sm text-muted-foreground">
                          <div className="flex items-center gap-1 md:gap-2">
                            <Calendar size={14} className="text-primary/70 flex-shrink-0" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-1 md:gap-2">
                            <MapPin size={14} className="text-primary/70 flex-shrink-0" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2 md:space-y-3">
                        <div className="flex items-center gap-2 text-sm md:text-base font-medium text-foreground">
                          <Trophy size={16} className="text-primary flex-shrink-0" />
                          <span>Key Achievements</span>
                        </div>
                        <ul className="space-y-1.5 md:space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-xs md:text-sm text-muted-foreground flex items-start gap-2 md:gap-3 opacity-0 animate-fade-in-left" style={{ animationDelay: `${(index * 200) + (idx * 100) + 300}ms`, animationFillMode: 'forwards' }}>
                              <span className="w-1 md:w-1.5 h-1 md:h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-2 md:space-y-3">
                        <div className="flex items-center gap-2 text-sm md:text-base font-medium text-foreground">
                          <Users size={16} className="text-primary flex-shrink-0" />
                          <span>Technologies</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                          {experience.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs md:text-sm px-2 md:px-3 py-1 md:py-1.5 bg-secondary/60 hover:bg-secondary/80 transition-colors duration-300 opacity-0 animate-fade-in-up"
                              style={{ animationDelay: `${(index * 200) + (idx * 50) + 500}ms`, animationFillMode: 'forwards' }}
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