import React, { useRef, useState, useEffect } from "react";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import ProjectCard from "@/components/ProjectCard";
import Navigation from "@/components/Navigation";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import illustration from "@/assets/ill-1.png";

interface HorizontalGalleryProps {
  projects: Project[];
  className?: string;
}

const HorizontalGallery: React.FC<HorizontalGalleryProps> = ({ 
  projects,
  className 
}) => {
  const scrollRef = useHorizontalScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const progress = scrollLeft / (scrollWidth - clientWidth);
    setScrollProgress(progress);
    setScrollLeft(scrollLeft);
  };

  const scrollToStart = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    }
  };
  
  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener("scroll", handleScroll);
      return () => scrollEl.removeEventListener("scroll", handleScroll);
    }
  }, []);
  
  return (
    <div className={cn("fixed inset-0", className)}>
      {/* Scroll Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-0.5 bg-gray-200 z-40">
        <div 
          className="h-full bg-black transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>
      
      {/* Gallery */}
      <div 
        ref={scrollRef}
        className="horizontal-scroll absolute inset-0 flex items-center overflow-x-auto touch-pan-x"
        onScroll={handleScroll}
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {/* Logo with small left margin */}
        <div className="pl-8">
          <Navigation 
            scrollLeft={scrollLeft} 
            onScrollToStart={scrollToStart}
          />
        </div>

        {/* Illustration Container */}
        <div className="flex-shrink-0 pl-[200px]">
          <div className="relative w-[400px] h-[400px]">
            <img 
              src={illustration} 
              alt="Main Illustration" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        {/* Projects with margin from illustration */}
        <div className="flex items-center gap-16 pl-[1100px] pr-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Social Links */}
        <div className="flex-shrink-0 flex items-center gap-16 px-16">
          <div className="flex items-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">INSTAGRAM</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">LINKEDIN</a>
            <a href="mailto:contact@example.com" className="hover:opacity-70 transition-opacity">EMAIL</a>
          </div>
        </div>
        
        {/* Small end space */}
        <div className="h-full w-16 flex-shrink-0"></div>
      </div>
    </div>
  );
};

export default HorizontalGallery;
