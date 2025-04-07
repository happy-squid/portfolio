import React from "react";
import HorizontalGallery from "@/components/HorizontalGallery";
import { projects } from "@/data/projects";

const Index: React.FC = () => {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <HorizontalGallery projects={projects} />
    </main>
  );
};

export default Index;
