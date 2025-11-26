// src/data/categories/types-and-singleFrequencyData.ts

export type BreadcrumbItem = { label: string; href?: string };

export type HeroData = {
  title: string;
  tagline: string;
  image: string; // path under /public/
  imageAlt?: string;
  breadcrumb?: BreadcrumbItem[];
  ctaPrimary?: { label: string; href: string; external?: boolean } | null;
  ctaSecondary?: { label: string; href: string; external?: boolean } | null;
};

export type IntroData = {
  heading: string;
  description: string;
};

export type SubCategoryItem = {
  id?: string; // optional slug/id for linking
  name: string;
  shortDescription: string;
  details?: string;
};

export type LogoItem = {
  src: string; // e.g. "/logos/client-a.png"
  alt?: string;
  href?: string;
  title?: string;
};

export type CategoryData = {
  url: string;
  metaTitle: string;
  metaDescription: string;

  hero: HeroData;
  intro: IntroData;
  keyFeatures: string[];
  subCategories: SubCategoryItem[];
  technicalBenefits: string[];
  applications: string[];
  cta: {
    heading?: string;
    primary: { label: string; href: string; external?: boolean };
    secondary?: { label: string; href: string; external?: boolean } | null;
  };
  contactPhone?: string;
  notes?: string;

  // optional extras used by page components
  trustLogos?: LogoItem[]; // use objects (not string[])
  counters?: { label: string; value: string }[];
  faqs?: { q: string; a: string }[];
  downloads?: { label: string; href: string; type?: string }[];
  specGroups?: { label: string; rows: { name: string; value: string }[] }[];
};

// -------------------------------
// Single-Frequency Fiber Lasers
// -------------------------------

