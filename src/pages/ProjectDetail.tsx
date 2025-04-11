import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects, Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display mb-4">Project not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <article className="min-h-screen bg-[#F1F1F0]">
      {/* Header with back button */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#F1F1F0]/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-gray-800 hover:text-black transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Gallery
          </button>
          <div className="text-lg font-display">Hardik Monga</div>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className="w-full h-[70vh] relative pt-16">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-display mb-4">{project.title}</h1>
              <p className="text-xl text-gray-700 mb-6">{project.description}</p>
            </div>
            
            <div className="md:w-1/3 mt-8 md:mt-0">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Year</h3>
                  <p className="font-medium">{project.year}</p>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.link && (
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Link</h3>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Project content - this would be populated with actual content for each project */}
          <div className="prose prose-lg max-w-none">
            <p>
              This project represents an exploration of design principles and creative expression. 
              The work showcases a blend of technical skill and artistic vision, resulting in a 
              cohesive piece that communicates the intended message effectively.
            </p>
            
            <p>
              Through careful consideration of composition, color, and form, this project 
              achieves a balance between aesthetic appeal and functional design. Each element 
              has been thoughtfully placed to create a harmonious whole that engages the viewer 
              and invites further exploration.
            </p>
            
            <p>
              The creative process involved extensive research, conceptualization, and iterative 
              refinement. By embracing both traditional techniques and innovative approaches, 
              the project pushes boundaries while maintaining a connection to established design 
              principles.
            </p>
          </div>
          
          {/* Additional images would go here */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={`${project.title} - Detail 1`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={`${project.title} - Detail 2`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectDetail;
