import { Product } from "@/types/categories";

export const oneMicronSingleFrequencyFiberLaser: Product = {
  slug: "1um-single-frequency-fiber-laser",
  category: "single-frequency-fiber-lasers",

  meta: {
    title: "Techwin 1.0 µm Single-Frequency Fiber Laser | High Stability Systems",
    description:
      "High-stability 1.0 µm Single-Frequency Fiber Laser systems by Techwin in Hangzhou City. Precision design, narrow linewidth, reliable output. Call +86-13958180450.",
    keywords:
      "1.0 µm fiber laser, single-frequency fiber laser, narrow linewidth 1.0um, high stability fiber laser, Techwin 1.0um laser",
  },

  title: "1.0 µm Single-Frequency Fiber Laser",
  shortDescription:
    "The 1.0 µm Single-Frequency Fiber Laser provides narrow linewidth, stable output, and long-term reliability for scientific, industrial, sensing and metrology applications.",

  heroImage: {
    src: "/products/Single-Frequency-Fiber-Lasers/1um-hero.jpg",
    alt: "1.0 µm Single-Frequency Fiber Laser",
  },

  galleryImages: [
    { src: "/products/Single-Frequency-Fiber-Lasers/1um-module.jpg", alt: "1.0 µm laser module" },
    { src: "/products/Single-Frequency-Fiber-Lasers/1um-lab.jpg", alt: "1.0 µm laser in laboratory" },
    { src: "/products/Single-Frequency-Fiber-Lasers/1um-diagram.jpg", alt: "1.0 µm system diagram" },
  ],

  datasheetUrl: "/datasheets/tn-1um-single-frequency-fiber-laser.pdf",

  sections: [
    {
      type: "text",
      heading: "Overview of the 1.0 µm Wavelength Range",
      image: { src: "/products/Single-Frequency-Fiber-Lasers/1um-overview.jpg", alt: "1.0 µm overview" },
      content:
        "The 1.0 µm region is widely used in LIDAR, sensing, metrology and material characterization. Techwin’s 1.0 µm single-frequency systems deliver narrow linewidth, excellent coherence and stable output required for long-distance and high-precision tasks.",
    },

    {
      type: "features",
      heading: "Key Performance Features",
      bullets: [
        "Narrow linewidth output (kHz-level or better, model dependent)",
        "Low intensity and phase noise for high SNR",
        "High beam quality (M² near 1) for precise coupling",
        "Robust thermal and vibration-resistant design",
        "Long-term operational reliability for continuous use",
      ],
    },

    {
      type: "text",
      heading: "Design Architecture",
      content:
        "Compact fiber-based architecture using single-frequency cavities, integrated isolators, high-performance FBGs and active thermal stabilization to ensure single longitudinal mode operation with minimal spectral drift.",
    },

    {
      type: "features",
      heading: "Technical Advantages",
      bullets: [
        "Long coherence length for precision metrology",
        "Reliable frequency control suitable for coherent LIDAR and seismic sensing",
        "Efficient power stability across varying conditions",
        "Customizable linewidth and power configurations",
      ],
    },

    {
      type: "text",
      heading: "Applications",
      content:
        "The 1.0 µm single-frequency series supports distributed fiber sensing (DAS/DTS/BOTDR/BOTDA), coherent LIDAR, optical metrology, atomic and molecular experiments, telecom research and industrial measurement systems.",
    },

    {
      type: "features",
      heading: "Integration & Environmental Tolerance",
      bullets: [
        "Analog and digital control interfaces (optional Ethernet/Serial)",
        "Easy fiber-optic coupling and OEM-ready modules",
        "Temperature regulation and mechanical rigidity for field deployment",
        "Low maintenance requirements and long MTBF",
      ],
    },

    {
      type: "text",
      heading: "Service, Support & Ordering",
      content:
        "Techwin provides technical consultation, integration guidance, calibration, warranty support and configurable options. When ordering please specify wavelength, output power, linewidth requirements and package type to match your system needs.",
    },
  ],

  relatedProducts: [
    {
      slug: "narrow-linewidth-fiber-laser",
      title: "Narrow Linewidth Fiber Laser",
      shortDescription: "Stable kHz-level narrow-linewidth laser.",
      image: { src: "/products/Single-Frequency-Fiber-Lasers/narrow-linewidth-hero.jpg", alt: "Narrow Linewidth Fiber Laser" },
      href: "/products/single-frequency-fiber-lasers/narrow-linewidth-fiber-laser",
    },
    {
      slug: "ultra-narrow-linewidth",
      title: "Hz-Level Ultra-Narrow Linewidth Fiber Laser",
      shortDescription: "Hz-level ultra-narrow linewidth single-frequency fiber laser.",
      image: { src: "/products/Single-Frequency-Fiber-Lasers/ultra-narrow-linewidth.jpg", alt: "Ultra Narrow Linewidth Fiber Laser" },
      href: "/products/single-frequency-fiber-lasers/ultra-narrow-linewidth",
    },
  ],
};

export default oneMicronSingleFrequencyFiberLaser;
