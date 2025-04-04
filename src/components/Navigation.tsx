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
            "bg-white rounded-b-lg shadow-lg transition-all duration-300 overflow-hidden",
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
            <div className="text-base font-medium">Where?</div>
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
            <div className="flex flex-col space-y-6 text-base font-medium">
              <a href="/" className="hover:opacity-70 transition-opacity">Works</a>
              <a href="/about" className="hover:opacity-70 transition-opacity">Me</a>
              <a href="/contact" className="hover:opacity-70 transition-opacity">Resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
