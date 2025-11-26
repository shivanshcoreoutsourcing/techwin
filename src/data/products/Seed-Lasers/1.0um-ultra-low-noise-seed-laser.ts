import { Product } from "@/types/categories";

export const ultraLowNoiseSeedLaser: Product = {
  slug: "1.0um-ultra-low-noise-seed-laser",
  category: "seed-lasers",
  meta: {
    title: "Techwin 1.0 µm Ultra-Low Noise Seed Laser | Stable Seed Source",
    description:
      "Techwin 1.0 µm Ultra-Low Noise Seed Laser for precision sensing, research needs and stable single-frequency setups. High stability seed source. Call +86-13958180450 today.",
    keywords:
      "ultra-low noise seed laser, 1.0 µm seed laser, narrow-linewidth seed source, stable single-frequency laser",
  },
  title: "1.0 µm Ultra-Low Noise Seed Laser",
  shortDescription:
    "An essential solution for researchers, system integrators, and industrial users who require a stable and narrow-linewidth seed source for precision applications.",
  heroImage: {
    src: "/products/Single-Frequency-Fiber-Lasers/ultra-narrow-linewidth.jpg", 
    alt: "1.0 µm Ultra-Low Noise Seed Laser",
  },
  galleryImages: [
    {
      src: "/products/Single-Frequency-Fiber-Lasers/ultra-narrow-module.jpg",
      alt: "Laser Module",
    },
    {
      src: "/products/Single-Frequency-Fiber-Lasers/ultra-narrow-lab-use.jpeg",
      alt: "Laser in a lab setting",
    },
  ],
  datasheetUrl: "/datasheets/placeholder.pdf",
  sections: [
    {
      type: "text",
      heading: "Overview of the 1.0 µm Wavelength Range",
      content:
        "Seed lasers operating in the 1.0 µm band are widely used in scientific research, coherent communication experiments, sensing systems, and nonlinear optical conversions. The wavelength range offers a balance of power scalability, fiber coupling efficiency, and material interaction compatibility.",
      image: {
        src: "/products/Single-Frequency-Fiber-Lasers/ultra-narrow-what-is.jpeg",
        alt: "Diagram of a 1.0 µm seed laser",
      },
    },
    {
      type: "features",
      heading: "Key Features of the 1.0 µm Ultra-Low Noise Seed Laser",
      bullets: [
        "Ultra-low intensity noise performance, suitable for sensitive measurements",
        "High wavelength stability with precision temperature control",
        "Narrow linewidth output supporting frequency-specific operations",
        "Fiber-coupled configuration designed for seamless integration",
        "Stable single-frequency operation",
        "Rugged design for laboratory and industrial usage",
        "Low drift under continuous operation",
        "Highly repeatable performance over extended periods",
      ],
    },
    {
      type: "text",
      heading: "Technical Design and Construction",
      content:
        "The seed laser is engineered with a combination of advanced optical cavity design, temperature-controlled architecture, and precision driving electronics. This ensures optimal output stability across various operating conditions.",
    },
    {
      type: "features",
      heading: "Primary Advantages",
      bullets: [
        "Reduced interference in sensitive measurements",
        "Support for high-accuracy spectroscopy",
        "Improved performance in coherent signal generation setups",
        "Reliable input source for fiber amplifiers",
        "High spectral purity for nonlinear optical experiments",
      ],
    },
    {
      type: "comparison",
      heading: "Comparison With Standard Seed Lasers",
      comparisonTable: {
        headers: ["Feature", "Ultra-Low Noise Model", "Standard Seed Laser"],
        rows: [
          ["Intensity Noise", { text: "Very low", highlight: true }, "Moderate"],
          ["Linewidth", { text: "Narrow", highlight: true }, "Wider"],
          ["Stability", { text: "High", highlight: true }, "Variable"],
          ["Spectral Purity", { text: "Very high", highlight: true }, "Standard"],
          ["Integration", "Precision-focused", "General-purpose"],
        ],
      },
    },
    {
      type: "features",
      heading: "Applications of the 1.0 µm Ultra-Low Noise Seed Laser",
      bullets: [
        "Precision optical sensing systems",
        "Fiber amplifier seeding",
        "LIDAR research",
        "High resolution spectroscopy",
        "Atomic and molecular physics",
        "Metrology platforms",
        "Nonlinear optics",
        "Coherent detection experiments",
        "Semiconductor testing",
        "Laboratory research and scientific trials",
      ],
    },
  ],
};
