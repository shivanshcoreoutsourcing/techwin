import { Product } from "@/types/categories";

export const fiberAmplifierModules: Product = {
  slug: "fiber-amplifier-modules",
  category: "fiber-amplifiers",

  meta: {
    title: "Fiber Amplifier Modules by Techwin | High-Precision Optical Modules",
    description:
      "High-stability Fiber Amplifier Modules by Techwin, produced in Hangzhou City for OEM laser systems and precision optical projects. Contact +86-13958180450 for customization.",
    keywords: "fiber amplifier module, OEM amplifier, PM amplifier module, Techwin fiber module",
  },

  title: "Fiber Amplifier Modules",
  shortDescription:
    "Compact, OEM-ready fiber amplifier modules engineered for stable gain, low noise, and long-term reliability — configurable for CW, pulsed, PM and single-frequency applications.",

  heroImage: {
    src: "/products/Fiber-Amplifiers/fiber-amplifier-modules-hero.jpg",
    alt: "Fiber Amplifier Modules",
  },

  galleryImages: [
    { src: "/products/Fiber-Amplifiers/module-top.jpg", alt: "Amplifier Module Top View" },
    { src: "/products/Fiber-Amplifiers/module-board.jpg", alt: "Amplifier Module Internal Board" },
    { src: "/products/Fiber-Amplifiers/module-rack.jpg", alt: "Module in Rack Integration" },
  ],

  datasheetUrl:
    "/Users/shivansh47/Documents/techwin/Frontend/src/data/products/Fiber-Amplifiers/fiber-amplifier-modules-datasheet.pdf",

  sections: [
    {
      type: "text",
      heading: "Overview",
      content:
        "Fiber Amplifier Modules are designed for OEM integration and system-level deployment where stable optical gain, compact footprint, and high reliability are required. These modules support continuous-wave (CW), pulsed, polarization-maintaining (PM) and single-frequency seed signals and are manufactured under controlled processes in Hangzhou City.",
    },

    {
      type: "features",
      heading: "Core Features",
      bullets: [
        "OEM-friendly compact form factors (module / benchtop / rack)",
        "Low noise figure and stable gain across operating band",
        "Polarization-maintaining (PM) and non-PM options",
        "CW, pulsed and single-frequency compatible designs",
        "Integrated pump diodes with automated protection",
        "Digital and analog control interfaces (RS232 / USB / Ethernet / Analog)",
        "Custom fiber pigtail length and connector types",
      ],
    },

    {
      type: "specs",
      heading: "Typical Technical Specifications",
      specGroups: [
        {
          label: "Optical",
          rows: [
            { name: "Wavelength Ranges", value: "Custom — 1.0 µm / 1.5 µm / 2.0 µm typical" },
            { name: "Output Power", value: "mW to several 10s of W (model dependent)" },
            { name: "Linewidth Handling", value: "Single-frequency to multi-mode (preserve or amplify)" },
            { name: "Polarization", value: "PM or non-PM (customer selectable)" },
          ],
        },
        {
          label: "Mechanical & Electrical",
          rows: [
            { name: "Form Factor", value: "OEM module, benchtop, 19\" rack options" },
            { name: "Cooling", value: "Air-cooled (fan) / optional water-cooled variants" },
            { name: "Control Interface", value: "RS232 / USB / Ethernet / Analog I/O" },
            { name: "Protection", value: "Over-temp, over-current, reverse isolation" },
          ],
        },
      ],
    },

    {
      type: "text",
      heading: "Module Types",
      content:
        "We provide multiple module architectures: single-stage CW amplifiers for continuous operation, pulsed amplifiers with peak-power shaping, PM amplifiers that preserve SOP, and custom modules tuned for narrow-linewidth single-frequency amplification. Each variant is optimized for low noise and stable thermal behaviour.",
    },

    {
      type: "features",
      heading: "Why Choose These Modules",
      bullets: [
        "Designed for rapid OEM integration and minimal alignment",
        "Stable output power with low drift across long runs",
        "Robust thermal management for continuous operation",
        "Configurable connectors, fiber lengths and control protocols",
        "Manufactured with quality-controlled fiber splicing and pump selection",
      ],
    },

    {
      type: "text",
      heading: "Applications",
      content:
        "Modules are ideal for system integrators building LIDAR transmitters, fiber sensing heads, telecom amplifiers, laboratory test equipment, material inspection lasers, and embedded OEM subsystems that require compact and stable amplification.",
    },

    {
      type: "text",
      heading: "Integration & Customization",
      content:
        "Available custom options include tailored output power, connector type (FC/APC, SMA, etc.), PM fiber routing, integrated monitoring electronics, custom firmware/interface protocols, and mechanical mounting options to suit your product design.",
    },

    {
      type: "text",
      heading: "Installation & Safety",
      content:
        "Install modules on vibration-free, ventilated mounts. Follow IEC 60825 laser safety guidance when connecting fibers. Use recommended start-up/shutdown sequences and ensure proper grounding and pump diode current limits as described in the datasheet.",
    },

    {
      type: "text",
      heading: "Ordering & Support",
      content:
        "For pricing, lead times, or custom engineering support contact our technical sales team at +86-13958180450. We provide integration guidance, test reports, and long-term service agreements for volume deployments.",
    },
  ],

  relatedProducts: [
    {
      slug: "high-power-fiber-amplifier",
      title: "High-Power Fiber Amplifier",
      shortDescription: "High-power modules for demanding industrial and research systems.",
      image: { src: "/products/Fiber-Amplifiers/high-power-thumb.jpg", alt: "High Power Amplifier" },
      href: "/products/fiber-amplifiers/high-power-fiber-amplifier",
    },
    {
      slug: "polarization-maintaining-fiber-amplifier",
      title: "Polarization-Maintaining Fiber Amplifier",
      shortDescription: "PM amplifiers that preserve polarization for coherent systems.",
      image: { src: "/products/Fiber-Amplifiers/pm-thumb.jpg", alt: "PM Amplifier" },
      href: "/products/fiber-amplifiers/polarization-maintaining-fiber-amplifier",
    },
  ],
};

export default fiberAmplifierModules;
