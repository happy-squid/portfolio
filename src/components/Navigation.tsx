import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

interface NavigationProps {
  className?: string;
  scrollLeft: number;
  onScrollToStart: () => void;
  onScrollToProject: (index: number) => void;
  isMobile?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ 
  className, 
  scrollLeft,
  onScrollToStart,
  onScrollToProject,
  isMobile = false
}) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isCardExpanded, setIsCardExpanded] = useState(false);
  const isLogoVisible = isMobile ? true : scrollLeft > 1500;
  const isCardMinimized = isMobile ? !isCardExpanded : scrollLeft > 1500;

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onScrollToStart();
  };

  const handleWorksClick = () => {
    onScrollToProject(0);
  };

  const handleResumeClick = () => {
    window.open("/Hardik-Monga-Resume.pdf", "_blank", "noopener,noreferrer");
  };
  
  const handleCardToggle = (e: React.MouseEvent) => {
    if (isMobile) {
      e.stopPropagation();
      setIsCardExpanded(!isCardExpanded);
    }
  };

  useEffect(() => {
    if (!isMobile) return;
    
    const handleClickOutside = () => {
      if (isCardExpanded) {
        setIsCardExpanded(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobile, isCardExpanded]);

  return (
    <div className={cn("flex items-center justify-between", className)}>
      {/* Logo - hidden on mobile */}
      {!isMobile && (
        <div className="fixed top-8 left-8 z-50">
          <a 
            href="/" 
            onClick={handleLogoClick}
            className={cn(
              "hover:opacity-70 transition-all duration-300 block",
              isLogoVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 -translate-y-4"
            )}
          >
            <img 
              src={logo} 
              alt="Portfolio Logo" 
              className="h-8 w-auto"
            />
          </a>
        </div>
      )}
      
      {/* Navigation Card */}
      <div className={isMobile ? "w-full" : "fixed top-0 right-40 z-50"}>
        <div 
          className={cn(
            "bg-white rounded-b-lg transition-all duration-300 overflow-hidden",
            isCardMinimized && !isCardHovered ? "h-[60px]" : "h-[330px]",
            isMobile ? "w-full rounded-t-none" : "min-w-[400px]"
          )}
          onMouseEnter={() => !isMobile && setIsCardHovered(true)}
          onMouseLeave={() => !isMobile && setIsCardHovered(false)}
          onClick={handleCardToggle}
        >
          {/* Minimized State */}
          <div 
            className={cn(
              "absolute inset-x-0 top-0 py-4 px-8 transition-opacity duration-300",
              isCardMinimized && !isCardHovered ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <div className={isMobile ? "text-xl font-medium pl-4" : "text-2xl font-medium"}>Where?</div>
          </div>

          {/* Expanded State */}
          <div 
            className={cn(
              "p-8 transition-all duration-300",
              isCardMinimized && !isCardHovered 
                ? "opacity-0 translate-y-8 pointer-events-none" 
                : "opacity-100 translate-y-0"
            )}
          >
            {/* Works Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <button 
                  className={isMobile ? "text-xl font-medium cursor-pointer bg-transparent border-none p-0 m-0 text-left relative group" : "text-2xl font-medium cursor-pointer bg-transparent border-none p-0 m-0 text-left relative group"}
                  onClick={handleWorksClick}
                >
                  Works
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
                <span 
                  className={isMobile ? "text-xl cursor-pointer" : "text-2xl cursor-pointer"}
                  onClick={handleWorksClick}
                >→</span>
              </div>
              <div className="flex gap-2 mt-2">
                <div 
                  className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
                  onClick={() => onScrollToProject(0)}
                >z</div>
                <div 
                  className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
                  onClick={() => onScrollToProject(1)}
                >✨</div>
                <div 
                  className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
                  onClick={() => onScrollToProject(2)}
                >🍕</div>
                <div 
                  className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
                  onClick={() => onScrollToProject(3)}
                >🎮</div>
                <div 
                  className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
                  onClick={() => onScrollToProject(4)}
                >?</div>
              </div>
            </div>
            
            <div className="h-[1px] bg-gray-200 my-4"></div>
            
            {/* Me Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <button 
                  className={isMobile ? "text-xl font-medium cursor-pointer bg-transparent border-none p-0 m-0 text-left relative group" : "text-2xl font-medium cursor-pointer bg-transparent border-none p-0 m-0 text-left relative group"}
                  onClick={() => onScrollToProject(5)}
                >
                  Me
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
                <span 
                  className={isMobile ? "text-xl cursor-pointer" : "text-2xl cursor-pointer"}
                  onClick={() => onScrollToProject(5)}
                >→</span>
              </div>
              <div className="flex gap-2 mt-2">
                <a 
                  href="https://www.linkedin.com/in/hardik-monga/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
                >in</a>
                <a 
                  href="mailto:hardikmonga311@gmail.com" 
                  className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
                >✉️</a>
                <a 
                  href="https://x.com/HardikMonga3" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
                >𝕏</a>
                <a 
                  href="https://www.instagram.com/hardikmonga_/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
                >ig</a>
              </div>
            </div>
            
            <div className="h-[1px] bg-gray-200 my-4"></div>
            
            {/* Resume Section */}
            <div>
              <div className="flex items-center justify-between">
                <button 
                  className={isMobile ? "text-xl font-medium cursor-pointer bg-transparent border-none p-0 m-0 text-left underline decoration-1 underline-offset-4" : "text-2xl font-medium cursor-pointer bg-transparent border-none p-0 m-0 text-left underline decoration-1 underline-offset-4"}
                  onClick={handleResumeClick}
                >Download Resume</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
