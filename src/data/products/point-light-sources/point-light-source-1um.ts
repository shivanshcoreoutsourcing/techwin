// File: /src/data/products/PointLightSources/point-light-source-1um.ts
// 1.0 µm Point Light Source – Product Data & Interfaces

export type SectionType =
  | "overview"
  | "features"
  | "applications"
  | "specs"
  | "integration"
  | "selection"
  | "handling";

export type SpecRow = { name: string; value: string };
export type SpecGroup = { label: string; rows: SpecRow[] };

export type ContentSection =
  | { type: "overview" | "applications" | "integration" | "selection" | "handling"; heading: string; content: string }
  | { type: "features"; heading: string; bullets: string[] }
  | { type: "specs"; heading: string; specGroups: SpecGroup[] };

export type ProductFlowStep = {
  id: string;
  title: string;
  order: number;
  description?: string;
};

export interface Product {
  slug: string;
  category: string;
  meta: { title: string; description: string; keywords?: string };
  title: string;
  shortDescription: string;
  heroImage?: { src: string; alt: string };
  galleryImages?: { src: string; alt: string }[];
  datasheetUrl?: string;
  flow: ProductFlowStep[];
  sections: ContentSection[];
  relatedSlugs?: string[];
}

export const pointLightSource1um: Product = {
  slug: "point-light-source-1um",
  category: "point-light-sources",

  meta: {
    title: "Techwin 1.0 µm Point Light Source | Precision Fiber Optic Source",
    description:
      "Techwin 1.0 µm Point Light Source for fiber optic systems with stable output and reliable performance. OEM support available. Contact +86-13958180450 for details.",
    keywords: "1.0 µm, point light source, fiber optic source, Techwin, calibration, photonics",
  },

  title: "1.0 µm Point Light Source",

  shortDescription:
    "Stable, low-noise 1.0 µm point illumination source for alignment, calibration, sensing and precision fiber-optic testing.",

  heroImage: {
    src: "/products/PointLightSources/1um-point-source-hero.jpg",
    alt: "1.0 µm Point Light Source",
  },

  galleryImages: [
    { src: "/products/PointLightSources/1um-point-source-1.jpg", alt: "1.0 µm source module" },
    { src: "/products/PointLightSources/1um-point-source-2.jpg", alt: "Fiber-coupled point light source" },
  ],

  // local datasheet path (tooling will convert it)
  datasheetUrl:
    "/Users/shivansh47/Documents/techwin/Frontend/src/data/products/PointLightSources/point-light-source-1um-datasheet.pdf",

  flow: [
    { id: "overview", title: "Overview", order: 1 },
    { id: "features", title: "Core Features", order: 2 },
    { id: "specs", title: "Technical Specifications", order: 3 },
    { id: "applications", title: "Applications", order: 4 },
    { id: "integration", title: "Integration Options", order: 5 },
    { id: "selection", title: "Selection Guidelines", order: 6 },
    { id: "handling", title: "Handling & Operation", order: 7 },
  ],

  sections: [
    {
      type: "overview",
      heading: "Overview",
      content:
        "A 1.0 µm Point Light Source delivers stable near-infrared illumination for precision optical tasks, component evaluation, alignment, sensing and laboratory metrology. Its controlled beam characteristics and strong wavelength stability make it essential for photonics development, fiber-optic testing and long-running research experiments. Techwin, located in Hangzhou City, supports industrial and scientific users with dependable optical emission solutions.",
    },

    {
      type: "features",
      heading: "Main Performance Characteristics",
      bullets: [
        "Stable optical emission for long-duration tasks",
        "Controlled beam structure for precise alignment and sensing",
        "Fiber-coupled or free-space output options",
        "Strong thermal stability with low wavelength drift",
        "Compact form factor ideal for laboratory benches and OEM systems",
        "Low-noise emission suitable for precision measurement",
      ],
    },

    {
      type: "specs",
      heading: "Technical Specifications (Typical)",
      specGroups: [
        {
          label: "Optical Output",
          rows: [
            { name: "Center Wavelength", value: "1.0 µm nominal (model dependent)" },
            { name: "Output Power", value: "1–10 mW typical (configurable)" },
            { name: "Beam Type", value: "Fiber-coupled or free-space point emission" },
            { name: "Spectral Stability", value: "< ±0.02 nm (with temperature control)" },
          ],
        },
        {
          label: "Fiber / Connectors",
          rows: [
            { name: "Output Fiber", value: "SMF or PM fiber options" },
            { name: "Connector Types", value: "FC/APC, FC/PC, bare fiber" },
            { name: "Coupling Efficiency", value: "> 70% typical" },
          ],
        },
        {
          label: "Electronics & Control",
          rows: [
            { name: "Drive Mode", value: "Regulated, low-noise current drive" },
            { name: "Thermal Control", value: "Integrated TEC + sensor" },
            { name: "Protection", value: "Over-current, over-temp, ESD protection" },
          ],
        },
        {
          label: "Environment",
          rows: [
            { name: "Operating Temperature", value: "0°C to 40°C" },
            { name: "Storage Temperature", value: "-20°C to 70°C" },
            { name: "Housing", value: "Compact metal enclosure" },
          ],
        },
      ],
    },

    {
      type: "applications",
      heading: "Typical Usage Areas",
      content:
        "Used in fiber-optic laboratories, alignment tasks, interferometric experiments, metrology stations, sensor validation, photonic device calibration and precision system development. The stable 1.0 µm output makes it highly suitable for research, industrial fiber testing and measurement environments.",
    },

    {
      type: "integration",
      heading: "Configuration & Integration Options",
      content:
        "Available with FC/APC, FC/PC, bare fiber or collimated free-space outputs. Supports continuous emission modes and adjustable power settings. Designed for seamless integration into optical benches, OEM assemblies and compact test systems.",
    },

    {
      type: "selection",
      heading: "Selection Guidelines for Engineers",
      content:
        "Consider wavelength stability, output power, connector type, mechanical environment and electronic compatibility. Evaluate thermal performance and noise requirements when choosing a model for interferometry, sensing or high-precision measurement tasks.",
    },

    {
      type: "handling",
      heading: "Proper Handling & Long-Term Operation",
      content:
        "Keep connectors clean, avoid over-bending fibers, use approved drivers, maintain a clean workstation and follow optical safety protocols. Strong internal temperature control ensures stable long-duration use for alignment and metrology environments.",
    },
  ],

  relatedSlugs: ["point-light-source-1550nm", "point-light-source-2um", "broadband-light-source"],
};

export default pointLightSource1um;
