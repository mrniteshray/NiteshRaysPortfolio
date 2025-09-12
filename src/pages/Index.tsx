
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CursorGradient from '@/components/CursorGradient';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorGradient />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;