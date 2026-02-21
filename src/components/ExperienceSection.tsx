import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Trophy, Code, Users } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    title: "Android Developer Intern",
    company: "Greedy Game Media Pvt Ltd",
    location: "Bangalore (Onsite)",
    period: "Jan 2026 - Present",
    type: "Internship",
    description: "Contributing to the development and optimization of high-performance Android applications at an AdTech startup.",
    achievements: [
      "Implemented Firebase Analytics with custom event instrumentation and funnel analysis to identify dropoffs and improve user retention by 40%.",
      "Optimized video playback startup by implementing pre-caching and loading optimizations, reducing initial play latency by 30–40%.",
      "Contributed to building a PDF utility app from scratch, implementing 12+ core features across document security, scanning, and monetization flows."
    ],
    technologies: ["Kotlin", "Android SDK", "Firebase Analytics", "ExoPlayer/Media3", "Room", "Coroutines", "MVVM"]
  },
  {
    id: 2,
    title: "Android Developer Intern",
    company: "Indilingo Labs LLP",
    location: "Remote",
    period: "July 2025 - Dec 2025",
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
    <section id="experience" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Experience</h2>
            <p className="text-muted-foreground text-lg">My professional journey and contributions.</p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-border/50 ml-3 space-y-12">
            {experienceData.map((experience, index) => (
              <div
                key={experience.id}
                className="relative pl-8 opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <div>
                        <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
                        <p className="text-base font-medium text-foreground/80">{experience.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                        <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-2 py-0.5 rounded">{experience.period}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                             <MapPin size={10} /> {experience.location}
                        </span>
                    </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed max-w-2xl">
                    {experience.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                       KEY ACHIEVEMENTS
                    </h4>
                    <ul className="space-y-2">
                        {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mt-1.5 flex-shrink-0"></span>
                            <span>{achievement}</span>
                        </li>
                        ))}
                    </ul>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                    {experience.technologies.map((tech, idx) => (
                    <Badge
                        key={idx}
                        variant="secondary"
                        className="text-[10px] px-2 py-0.5 bg-muted hover:bg-muted/80 text-muted-foreground border border-border/40 font-normal rounded-md"
                    >
                        {tech}
                    </Badge>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;