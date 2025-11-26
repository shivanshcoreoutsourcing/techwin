

export type SectionType =
  | "overview"
  | "features"
  | "specs"
  | "applications"
  | "standards"
  | "workflow"
  | "ordering";

export type SpecRow = { name: string; value: string };
export type SpecGroup = { label: string; rows: SpecRow[] };

export type ContentSection =
  | { type: "overview" | "applications" | "standards" | "workflow" | "ordering"; heading: string; content: string }
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
  datasheetUrl?: string; // local path to datasheet (will be transformed to URL by tooling)
  flow: ProductFlowStep[];
  sections: ContentSection[];
  relatedSlugs?: string[];
}

export const noiseTestingSystem: Product = {
  slug: "noise-testing-system",
  category: "accessories",

  meta: {
    title: "Noise Testing System | Techwin Acoustic Measurement Solutions Pro",
    description:
      "Noise Testing System for precise acoustic testing solutions from Hangzhou City. Contact +86-13958180450 for reliable measurement support. Ideal for multiple testing uses.",
    keywords: "noise testing, acoustic measurement, vibration testing, sound analysis, Techwin",
  },

  title: "Noise Testing System",

  shortDescription:
    "Precision acoustic and vibration measurement system for lab, production QC and R&D. High dynamic range, long-term logging, and automated reporting.",

  heroImage: {
    src: "/products/Accessories/noise-testing-system-hero.jpg",
    alt: "Noise Testing System - acoustic chamber and analyzers",
  },

  galleryImages: [
    { src: "/products/Accessories/noise-testing-system-1.jpg", alt: "Microphone array and front-end" },
    { src: "/products/Accessories/noise-testing-system-2.jpg", alt: "Signal processing module & UI" },
  ],

  // developer: use the local path from history; tooling will transform into a URL
  datasheetUrl:
    "/Users/shivansh47/Documents/techwin/Frontend/src/data/products/Accessories/noise-testing-system-datasheet.pdf",

  flow: [
    { id: "overview", title: "Overview", order: 1, description: "High level product summary" },
    { id: "features", title: "Key Features", order: 2, description: "Primary capabilities at a glance" },
    { id: "specs", title: "Technical Specs", order: 3, description: "Grouped technical parameters" },
    { id: "applications", title: "Applications", order: 4, description: "Where it's used" },
    { id: "standards", title: "Standards & QA", order: 5, description: "Compliance and testing norms" },
    { id: "workflow", title: "Testing Workflow", order: 6, description: "How to use the system" },
    { id: "ordering", title: "Ordering & Support", order: 7, description: "How to buy and get help" },
  ],

  sections: [
    {
      type: "overview",
      heading: "Overview",
      content:
        "The Noise Testing System provides repeatable, high-resolution acoustic and vibration measurements for R&D labs, production quality control and precision instrument verification. Designed to detect micro-level acoustic signatures and mechanical vibration that impact photonic, electronic and mechanical device performance. Systems include precision sensors, low-noise front-ends, DSP analysis and software for long-term logging and automated reporting.",
    },

    {
      type: "features",
      heading: "Key Features",
      bullets: [
        "High dynamic range microphones and accelerometers (low-noise front-end)",
        "Multi-channel synchronous acquisition (up to 64 channels, model dependent)",
        "Real-time FFT, spectral, and time-domain analysis",
        "Long-term logging with timestamped event markers",
        "Controlled acoustic enclosure option for isolation testing",
        "Automated pass/fail reports and data export (CSV/JSON/PDF)",
        "Ethernet/USB connectivity and remote monitoring APIs",
      ],
    },

    {
      type: "specs",
      heading: "Technical Specifications (Typical)",
      specGroups: [
        {
          label: "Acoustic Input",
          rows: [
            { name: "Microphone Type", value: "Class 1 precision microphones (configurable)" },
            { name: "Frequency Range", value: "20 Hz – 40 kHz (depending on sensor choice)" },
            { name: "Dynamic Range", value: "> 110 dB (typical)" },
            { name: "Sensitivity", value: "-35 dBV/Pa (typical microphone option)" },
          ],
        },
        {
          label: "Vibration Input",
          rows: [
            { name: "Accelerometer Type", value: "IEPE / Piezoelectric options" },
            { name: "Frequency Range", value: "0.1 Hz – 20 kHz (model dependent)" },
            { name: "Sensitivity Range", value: "0.1 mV/g – 100 mV/g options" },
          ],
        },
        {
          label: "Acquisition & Electronics",
          rows: [
            { name: "Channels", value: "4 / 8 / 16 / 32 / 64 selectable" },
            { name: "ADC Resolution", value: "24-bit sigma-delta" },
            { name: "Sampling Rate", value: "Up to 192 kS/s per channel" },
            { name: "Sync", value: "Hardware time-synchronization across channels" },
            { name: "Interfaces", value: "Ethernet, USB 3.0, Trigger I/O" },
          ],
        },
        {
          label: "Environment & Mechanical",
          rows: [
            { name: "Operating Temp", value: "0°C to 40°C (standard)" },
            { name: "Enclosure", value: "Rack-mount or benchtop; optional acoustic chamber" },
            { name: "Power", value: "100–240 VAC, 50/60 Hz" },
          ],
        },
      ],
    },

    {
      type: "applications",
      heading: "Applications",
      content:
        "Used for optical device testing, fiber-laser acoustic coupling studies, electronic component noise diagnosis, mechanical vibration analysis, production-line QC, and R&D experiments where micro-acoustic behavior or vibration affects system performance.",
    },

    {
      type: "standards",
      heading: "Standards & Quality Assurance",
      content:
        "Supports ISO acoustic measurement guidelines and laboratory environmental testing standards. System calibration services and traceable sensor calibration to international references are available to guarantee measurement reliability for certification or QA workflows.",
    },

    {
      type: "workflow",
      heading: "Testing Workflow",
      content:
        "Typical workflow: sensor placement → enclosure setup (if required) → system calibration → run acquisition (time-domain + spectral) → automated analysis & reporting → export raw and summarized data. The supplied software allows scheduling, threshold alarms and remote monitoring during long-term endurance tests.",
    },

    {
      type: "ordering",
      heading: "Ordering & Support",
      content:
        "To request a quotation, calibration services, or integration support, contact +86-13958180450. Options include sensor bundles, acoustic enclosures, custom channel counts, and onsite commissioning from Hangzhou City-based technical staff.",
    },
  ],

  relatedSlugs: ["spectral-testing-system", "noise-analysis-software", "acoustic-chamber-module"],
};

export default noiseTestingSystem;
