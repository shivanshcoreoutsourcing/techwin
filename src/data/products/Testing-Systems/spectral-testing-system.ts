// File: /src/data/products/Accessories/spectral-testing-system.ts
// Data + types for "Spectral Testing System"
// Datasheet local path should be replaced by real file path when uploaded.

export type SectionType =
  | "overview"
  | "features"
  | "specs"
  | "applications"
  | "advantages"
  | "integration"
  | "selection"
  | "ordering";

export type SpecRow = { name: string; value: string };
export type SpecGroup = { label: string; rows: SpecRow[] };

export type ContentSection =
  | { type: "overview" | "applications" | "advantages" | "integration" | "selection" | "ordering"; heading: string; content: string }
  | { type: "features"; heading: string; bullets: string[] }
  | { type: "specs"; heading: string; specGroups: SpecGroup[] };

export type ProductFlowStep = {
  id: string;
  title: string;
  order: number;
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

export const spectralTestingSystem: Product = {
  slug: "spectral-testing-system",
  category: "accessories",

  meta: {
    title: "Spectral Testing System | Techwin Optical Measurement Solutions",
    description:
      "Techwin Spectral Testing System from Hangzhou City for precise optical measurements and stable laser analysis. Contact +86-13958180450 for detailed technical support.",
    keywords:
      "spectral testing system, optical spectrum measurement, linewidth testing, wavelength analysis, laser spectral diagnostics, Techwin",
  },

  title: "Spectral Testing System",

  shortDescription:
    "High-precision measurement system for wavelength, linewidth, spectral purity and drift analysis in laser, fiber, and photonic testing environments.",

  heroImage: {
    src: "/products/Accessories/spectral-testing-system-hero.jpg",
    alt: "Spectral Testing System",
  },

  galleryImages: [
    { src: "/products/Accessories/spectral-testing-system-1.jpg", alt: "Front view of spectral testing system" },
    { src: "/products/Accessories/spectral-testing-system-2.jpg", alt: "Back panel & connectors" },
  ],

  datasheetUrl:
    "/Users/shivansh47/Documents/techwin/Frontend/src/data/products/Accessories/spectral-testing-system-datasheet.pdf",

  flow: [
    { id: "overview", title: "Overview", order: 1 },
    { id: "features", title: "Key Features", order: 2 },
    { id: "specs", title: "Technical Specs", order: 3 },
    { id: "applications", title: "Applications", order: 4 },
    { id: "advantages", title: "Advantages", order: 5 },
    { id: "selection", title: "Selection Guide", order: 6 },
    { id: "integration", title: "Integration", order: 7 },
    { id: "ordering", title: "Ordering & Support", order: 8 },
  ],

  sections: [
    // ---------------- OVERVIEW ----------------
    {
      type: "overview",
      heading: "Overview",
      content:
        "The Spectral Testing System provides precise characterization of wavelength, linewidth, spectral purity, and drift for narrowband, broadband, CW, or pulsed lasers. Used in research labs, manufacturing lines, and optical integration platforms, it ensures the stability and accuracy of laser and photonic systems. Techwin develops these high-precision solutions in Hangzhou City to support global optical measurement requirements.",
    },

    // ---------------- FEATURES ----------------
    {
      type: "features",
      heading: "Key Features",
      bullets: [
        "High-accuracy wavelength measurement for narrowband and broadband lasers",
        "Linewidth analysis for single-frequency and precision laser sources",
        "Spectral purity monitoring including side-mode and noise evaluation",
        "Long-term frequency drift tracking",
        "Thermally stabilized internal architecture for measurement consistency",
        "Real-time spectral visualization software with automated reporting",
        "Wide compatibility with fiber lasers, diode lasers, CW and pulsed sources",
      ],
    },

    // ---------------- SPECS ----------------
    {
      type: "specs",
      heading: "Technical Specifications (Typical)",
      specGroups: [
        {
          label: "Optical",
          rows: [
            { name: "Wavelength Range", value: "Configurable: 1.0 µm / 1.5 µm / 2.0 µm bands" },
            { name: "Spectral Resolution", value: "High-resolution (model dependent)" },
            { name: "Linewidth Measurement", value: "Sub-MHz to several GHz (depending on model)" },
            { name: "Dynamic Range", value: "Wide dynamic range for low and high power inputs" },
            { name: "Input Types", value: "Fiber-coupled (SMF/PMF) or free-space input" },
          ],
        },
        {
          label: "Electrical & Mechanical",
          rows: [
            { name: "Interface", value: "USB / Ethernet / RS232 (model dependent)" },
            { name: "Software", value: "Real-time spectral analysis suite with reporting tools" },
            { name: "Cooling", value: "Internal thermal stabilization" },
            { name: "Form Factor", value: "Benchtop measuring platform" },
          ],
        },
      ],
    },

    // ---------------- APPLICATIONS ----------------
    {
      type: "applications",
      heading: "Applications",
      content:
        "Ideal for optical R&D, fiber laser production, DWDM component evaluation, metrology tasks, environmental detection systems, lidar development, and quality-control in narrowband laser manufacturing.",
    },

    // ---------------- ADVANTAGES ----------------
    {
      type: "advantages",
      heading: "Advantages",
      content:
        "The system ensures long-term spectral accuracy with high-resolution outputs, detailed spectral insight, stable internal references, and robust mechanical design. It is suitable for laboratories, industrial processes, coherent detection systems, and narrow-linewidth laser evaluation.",
    },

    // ---------------- SELECTION GUIDE ----------------
    {
      type: "selection",
      heading: "Selection Guide",
      content:
        "Select based on wavelength range, resolution, dynamic range, software integration needs, power compatibility, and environmental stability requirements. Models are available for telecom band, infrared, or custom wavelength ranges.",
    },

    // ---------------- INTEGRATION ----------------
    {
      type: "integration",
      heading: "Integration",
      content:
        "Easily integrates with laser benches, automated inspection systems, R&D platforms, and fiber-based test setups. USB/Ethernet interfaces support real-time monitoring, long-term logging, and automated analysis workflows.",
    },

    // ---------------- ORDERING ----------------
    {
      type: "ordering",
      heading: "Ordering & Support",
      content:
        "To request specifications, pricing, or OEM customization, contact +86-13958180450. Techwin provides full documentation, software support, and engineering assistance from Hangzhou City.",
    },
  ],

  relatedSlugs: [
    "noise-testing-system",
    "laser-analysis-platform",
    "fiber-amplifier-modules",
  ],
};

export default spectralTestingSystem;
