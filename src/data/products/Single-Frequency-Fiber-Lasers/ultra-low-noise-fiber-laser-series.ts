import { Product } from "@/types/categories";

export const ultraLowNoiseFiberLaserSeries: Product = {
  slug: "ultra-low-noise-fiber-laser-series",
  category: "single-frequency-fiber-lasers",

  meta: {
    title: "Ultra-Low Noise Fiber Laser Series | Techwin Manufacture in China",
    description:
      "Techwin Ultra-Low Noise Fiber Laser Series designed for precision requirements in Hangzhou City. Reliable and stable output for sensitive systems. Contact +86-13958180450 today.",
    keywords:
      "ultra-low noise fiber laser, low RIN fiber laser, high stability fiber laser, Techwin ultra-low noise, narrow linewidth laser",
  },

  title: "Ultra-Low Noise Fiber Laser Series",
  shortDescription:
    "Ultra-Low Noise Fiber Laser Series engineered for applications demanding exceptional stability, minimal RIN, and narrow linewidth performance across multiple wavelengths and configurations.",

  heroImage: {
    src: "/products/Single-Frequency-Fiber-Lasers/ultra-low-noise-hero.jpg",
    alt: "Ultra-Low Noise Fiber Laser Series",
  },

  galleryImages: [
    { src: "/products/Single-Frequency-Fiber-Lasers/uln-module.jpg", alt: "Ultra-low noise laser module" },
    { src: "/products/Single-Frequency-Fiber-Lasers/uln-lab.jpg", alt: "Ultra-low noise laser in laboratory" },
    { src: "/products/Single-Frequency-Fiber-Lasers/uln-schematic.jpg", alt: "Ultra-low noise schematic" },
  ],

  datasheetUrl: "/datasheets/tn-ultra-low-noise-fiber-laser-series.pdf",

  sections: [
    {
      type: "text",
      heading: "About the Ultra-Low Noise Fiber Laser Series",
      image: { src: "/products/Single-Frequency-Fiber-Lasers/uln-overview.jpg", alt: "Ultra-low noise overview" },
      content:
        "The Ultra-Low Noise Fiber Laser Series minimizes relative intensity noise (RIN) and phase noise for applications where even small fluctuations impact measurement accuracy. These systems deliver high OSNR, stable output power, and consistent long-term performance for laboratory and industrial use.",
    },

    {
      type: "features",
      heading: "Key Features",
      bullets: [
        "Extremely low relative intensity noise (RIN) across operating bandwidth",
        "Stable frequency and power with minimal drift",
        "Ultra-narrow linewidth (Hz to kHz depending on model)",
        "High optical signal-to-noise ratio (OSNR)",
        "Compact fiber-integrated architecture for durability and ease of integration",
        "Advanced precision control electronics for thermal and gain management",
      ],
    },

    {
      type: "text",
      heading: "Technical Advantages of the Series",
      content:
        "Noise suppression, precise cavity control, and advanced electronics maintain consistent intensity and spectral purity. These design choices directly benefit interferometry, coherent communications, spectroscopy, microwave photonics and sensitive sensing platforms.",
    },

    {
      type: "features",
      heading: "Applications",
      bullets: [
        "Optical sensing systems (distributed sensing, FBG interrogation)",
        "Coherent optical communications and modulation testbeds",
        "Interferometry and high-precision metrology",
        "High-resolution spectroscopy",
        "Microwave photonics and stable RF generation",
        "LIDAR research and short-range high-resolution ranging",
      ],
    },

    {
      type: "text",
      heading: "Product Specifications (Typical)",
      content:
        "Typical configurations offer Hz-to-kHz linewidths, very low RIN, output power options from mW up to higher watt-class modules, high OSNR and PM/SM outputs. Exact numbers vary by model—contact Techwin for detailed datasheets and model-specific specs.",
    },

    {
      type: "features",
      heading: "Construction & Design",
      bullets: [
        "Fully fiber-integrated cavity to reduce mechanical sensitivity",
        "Temperature control modules for wavelength stabilization",
        "Precision electronic control for gain and thermal dynamics",
        "Protective housings for vibration resistance and field deployment",
        "Modular designs for OEM integration or benchtop use",
      ],
    },

    {
      type: "text",
      heading: "Integration & Customization",
      content:
        "Modules are designed for easy integration into optical testbeds and OEM products. Custom options include wavelength selection, power tuning, connector types, and mechanical form factors to meet application-specific needs.",
    },

    {
      type: "features",
      heading: "Why Choose This Series",
      bullets: [
        "Reduced measurement error due to low amplitude and phase noise",
        "High repeatability and low maintenance",
        "Flexible configurations for lab and industrial applications",
        "Strong manufacturing and testing standards from Techwin in Hangzhou City",
      ],
    },

    {
      type: "text",
      heading: "Support & Ordering",
      content:
        "For model selection, datasheets, and quotations, contact Techwin. Engineering support is available for integration guidance, calibration services, and customized solutions tailored to your system requirements.",
    },
  ],

  relatedProducts: [
    {
      slug: "broadband-ultra-low-noise-fiber-laser",
      title: "Broadband Ultra-Low Noise Fiber Laser",
      shortDescription: "Broadband low-noise laser for spectroscopy and sensing.",
      image: { src: "/products/Single-Frequency-Fiber-Lasers/broadband-ultra-low-noise-hero.jpg", alt: "Broadband Ultra-Low Noise" },
      href: "/products/single-frequency-fiber-lasers/broadband-ultra-low-noise-fiber-laser",
    },
    {
      slug: "ultra-narrow-linewidth",
      title: "Hz-Level Ultra-Narrow Linewidth Fiber Laser",
      shortDescription: "Ultra-stable narrow-linewidth single-frequency laser.",
      image: { src: "/products/Single-Frequency-Fiber-Lasers/ultra-narrow-linewidth.jpg", alt: "Ultra Narrow Linewidth" },
      href: "/products/single-frequency-fiber-lasers/ultra-narrow-linewidth",
    },
  ],
};

export default ultraLowNoiseFiberLaserSeries;
