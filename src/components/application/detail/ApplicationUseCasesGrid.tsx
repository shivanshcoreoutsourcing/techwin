// src/components/application/detail/ApplicationUseCasesGrid.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export type UseCase = {
  id?: string;
  title: string;
  summary?: string;
  stat?: string;
  icon?: string;
  image?: { src: string; alt?: string; width?: number; height?: number } | null;
  href?: string;
};

type UseCasesGridProps = {
  useCases: UseCase[];
  columns?: number;
  background?: "blue" | "white";
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const card: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.992 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.44, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function ApplicationUseCasesGrid({
  useCases,
  columns = 3,
  background = "white",
}: UseCasesGridProps) {
  const isBlue = background === "blue";
  const gridCols = columns === 3 ? "md:grid-cols-3" : columns === 2 ? "md:grid-cols-2" : "md:grid-cols-4";

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
      className={`py-12 md:py-16 lg:py-20 ${isBlue ? "bg-[#3B9ACB] text-white" : "bg-white text-[#0f172a]"}`}
      aria-label="use-cases"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className={`text-xs font-medium uppercase tracking-wider ${isBlue ? "text-white/90" : "text-[--primary]"}`}>
              Use Cases
            </div>
            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold ${isBlue ? "text-white" : "text-[--primary]"}`}>
              Where this excels
            </h3>
          </div>
          <div className="text-sm opacity-80">Explore typical deployments and outcome highlights</div>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${gridCols}`}>
          {useCases.map((u, i) => (
            <motion.div
              key={u.id ?? `${u.title}-${i}`}
              variants={card}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.995 }}
              className={`relative group block rounded-2xl p-5 transition-transform shadow-lg overflow-hidden border ${
                isBlue ? "bg-white/6 border-white/10" : "bg-gray-50 border-gray-100"
              }`}
            >
              {/* decorative blurred blobs */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -right-10 -top-10 w-56 h-56 rounded-full bg-gradient-to-br from-white/6 to-transparent blur-3xl opacity-60 transform-gpu group-hover:scale-105 transition-transform" />
                <div className="absolute -left-16 -bottom-12 w-40 h-40 rounded-lg bg-gradient-to-tr from-white/4 to-transparent blur-sm opacity-40" />
              </div>

              <div className="relative z-10 flex items-start gap-4">
                <div className="flex-shrink-0">
                  {u.image ? (
                    <div className="w-20 h-20 rounded-xl overflow-hidden shadow-inner bg-white/8">
                      <Image
                        src={u.image.src}
                        alt={u.image.alt ?? u.title}
                        width={80}
                        height={80}
                        style={{ objectFit: "cover" }}
                        priority={false}
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-14 h-14 rounded-lg flex items-center justify-center ${isBlue ? "bg-white/10 text-white" : "bg-[--primary] text-white"}`}
                    >
                      {u.icon ? <span className="text-lg" dangerouslySetInnerHTML={{ __html: u.icon }} /> : <div className="w-3 h-3 rounded-full bg-white" />}
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className={`text-lg md:text-xl font-semibold ${isBlue ? "text-white" : "text-[--primary]"}`}>{u.title}</h4>
                    {u.stat && <div className={`text-sm font-mono ${isBlue ? "text-white/90" : "text-[--primary]"}`}>{u.stat}</div>}
                  </div>

                  {u.summary && <p className={`mt-2 text-sm md:text-base leading-snug ${isBlue ? "text-white/90" : "text-gray-600"}`}>{u.summary}</p>}

                  <div className="mt-4 flex items-center gap-3">
                    <Link
                      href={u.href ?? "#"}
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium transition ${
                        isBlue ? "bg-white/10 text-white border border-white/10" : "bg-[--primary] text-white shadow-sm"
                      }`}
                    >
                      Learn how
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M5 12h14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 5l7 7-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>

                    <span className={`text-xs opacity-80 ${isBlue ? "text-white/80" : "text-gray-500"}`}>See example integration</span>
                  </div>
                </div>
              </div>

              {/* hover parallax image reveal */}
              <div className="absolute right-4 top-4 w-28 h-28 rounded-xl overflow-hidden opacity-0 group-hover:opacity-80 transition-opacity duration-500">
                {u.image ? <Image src={u.image.src} alt={u.image.alt ?? u.title} width={112} height={112} style={{ objectFit: "cover" }} /> : null}
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/6 opacity-70" />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        :root {
          --primary: #3b9acb;
        }
      `}</style>
    </motion.section>
  );
}
