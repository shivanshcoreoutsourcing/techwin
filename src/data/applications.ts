// src/data/applications.ts

export type ApplicationItem = {
  name: string;
  slug: string;
  heading: string;
  keywords: string[];
};

export const applications: ApplicationItem[] = [
  {
    name: "LiDAR Systems",
    slug: "lidar",
    heading: "Fiber Lasers for LiDAR Systems",
    keywords: ["lidar fiber laser", "remote sensing laser"],
  },
  {
    name: "Quantum Technology",
    slug: "quantum",
    heading: "Fiber Lasers for Quantum Technology",
    keywords: ["quantum laser", "quantum optics fiber laser"],
  },
  {
    name: "Fiber Optic Sensing",
    slug: "sensing",
    heading: "Fiber Lasers for Optical Sensing",
    keywords: ["sensing laser", "distributed fiber laser"],
  },
  {
    name: "Gravitational Wave Detection",
    slug: "gravitational-wave",
    heading: "Lasers for Gravitational Wave Detection",
    keywords: ["ultra-stable fiber laser", "low noise laser"],
  },
  {
    name: "Optical Communication",
    slug: "communication",
    heading: "Fiber Lasers for Optical Communication",
    keywords: ["coherent communication laser", "telecom laser"],
  },
  {
    name: "Biomedical & Diagnostics",
    slug: "biomedical",
    heading: "Lasers for Biomedical Applications",
    keywords: ["biomedical laser", "medical laser"],
  },
  {
    name: "Spectroscopy & Photonics",
    slug: "spectroscopy",
    heading: "Fiber Lasers for Spectroscopy",
    keywords: ["spectroscopy laser", "narrow linewidth source"],
  },
  {
    name: "Material Processing",
    slug: "material-processing",
    heading: "Fiber Lasers for Material Processing",
    keywords: ["industrial laser", "high power fiber laser"],
  },
  {
    name: "Atomic Physics Research",
    slug: "atomic",
    heading: "Fiber Lasers for Atomic Research",
    keywords: ["atomic laser", "precision measurement laser"],
  },
  {
    name: "Satellite Communication",
    slug: "satellite",
    heading: "Lasers for Satellite Communication",
    keywords: ["satellite laser", "space communication laser"],
  },
];
