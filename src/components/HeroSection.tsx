import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

// Audio files (import or use public paths)
const typingSound = '/sounds/typing.mp3';
const clickSound = '/sounds/click.mp3';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [animationStarted, setAnimationStarted] = useState(false);
  const fullText = "Android Developer";
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  // Audio elements
  const typingAudioRef = React.useRef<HTMLAudioElement | null>(null);
  const clickAudioRef = React.useRef<HTMLAudioElement | null>(null);
  const soundTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Initialize audio on component mount
  useEffect(() => {
    // Only initialize on client-side
    if (typeof window !== 'undefined') {
      typingAudioRef.current = new Audio(typingSound);
      clickAudioRef.current = new Audio(clickSound);

      // Preload sounds
      typingAudioRef.current.load();
      clickAudioRef.current.load();
    }

    // Start the animation
    setAnimationStarted(true);

    return () => {
      // Cleanup
      if (soundTimeoutRef.current) {
        clearTimeout(soundTimeoutRef.current);
      }
      if (typingAudioRef.current) {
        typingAudioRef.current.pause();
        typingAudioRef.current = null;
      }
      if (clickAudioRef.current) {
        clickAudioRef.current.pause();
        clickAudioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    // Only start animation if it's been triggered
    if (!animationStarted) return;

    let timeout: NodeJS.Timeout;

    const playTypingSound = () => {
      if (typingAudioRef.current && displayText.length < fullText.length) {
        // Only play sound when actually typing (not deleting or pausing)
        typingAudioRef.current.currentTime = 0;
        typingAudioRef.current.volume = 0.2;
        typingAudioRef.current.play().catch(e => console.log("Audio play failed:", e));

        // Stop the sound after a short duration to prevent continuous playback
        soundTimeoutRef.current = setTimeout(() => {
          if (typingAudioRef.current) {
            typingAudioRef.current.pause();
            typingAudioRef.current.currentTime = 0;
          }
        }, typingSpeed - 20); // Slightly shorter than typing speed
      }
    };

    if (isTyping) {
      if (displayText !== fullText) {
        playTypingSound();
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Pause sound when done typing
        if (typingAudioRef.current) {
          typingAudioRef.current.pause();
          typingAudioRef.current.currentTime = 0;
        }
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
      }
    } else {
      // Pause sound when deleting
      if (typingAudioRef.current) {
        typingAudioRef.current.pause();
        typingAudioRef.current.currentTime = 0;
      }
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, pauseTime / 2);
      }
    }

    return () => {
      clearTimeout(timeout);
      if (soundTimeoutRef.current) {
        clearTimeout(soundTimeoutRef.current);
      }
    };
  }, [displayText, isTyping, animationStarted]);

  const handleButtonClick = () => {
    if (clickAudioRef.current) {
      clickAudioRef.current.currentTime = 0;
      clickAudioRef.current.volume = 0.3;
      clickAudioRef.current.play().catch(e => console.log("Click sound failed:", e));
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl -z-10 animate-float"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl -z-10 animate-float-delay"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-muted-foreground/10"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-2 h-2 rounded-full bg-primary"
              />
              <p className="text-primary font-mono font-medium tracking-wider text-sm">Hi there, I'm</p>
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground"
            >
              Nitesh Ray
            </motion.h1>

            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-muted-foreground leading-tight h-16"
            >
              <span className="inline-block min-w-[240px] bg-gradient-to-r from-muted-foreground to-foreground bg-clip-text text-transparent">
                {displayText}
              </span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="inline-block w-1 h-8 bg-primary ml-1.5"
              />
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              I specialize in building <span className="font-medium text-primary">modern Android apps</span> with Kotlin and Jetpack Compose,
              creating <span className="font-medium text-primary">elegant</span>, <span className="font-medium text-primary">scalable</span>, and <span className="font-medium text-primary">user-friendly</span> mobile experiences with a focus on
              clean architecture and best practices.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button
                asChild
                className="h-11 px-6 text-base bg-primary hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20"
                onClick={handleButtonClick}
              >
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#projects"
                >
                  View Projects <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="h-11 px-6 text-base border-2 hover:border-primary transition-all hover:scale-[1.02] active:scale-95 group"
                onClick={handleButtonClick}
              >
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="flex items-center"
                >
                  <Mail size={18} className="mr-2 transition-transform group-hover:-translate-y-0.5" /> Get in Touch
                </motion.a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-4 pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/mrniteshray/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow hover:shadow-primary/30"
                onClick={handleButtonClick}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://x.com/_im_nitesh"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow hover:shadow-primary/30"
                onClick={handleButtonClick}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/nitesh-ray-51bb85318/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow hover:shadow-primary/30"
                onClick={handleButtonClick}
              >
                <Linkedin size={20} />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-2 flex justify-center relative"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-[#7F52FF] via-[#FF7D7D] to-[#FFAB4C] p-1.5 animate-gradient-xy shadow-xl"
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden border border-muted-foreground/10">
                  <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5"></div>
                  <code className="text-primary font-mono text-sm sm:text-base p-6 text-center relative z-10">
                    <span className="text-purple-500">@Composable</span><br />
                    <span className="text-blue-400">fun</span> NiteshPortfolio() {"{"}<br />
                    &nbsp;&nbsp;<span className="text-green-500">// build</span>(Android Apps 🚀)<br />
                    &nbsp;&nbsp;<span className="text-green-500">// growEveryday</span>()<br />
                    {"}"}
                  </code>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="absolute -bottom-5 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-[#7F52FF] to-[#FF7D7D] flex items-center justify-center text-white font-bold shadow-lg transition-transform duration-300 hover:shadow-purple-500/30"
              >
                <span className="drop-shadow">Kotlin</span>
              </motion.div>
              <motion.div
                whileHover={{ rotate: -12, scale: 1.1 }}
                className="absolute -top-2 -left-3 w-20 h-20 rounded-full bg-gradient-to-br from-[#4285F4] to-[#34A853] flex items-center justify-center text-white font-bold shadow-lg transition-transform duration-300 hover:shadow-blue-500/30"
              >
                <span className="drop-shadow">Compose</span>
              </motion.div>
              <motion.div
                whileHover={{ scaleX: 1.2, opacity: 0.2 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full bg-muted-foreground/10 blur-md transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;