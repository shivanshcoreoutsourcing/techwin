// src/components/products/ProductFamilies.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export type ProductCard = {
  id: string;
  title: string;
  short: string;
  img?: string;
  href?: string;
};

type Props = {
  products?: ProductCard[];
  heading?: string;
  subheading?: string;
  showSeeAllButton?: boolean;
};

const EXAMPLE_PRODUCTS: ProductCard[] = [
  {
    id: "sf",
    title: "Single-Frequency Fiber Lasers",
    short: "Ultra-narrow linewidth, low noise lasers for sensing, LiDAR, and quantum applications.",
    img: "/products/sf-laser.jpg",
    href: "/products/single-frequency-fiber-lasers",
  },
  {
    id: "seed",
    title: "Seed Lasers",
    short: "High-reliability narrow-linewidth seed lasers for 1.0–2.0 µm bands.",
    img: "/products/seed-laser.jpg",
    href: "/products/seed-lasers",
  },
  {
    id: "high-power",
    title: "High-Power Fiber Lasers",
    short: "Power-scalable single-frequency fiber lasers for research and industrial needs.",
    img: "/products/high-power.jpg",
    href: "/products/high-power-fiber-lasers",
  },
  {
    id: "wavelength",
    title: "Wavelength Conversion Lasers",
    short: "Frequency-converted sources — 193, 266, 355, 532 nm lasers with narrow linewidth.",
    img: "/products/wavelength.jpg",
    href: "/products/wavelength-conversion-lasers",
  },
  {
    id: "broadband",
    title: "Broadband & ASE Sources",
    short: "Stable broadband and ASE light sources for testing and sensing applications.",
    img: "/products/broadband.jpg",
    href: "/products/broadband-ase-sources",
  },
  {
    id: "amplifiers",
    title: "Fiber Amplifiers",
    short: "High-gain, low-noise fiber amplifiers designed for precise optical amplification.",
    img: "/products/fiber-amplifier.jpg",
    href: "/products/fiber-amplifiers",
  },
  {
    id: "testing",
    title: "Laser Testing Systems",
    short: "Advanced laser characterization and test equipment for fiber laser systems.",
    img: "/products/testing.jpg",
    href: "/products/testing-systems",
  },
  {
    id: "sled",
    title: "SLED Light Sources",
    short: "Compact SLED broadband sources for sensing, OCT, and telecom applications.",
    img: "/products/sled.jpg",
    href: "/products/sled-light-sources",
  },
];

export default function ProductFamilies({
  products = EXAMPLE_PRODUCTS,
  heading = "Product Families",
  subheading = "Explore our complete range of high-performance laser systems and optical sources.",
  showSeeAllButton = true,
}: Props) {
  return (
    <section className="relative bg-[var(--color-primary)] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">{heading}</h2>
          <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto">{subheading}</p>
        </div>

        {/* product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="group bg-white text-black rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-1"
            >
              {/* image */}
              <div className="relative h-40 md:h-44 overflow-hidden">
                {p.img ? (
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                    No image
                  </div>
                )}
              </div>

              {/* text content */}
              <div className="p-5 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#111827]">{p.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{p.short}</p>
                </div>

                <div className="mt-4 flex flex-wrap justify-between items-center">
                  <Link
                    href={p.href || "/products"}
                    className="text-[var(--color-primary)] font-medium text-sm hover:underline"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/request-quote"
                    className="inline-block rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] text-sm px-3 py-1.5 font-medium hover:bg-[var(--color-primary)] hover:text-white transition"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* button bottom center */}
        {showSeeAllButton && (
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block bg-white text-[var(--color-primary)] font-semibold px-6 py-2.5 rounded-full shadow-md hover:bg-white/90 transition"
            >
              See All Products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
