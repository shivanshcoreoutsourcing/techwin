import { Product } from "@/types/categories";

export const sledLightSource: Product = {
  slug: "sled-light-source",
  category: "broadband-ase-sources",

  meta: {
    title: "Superluminescent LED (SLED) | Techwin SLED Light Source Systems",
    description:
      "Techwin Superluminescent LED (SLED) for fiber sensing and optical testing uses from Hangzhou City. Stable broadband output performance. Contact +86-13958180450 today.",
    keywords:
      "SLED, superluminescent LED, broadband SLED, fiber sensing SLED, OCT light source, Techwin SLED",
  },

  title: "Superluminescent LED (SLED)",
  shortDescription:
    "Superluminescent LED (SLED) broadband source — low-coherence, stable output for OCT, fiber sensing, metrology and component testing.",

  heroImage: {
    src: "/products/Broadband-ASE-Sources/sled-hero.jpg",
    alt: "Superluminescent LED (SLED) Light Source",
  },

  galleryImages: [
    { src: "/products/Broadband-ASE-Sources/sled-module.jpg", alt: "SLED module" },
    { src: "/products/Broadband-ASE-Sources/sled-spectrum.jpg", alt: "SLED spectral output" },
    { src: "/products/Broadband-ASE-Sources/sled-lab.jpg", alt: "SLED in laboratory" },
  ],

  // developer note: local uploaded datasheet path (build pipeline will transform to public url)
  datasheetUrl: "/mnt/data/DownloadAndDatasheet.tsx",

  sections: [
    {
      type: "text",
      heading: "Overview — Superluminescent LED (SLED)",
      image: {
        src: "/products/Broadband-ASE-Sources/sled-overview.jpg",
        alt: "SLED overview",
      },
      content:
        "A Superluminescent LED (SLED) is a broadband semiconductor light source offering high optical power, wide spectral bandwidth, and very low coherence. SLEDs are ideal for OCT, fiber sensing, metrology, and optical component testing where interference fringes must be minimized while keeping strong coupling into fibers.",
    },

    {
      type: "features",
      heading: "Key Characteristics",
      bullets: [
        "Broad spectral output with smooth spectral shape",
        "Very low coherence to minimize speckle and interference",
        "High coupling efficiency into single-mode and PM fibers",
        "Available wavelengths: 840 nm, 980 nm, 1310 nm, 1550 nm (and custom)",
        "Packaging: butterfly, fiber-pigtailed modules, benchtop instruments",
        "Thermo-electric control for wavelength/power stability",
      ],
    },

    {
      type: "specs",
      heading: "Typical Specifications",
      specGroups: [
        {
          label: "Optical",
          rows: [
            { name: "Center Wavelengths", value: "840 / 980 / 1310 / 1550 nm (model dependent)" },
            { name: "Bandwidth (FWHM)", value: "10 – 100 nm (model dependent)" },
            { name: "Output", value: "Fiber-coupled (SM/PM) or free-space" },
          ],
        },
        {
          label: "Performance",
          rows: [
            { name: "Output Power", value: "Model dependent — from mW-level to higher" },
            { name: "Relative Intensity Noise", value: "Low (application dependent)" },
            { name: "Coherence Length", value: "Very short — ideal for low-coherence interferometry" },
          ],
        },
      ],
    },

    {
      type: "text",
      heading: "Applications",
      content:
        "SLEDs are widely used in Optical Coherence Tomography (OCT), fiber sensing networks, reflectometry, optical component characterization (FBG testing, WDM verification), biomedical imaging, and OEM instruments that require stable broadband light without coherence-induced artifacts.",
    },

    {
      type: "features",
      heading: "Package & Integration Options",
      bullets: [
        "Butterfly packages with TEC & monitor photodiode",
        "Fiber-pigtailed modules (SM / PM options)",
        "Compact benchtop units with power control & monitoring",
        "OEM modules for embedded integration",
        "Custom wavelength and bandwidth tailoring available",
      ],
    },

    {
      type: "text",
      heading: "Selection Considerations",
      content:
        "When selecting a SLED, consider center wavelength, bandwidth (affects axial resolution in OCT), required output power, fiber type (SM vs PM), thermal control needs, and connector/packaging format to ensure compatibility with your system.",
    },

    {
      type: "text",
      heading: "Support & Contact",
      content:
        "For datasheets, model selection, or integration assistance, contact our engineering team in Hangzhou City at +86-13958180450. We provide configuration guidance for connector types, thermal settings, and spectrum tailoring.",
    },
  ],

  relatedProducts: [
    {
      slug: "broadband-light-source",
      title: "Broadband Light Source",
      shortDescription: "Wide-spectrum source for optical testing & metrology.",
      image: { src: "/products/Broadband-ASE-Sources/broadband-thumb.jpg", alt: "Broadband light source" },
      href: "/products/broadband-ase-sources/broadband-light-source",
    },
    {
      slug: "ase-light-source-1um",
      title: "ASE Light Source (1.0 µm)",
      shortDescription: "ASE source around 1.0 µm for fiber testing and calibration.",
      image: { src: "/products/Broadband-ASE-Sources/ase-1um-thumb.jpg", alt: "ASE 1.0 µm" },
      href: "/products/broadband-ase-sources/ase-light-source-1um",
    },
  ],
};

export default sledLightSource;
