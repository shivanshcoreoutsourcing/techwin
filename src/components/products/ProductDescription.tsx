// src/components/products/ProductDescription.tsx
"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProductSection } from "@/types/categories";
import ProductComparisonTable from "./ProductComparisonTable";

// Props for the ProductDescription component
type ProductDescriptionProps = {
  sections?: ProductSection[];
  accent?: string;
};

const DEFAULT_SECTIONS: ProductSection[] = []; // Default is now empty

export default function ProductDescription({
  sections = DEFAULT_SECTIONS,
  accent = "#3087C0",
}: ProductDescriptionProps) {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = Math.max(1, sections.length);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = sections.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        const prevDistance = Math.abs(latest - cardsBreakpoints[acc]);
        return distance < prevDistance ? index : acc;
      },
      0
    );
    const idx = Math.min(Math.max(0, closestBreakpointIndex), sections.length - 1);
    setActiveCard(idx);
  });

  // The content is now the sections array itself
  const content = sections;

  // A valid fallback image from the project
  const FALLBACK_IMAGE = "/techwin-logo.png";

  const safeActive = Math.min(Math.max(0, activeCard), Math.max(0, content.length - 1));
  
  // Find the most recent image to display for sections that don't have one
  let activeImageSrc = FALLBACK_IMAGE;
  let activeImageAlt = "Techwin Logo";

  // Find the last available image up to the current active card
  for (let i = safeActive; i >= 0; i--) {
    if (content[i] && content[i].image) {
      activeImageSrc = content[i].image!.src;
      activeImageAlt = content[i].image!.alt;
      break;
    }
  }


  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3B9ACB] tracking-tight ">Product Deep Dive</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the innovative engineering and superior performance that define our laser systems.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 rounded-3xl bg-linear-to-r from-cyan-400 via-sky-500 to-blue-600 opacity-20 blur-2xl" />

          <motion.div
            ref={ref}
            className="relative flex flex-col md:flex-row justify-center md:space-x-12 rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur-sm p-6 md:p-12 shadow-2xl shadow-slate-300/20"
          >
            <div className="md:w-1/2 py-4">
              {content.map((item, index) => {
                const isActive = index === safeActive;
                return (
                  <div key={`${item.heading}-${index}`} className="my-20 md:my-24 first:mt-0 last:mb-0">
                    <motion.div
                      initial={{ opacity: 0.5, y: 20 }}
                      animate={{
                        opacity: isActive ? 1 : 0.6,
                        y: isActive ? 0 : 10,
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      {/* --- Conditional Rendering of Section Type --- */}
                      {(() => {
                        switch (item.type) {
                          case 'comparison':
                            return <ProductComparisonTable section={item} />;
                          
                          case 'specs':
                            return (
                              <div>
                                <h3 className="text-3xl font-bold" style={{ color: accent }}>
                                  {item.heading}
                                </h3>
                                {item.specGroups?.map((group, gIndex) => (
                                    <div key={gIndex} className="mt-6">
                                        <h4 className="font-semibold text-lg text-gray-800 mb-3">{group.label}</h4>
                                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                            {group.rows.map((spec, sIndex) => (
                                                <React.Fragment key={sIndex}>
                                                    <div className="font-medium text-gray-600">{spec.name}</div>
                                                    <div className="text-gray-800">{spec.value}</div>
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                              </div>
                            );

                          case 'text':
                          case 'features':
                          default:
                            return (
                              <div>
                                <h3 className="text-3xl font-bold" style={{ color: accent }}>
                                  {item.heading}
                                </h3>
                                {item.content && <p className="text-lg text-slate-700 mt-5 leading-relaxed">{item.content}</p>}
                                {item.bullets && (
                                  <ul className="mt-6 space-y-3">
                                    {item.bullets.map((bullet, i) => (
                                      <li key={i} className="flex items-center">
                                        <span
                                          className="shrink-0 inline-block w-2.5 h-2.5 rounded-full mr-4"
                                          style={{
                                            backgroundColor: accent,
                                            boxShadow: `0 0 12px ${accent}90`,
                                          }}
                                        />
                                        <span className="text-slate-800 font-medium">{bullet}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            );
                        }
                      })()}
                    </motion.div>
                  </div>
                );
              })}
            </div>

            <div className="hidden md:block md:w-1/2 sticky top-24 h-[550px]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200/50 shadow-xl shadow-slate-400/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={safeActive + "-" + activeImageSrc}
                    initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image src={encodeURI(activeImageSrc)} alt={activeImageAlt} fill sizes="(max-width: 768px) 100vw, 70vw" className="object-cover" priority={safeActive === 0} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
