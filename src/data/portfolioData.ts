export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    github?: string;
    playStoreUrl?: string;
    downloadlink?: string;
  }>;
  education: Array<{
    degree: string;
    school: string;
    year: string;
  }>;
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
  social: Array<{
    platform: string;
    url: string;
  }>;
}

export const portfolioData: PortfolioData = {
  name: "Nitesh Ray",
  title: "Android Developer",
  bio: "I specialize in building modern Android apps with Kotlin and Jetpack Compose, creating elegant, scalable, and user-friendly mobile experiences with a focus on clean architecture and best practices.",
  skills: [
    "Kotlin",
    "Jetpack Compose",
    "XML",
    "Android SDK",
    "MVVM",
    "Hilt",
    "Coroutines",
    "Room",
    "Java",
    "Git/GitHub",
    "Firebase",
    "Retrofit",
    "REST APIs"
  ],
  
  projects: [
    {
      name: "Blockit",
      description: "Blockit is an open-source Android app built to help you block distractions like short videos, apps, and websites — so you can focus on what actually matters.",
      technologies: ["Kotlin", "Jetpack Compose", "AccessibilityService API", "MVVM", "Coroutines"],
      github: "https://github.com/mrniteshray/Blockit",
      playStoreUrl: undefined,
      downloadlink : "https://github.com/mrniteshray/Blockit/releases/download/v1/Blockit.apk"
    },
    {
      name: "ArogyaSathi",
      description: "ArogyaSathi is an AI-powered voice health assistant that that helps users ask health-related queries using voice in Multiple Languages.",
      technologies: ["Kotlin","Jetpack Compose", "Speech-To-Text API", "Text-to-Speech API", "Firebase","MVVM", "Coroutines" , "Gemini API"],
      github: "https://github.com/mrniteshray/ArogyaSathi",
      playStoreUrl: undefined,
      downloadlink : "https://github.com/mrniteshray/ArogyaSathi/releases/download/v1/ArogyaSathi.apk"    
    },
    {
      name: "HandWritefy",
      description: "Handwritefy helps students and professionals save hours of time by generating realistic handwritten pages from digital Handwritten style text",
      technologies: ["Kotlin","Jetpack Compose", "AndroidView", "MediaStore","MVVM"],
      github: "https://github.com/mrniteshray/HandWritefy",
      playStoreUrl: undefined,
      downloadlink : "https://github.com/mrniteshray/HandWritefy/releases/download/v1/HandWritefy.apk"    
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Artificial Intelligence and Data Science",
      school: "Sandip Foundation’s SITRC, Nashik, Maharashtra, India",
      year: "Expected 2026"
    }
  ],
  contact: {
    email: "niteshr14321@gmail.com",
    github: "https://github.com/mrniteshray",
    linkedin: "https://linkedin.com/in/nitesh-ray-51bb85318"
  },
  social: [
    {
      platform: "Twitter",
      url: "https://x.com/_im_nitesh"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/nitesh-ray-51bb85318"
    },
    {
        platform: "Github",
        url: "https://github.com/mrniteshray"
    }
  ]
};
