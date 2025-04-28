export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  year: string;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Delivery Partner App Intervention",
    description: "A research-based design intervention for Food Delivery workers in India",
    imageUrl: "/assets/project-1/cover2.png",
    year: "2022",
    tags: ["UX Research", "Service Design", "Social Impact"]
  },
  {
    id: "project-2",
    title: "Elocien Homepage",
    description: "A streamlined homepage for AI video creation",
    imageUrl: "/assets/project-2/cover-tile.png",
    year: "2024",
    tags: ["Feature Prioritization", "Visual Identity Design"]
  },
  {
    id: "project-3",
    title: "Domino's Redesign",
    description: "Simplified the Domino's website user journey",
    imageUrl: "/assets/project-3/cover-dominos.png",
    year: "2024",
    tags: ["User Research & Testing", "Product Optimization"]
  },
  {
    id: "project-4",
    title: "Improving Steam",
    description: "A user-centric systems study to improve the Steam platform experience",
    imageUrl: "/assets/project-4/cover-steam.png",
    year: "2024",
    tags: ["User Research & Testing", "Product Optimization"]
  },
  {
    id: "project-5",
    title: "Organic Patterns",
    description: "Exploring patterns found in nature through various media.",
    imageUrl: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    year: "2021",
    tags: ["Mixed Media", "Nature"]
  },
  {
    id: "project-6",
    title: "Temporal Fragments",
    description: "A video series examining the perception of time through visual fragments.",
    imageUrl: "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    year: "2020",
    tags: ["Video", "Experimental"]
  }
];
