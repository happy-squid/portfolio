
import React, { useState } from "react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "flex-shrink-0 relative group cursor-pointer transition-all duration-500",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden relative h-[70vh] w-[500px]">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className={cn(
            "h-full w-full object-cover transition-transform duration-700",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
        
        <div className={cn(
          "absolute inset-0 bg-black bg-opacity-0 transition-all duration-500 flex flex-col justify-end p-6",
          isHovered ? "bg-opacity-30" : ""
        )}>
          <div className={cn(
            "transform transition-all duration-500",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}>
            <div className="text-white">
              <h3 className="text-xl font-display mb-1">{project.title}</h3>
              <p className="text-sm mb-2">{project.year}</p>
              <div className="h-px w-12 bg-white mb-3"></div>
              <p className="text-sm max-w-xs">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-xs px-2 py-1 border border-white/30 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 px-2">
        <h3 className="text-lg font-display">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.year}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
