
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <p className="text-muted-foreground flex items-center">
              Made with <Heart className="text-primary mx-1" size={16} fill="currentColor" /> by Jane Doe
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
