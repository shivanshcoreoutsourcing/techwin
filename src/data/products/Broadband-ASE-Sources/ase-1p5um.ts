

export type SectionType = "overview" | "features" | "specs" | "applications" | "integration" | "safety" | "ordering";

export type SpecRow = {
  name: string;
  value: string;
};

export type SpecGroup = {
  label: string;
  rows: SpecRow[];
};

export type ContentSection =
  | {
      type: "overview" | "applications" | "integration" | "safety" | "ordering";
      heading: string;
      content: string;
    }
  | {
      type: "features";
      heading: string;
      bullets: string[];
    }
  | {
      type: "specs";
      heading: string;
      specGroups: SpecGroup[];
    };

export type ProductFlowStep = {
  id: string; // short id used by UI (e.g. "overview")
  title: string; // display title
  order: number; // ordering index
};

export interface Product {
  slug: string;
  category: string;
  meta: {
    title: string;
    description: string;
    keywords?: string;
  };
  title: string;
  shortDescription: string;
  heroImage?: { src: string; alt: string };
  galleryImages?: { src: string; alt: string }[];
  datasheetUrl?: string; // local path (will be transformed to URL by your tooling)
  flow: ProductFlowStep[]; // ordered reading/navigation flow
  sections: ContentSection[];
  relatedSlugs?: string[]; // links to other product slugs
}

/**
 * ASE Light Source (1.5 µm) product data
 */
export const aseLightSource1p5um: Product = {
  slug: "ase-light-source-1p5um",
  category: "broadband-ase-sources",

  meta: {
    title: "ASE Light Source (1.5 µm) for Optical Testing Fiber Use | Techwin",
    description:
      "Techwin ASE Light Source (1.5 µm) for sensing, metrology, and optical testing. Stable broadband output from Hangzhou City. Contact +86-13958180450 for detailed support.",
    keywords: "ASE source 1.5um, erbium ASE, broadband light source, ASE 1550nm, Techwin ASE",
  },

  title: "ASE Light Source (1.5 µm)",
  shortDescription:
    "Erbium-doped fiber ASE light source centered around 1.5 µm — broadband, low-coherence, stable output for sensing, metrology and optical testing.",

  heroImage: {
    src: "/products/Broadband-ASE/ase-1p5um-hero.jpg",
    alt: "ASE Light Source 1.5 µm",
  },

  galleryImages: [
    { src: "/products/Broadband-ASE/ase-1p5um-front.jpg", alt: "ASE 1.5 µm front view" },
    { src: "/products/Broadband-ASE/ase-1p5um-back.jpg", alt: "ASE 1.5 µm rear connectors" },
  ],

  // Local path to the datasheet file (the developer / build pipeline will transform this local path to a served URL)
  datasheetUrl:
    "/Users/shivansh47/Documents/techwin/Frontend/src/data/products/Broadband-ASE/ase-1p5um-datasheet.pdf",

  // Flow defines the order and navigation structure of the product page
  flow: [
    { id: "overview", title: "Overview", order: 1 },
    { id: "features", title: "Key Features", order: 2 },
    { id: "specs", title: "Technical Specs", order: 3 },
    { id: "applications", title: "Applications", order: 4 },
    { id: "integration", title: "Integration & Options", order: 5 },
    { id: "safety", title: "Safety", order: 6 },
    { id: "ordering", title: "Ordering & Support", order: 7 },
  ],

  sections: [
    {
      type: "overview",
      heading: "Overview",
      content:
        "The ASE Light Source (1.5 µm) uses erbium-doped fiber technology to generate a broadband, low-coherence output across the telecom band. It is designed for fiber sensing, DWDM component testing, metrology and laboratory platforms that require stable spectral power with minimal interference artifacts. Typical formats include benchtop and OEM module versions with standard fiber pigtails.",
    },

    {
      type: "features",
      heading: "Main Features",
      bullets: [
        "Broad spectral output across 1520–1600 nm (configurable)",
        "Low-coherence, low-ripple emission suitable for OCT and FBG interrogation",
        "Stable output power with long-term drift <0.05 dB (typical)",
        "SMF-28 or PM1550 fiber pigtail options; FC/APC termination available",
        "Benchtop and OEM module formats; compact and low-maintenance",
        "Integrated pump monitoring and over-temperature protection",
      ],
    },

    {
      type: "specs",
      heading: "Typical Technical Specifications",
      specGroups: [
        {
          label: "Optical",
          rows: [
            { name: "Wavelength Range", value: "1520–1600 nm (typical)" },
            { name: "Output Power", value: "+3 dBm to +20 dBm (model dependent)" },
            { name: "Spectral Width (FWHM)", value: "30–80 nm (configurable/flattened options)" },
            { name: "Coherence Length", value: "Very low (incoherent ASE output)" },
            { name: "Output Fiber", value: "SMF-28 (standard) or PM1550 (option)" },
            { name: "Output Stability", value: "<0.05 dB (typical, long-term)" },
          ],
        },
        {
          label: "Mechanical & Electrical",
          rows: [
            { name: "Form Factor", value: "Benchtop / OEM module / Rack (optional)" },
            { name: "Control Interfaces", value: "Analog (0–5V), RS232, USB or Ethernet (model dependent)" },
            { name: "Cooling", value: "Passive / fan-cooled (depending on power)" },
            { name: "Power Input", value: "12–24 VDC or AC adaptor (model dependent)" },
          ],
        },
      ],
    },

    {
      type: "applications",
      heading: "Applications",
      content:
        "Common uses include distributed fiber sensing (FBG/DAS), optical component characterization (filters, WDM modules), OCT imaging sources, wavelength calibration and DWDM test benches. The broadband, low-coherence output makes this source especially valuable where speckle or interference fringes would otherwise degrade measurements.",
    },

    {
      type: "integration",
      heading: "Integration & Configuration Options",
      content:
        "Available options include flattened spectral shaping, higher output power configurations, polarization-maintaining output fiber, custom pigtail lengths, and OEM mounting. Benchtop units include front-panel displays and local control; modules expose digital and analog control pins for seamless integration into automated test systems.",
    },

    {
      type: "safety",
      heading: "Safety & Handling",
      content:
        "Follow IEC 60825 laser safety guidelines. Although ASE light is broadband and low-coherence, it still carries optical power that can be hazardous to eyes. Use proper fiber connectors, avoid bending beyond specified radii, keep connectors dust-free, and operate within specified temperature ranges.",
    },

    {
      type: "ordering",
      heading: "Ordering, Support & Documentation",
      content:
        "For pricing, lead times, or custom engineering support contact our technical sales team at +86-13958180450. A downloadable datasheet, test reports and integration notes are provided with each order. Custom BOMs and NRE for OEM projects are available upon request.",
    },
  ],

  relatedSlugs: [
    "ase-light-source-1p0um",
    "ase-light-source-2p0um",
    "superluminescent-led-sled",
  ],
};

export default aseLightSource1p5um;
