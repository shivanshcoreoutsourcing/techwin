import { Product } from "@/types/categories";

export const onePointFiveMicronSingleFrequencyFiberLaser: Product = {
  slug: "1.5um-single-frequency-fiber-laser",
  category: "single-frequency-fiber-lasers",

  meta: {
    title: "1.5 µm Single-Frequency Fiber Laser | Techwin Precision Lasers",
    description:
      "High-performance 1.5 µm Single-Frequency Fiber Laser systems by Techwin. Reliable, narrow linewidth output for critical applications. Contact +86-13958180450 for details.",
    keywords:
      "1.5 µm fiber laser, 1550 nm single-frequency laser, narrow linewidth 1.5um, Techwin 1.5um laser, high stability fiber laser",
  },

  title: "1.5 µm Single-Frequency Fiber Laser",
  shortDescription:
    "The 1.5 µm Single-Frequency Fiber Laser series delivers narrow linewidth, stable wavelength output, and long-term frequency reliability for sensing, LIDAR, metrology and telecom research.",

  heroImage: {
    src: "/products/Single-Frequency-Fiber-Lasers/1-5um-hero.jpg",
    alt: "1.5 µm Single-Frequency Fiber Laser",
  },

  galleryImages: [
    { src: "/products/Single-Frequency-Fiber-Lasers/1-5um-module.jpg", alt: "1.5 µm laser module" },
    { src: "/products/Single-Frequency-Fiber-Lasers/1-5um-lab.jpg", alt: "1.5 µm laser in laboratory" },
    { src: "/products/Single-Frequency-Fiber-Lasers/1-5um-diagram.jpg", alt: "1.5 µm system diagram" },
  ],

  datasheetUrl: "/datasheets/tn-1-5um-single-frequency-fiber-laser.pdf",

  sections: [
    {
      type: "text",
      heading: "Overview of 1.5 µm Fiber Laser Technology",
      image: { src: "/products/Single-Frequency-Fiber-Lasers/1-5um-overview.jpg", alt: "1.5 µm overview" },
      content:
        "Fiber lasers operating in the 1.5 µm band are recognized for reliability, long-distance propagation capability, and superior stability. Techwin’s 1.5 µm single-frequency systems deliver extremely pure spectral output ideal for high-coherence applications.",
    },

    {
      type: "features",
      heading: "Key Features",
      bullets: [
        "Narrow linewidth output (sub-kHz depending on model)",
        "Stable single-frequency operation with minimal mode hopping",
        "High coherence length for interferometry and sensing",
        "Low amplitude and phase noise for high SNR",
        "Compact, all-fiber architecture with rugged construction",
        "Eye-safe wavelength suitable for outdoor and free-space use",
      ],
    },

    {
      type: "text",
      heading: "Technical Advantages",
      content:
        "The 1.5 µm range offers low attenuation in standard fiber, excellent environmental stability, and compatibility with telecom-grade components—making it ideal for long-distance propagation, trace-gas detection, and coherent communications.",
    },

    {
      type: "features",
      heading: "Performance Specifications (typical)",
      bullets: [
        "Wavelength: centered near 1550 nm (tunable or fixed options)",
        "Linewidth: sub-kHz (model dependent)",
        "Output Power: multiple power classes available",
        "Polarization: PM / linear with high PER",
        "Frequency Stability: excellent short- and long-term stability",
      ],
    },

    {
      type: "text",
      heading: "Applications",
      content:
        "The 1.5 µm single-frequency series supports distributed acoustic sensing (DAS), coherent LIDAR, optical metrology, fiber sensing, spectroscopy, telecom research, and industrial measurement systems.",
    },

    {
      type: "features",
      heading: "Product Variants & Configurations",
      bullets: [
        "Benchtop units with full control interfaces",
        "OEM fiber-coupled modules for integration",
        "High-power free-space or fiber-coupled options",
        "Wavelength-locked solutions for fixed-reference applications",
      ],
    },

    {
      type: "text",
      heading: "Integration & Environmental Tolerance",
      content:
        "Interfaces include standard fiber connectors, modulation and monitoring ports, and optional Ethernet/serial control. Systems include temperature regulation and mechanical rigidity for field deployment and low-maintenance operation.",
    },

    {
      type: "text",
      heading: "Quality Control, Service & Support",
      content:
        "Each unit undergoes rigorous testing for frequency stability, linewidth, power consistency, and long-term endurance. Techwin provides technical consultation, calibration, warranty and integration support to help match the system to your application requirements.",
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
      slug: "broadband-ultra-low-noise-fiber-laser",
      title: "Broadband Ultra-Low Noise Fiber Laser",
      shortDescription: "Broadband low-noise source for sensing and metrology.",
      image: { src: "/products/Single-Frequency-Fiber-Lasers/broadband-ultra-low-noise-hero.jpg", alt: "Broadband Ultra-Low Noise Laser" },
      href: "/products/single-frequency-fiber-lasers/broadband-ultra-low-noise-fiber-laser",
    },
  ],
};

export default onePointFiveMicronSingleFrequencyFiberLaser;
