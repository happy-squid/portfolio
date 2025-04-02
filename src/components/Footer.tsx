
import React from "react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={cn("fixed bottom-0 left-0 w-full p-6 z-40 pointer-events-none", className)}>
      <div className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          &copy; {currentYear} Portfolio Template
        </div>
        <div className="text-sm flex space-x-4 pointer-events-auto">
          <a href="https://instagram.com" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