export const singleFrequencyData: CategoryData = {
  url: "/single-frequency-fiber-lasers",
  metaTitle: "Single-Frequency Fiber Laser Manufacturer in China | Techwin Laser",
  metaDescription:
    "Techwin – Single-Frequency Fiber Laser Manufacturer in Hangzhou City. Call +86-571-88284299 for reliable, precise, and stable narrow linewidth fiber laser solutions worldwide.",

  hero: {
    title: "Single-Frequency Fiber Laser Manufacturer",
    tagline: "Ultra-narrow linewidth lasers for scientific & industrial precision.",
    image: "/techwin-company/category/category-hero-single-frequency.webp",
    imageAlt: "Single-frequency fiber laser on optical table — Techwin model",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Single-Frequency Fiber Lasers", href: "/single-frequency-fiber-lasers" },
    ],
    ctaPrimary: { label: "Request Quote", href: "/contact" },
    ctaSecondary: { label: "Download Brochure", href: "/downloads/single-frequency-brochure.pdf" },
  },

  intro: {
    heading: "Single-Frequency Fiber Lasers",
    description:
      "Techwin, based in Hangzhou City, is a trusted Single-Frequency Fiber Laser Manufacturer offering advanced laser systems with exceptional frequency stability, ultra-narrow linewidth, and high optical performance. Our Single-Frequency Fiber Lasers are designed for researchers, laboratories, and industries requiring superior wavelength stability and ultra-low noise operation. These lasers are ideal for applications like high-resolution spectroscopy, coherent communication, interferometry, and precision measurement. Each laser model is crafted with precision to ensure stable single-frequency operation and long-term reliability.",
  },

  keyFeatures: [
    "Ultra-Narrow Linewidth: Down to Hz-level linewidth for ultimate frequency stability.",
    "High Optical Signal-to-Noise Ratio: Ensures clean spectral output and superior signal quality.",
    "Excellent Beam Quality: Delivers a near-perfect Gaussian beam with M² < 1.1.",
    "Wide Wavelength Options: Available at 1.0 µm, 1.5 µm, and 2.0 µm wavelengths.",
    "Compact and Stable Design: Built for long-term reliability and maintenance-free operation.",
    "Ultra-Low Phase and Intensity Noise: Ideal for scientific, metrology, and sensing applications.",
  ],

  subCategories: [
    {
      id: "hz-level-ultra-narrow",
      name: "Hz-Level Ultra-Narrow Linewidth Single-Frequency Fiber Laser",
      shortDescription:
        "Laser achieving Hz-level linewidth for exceptional coherence length, best for atomic clock research, coherent detection, and interferometric sensing.",
      details:
        "This model achieves a linewidth at the Hz level, ensuring exceptional coherence length. It is best suited for applications like atomic clock research, coherent detection, and interferometric sensing. The stability and accuracy of this narrow linewidth fiber laser make it a reliable solution for demanding laboratory use.",
    },
    {
      id: "broadband-ultra-low-noise",
      name: "Broadband Ultra-Low Noise Single-Frequency Fiber Laser",
      shortDescription:
        "Engineered for broad spectral coverage and low noise operation; used in optical frequency comb systems and frequency metrology.",
      details:
        "Engineered for broad spectral coverage and low noise operation, this laser provides exceptional output power stability. It is used in optical frequency comb systems and precise frequency metrology setups requiring high spectral purity.",
    },
    {
      id: "narrow-linewidth",
      name: "Narrow Linewidth Single-Frequency Fiber Laser",
      shortDescription:
        "Balanced performance and cost-efficiency with narrow linewidth and long-term stability; suitable for spectroscopy and LiDAR.",
      details:
        "This model balances performance and cost-efficiency. It delivers a narrow linewidth while maintaining excellent long-term stability. Suitable for spectroscopy, LiDAR, and remote sensing, this narrow linewidth fiber laser ensures stable single-frequency output in various conditions.",
    },
    {
      id: "sensor-stabilized",
      name: "High-Sensitivity Sensor-Stabilized Laser",
      shortDescription:
        "Sensor-based stabilization for real-time compensation of environmental changes, improving frequency precision for sensing tasks.",
      details:
        "This laser series integrates sensor-based stabilization technology for maintaining frequency precision. It detects external environmental changes and compensates in real time to ensure consistent wavelength stability. Applications include distributed fiber sensing and vibration detection.",
    },
    {
      id: "magnetic-field-detection",
      name: "Magnetic Field Detection Laser",
      shortDescription:
        "Laser optimized for magnetic field sensing with enhanced frequency modulation capabilities and ultra-low noise.",
      details:
        "A dedicated solution for magnetic field sensing and related applications, this model features enhanced frequency modulation capabilities. Its ultra-low noise design ensures high sensitivity in magnetic resonance and optical magnetometry systems.",
    },
    {
      id: "1-0um-sf",
      name: "1.0 µm Single-Frequency Fiber Laser",
      shortDescription:
        "1.0 µm model used in material testing, interferometry, and seeding—compact and reliable for lab and industrial use.",
      details:
        "Operating at 1.0 µm, this model is widely used in material testing, interferometry, and seeding applications. Its compact design and reliability make it an excellent choice for laboratory and industrial environments.",
    },
    {
      id: "1-5um-sf",
      name: "1.5 µm Single-Frequency Fiber Laser",
      shortDescription:
        "1.5 µm model optimized for communication research and environmental sensing, with stable single-frequency output.",
      details:
        "The 1.5 µm model is optimized for communication-related research and environmental sensing. With a stable single-frequency output and ultra-narrow linewidth, it ensures accurate results in optical communication and lidar experiments.",
    },
    {
      id: "2-0um-sf",
      name: "2.0 µm Single-Frequency Fiber Laser",
      shortDescription:
        "Mid-infrared 2.0 µm laser for gas detection, environmental monitoring, and mid-IR spectroscopy.",
      details:
        "For mid-infrared applications, the 2.0 µm laser provides outstanding frequency stability. It is used in gas detection, environmental monitoring, and mid-IR spectroscopy. This model’s wavelength range makes it versatile for research in atmospheric and material analysis.",
    },
    {
      id: "frequency-stabilized",
      name: "Frequency-Stabilized Fiber Laser (All Wavelengths)",
      shortDescription:
        "Integrated stabilization locks output frequency to a reference for minimal drift across multiple wavelength bands.",
      details:
        "This series features an integrated stabilization system that locks the output frequency to a reference cavity or signal, minimizing drift and ensuring high repeatability. Available across multiple wavelength bands, it serves as a precise optical reference for metrology and calibration purposes.",
    },
    {
      id: "ultra-low-noise-series",
      name: "Ultra-Low Noise Fiber Laser Series",
      shortDescription:
        "Series designed for minimal intensity and phase noise, supporting sensitive optical measurements and long-term stability.",
      details:
        "Designed for minimal intensity and phase noise, this laser series provides a clean signal source for sensitive optical measurements. It supports long-term stability, high reliability, and excellent thermal control for consistent output in critical applications.",
    },
  ],

  technicalBenefits: [
    "High Stability: Each laser is temperature and vibration compensated for consistent performance.",
    "Plug-and-Play Integration: Compatible with various optical systems.",
    "Customizable Output Power: Adjustable to match user requirements.",
    "Maintenance-Free Operation: Fiber-integrated structure minimizes alignment and cleaning needs.",
    "Long Lifetime: Advanced fiber and component quality ensure long operational durability.",
  ],

  applications: [
    "High-Resolution Spectroscopy",
    "Optical Coherence Tomography (OCT)",
    "Interferometry and Metrology",
    "Fiber Optic Sensing",
    "Atomic and Molecular Physics Research",
    "Laser Radar (LiDAR)",
  ],

  cta: {
    heading: "Explore Techwin's single-frequency laser range or request a custom configuration",
    primary: { label: "Request a Quote", href: "/contact" },
    secondary: { label: "Contact Sales", href: "tel:+8657188284299" },
  },

  contactPhone: "+86-571-88284299",

  // optional extras to avoid runtime / type conflicts:
  trustLogos: [
    { src: "/logos/client-a.png", alt: "Client A" },
    { src: "/logos/client-b.png", alt: "Client B" },
    { src: "/logos/client-c.png", alt: "Client C" },
    { src: "/logos/client-d.png", alt: "Client D" },
  ],

  counters: [
    { label: "Years", value: "20+" },
    { label: "Countries", value: "30+" },
    { label: "Patents", value: "5" },
  ],

  faqs: [
    { q: "What is the typical linewidth?", a: "Ultra-narrow: Hz → kHz depending on model and configuration." },
    { q: "Can you provide OEM/ODM integration?", a: "Yes — we support OEM integration and custom packaging." },
    { q: "What wavelengths are available?", a: "1.0 µm, 1.5 µm and 2.0 µm." },
  ],

  downloads: [
    { label: "Single Frequency Brochure (PDF)", href: "/downloads/single-frequency-brochure.pdf", type: "pdf" },
  ],

  specGroups: [
    {
      label: "General Specs",
      rows: [
        { name: "Wavelength Range", value: "1.0 µm / 1.5 µm / 2.0 µm" },
        { name: "Linewidth", value: "Hz → kHz (model dependent)" },
        { name: "Output Power", value: "Up to several hundred mW" },
      ],
    },
  ],

  notes:
    "Each laser system is developed under a quality-assured process involving optical testing, environmental evaluation, and performance calibration. Users can request wavelength customization, output power adjustment, or interface modifications to suit specific experimental or industrial setups.",
};
