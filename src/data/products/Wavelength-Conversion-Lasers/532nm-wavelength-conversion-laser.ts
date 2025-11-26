import { Product } from "@/types/categories";

export const nm532WavelengthConversionLaser: Product = {
  slug: "532nm-wavelength-conversion-laser",
  category: "wavelength-conversion-lasers",

  meta: {
    title: "Techwin 532 nm Wavelength Conversion Laser | Precision Series Pro",
    description:
      "Techwin 532 nm Wavelength Conversion Laser for research and photonics applications from Hangzhou City. Stable performance and support. Contact +86-13958180450 ring!!",
    keywords:
      "532 nm laser, wavelength conversion 532, frequency doubling green laser, SHG 532nm, Techwin 532nm, green wavelength laser",
  },

  title: "532 nm Wavelength Conversion Laser",
  shortDescription:
    "Precision 532 nm wavelength-converted laser engineered for research, photonics, metrology and calibration — offering narrow linewidth, stable green output and long-term reliability.",

  heroImage: {
    src: "/products/Wavelength-Conversion-Lasers/532nm-hero.jpg",
    alt: "532 nm Wavelength Conversion Laser",
  },

  galleryImages: [
    { src: "/products/Wavelength-Conversion-Lasers/532nm-module.jpg", alt: "532 nm conversion module" },
    { src: "/products/Wavelength-Conversion-Lasers/532nm-lab.jpg", alt: "532 nm laser in laboratory" },
    { src: "/products/Wavelength-Conversion-Lasers/532nm-diagram.jpg", alt: "532 nm wavelength conversion schematic" },
  ],

  datasheetUrl: "/datasheets/tn-532nm-wavelength-conversion-laser.pdf",

  sections: [
    {
      type: "text",
      heading: "Overview of the 532 nm Wavelength Conversion Laser",
      image: { src: "/products/Wavelength-Conversion-Lasers/532nm-overview.jpg", alt: "532 nm overview" },
      content:
        "The 532 nm Wavelength Conversion Laser produces a clean, narrow-band green output through precision frequency-doubling and nonlinear conversion techniques. Designed for lab and industrial use, it provides stable spectral purity, long coherence length and reliable output for demanding photonics tasks.",
    },

    {
      type: "features",
      heading: "Key Features",
      bullets: [
        "High spectral purity with narrow linewidth suitable for interferometry and metrology",
        "Stable green output via efficient nonlinear conversion (SHG) modules",
        "Active thermal control for phase-matching stability",
        "Compact, rugged housing for laboratory and OEM integration",
        "Low RIN and high SMSR for clean measurement signals",
        "Fiber-coupled or free-space output options",
      ],
    },

    {
      type: "text",
      heading: "How 532 nm Conversion Works",
      content:
        "A high-quality IR seed laser is frequency-doubled using precision nonlinear crystals under temperature control. The optical path includes filters and feedback loops that stabilize the converted 532 nm output, ensuring consistent wavelength and power over long-duration operation.",
    },

    {
      type: "features",
      heading: "Typical Applications",
      bullets: [
        "Precision spectroscopy and optical metrology",
        "Frequency reference experiments and interferometric research",
        "Microscopy illumination and imaging calibration",
        "Instrument calibration and optical testing stations",
        "Photonics research and nonlinear optics experiments",
      ],
    },

    {
      type: "text",
      heading: "Design & Engineering Considerations",
      content:
        "Key design elements include crystal selection and phase-matching, robust thermal management, back-reflection suppression, and precision alignment. Electronics provide closed-loop temperature and power control to preserve conversion efficiency and spectral purity.",
    },

    {
      type: "features",
      heading: "Performance Parameters (Model-Dependent)",
      bullets: [
        "Output wavelength: 532 nm (frequency-doubled from IR seed)",
        "Linewidth: narrow (kHz-level achievable depending on configuration)",
        "Output power: lab-grade mW to higher depending on model",
        "Low relative intensity noise and high side-mode suppression ratio",
        "Single-mode spatial profile, low beam divergence",
      ],
    },

    {
      type: "text",
      heading: "Integration & Maintenance",
      content:
        "Install on a vibration-isolated optical table and maintain thermal stability for best results. Keep optics clean, follow alignment guides, and periodically verify wavelength and power against reference standards to ensure long-term repeatability.",
    },

    {
      type: "text",
      heading: "Why Choose This 532 nm Platform?",
      content:
        "This 532 nm conversion system is suitable for researchers and integrators who need a reproducible, narrow-linewidth green source with straightforward integration options and robust long-term performance for precision measurement and photonics development.",
    },
  ],

  relatedProducts: [
    {
      slug: "frequency-stabilized-laser-systems",
      title: "Frequency-Stabilized Laser Systems",
      shortDescription: "Frequency-locked lasers and reference modules for spectroscopy and metrology.",
      image: { src: "/products/Wavelength-Conversion-Lasers/freq-stab-thumb.jpg", alt: "Frequency stabilized lasers" },
      href: "/products/wavelength-conversion-lasers/frequency-stabilized-laser-systems",
    },
    {
      slug: "405nm-wavelength-conversion-laser",
      title: "405 nm Wavelength Conversion Laser",
      shortDescription: "Near-UV conversion modules for photonics and inspection systems.",
      image: { src: "/products/Wavelength-Conversion-Lasers/405nm-thumb.jpg", alt: "405 nm laser" },
      href: "/products/wavelength-conversion-lasers/405nm-wavelength-conversion-laser",
    },
  ],
};

export default nm532WavelengthConversionLaser;
