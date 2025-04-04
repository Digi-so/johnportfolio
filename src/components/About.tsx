
import { Briefcase, GraduationCap, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-radial from-violet-50 via-purple-50 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's a little bit about who I am and what I do.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-8 lg:hidden">
              <img 
                src="/lovable-uploads/385e1954-61a2-42da-a4bc-113a867914b2.png" 
                alt="John Maitai" 
                className="rounded-xl shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <p className="text-lg mb-6 text-foreground">
              I'm a frontend developer and virtual assistant with a passion for creating beautiful, functional, and accessible web applications. With a background in design and development, I bring a unique perspective to every project I work on.
            </p>
            <p className="text-lg mb-6 text-foreground">
              I specialize in building responsive websites and applications using modern technologies like React, TypeScript, and Tailwind CSS. I also offer digital marketing services and create compelling copy that engages and converts.
            </p>
            <p className="text-lg text-foreground">
              When I'm not coding, you can find me hiking, reading, or experimenting with new recipes in the kitchen.
            </p>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="hidden lg:block mb-8">
              <img 
                src="/lovable-uploads/385e1954-61a2-42da-a4bc-113a867914b2.png" 
                alt="John Maitai" 
                className="rounded-xl shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Work Experience</h3>
                    <div className="mb-4">
                      <h4 className="text-foreground font-medium">Senior Web Developer</h4>
                      <p className="text-muted-foreground">Tech Company • 2023 - Present</p>
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium">Virtual Assistant</h4>
                      <p className="text-muted-foreground">Digital Agency • 2019 - 2022</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Education</h3>
                    <div className="mb-4">
                      <h4 className="text-foreground font-medium">Degree in Computer Science</h4>
                      <p className="text-muted-foreground">Alpha Academy • 2017 - 2019</p>
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium">Certified in Web Development</h4>
                      <p className="text-muted-foreground">PLP Academy • 2018 - 2024</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Code className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Skills</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="tag">HTML/CSS</span>
                      <span className="tag">JavaScript</span>
                      <span className="tag">TypeScript</span>
                      <span className="tag">React</span>
                      <span className="tag">Virtual Assistant</span>
                      <span className="tag">Node.js</span>
                      <span className="tag">Tailwind CSS</span>
                      <span className="tag">Git</span>
                      <span className="tag">Digital Marketing</span>
                      <span className="tag">Copywriter</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
