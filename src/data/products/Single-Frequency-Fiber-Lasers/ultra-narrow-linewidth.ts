import { Product } from "@/types/categories";

export const ultraNarrowLinewidth: Product = {
  slug: "ultra-narrow-linewidth",
  category: "single-frequency-fiber-lasers",

  meta: {
    title: "Hz-Level Ultra-Narrow Linewidth Single-Frequency Fiber Laser | Techwin China",
    description:
      "Hz-level ultra-narrow linewidth single-frequency fiber lasers in Hangzhou — stable 1550nm narrow-linewidth sources for coherent detection, lidar, and quantum research. Contact +86-13958180450.",
    keywords:
      "ultra-narrow linewidth fiber laser, single frequency fiber laser, coherent detection laser, 1550nm narrow linewidth source",
  },

  title: "Hz-Level Ultra‑Narrow Linewidth Single‑Frequency Fiber Laser",

  shortDescription:
    "Hz-level ultra-narrow linewidth fiber laser delivering exceptional coherence, phase stability, and spectral purity for scientific, industrial, sensing, and quantum applications.",

  heroImage: {
    src: "/products/Single-Frequency-Fiber-Lasers/ultra-narrow-linewidth.jpg",
    alt: "Ultra-Narrow Linewidth Fiber Laser Main Image",
  },

  galleryImages: [
    { src: "/products/Single-Frequency-Fiber-Lasers/ultra-narrow-module.jpg", alt: "Laser Module Close View" },
    { src: "/products/Single-Frequency-Fiber-Lasers/ultra-narrow-internal-cavity.jpeg", alt: "Laser Cavity Structure" },
    { src: "/products/Single-Frequency-Fiber-Lasers/ultra-narrow-lab-use.jpeg", alt: "Laser in Laboratory" },
    { src: "/products/Single-Frequency-Fiber-Lasers/ultra-narrow-linewidth.jpg", alt: "Production line" },
  ],

  datasheetUrl: "/datasheets/tn-sfl-1550.pdf",

  sections: [
    {
      type: 'text',
      heading: "What Is an Ultra‑Narrow Linewidth Fiber Laser?",
      image: { src: "/products/Single-Frequency-Fiber-Lasers/ultra-narrow-what-is.jpeg", alt: "what is section image"},
      content: `An ultra-narrow linewidth fiber laser is engineered to achieve extremely low linewidth levels — down to Hz or sub-kHz — giving very long coherence lengths and low phase noise.`,
    },
    {
      type: 'features',
      heading: "Why Linewidth Matters in High‑Precision Applications",
      image: { src: "/products/Single-Frequency-Fiber-Lasers/ultra-narrow-linewidth.jpg", alt: "why matters section image"},
      bullets: [
        "Longer coherence length",
        "Improved phase noise characteristics",
        "Higher measurement accuracy",
        "Superior interferometric performance",
        "Stable long-range signal transmission",
      ],
    },
    {
      type: 'specs',
      heading: 'Specifications',
      specGroups: [
        {
          label: 'Performance',
          rows: [
            { name: "Linewidth", value: "Hz to sub-kHz" },
            { name: "Wavelength", value: "1550nm / 1064nm / Custom" },
            { name: "Power", value: "mW to watt-level" },
            { name: "Configuration", value: "PM / SM" },
            { name: "Frequency Stability", value: "Ultra-low drift" },
          ]
        }
      ]
    }
  ],

  relatedProducts: [
    // These slugs need to correspond to actual file names.
    // Assuming 'single-frequency-amplifier.ts' and 'low-noise-1550.ts' exist in the same category directory.
    { slug: "single-frequency-amplifier", title: "Single‑Frequency Amplifier", shortDescription: "A high power single frequency amplifier", image: { src: "/products/Single-Frequency-Fiber-Lasers/sfa.jpg", alt: "Single frequency amplifier" }, href:"/products/single-frequency-fiber-lasers/single-frequency-amplifier" },
    { slug: "low-noise-1550", title: "Low‑Noise 1550nm Laser", shortDescription: "A low-noise 1550nm laser", image: { src: "/products/Single-Frequency-Fiber-Lasers/ln1550.jpg", alt: "low noise 1550nm laser" }, href:"/products/single-frequency-fiber-lasers/low-noise-1550" },
  ],
};

export default ultraNarrowLinewidth;
