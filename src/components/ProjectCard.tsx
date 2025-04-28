import React from "react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
  variant?: 'landscape' | 'square' | 'portrait';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  className,
  variant = 'portrait'
}) => {
  const handleClick = () => {
    // Save the current scroll position to localStorage
    const scrollContainer = document.querySelector('.horizontal-scroll');
    if (scrollContainer) {
      localStorage.setItem('scrollPosition', scrollContainer.scrollLeft.toString());
    }
    
    // Navigate to the static HTML page for this project
    window.location.href = `/projects/${project.id}.html`;
  };
  
  // Determine dimensions based on variant
  const getDimensions = () => {
    switch(variant) {
      case 'landscape':
        return 'h-[440px] w-[660px]';
      case 'square':
        return 'h-[440px] w-[440px]';
      case 'portrait':
      default:
        return 'h-[66vh] w-[440px]';
    }
  };
  
  return (
    <div 
      className={cn(
        "flex-shrink-0 relative group cursor-pointer transition-all duration-500",
        className
      )}
      onClick={handleClick}
    >
      <div className={cn(
        "overflow-hidden relative border-[6px] rounded-md",
        className.includes('second-card') ? 'border-[#8CBCD4]' : 
        className.includes('fourth-card') ? 'border-[#CFCFCF]' : 
        'border-gray-300',
        getDimensions()
      )}>
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="mt-4" style={{ width: variant === 'landscape' ? '660px' : variant === 'square' ? '440px' : '440px' }}>
        <h3 className="text-xl font-medium">{project.title}</h3>
        <p className="text-base text-gray-600 mb-3">{project.description}</p>
        <p className="text-sm text-gray-500">
          {project.tags.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
