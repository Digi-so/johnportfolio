
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-radial from-violet-50 via-purple-50 to-background pt-16">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg md:text-xl font-medium text-primary mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Hi there, I'm
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <span className="gradient-text">Jane Doe.</span><br />
            <span className="text-foreground">I build digital experiences.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: '0.5s' }}>
            I'm a frontend developer passionate about creating beautiful, functional, and accessible web applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#projects" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
