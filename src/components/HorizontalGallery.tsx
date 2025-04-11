import React, { useRef, useState, useEffect } from "react";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import ProjectCard from "@/components/ProjectCard";
import Navigation from "@/components/Navigation";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import illustration from "@/assets/ill-1.png";
import shadowIllustration from "@/assets/shadow-ill.png";
import arrow from "@/assets/arrow.png";

interface HorizontalGalleryProps {
  projects: Project[];
  className?: string;
}

const HorizontalGallery: React.FC<HorizontalGalleryProps> = ({ 
  projects,
  className 
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [initialRender, setInitialRender] = useState(true);
  
  const handleScroll = () => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollEl;
      const progress = scrollLeft / (scrollWidth - clientWidth);
      setScrollProgress(progress);
      setScrollLeft(scrollLeft);
    }
  };

  const scrollToStart = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    }
  };
  
  const handleWheel = (e: WheelEvent) => {
    if (scrollRef.current) {
      e.preventDefault();
      
      // Reduce the scroll speed by dividing the delta
      const slowFactor = 2; // Higher number = slower scrolling
      
      // Handle horizontal scrolling (wheel + shift or trackpad horizontal gesture)
      if (e.deltaX !== 0) {
        scrollRef.current.scrollLeft += e.deltaX / slowFactor;
      }
      
      // Handle vertical scrolling converted to horizontal
      if (e.deltaY !== 0) {
        scrollRef.current.scrollLeft += e.deltaY / slowFactor;
      }
    }
  };
  
  // Apply saved scroll position before the component renders visibly
  useEffect(() => {
    // Get saved scroll position from localStorage
    const savedScrollPosition = localStorage.getItem('scrollPosition');
    
    if (savedScrollPosition && scrollRef.current && initialRender) {
      // Apply the saved scroll position immediately, before the component is visible
      const scrollPos = parseInt(savedScrollPosition, 10);
      scrollRef.current.scrollLeft = scrollPos;
      
      // Update state to match the restored scroll position
      setScrollLeft(scrollPos);
      const { scrollWidth, clientWidth } = scrollRef.current;
      setScrollProgress(scrollPos / (scrollWidth - clientWidth));
      
      // Mark initial render as complete
      setInitialRender(false);
    }
  }, [initialRender]);
  
  // Set up event listeners
  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener("scroll", handleScroll);
      scrollEl.addEventListener("wheel", handleWheel as EventListener, { passive: false });
      
      return () => {
        scrollEl.removeEventListener("scroll", handleScroll);
        scrollEl.removeEventListener("wheel", handleWheel as EventListener);
      };
    }
  }, []);
  
  return (
    <div className={cn("fixed inset-0 bg-[#F1F1F0]", className)}>
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
        {/* Illustration Container with normal scroll speed */}
        <div className="absolute top-[240px] left-[200px] z-20">
          {/* Shadow illustration layer with faster scroll speed (left direction) */}
          <div className="absolute -top-[48px] left-[115px] z-10 transform-gpu" style={{ transform: `translateX(${-scrollLeft * 0.1}px)` }}>
            <div className="relative w-[850px] h-[800px]">
              <img 
                src={shadowIllustration} 
                alt="Illustration Shadow" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Main illustration layer with faster scroll speed (left direction) */}
          <div className="relative w-[460px] h-[460px] z-20 transform-gpu" style={{ transform: `translateX(${-scrollLeft * 0.3}px)` }}>
            <img 
              src={illustration} 
              alt="Main Illustration" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        {/* Arrow Container with normal scroll speed */}
        <div className="absolute top-[700px] left-[1350px] z-15" style={{ transform: `translateX(${scrollLeft * 0.1}px)` }}>
          <div className="relative w-[80px] h-[80px]">
            <img 
              src={arrow} 
              alt="Arrow" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        {/* Name text in top left corner with normal scroll speed */}
        <div className="absolute top-[60px] left-[60px] z-10">
          <div className="text-[110px] font-semibold text-gray-800 leading-none flex flex-col">
            <span>Hardik</span>
            <span className="mt-[-18px]">Monga</span>
          </div>
        </div>
        
        {/* Logo with small left margin */}
        <div className="pl-8">
          <Navigation 
            scrollLeft={scrollLeft} 
            onScrollToStart={scrollToStart}
          />
        </div>

        {/* Description Text with normal scroll speed */}
        <div className="flex-shrink-0 px-[660px] flex flex-col z-30 mt-[100px]">
          <p className="text-[20px] font-normal text-[#595959] mt-8 max-w-3xl">
            Hardik Monga is an interaction <br />
            designer based in Bangalore, India.<br />
            This is an exhibition of his works.
          </p>
        </div>

        {/* Projects with margin from illustration */}
        <div className="flex items-center gap-16 pl-[200px] pr-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        
        {/* Small end space */}
        <div className="h-full w-[1600px] flex-shrink-0"></div>
      </div>
    </div>
  );
};

export default HorizontalGallery;
