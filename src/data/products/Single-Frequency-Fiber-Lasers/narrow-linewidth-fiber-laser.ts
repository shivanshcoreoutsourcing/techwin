import { Product } from "@/types/categories";

export const narrowLinewidthFiberLaser: Product = {
  slug: "narrow-linewidth-fiber-laser",
  category: "single-frequency-fiber-lasers",

  meta: {
    title: "Narrow Linewidth Fiber Laser | Techwin China High-Stability Systems",
    description:
      "Techwin Narrow Linewidth Fiber Laser designed for stable optical performance in precision applications. Located in Hangzhou City. For specifications and support, call +86-13958180450.",
    keywords:
      "narrow linewidth fiber laser, low noise fiber laser, coherent sensing source, precision optical laser",
  },

  title: "Narrow Linewidth Fiber Laser",

  shortDescription:
    "High-stability narrow linewidth fiber laser designed for precision measurement, interferometry, coherent detection, and scientific applications.",
  
  heroImage: {
    src: "/products/Single-Frequency-Fiber-Lasers/narrow-linewidth-hero.jpg",
    alt: "Narrow Linewidth Fiber Laser",
  },

  galleryImages: [
    { src: "/products/Single-Frequency-Fiber-Lasers/narrow-linewidth-module.jpg", alt: "Narrow linewidth module" },
    { src: "/products/Single-Frequency-Fiber-Lasers/narrow-linewidth-lab.jpg", alt: "Laser in lab environment" },
    { src: "/products/Single-Frequency-Fiber-Lasers/narrow-linewidth-cavity.jpg", alt: "Cavity structure" },
  ],
  datasheetUrl: "/datasheets/tn-narrow-linewidth.pdf",

  sections: [
    {
      type: "text",
      heading: "What Is a Narrow Linewidth Fiber Laser?",
      image: {src: "/products/Single-Frequency-Fiber-Lasers/narrow-linewidth-explain.jpg", alt: "Diagram explaining narrow linewidth"},
      content: `A narrow linewidth fiber laser provides extremely small spectral width (typically kHz-level). It maintains stability during long operation or environmental changes, making it ideal for metrology, coherent sensing, and wavelength‑sensitive experiments.`,
    },

    {
      type: "features",
      heading: "Why Narrow Linewidth Fiber Lasers Are Important",
      bullets: [
        "Stable wavelength output under long operation",
        "High coherence length for phase‑sensitive applications",
        "Low phase noise and spectral drift",
        "Controlled emission profile",
        "Suitable for laboratory and industrial use",
      ],
    },

    {
      type: "features",
      heading: "Key Features of Our Narrow Linewidth Fiber Laser",
      bullets: [
        "Ultra‑narrow spectral linewidth",
        "Long coherence length",
        "High side‑mode suppression ratio (SMSR)",
        "Low optical and electrical noise",
        "Compact and stable fiber‑based design",
        "Environmentally stable construction",
      ],
    },
    {
        type: "text",
        heading: "Precision Optical Performance",
        content: `Designed for sensitive tasks requiring dependable wavelength control, ensuring high-resolution results across long periods of operation.`
    },
    {
      type: "features",
      heading: "Relation to Precision Optical Laser Systems",
      bullets: [
        "Controlled emission profile",
        "Predictable frequency behaviour",
        "Low disturbance in optical output",
        "Reliable in phase‑sensitive environments",
      ],
    },

    {
      type: "features",
      heading: "Why Choose Our Narrow Linewidth Fiber Laser",
      bullets: [
        "Long working life",
        "High spectral purity",
        "Strong reliability",
        "Dependable wavelength stability",
        "Built under advanced fiber‑laser engineering standards",
      ],
    },
    {
        type: "specs",
        heading: "Specifications Overview",
        specGroups: [
            {
                label: "Performance",
                rows: [
                    { name: "Linewidth", value: "kHz‑level" },
                    { name: "Wavelength", value: "Custom options available" },
                    { name: "SMSR", value: "High (model dependent)" },
                    { name: "Coherence", value: "Long coherence length" },
                    { name: "Polarization", value: "Stable polarization" },
                ]
            }
        ]
    }
  ],
  relatedProducts: [
    { slug: "broadband-ultra-low-noise-fiber-laser", title: "Broadband Ultra-Low Noise Fiber Laser", shortDescription: "An ultra-low noise broadband light source.", image: { src: "/products/Single-Frequency-Fiber-Lasers/broadband-ultra-low-noise-hero.jpg", alt: "Broadband ultra-low noise fiber laser" }, href: "/products/single-frequency-fiber-lasers/broadband-ultra-low-noise-fiber-laser"},
    { slug: "ultra-narrow-linewidth", title: "Hz-Level Ultra-Narrow Linewidth Fiber Laser", shortDescription: "A Hz-level ultra-narrow linewidth single-frequency fiber laser.", image: { src: "/products/Single-Frequency-Fiber-Lasers/ultra-narrow-linewidth.jpg", alt: "Hz-Level Ultra-Narrow Linewidth Fiber Laser" }, href: "/products/single-frequency-fiber-lasers/ultra-narrow-linewidth" },
  ],
};

export default narrowLinewidthFiberLaser;
