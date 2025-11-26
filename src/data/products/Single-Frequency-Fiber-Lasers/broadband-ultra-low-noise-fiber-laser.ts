import { Product } from "@/types/categories";

export const broadbandUltraLowNoise: Product = {
  slug: "broadband-ultra-low-noise-fiber-laser",
  category: "single-frequency-fiber-lasers",

  meta: {
    title: "Broadband Fiber Laser Ultra-Low Noise | Techwin China Manufacturer",
    description:
      "Techwin – single frequency fiber laser systems offering broadband ultra-low noise laser solutions in Hangzhou City. For technical details or support, call +86-13958180450.",
    keywords: "broadband fiber laser, ultra-low noise laser, single-frequency fiber laser, broadband low-noise source",
  },

  title: "Broadband Ultra‑Low Noise Single‑Frequency Fiber Laser",

  shortDescription:
    "Broadband fiber laser series delivering ultra-low noise, wide spectral output and high stability for spectroscopy, metrology, coherent detection and optical sensing.",

  heroImage: { src: "/products/Single-Frequency-Fiber-Lasers/broadband-ultra-low-noise-hero.jpg", alt: "Broadband Ultra-Low Noise Fiber Laser" },

  galleryImages: [
    { src: "/products/Single-Frequency-Fiber-Lasers/broadband-module.jpg", alt: "Broadband laser module" },
    { src: "/products/Single-Frequency-Fiber-Lasers/broadband-lab.jpg", alt: "Broadband laser in laboratory" },
    { src: "/products/Single-Frequency-Fiber-Lasers/broadband-schematic.jpg", alt: "Architecture schematic" },
  ],
  
  datasheetUrl: "/datasheets/tn-broadband-uln.pdf",

  sections: [
    {
      type: 'text',
      heading: "Broadband Fiber Laser Technology",
      image: { src: "/products/Single-Frequency-Fiber-Lasers/broadband-technology.jpg", alt: "broadband tech" },
      content: `A broadband fiber laser emits light across a wider spectral range while maintaining high output stability and minimal noise. Unlike narrowband lasers, these sources preserve coherence and low frequency drift across their spectrum, making them ideal for precision measurement and sensing.`,
    },
    {
      type: 'features',
      heading: "Importance of Ultra‑Low Noise Performance",
      bullets: [
        "Minimizes amplitude fluctuations",
        "Reduces frequency instability",
        "Lowers phase noise",
        "Prevents interference artifacts",
      ],
    },
    {
      type: 'features',
      heading: "Key Advantages",
      bullets: [
        "Stable, wide spectral output",
        "Very low phase noise",
        "Long operational life",
        "Compact, integrable design",
      ],
    },
    {
      type: 'specs',
      heading: "Technical Specifications Overview",
      specGroups: [
        {
          label: 'Performance',
          rows: [
            { name: "Spectral Range", value: "Broadband (model dependent)"},
            { name: "RIN", value: "Ultra-low (typ. < -150 dB/Hz) — model dependent"},
            { name: "Linewidth", value: "Narrow to sub-kHz (model dependent)"},
            { name: "Output Power", value: "mW to watt-level"},
            { name: "Configuration", value: "Fiber-coupled, PM or SM options"},
            { name: "Control", value: "Remote interface, thermal control"},
          ]
        }
      ]
    },
  ],

  relatedProducts: [
    { slug: "ultra-narrow-linewidth", title: "Hz-Level Ultra-Narrow Linewidth Single-Frequency Fiber Laser", shortDescription: "A Hz-level ultra-narrow linewidth single-frequency fiber laser.", image: { src: "/products/Single-Frequency-Fiber-Lasers/ultra-narrow-linewidth.jpg", alt: "ultra narrow" }, href:"/products/single-frequency-fiber-lasers/ultra-narrow-linewidth" },
    // Assuming low-noise-1550.ts exists
    { slug: "low-noise-1550", title: "Low‑Noise 1550nm Laser", shortDescription: "A low noise 1550nm laser", image: { src: "/products/Single-Frequency-Fiber-Lasers/ln1550.jpg", alt: "low noise" }, href: "/products/single-frequency-fiber-lasers/low-noise-1550" },
  ],
};

export default broadbandUltraLowNoise;
