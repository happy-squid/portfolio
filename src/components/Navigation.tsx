
import React from "react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <nav className={cn("fixed top-0 left-0 w-full flex justify-between items-center p-6 z-50", className)}>
      <div className="flex items-center space-x-6">
        <h1 className="text-lg font-medium tracking-tight">
          <a href="/" className="hover:opacity-70 transition-opacity">PORTFOLIO</a>
        </h1>
      </div>
      <div className="flex items-center space-x-6 text-sm">
        <a href="/" className="hover:opacity-70 transition-opacity">WORKS</a>
        <a href="/about" className="hover:opacity-70 transition-opacity">ABOUT</a>
        <a href="/contact" className="hover:opacity-70 transition-opacity">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navigation;
