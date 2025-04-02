
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
    title: "Harmony in Motion",
    description: "An exploration of form and movement through digital medium.",
    imageUrl: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    year: "2023",
    tags: ["Digital Art", "Animation"]
  },
  {
    id: "project-2",
    title: "Urban Perspectives",
    description: "A photographic study of architectural elements in urban environments.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    year: "2022",
    tags: ["Photography", "Architecture"]
  },
  {
    id: "project-3",
    title: "Chromatic Reverie",
    description: "Abstract expressions through color and texture.",
    imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    year: "2022",
    tags: ["Painting", "Abstract"]
  },
  {
    id: "project-4",
    title: "Digital Identity",
    description: "An interactive installation exploring the concept of self in the digital age.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    year: "2021",
    tags: ["Interactive", "Installation"]
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
