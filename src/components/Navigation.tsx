import React, { useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

interface NavigationProps {
  className?: string;
  scrollLeft: number;
  onScrollToStart: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  className, 
  scrollLeft,
  onScrollToStart 
}) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const isLogoVisible = scrollLeft > 1500;
  const isCardMinimized = scrollLeft > 1500;

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onScrollToStart();
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
      <div className="fixed top-0 right-20 z-50">
        <div 
          className={cn(
            "bg-white rounded-b-lg transition-all duration-300 overflow-hidden",
            isCardMinimized && !isCardHovered ? "h-[80px]" : "h-[280px]",
            "min-w-[300px]"
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
            <div className="text-base font-semibold">Where?</div>
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
                <h2 className="text-3xl font-bold">Works</h2>
                <span className="text-2xl">→</span>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center">OK</div>
                <div className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center">友</div>
                <div className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center">♫</div>
                <div className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center">☝</div>
                <div className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center">?</div>
              </div>
            </div>
            
            <div className="h-[1px] bg-gray-200 my-4"></div>
            
            {/* Me Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-3xl font-bold">Me</h2>
                <span className="text-2xl">→</span>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center">in</div>
                <div className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center">✉</div>
                <div className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center">𝕏</div>
              </div>
            </div>
            
            <div className="h-[1px] bg-gray-200 my-4"></div>
            
            {/* Resume Section */}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Download Resume</h2>
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
