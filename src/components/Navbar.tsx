
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text">Portfolio</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="nav-link">Home</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 animate-fade-in">
          <nav className="flex flex-col p-6 space-y-4">
            <a 
              href="#home" 
              className="nav-link w-fit"
              onClick={() => setIsMenuOpen(false)}
            >Home</a>
            <a 
              href="#projects" 
              className="nav-link w-fit"
              onClick={() => setIsMenuOpen(false)}
            >Projects</a>
            <a 
              href="#about" 
              className="nav-link w-fit"
              onClick={() => setIsMenuOpen(false)}
            >About</a>
            <a 
              href="#contact" 
              className="nav-link w-fit"
              onClick={() => setIsMenuOpen(false)}
            >Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
