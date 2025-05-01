import React, { useState, useEffect } from "react";
import HorizontalGallery from "@/components/HorizontalGallery";
import VerticalGallery from "@/components/VerticalGallery";
import { projects } from "@/data/projects";

const Index: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if screen width is less than 768px (typical mobile breakpoint)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main className={isMobile ? "w-full" : "h-screen w-screen overflow-hidden"}>
      {isMobile ? (
        <VerticalGallery projects={projects} />
      ) : (
        <HorizontalGallery projects={projects} />
      )}
    </main>
  );
};

export default Index;
