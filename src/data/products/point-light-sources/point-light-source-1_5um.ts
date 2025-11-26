// File: /src/data/products/PointLightSources/point-light-source-1_5um.ts
// 1.5 µm Point Light Source – Product Data & Interfaces

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

export const pointLightSource15um: Product = {
  slug: "point-light-source-1-5um",
  category: "point-light-sources",

  meta: {
    title: "1.5 µm Point Light Source | Techwin Precision Fiber Optics Unit",
    description:
      "High-performance 1.5 µm point light source by Techwin, Hangzhou City. Stable output for optical testing. Contact +86-13958180450 for details and specifications.",
    keywords: "1.5 µm, point light source, fiber optics, Techwin, telecom, sensing, calibration",
  },

  title: "1.5 µm Point Light Source",

  shortDescription:
    "Stable 1.5 µm point illumination for fiber sensing, telecom testing, metrology and calibration — low-loss, low-noise, OEM-ready.",

  heroImage: {
    src: "/products/PointLightSources/1_5um-point-source-hero.jpg",
    alt: "1.5 µm Point Light Source",
  },

  galleryImages: [
    { src: "/products/PointLightSources/1_5um-point-source-1.jpg", alt: "1.5 µm point source module" },
    { src: "/products/PointLightSources/1_5um-point-source-2.jpg", alt: "Fiber-coupled 1.5 µm point source" },
  ],

  // local datasheet path (will be transformed to an accessible URL by your tooling)
  datasheetUrl:
    "/Users/shivansh47/Documents/techwin/Frontend/src/data/products/PointLightSources/point-light-source-1_5um-datasheet.pdf",

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
        "The 1.5 µm Point Light Source provides a stable near-infrared point illumination optimized for telecom-grade fiber systems, sensing networks, calibration benches and precision optical testing. Designed for low attenuation across standard single-mode fibers, this unit supports long-span measurements and consistent performance in both lab and field environments.",
    },

    {
      type: "features",
      heading: "Structural & Functional Features",
      bullets: [
        "Low-loss 1.5 µm emission with excellent wavelength stability",
        "Compact, rugged housing for lab and field use",
        "Low-noise optical output suitable for sensitive measurements",
        "Multiple connector options: FC/APC, FC/PC, bare fiber or collimated output",
        "Integrated thermal control to minimize wavelength drift",
        "Configurable output power and OEM-ready mechanical interfaces",
      ],
    },

    {
      type: "specs",
      heading: "Performance Specifications (Typical)",
      specGroups: [
        {
          label: "Optical Output",
          rows: [
            { name: "Center Wavelength", value: "1.5 µm (1550 nm nominal)" },
            { name: "Output Power", value: "-3 dBm to +17 dBm (model dependent)" },
            { name: "Beam Type", value: "Single-mode point output (fiber or free-space)" },
            { name: "Spectral Width", value: "Single-mode / narrow-band (model dependent)" },
          ],
        },
        {
          label: "Fiber & Connector",
          rows: [
            { name: "Output Fiber", value: "SMF-28 or PM1550 options" },
            { name: "Connector Types", value: "FC/APC, FC/PC, bare fiber pigtail" },
            { name: "Pigtail Length", value: "Customizable (standard 1 m)" },
          ],
        },
        {
          label: "Environmental & Electrical",
          rows: [
            { name: "Operating Temperature", value: "0°C to 40°C" },
            { name: "Storage Temperature", value: "-20°C to 70°C" },
            { name: "Drive Electronics", value: "Low-noise current source with TEC control" },
            { name: "Protections", value: "Over-current, over-temp, reverse polarity" },
          ],
        },
        {
          label: "Mechanical",
          rows: [
            { name: "Housing", value: "Compact metal enclosure, rack or benchtop mount options" },
            { name: "Dimensions (typ)", value: "120 × 70 × 30 mm (module variant)" },
            { name: "Weight (typ)", value: "Approx. 350 g" },
          ],
        },
      ],
    },

    {
      type: "applications",
      heading: "Applications",
      content:
        "Ideal for fiber Bragg grating interrogation, distributed fiber sensing, telecom component testing, fiber inspection & alignment, calibration benches, and R&D labs evaluating long-span fiber behaviour. Also suitable for production test lines where repeatable, low-loss 1.5 µm illumination is required.",
    },

    {
      type: "integration",
      heading: "Integration & Customization Options",
      content:
        "Offered with configurable connector types, choice of SMF or PM fiber, various pigtail lengths, and benchtop or OEM packaging. Supports easy integration into automated test systems, alignment rigs, or embedded OEM devices. Digital and analog control interfaces available on request.",
    },

    {
      type: "selection",
      heading: "Selection Guidelines",
      content:
        "Select based on required output power, fiber type (SMF vs PM), connector preference, environmental tolerance and noise-performance target. For distributed sensing or long-span telecom tests prioritize low attenuation and PM options where polarization control is required.",
    },

    {
      type: "handling",
      heading: "Handling & Maintenance",
      content:
        "Keep fiber connectors clean and capped when not in use, avoid tight fiber bends, ensure proper ventilation for continuous operation, and use the recommended low-noise driver. Follow standard laser safety and ESD precautions to maximize lifetime and maintain wavelength stability.",
    },
  ],

  relatedSlugs: ["ase-light-source-1550nm", "point-light-source-1-0um", "sled-1550nm"],
};

export default pointLightSource15um;
