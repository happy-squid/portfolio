
import React, { useState, useEffect } from "react";
import HorizontalGallery from "@/components/HorizontalGallery";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full w-full overflow-hidden bg-background">
      {/* Loader */}
      {isLoading && (
        <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center">
          <div className="text-xl font-display">Loading...</div>
        </div>
      )}
      
      {/* Main Content */}
      <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        
        <main className="h-full w-full">
          <HorizontalGallery projects={projects} />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
