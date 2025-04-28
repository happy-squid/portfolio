import React, { useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

interface NavigationProps {
  className?: string;
  scrollLeft: number;
  onScrollToStart: () => void;
  onScrollToProject: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  className, 
  scrollLeft,
  onScrollToStart,
  onScrollToProject
}) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const isLogoVisible = scrollLeft > 1500;
  const isCardMinimized = scrollLeft > 1500;

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onScrollToStart();
  };

  const handleWorksClick = () => {
    onScrollToProject(0);
  };

  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1mVGxx04RSGPkDTD7_lTCwMTRppocA3rC/view?usp=drive_link", "_blank", "noopener,noreferrer");
  };

  return (
    <div className={cn("flex items-center justify-between", className)}>
      {/* Logo */}
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
      
      {/* Navigation Card */}
      <div className="fixed top-0 right-40 z-50">
        <div 
          className={cn(
            "bg-white rounded-b-lg transition-all duration-300 overflow-hidden",
            isCardMinimized && !isCardHovered ? "h-[90px]" : "h-[330px]",
            "min-w-[400px]"
          )}
          onMouseEnter={() => setIsCardHovered(true)}
          onMouseLeave={() => setIsCardHovered(false)}
        >
          {/* Minimized State */}
          <div 
            className={cn(
              "absolute inset-x-0 top-0 p-8 transition-opacity duration-300",
              isCardMinimized && !isCardHovered ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <div className="text-2xl font-medium">Where?</div>
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
                  className="text-2xl font-medium cursor-pointer bg-transparent border-none p-0 m-0 text-left relative group"
                  onClick={handleWorksClick}
                >
                  Works
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
                <span className="text-2xl">→</span>
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
                <div className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer">?</div>
              </div>
            </div>
            
            <div className="h-[1px] bg-gray-200 my-4"></div>
            
            {/* Me Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <button 
                  className="text-2xl font-medium cursor-pointer bg-transparent border-none p-0 m-0 text-left relative group"
                  onClick={() => {}}
                >
                  Me
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
                <span className="text-2xl">→</span>
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
              </div>
            </div>
            
            <div className="h-[1px] bg-gray-200 my-4"></div>
            
            {/* Resume Section */}
            <div>
              <div className="flex items-center justify-between">
                <button 
                  className="text-2xl font-medium cursor-pointer bg-transparent border-none p-0 m-0 text-left"
                  onClick={handleResumeClick}
                >Download Resume</button>
                <span className="text-2xl">↓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
