
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container max-w-3xl mx-auto pt-32 pb-24 px-6 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-display mb-8">About</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            This is a portfolio template inspired by gallery exhibitions. 
            You can easily replace this content with your own information.
          </p>
          
          <h2 className="text-xl font-display mt-10 mb-4">Background</h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
            Cras porttitor metus justo, non vestibulum diam iaculis ut. 
            Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
          
          <h2 className="text-xl font-display mt-10 mb-4">Education</h2>
          <ul className="space-y-4">
            <li>
              <div className="font-medium">MFA in Fine Arts, 2018-2020</div>
              <div className="text-muted-foreground">School of Visual Arts, New York</div>
            </li>
            <li>
              <div className="font-medium">BFA in Photography, 2014-2018</div>
              <div className="text-muted-foreground">Rhode Island School of Design</div>
            </li>
          </ul>
          
          <h2 className="text-xl font-display mt-10 mb-4">Exhibitions</h2>
          <ul className="space-y-4">
            <li>
              <div className="font-medium">Solo Exhibition — "Reflections"</div>
              <div className="text-muted-foreground">Gallery Space, New York, 2023</div>
            </li>
            <li>
              <div className="font-medium">Group Show — "Contemporary Visions"</div>
              <div className="text-muted-foreground">Modern Art Gallery, Chicago, 2022</div>
            </li>
            <li>
              <div className="font-medium">Emerging Artists Exhibition</div>
              <div className="text-muted-foreground">International Art Center, Berlin, 2021</div>
            </li>
          </ul>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
