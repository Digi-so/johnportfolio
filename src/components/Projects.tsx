
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A modern portfolio website template for developers and designers.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    tags: ['HTML/CSS', 'JavaScript', 'GSAP'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A drag-and-drop task management application with team collaboration features.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">My Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project is a unique challenge that I've enjoyed tackling.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="card animate-fade-up"
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveLink} className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm font-medium">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a href={project.githubLink} className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm font-medium">
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
