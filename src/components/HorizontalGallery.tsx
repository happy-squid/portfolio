
import React, { useRef, useState, useEffect } from "react";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const progress = scrollLeft / (scrollWidth - clientWidth);
    setScrollProgress(progress);
    
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
  };
  
  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener("scroll", handleScroll);
      return () => scrollEl.removeEventListener("scroll", handleScroll);
    }
  }, []);
  
  const scrollToRight = () => {
    if (!scrollRef.current) return;
    // We're still using a smooth transition for button navigation
    // since that's expected behavior for button clicks
    scrollRef.current.scrollBy({
      left: 600,
      behavior: "smooth"
    });
  };
  
  const scrollToLeft = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: -600,
      behavior: "smooth"
    });
  };
  
  // Add keyboard navigation for horizontal scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        scrollToRight();
      } else if (e.key === 'ArrowLeft') {
        scrollToLeft();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return (
    <div className={cn("relative h-full w-full", className)}>
      {/* Scroll Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-0.5 bg-gray-200 z-50">
        <div 
          className="h-full bg-black transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>
      
      {/* Gallery */}
      <div 
        ref={scrollRef}
        className="horizontal-scroll flex items-center overflow-x-auto h-full w-full cursor-explore touch-pan-x"
        onScroll={handleScroll}
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {/* Initial space */}
        <div className="h-full w-screen flex-shrink-0"></div>
        
        {/* Projects */}
        <div className="flex items-center gap-16 px-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* End space */}
        <div className="h-full w-screen flex-shrink-0"></div>
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={scrollToLeft}
        className={cn(
          "fixed left-8 top-1/2 -translate-y-1/2 z-40 bg-white/80 hover:bg-white w-12 h-12 rounded-full flex items-center justify-center transition-all",
          !canScrollLeft && "opacity-0 pointer-events-none"
        )}
        aria-label="Scroll left"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transform rotate-180">
          <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <button 
        onClick={scrollToRight}
        className={cn(
          "fixed right-8 top-1/2 -translate-y-1/2 z-40 bg-white/80 hover:bg-white w-12 h-12 rounded-full flex items-center justify-center transition-all",
          !canScrollRight && "opacity-0 pointer-events-none"
        )}
        aria-label="Scroll right"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      {/* Scroll Instructions */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-500 flex items-center space-x-2 z-40 pointer-events-none">
        <span>Scroll or drag to explore</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default HorizontalGallery;
