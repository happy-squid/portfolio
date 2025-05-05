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
    title: "Branding & Identity Design",
    description: "Freelance work under the name holy.pix, crafting distinct and memorable brand identities.",
    imageUrl: "/assets/project-5/cover-branding.png",
    year: "2021",
    tags: ["Graphic Design", "Brand Identity Design"]
  },
  {
    id: "project-6",
    title: "Photography",
    description: "An off duty pursuit of curious streets and faraway corners.",
    imageUrl: "/assets/project-6/cover-photography.png",
    year: "2020",
    tags: ["Street", "Wildlife", "Nature"]
  }
];
