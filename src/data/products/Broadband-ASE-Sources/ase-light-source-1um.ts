import { Product } from "@/types/categories";

export const aseLightSource1um: Product = {
  slug: "ase-light-source-1um",
  category: "broadband-ase-sources",

  meta: {
    title: "ASE Light Source (1.0 µm) for Optical Applications | Techwin",
    description:
      "Techwin ASE Light Source (1.0 µm) for optical testing and measurement tasks. Contact +86-13958180450 for details. Reliable manufacturer based in Hangzhou City China.",
    keywords:
      "ASE light source, 1.0 µm ASE, amplified spontaneous emission source, fiber testing ASE, Techwin ASE",
  },

  title: "ASE Light Source (1.0 µm)",
  shortDescription:
    "Stable 1.0 µm ASE light source engineered for fiber testing, calibration, imaging and laboratory measurement with low coherence and smooth spectral output.",

  heroImage: {
    src: "/products/Broadband-ASE-Sources/ase-1um-hero.jpg",
    alt: "ASE Light Source 1.0 µm Hero Image",
  },

  galleryImages: [
    {
      src: "/products/Broadband-ASE-Sources/ase-1um-module.jpg",
      alt: "ASE module internal view",
    },
    {
      src: "/products/Broadband-ASE-Sources/ase-1um-spectrum.jpg",
      alt: "ASE spectral output",
    },
    {
      src: "/products/Broadband-ASE-Sources/ase-1um-lab.jpg",
      alt: "ASE in laboratory setup",
    },
  ],

  // local uploaded file path (developer: convert this path to a downloadable URL)
  datasheetUrl: "/mnt/data/ProductDescription.tsx",

  sections: [
    {
      type: "text",
      heading: "Overview of the ASE Light Source (1.0 µm)",
      image: {
        src: "/products/Broadband-ASE-Sources/ase-1um-overview.jpg",
        alt: "Overview ASE 1.0 µm",
      },
      content:
        "The ASE Light Source (1.0 µm) provides stable broadband emission with low coherence and a smooth spectral profile. It is designed for fiber-optic evaluation, calibration, interferometry, imaging, and system characterization tasks where speckle-free illumination and predictable spectral behavior are essential.",
    },

    {
      type: "features",
      heading: "Key Features",
      bullets: [
        "Broadband spectral output centered near 1.0 µm",
        "Low coherence—minimizes interference and speckle",
        "Stable long-term power with low drift",
        "Fiber-coupled, compact module or benchtop formats",
        "Digital and analog control interfaces available",
        "Engineered for continuous operation with thermal regulation",
      ],
    },

    {
      type: "text",
      heading: "Working Principle",
      content:
        "An ASE source generates amplified spontaneous emission inside a doped fiber pumped by laser diodes. Without resonant feedback the emission remains broadband and low-coherence. The design uses gain-managed fiber stages, feedback suppression and temperature control to produce a smooth, reliable spectrum ideal for measurement and testing.",
      image: {
        src: "/products/Broadband-ASE-Sources/ase-1um-principle.jpg",
        alt: "ASE working principle",
      },
    },

    {
      type: "specs",
      heading: "Typical Specifications",
      specGroups: [
        {
          label: "Optical",
          rows: [
            { name: "Center Wavelength", value: "≈ 1.0 µm (model dependent)" },
            { name: "Spectral Width", value: "Broad / smooth ASE profile" },
            { name: "Output Type", value: "Fiber-coupled / free-space option" },
            { name: "Coherence", value: "Low coherence (ASE)" },
          ],
        },
        {
          label: "Performance",
          rows: [
            { name: "Power", value: "Configurable — application dependent" },
            { name: "Stability", value: "Low drift over long cycles" },
            { name: "RIN", value: "Low (model dependent)" },
            { name: "Form Factor", value: "Module or benchtop" },
          ],
        },
      ],
    },

    {
      type: "text",
      heading: "Applications",
      content:
        "This ASE source is used for fiber component testing (FBGs, couplers, WDM devices), interferometry and metrology where low coherence is required, imaging and inspection systems to reduce speckle, calibration benches, and photonics R&D workflows.",
    },

    {
      type: "features",
      heading: "Integration & Maintenance",
      bullets: [
        "Easy integration via standard fiber connectors",
        "Minimal maintenance: keep connectors clean and ventilated",
        "Recommended environmental control for best long-term stability",
        "Digital monitoring for remote diagnostics and control",
      ],
    },

    {
      type: "text",
      heading: "Why Choose an ASE Source?",
      content:
        "ASE sources provide speckle-free broadband illumination and predictable spectral behavior, making them ideal when narrow-line lasers introduce undesirable coherence effects. Their fiber-based design simplifies alignment and improves mechanical resilience for lab and industrial environments.",
    },

    {
      type: "text",
      heading: "Manufacturer & Support",
      content:
        "Units are produced by experienced photonics manufacturers in Hangzhou City. For datasheets, configuration options, or integration support, contact +86-13958180450.",
    },
  ],

  relatedProducts: [
    {
      slug: "broadband-light-source",
      title: "Broadband Light Source",
      shortDescription: "Wide-spectrum broadband source for metrology and imaging.",
      image: {
        src: "/products/Broadband-ASE-Sources/broadband-thumb.jpg",
        alt: "Broadband light source",
      },
      href: "/products/broadband-ase-sources/broadband-light-source",
    },
    {
      slug: "supercontinuum-light-source",
      title: "Supercontinuum Light Source",
      shortDescription: "Ultra-wideband source for high-end research and imaging.",
      image: {
        src: "/products/Broadband-ASE-Sources/supercontinuum-thumb.jpg",
        alt: "Supercontinuum source",
      },
      href: "/products/broadband-ase-sources/supercontinuum-light-source",
    },
  ],
};

export default aseLightSource1um;
