import { Product } from "@/types/categories";

export const erbiumDopedFiberAmplifier: Product = {
  slug: "erbium-doped-fiber-amplifier",
  category: "fiber-amplifiers",

  meta: {
    title: "Erbium-Doped Fiber Amplifier (EDFA) | Techwin Fiber Amplifiers",
    description:
      "High-performance Erbium-Doped Fiber Amplifier (EDFA) for telecom and high-precision optical systems. Reliable gain, low noise and stable operation. Contact +86-13958180450.",
    keywords: "EDFA, erbium doped fiber amplifier, telecom amplifier, optical amplifier, Techwin EDFA",
  },

  title: "Erbium-Doped Fiber Amplifier (EDFA)",
  shortDescription:
    "Reliable EDFA modules offering high gain, low noise figure and stable performance for telecom, sensing and laboratory applications.",

  heroImage: {
    src: "/products/Fiber-Amplifiers/edfa-hero.jpg",
    alt: "Erbium-Doped Fiber Amplifier (EDFA)",
  },

  galleryImages: [
    {
      src: "/products/Fiber-Amplifiers/edfa-module.jpg",
      alt: "EDFA Module",
    },
    {
      src: "/products/Fiber-Amplifiers/edfa-rack.jpg",
      alt: "Rack-mounted EDFA",
    },
    {
      src: "/products/Fiber-Amplifiers/edfa-lab.jpg",
      alt: "EDFA in Laboratory Setup",
    },
  ],

  // local path to datasheet (from your environment / uploaded files)
  datasheetUrl:
    "/Users/shivansh47/Documents/techwin/Frontend/src/data/products/Fiber-Amplifiers/erbium-doped-fiber-amplifier-datasheet.pdf",

  sections: [
    {
      type: "text",
      heading: "Overview",
      content:
        "Erbium-Doped Fiber Amplifiers (EDFAs) are the workhorse amplifiers for the 1.5 µm telecom window. They provide high optical gain with low noise, excellent saturation behavior and high reliability — ideal for long-haul transmission, optical regeneration, and sensing systems that require consistent amplification without compromising signal fidelity.",
    },

    {
      type: "features",
      heading: "Key Features",
      bullets: [
        "High small-signal gain across the C- and L-band",
        "Low noise figure (typ. < 5 dB depending on configuration)",
        "High output saturation power for strong optical links",
        "Gain flattening options for uniform spectral response",
        "Rack or module form-factors with integrated pump diodes",
        "Optional polarization-maintaining versions",
        "Digital/analog control interfaces and protection circuits",
      ],
    },

    {
      type: "specs",
      heading: "Typical Technical Specifications",
      specGroups: [
        {
          label: "Optical",
          rows: [
            { name: "Operating Bands", value: "C-band (1530–1565 nm), optional L-band (1565–1625 nm)" },
            { name: "Small Signal Gain", value: "20–40 dB (model dependent)" },
            { name: "Saturated Output Power", value: "+20 dBm to +30 dBm (model dependent)" },
            { name: "Noise Figure", value: "3–6 dB (typical depending on pump scheme)" },
          ],
        },
        {
          label: "Mechanical & Electrical",
          rows: [
            { name: "Package Types", value: "19\" rack, benchtop, OEM module" },
            { name: "Pump Options", value: "980 nm or 1480 nm laser diodes (single/dual pump)" },
            { name: "Control Interfaces", value: "RS232 / USB / Ethernet / Analog" },
            { name: "Cooling", value: "Air-cooled (fan) / optional water cooled" },
          ],
        },
      ],
    },

    {
      type: "text",
      heading: "Applications",
      content:
        "EDFAs are widely deployed in DWDM telecom networks, metro and long-haul links, optical add/drop systems, amplified spontaneous emission sources, fiber sensing pre-amplification, and laboratory testbeds where transparent optical gain is required.",
    },

    {
      type: "features",
      heading: "Why Choose This EDFA",
      bullets: [
        "Proven gain performance for DWDM systems",
        "Low-noise amplification to preserve SNR in long links",
        "Flexible packaging and pump architectures",
        "Integrated monitoring and protection for continuous operation",
        "Customization options for gain flattening and PM fibers",
      ],
    },

    {
      type: "text",
      heading: "Integration & Customization",
      content:
        "Models are available with single-stage or multi-stage designs, different pump schemes (980/1480), gain-flattening filters, and optional PM fiber for polarization sensitive systems. OEM versions can be supplied with custom mechanical formatting and electrical control protocols.",
    },

    {
      type: "text",
      heading: "Installation & Safety",
      content:
        "Install on vibration-free surfaces with adequate ventilation. Use correct laser safety measures when connecting fiber pigtails (follow IEC 60825). Ensure proper pump diode drive conditions and observe recommended start-up/shutdown sequences documented in the datasheet.",
    },

    {
      type: "text",
      heading: "Support & Contact",
      content:
        "For model selection, performance tuning, or integration support contact our technical team at +86-13958180450. Custom engineering and long-term service contracts are available for project deployments.",
    },
  ],

  relatedProducts: [
    {
      slug: "ydfa",
      title: "Ytterbium-Doped Fiber Amplifier (YDFA)",
      shortDescription: "High-power amplification at 1.0 µm bands for materials processing and research.",
      image: {
        src: "/products/Fiber-Amplifiers/ydfa-thumb.jpg",
        alt: "YDFA",
      },
      href: "/products/fiber-amplifiers/ytterbium-doped-fiber-amplifier",
    },
    {
      slug: "tdfa",
      title: "Thulium-Doped Fiber Amplifier (TDFA)",
      shortDescription: "Amplifiers optimized for 2.0 µm mid-IR wavelength ranges.",
      image: {
        src: "/products/Fiber-Amplifiers/tdfa-thumb.jpg",
        alt: "TDFA",
      },
      href: "/products/fiber-amplifiers/thulium-doped-fiber-amplifier",
    },
  ],
};

export default erbiumDopedFiberAmplifier;
