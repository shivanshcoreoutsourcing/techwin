

export type SectionType =
  | "overview"
  | "features"
  | "specs"
  | "applications"
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

export const pointLightSource20um: Product = {
  slug: "point-light-source-2-0um",
  category: "point-light-sources",

  meta: {
    title: "2.0 µm Point Light Source | Techwin Fiber Optic Test Device Units",
    description:
      "High-performance 2.0 µm point light source for precision fiber testing. Stable output, reliable design. Contact +86-13958180450. Available from Techwin, Hangzhou City.",
    keywords: "2.0 µm, point light source, mid-IR, thulium, holmium, fiber testing, Techwin",
  },

  title: "2.0 µm Point Light Source",

  shortDescription:
    "Stable 2.0 µm point illumination for mid-IR fiber testing, component validation, gas-sensing R&D and OEM integration — narrow linewidth and low-noise.",

  heroImage: {
    src: "/products/PointLightSources/2_0um-point-source-hero.jpg",
    alt: "2.0 µm Point Light Source",
  },

  galleryImages: [
    { src: "/products/PointLightSources/2_0um-point-source-1.jpg", alt: "2.0 µm point source module front" },
    { src: "/products/PointLightSources/2_0um-point-source-2.jpg", alt: "Fiber-coupled 2.0 µm point source" },
  ],

  // local datasheet path (tooling will convert this path to a served URL)
  datasheetUrl:
    "/Users/shivansh47/Documents/techwin/Frontend/src/data/products/PointLightSources/point-light-source-2_0um-datasheet.pdf",

  flow: [
    { id: "overview", title: "Overview", order: 1 },
    { id: "features", title: "Key Features", order: 2 },
    { id: "specs", title: "Technical Specifications", order: 3 },
    { id: "applications", title: "Applications", order: 4 },
    { id: "integration", title: "Integration Options", order: 5 },
    { id: "selection", title: "Selection Guidelines", order: 6 },
    { id: "handling", title: "Handling & QA", order: 7 },
  ],

  sections: [
    {
      type: "overview",
      heading: "Overview",
      content:
        "The 2.0 µm Point Light Source is a compact, fiber-delivered mid-infrared point illumination unit engineered for specialty fiber testing, component validation, atmospheric/gas sensing research, and laboratory prototyping. Based on thulium/holmium-doped fiber technology with active stabilization, it delivers narrow-linewidth, low-noise output tailored for precision mid-IR measurement workflows.",
    },

    {
      type: "features",
      heading: "Key Features",
      bullets: [
        "Stable center wavelength at ~2.0 µm with narrow spectral deviation",
        "Low intensity noise and controlled linewidth for accurate testing",
        "Thulium/holmium-doped fiber core with high-quality filtering",
        "Fiber-coupled single-mode output (2.0 µm compatible fiber) or free-space option",
        "Integrated temperature control and wavelength locking",
        "Robust metal housing with OEM-ready mechanical options",
      ],
    },

    {
      type: "specs",
      heading: "Technical Specifications (Typical)",
      specGroups: [
        {
          label: "Optical",
          rows: [
            { name: "Center Wavelength", value: "≈ 2000 nm (2.0 µm nominal)" },
            { name: "Output Power", value: "Configurable; low-power bench models to higher-output modules" },
            { name: "Linewidth", value: "Narrow (model dependent; specified per datasheet)" },
            { name: "Noise (RIN)", value: "Low; optimized for sensing applications" },
            { name: "Output Type", value: "Fiber-coupled (single-mode 2.0 µm) or collimated free-space" },
          ],
        },
        {
          label: "Fiber & Connectors",
          rows: [
            { name: "Fiber Type", value: "Single-mode mid-IR fiber (2.0 µm compatible) or PM option" },
            { name: "Connector Options", value: "Custom (FC-type adapters for mid-IR, bare fiber pigtail, or OEM ferrule)" },
            { name: "Pigtail Length", value: "Customizable (standard 1 m)" },
          ],
        },
        {
          label: "Environmental & Electrical",
          rows: [
            { name: "Operating Temperature", value: "0°C to 40°C (standard); extended ranges on request" },
            { name: "Storage Temperature", value: "-20°C to 70°C" },
            { name: "Drive Electronics", value: "Low-noise current driver with TEC control and protection circuits" },
            { name: "Protections", value: "Over-current, over-temp, reverse polarity" },
          ],
        },
        {
          label: "Mechanical",
          rows: [
            { name: "Housing", value: "Metal enclosure; benchtop or OEM module variants" },
            { name: "Dimensions (typ)", value: "Module: ~140 × 80 × 35 mm (model dependent)" },
            { name: "Weight (typ)", value: "Approx. 450 g" },
          ],
        },
      ],
    },

    {
      type: "applications",
      heading: "Applications",
      content:
        "Used for mid-IR fiber component testing (FBGs, specialty couplers), gas-sensing R&D, atmospheric transmission studies, prototype mid-IR photonics development, OEM sensor integration, and laboratory measurement tasks where precise 2.0 µm illumination is required.",
    },

    {
      type: "integration",
      heading: "Integration & Customization Options",
      content:
        "Available with selectable fiber types (SM/PM for 2.0 µm), configurable connectors, pigtail length, and packaging (module, benchtop, OEM). Digital/analog control interfaces and firmware options are available for automated test-benches or embedded sensor modules.",
    },

    {
      type: "selection",
      heading: "Selection Guidelines",
      content:
        "Choose based on required output power, wavelength stability, connector format, and whether PM fiber is needed for polarization-sensitive tests. For gas sensing or atmospheric work prioritize wavelength accuracy and low RIN. Consult the datasheet for model-specific linewidth and power options.",
    },

    {
      type: "handling",
      heading: "Handling, Maintenance & QA",
      content:
        "Keep connectors and pigtails clean, avoid sharp bends and tensile loads on the fiber, allow TEC to stabilize after power-on, and operate within recommended temperature range. Follow ESD and laser safety protocols. Units undergo optical power and spectrum verification during QA before shipment.",
    },
  ],

  relatedSlugs: ["point-light-source-1-5um", "ase-light-source-2-0um", "fiber-amplifier-modules"],
};

export default pointLightSource20um;
