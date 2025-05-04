import React, { useRef, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Navigation from "@/components/Navigation";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import illustration from "@/assets/ill-1.png";
import shadowIllustration from "@/assets/shadow-ill.png";
import arrow from "@/assets/arrow.png";

interface VerticalGalleryProps {
  projects: Project[];
  className?: string;
}

const VerticalGallery: React.FC<VerticalGalleryProps> = ({ 
  projects,
  className 
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const [videoHasPlayed3, setVideoHasPlayed3] = useState(false);
  const firstProjectRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToFirstProject = () => {
    if (firstProjectRef.current) {
      firstProjectRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToProject = (index: number) => {
    if (projectRefs.current[index]) {
      projectRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className={cn("relative w-full pb-20 bg-[#F1F1F0]", className)}>
      {/* Header section with navigation - fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#F1F1F0] shadow-sm">
        <div className="px-6">
          <Navigation 
            scrollLeft={0} 
            onScrollToStart={scrollToTop}
            onScrollToProject={scrollToProject}
            isMobile={true}
          />
        </div>
      </div>
      
      {/* Empty space to offset the fixed header - exactly matches collapsed nav height */}
      <div className="h-[40px]"></div>
      
      {/* Description Text */}
      <div className="px-6 mt-16">
        {/* Name text moved above description */}
        <div className="text-[72px] font-semibold text-gray-800 leading-none flex flex-col mb-6">
          <span>Hardik</span>
          <span className="mt-[-10px]">Monga</span>
        </div>
        
        <p className="text-[15px] font-normal text-[#595959] mb-4">
          Hardik Monga is an interaction <br />
          designer based in Bangalore, India.<br />
          This is an exhibition of his works.
        </p>
        
        {/* Illustration Container */}
        <div className="relative w-full h-[500px] mb-16">
          {/* Shadow illustration layer */}
          <div className="absolute top-[-29px] right-[-170px] z-10">
            <div className="relative w-[600px] h-[600px]">
              <img 
                src={shadowIllustration} 
                alt="Illustration Shadow" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Main illustration layer */}
          <div className="absolute top-[-25px] left-[-40px] z-20">
            <div className="relative w-[380px] h-[380px]">
              <img 
                src={illustration} 
                alt="Main Illustration" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        
        {/* Down arrow to scroll to first project */}
        <div className="flex items-center justify-center mb-8 -mt-32 relative z-30">
          <div className="p-6 cursor-pointer hover:opacity-80 transition-all duration-300 hover:translate-y-2" onClick={scrollToFirstProject}>
            <img 
              src={arrow} 
              alt="Scroll to projects" 
              className="h-8 w-8 transform rotate-90"
            />
          </div>
        </div>
      </div>
      
      {/* Projects section */}
      <div className="px-6 flex flex-col gap-16">
        {/* Project cards */}
        {projects.map((project, index) => {
          const actualIndex = index;
          
          return (
            <div key={project.id} className="w-full" ref={(ref) => {
              if (ref) {
                projectRefs.current[actualIndex] = ref;
                if (actualIndex === 0) {
                  firstProjectRef.current = ref;
                }
              }
            }}>
              <ProjectCard 
                project={project} 
                variant={
                  actualIndex === 1 || actualIndex === 2 ? 'square' : 
                  actualIndex === 3 ? 'landscape' : 
                  actualIndex === 4 || actualIndex === 5 ? 'square' :
                  'portrait'
                }
                className={
                  actualIndex === 1 ? 'second-card' : 
                  actualIndex === 3 ? 'fourth-card' : 
                  ''
                }
                isMobile={true}
              />
            </div>
          );
        })}
      </div>
      
      {/* Darker grey section with video */}
      <div className="w-full bg-[#DEDEDC] mt-48 px-6 py-12">
        {/* Video on the top */}
        <div 
          className="h-[120px] w-[120px] overflow-hidden cursor-pointer mb-8"
          onClick={() => {
            if (videoRef3.current) {
              // Reset to beginning and play full animation again
              videoRef3.current.currentTime = 0;
              setVideoHasPlayed3(false);
              videoRef3.current.play();
            }
          }}
        >
          <video 
            ref={videoRef3}
            autoPlay 
            muted 
            playsInline
            className="h-full w-full object-cover"
            onTimeUpdate={(e) => {
              const video = e.currentTarget;
              if (!videoHasPlayed3 && video.currentTime >= video.duration - 0.1) {
                // First time reaching the end
                setVideoHasPlayed3(true);
                // Set the current time to 1 second before the end
                video.currentTime = video.duration - 1;
                video.play(); // Ensure it keeps playing
              }
            }}
          >
            <source src="/am2-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Main text */}
        <div className="text-2xl font-medium text-gray-600 -mt-2 mb-8">
        Hardik Monga is a designer. <br />
        He does <span className="text-black">interaction</span>, <span className="text-black">graphics</span>, <br />and <span className="text-black">photography</span> to bring joy. 
        </div>
        
        {/* Cards in a vertical stack */}
        <div className="flex flex-col gap-8">
          {/* First card - Introduction */}
          <div className="bg-white p-6 rounded-md border border-gray-300 w-full h-auto">
            <div className="flex justify-start mb-4">
              <img 
                src="/smi-logo.png" 
                alt="Srishti Manipal Institute Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-base text-gray-800">
            Hello people, this is Hardik.<br />
                  I am currently doing my Bachelor's in Human Centered Design from <br />Srishti Manipal Institute of Art, Design and Technology, Bengaluru.
            </p>
          </div>
          
          {/* Second card - Why this */}
          <div className="bg-white p-6 rounded-md border border-gray-300 w-full h-auto">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Why this?</h3>
            <p className="text-base text-gray-800">
              I really like making experiences visually pleasing and easy to interpret. Been practicing it in graphics and now wish to do the same in interaction design.
            </p>
          </div>
          
          {/* Third card - Contact me */}
          <div className="bg-white p-6 rounded-md border border-gray-300 w-full h-auto">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Contact me</h3>
            <div className="flex gap-2 mt-4">
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
                href="https://www.instagram.com/hardikmonga_/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-[40px] h-[40px] rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
              >ig</a>
            </div>
            
            {/* Divider line */}
            <div className="h-px bg-gray-300 my-4"></div>
            
            {/* Resume download button */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-lg font-medium text-gray-800 hover:text-black transition-colors duration-200 underline decoration-1 underline-offset-4"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalGallery;
