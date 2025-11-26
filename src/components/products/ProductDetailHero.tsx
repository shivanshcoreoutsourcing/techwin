// src/components/products/ProductDetailHero.tsx
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useTransform,
  Variants,
} from "framer-motion";
import { Zap, TrendingUp, ZoomIn } from "lucide-react";

export type HeroMetrics = {
  projects?: number;
  uptimePct?: number;
  linewidthHz?: string;
  activeUsers?: number;
};

export type HeroProps = {
  title?: string;
  tagline?: string;
  image?: string | { src: string; alt?: string };
  imageGallery?: ({ src: string; alt?: string } | string)[];
  metrics?: HeroMetrics;
  metricsEndpoint?: string;
  showImageControls?: boolean;
  enableZoom?: boolean;
  overlapHeader?: boolean;
  breadcrumbs?: { label: string; href?: string }[]; // up-to-category crumbs
};

/* ----------------- Default uploaded image (your runtime maps this path to a URL) ----------------- */
const uploadedDefault = "/mnt/data/Screenshot 2025-11-20 at 2.11.45 PM.png";

const Sparkline = ({ data, color = "#3B9ACB" }: { data: number[]; color?: string }) => {
  const reduce = useReducedMotion();
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data
    .map((val, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 100 - ((val - min) / (max - min || 1)) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
      <motion.path
        d={`M ${points}`}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={reduce ? {} : { pathLength: [0, 1] }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </svg>
  );
};

const ProductDetailHero: React.FC<HeroProps> = ({
  title = "Ultra-Narrow Linewidth Single-Frequency Fiber Laser",
  tagline = "Precision optics for long-distance sensing, coherent detection and quantum experiments.",
  image,
  imageGallery = [],
  metrics: initialMetrics,
  metricsEndpoint,
  showImageControls = true,
  enableZoom = true,
  overlapHeader = false,
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Single-Frequency Fiber Lasers", href: "/products/single-frequency-fiber-lasers" },
  ],
}) => {
  const [metrics, setMetrics] = useState<HeroMetrics | undefined>(initialMetrics);
  const [loading, setLoading] = useState(!!metricsEndpoint && !initialMetrics);
  const reduce = useReducedMotion();

  // tilt motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-120, 120], [3, -3]);
  const rotateY = useTransform(x, [-120, 120], [-4, 4]);

  // gallery (normalize)
  const gallery = React.useMemo(() => {
    const items: ({ src: string; alt?: string })[] = [];
    if (image) {
      if (typeof image === "string") items.push({ src: image, alt: "" });
      else items.push({ src: image.src, alt: image.alt });
    }
    for (const it of imageGallery) {
      if (typeof it === "string") items.push({ src: it, alt: "" });
      else items.push(it);
    }
    // ensure default image present
    items.push({ src: uploadedDefault, alt: "Product image" });
    // dedupe
    const seen = new Set<string>();
    return items.filter((it) => {
      if (seen.has(it.src)) return false;
      seen.add(it.src);
      return true;
    });
  }, [image, imageGallery]);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeImage = gallery[activeIndex] ?? { src: uploadedDefault, alt: "" };

  const [isZoomOpen, setIsZoomOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsZoomOpen(false);
      if (e.key === "ArrowRight") setActiveIndex((p) => Math.min(p + 1, gallery.length - 1));
      if (e.key === "ArrowLeft") setActiveIndex((p) => Math.max(p - 1, 0));
    }
    if (isZoomOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isZoomOpen, gallery.length]);

  useEffect(() => {
    if (!metricsEndpoint) return;
    let mounted = true;
    const fetchMetrics = async () => {
      setLoading(true);
      try {
        await new Promise((r) => setTimeout(r, 500));
        const res = await fetch(metricsEndpoint);
        if (!res.ok) throw new Error("fetch failed");
        const json = await res.json();
        if (!mounted) return;
        setMetrics((prev) => ({ ...json.data, ...prev }));
      } catch (err) {
        console.warn("metrics fetch failed", err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchMetrics();
    return () => {
      mounted = false;
    };
  }, [metricsEndpoint]);

  // const mtNegativeLg = overlapHeader ? "-mt-20 lg:-mt-24 xl:-mt-28" : "mt-8 lg:mt-12";
  const translateXCard = overlapHeader ? "lg:translate-x-6 xl:translate-x-10" : "lg:translate-x-0";

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
  };
  const itemVariants: Variants = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  const metricOrDash = (value: string | number | undefined) => {
    if (loading) return "—";
    if (value === undefined || value === null || (typeof value === "string" && value.trim() === "")) return "—";
    return value;
  };

  // small style tweaks: more breathing room under the header and larger breadcrumb container
  return (
    <section
      className={`relative w-full overflow-visible bg-white ${overlapHeader ? "" : "pt-19 md:pt-19"}`}
      aria-label="Product hero"
      onMouseMove={(e) => {
        if (reduce) return;
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        x.set(e.clientX - (rect.left + rect.width / 2));
        y.set(e.clientY - (rect.top + rect.height / 2));
      }}
    >
      {/* Breadcrumb block — pill card with extra top space so it sits clear below nav */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="bg-white/40 backdrop-blur-sm border border-slate-100 rounded-full inline-flex items-center gap-4 px-4 py-2 shadow-sm -translate-y-2">
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx} className="text-sm text-slate-500 flex items-center gap-3">
              <Link href={crumb.href || "#"} className="hover:underline">
                {crumb.label}
              </Link>
              <span className="text-slate-300">/</span>
            </span>
          ))}
          {/* product title at end (primary) */}
          <span className="text-sm font-semibold" style={{ color: "#3B9ACB" }}>
            {title}
          </span>
        </div>
      </div>

      {/* small separator and breathing space */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-6" />

      {/* Main grid — top-aligned both columns */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pb-14">
        <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" variants={containerVariants} initial="hidden" animate="visible">
          {/* LEFT: text (top aligned) */}
          <motion.div className="lg:col-span-6 space-y-6" variants={itemVariants}>
            <h1 id="product-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight" style={{ color: "#3B9ACB" }}>
              {title}
            </h1>

            <p className="text-base md:text-lg text-slate-600 max-w-xl">{tagline}</p>

            {/* CTAs (primary + white outlined) */}
            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-[#3B9ACB] to-[#2a8bc2] text-white shadow-lg hover:shadow-xl transition"
              >
                Request Quote
              </Link>

              <Link
                href="/datasheet.pdf"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full font-semibold bg-white text-[#0b7fae] border-2 border-[#3B9ACB] shadow-sm hover:shadow-md transition"
              >
                Download Datasheet
              </Link>
            </div>

            {/* metrics row — tidy and subtle */}
            <div className="mt-6 flex flex-wrap items-center gap-8 text-sm text-slate-700">
              <div className="flex items-baseline gap-3">
                <span className="font-extrabold text-lg">{metricOrDash(metrics?.projects)}</span>
                <span className="uppercase text-xs text-slate-400 tracking-wider">Projects</span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-extrabold text-lg">{metricOrDash(metrics?.uptimePct ? `${metrics.uptimePct}%` : undefined)}</span>
                <span className="uppercase text-xs text-slate-400 tracking-wider">Uptime</span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-extrabold text-lg">{metricOrDash(metrics?.linewidthHz)}</span>
                <span className="uppercase text-xs text-slate-400 tracking-wider">Linewidth</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: image card (top aligned) */}
          <motion.div className={`lg:col-span-6 flex items-start justify-center  ${translateXCard}`} variants={itemVariants} style={{ perspective: 1200 }}>
            <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" } as any} className="relative w-full max-w-[680px]">
              <div className="relative rounded-2xl overflow-visible bg-white shadow-[0_30px_80px_rgba(16,24,40,0.08)] border border-slate-100">
                <div className="relative w-full h-[380px] md:h-[460px] rounded-2xl overflow-hidden">
                  <button type="button" aria-label={enableZoom ? "Open image viewer" : "Product image"} onClick={() => enableZoom && setIsZoomOpen(true)} className="absolute inset-0 w-full h-full p-0 text-left">
                    <div className="relative w-full h-full">
                      <Image src={activeImage.src} alt={activeImage.alt || "Product visual"} fill sizes="(max-width: 1024px) 90vw, 44vw" style={{ objectFit: "cover", objectPosition: "center" }} priority />
                      {/* bottom info strip */}
                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <div className="flex items-center justify-between gap-4 bg-white/85 backdrop-blur-sm rounded-xl p-3 shadow">
                          <div>
                            <div className="text-xs uppercase text-slate-500 font-bold">Live Throughput</div>
                            <div className="text-lg font-bold text-slate-900">
                              {metricOrDash(metrics?.activeUsers ? (metrics.activeUsers / 1000).toFixed(1) : undefined)}
                              <span className="text-sm text-slate-500 font-medium ml-1">GB/s</span>
                            </div>
                          </div>
                          <div className="w-28 h-8">
                            <Sparkline data={[20, 45, 30, 60, 45, 80, 50, 90]} color="#0ea5c8" />
                          </div>
                        </div>
                      </div>

                      {enableZoom && (
                        <div className="absolute top-4 right-4 z-20">
                          <div className="bg-white/95 rounded-full p-2 shadow-md flex items-center justify-center">
                            <ZoomIn size={18} />
                          </div>
                        </div>
                      )}
                    </div>
                  </button>
                </div>
              </div>

              {/* thumbnails / controls */}
              {showImageControls && gallery.length > 1 && (
                <div className="mt-4 flex items-center gap-2 justify-center">
                  <button aria-label="Previous image" onClick={() => setActiveIndex((p) => Math.max(p - 1, 0))} className="p-2 rounded-md hover:bg-slate-100">‹</button>
                  <div className="flex gap-2 overflow-auto px-1">
                    {gallery.map((g, i) => (
                      <button key={g.src} onClick={() => setActiveIndex(i)} aria-label={`View image ${i + 1}`} className={`w-16 h-10 rounded-md overflow-hidden ring-1 focus:outline-none ${i === activeIndex ? "ring-[#3B9ACB]/60" : "ring-transparent"}`}>
                        <div className="relative w-full h-full">
                          <Image src={g.src} alt={g.alt || `thumb-${i}`} fill sizes="64px" style={{ objectFit: "cover" }} />
                        </div>
                      </button>
                    ))}
                  </div>
                  <button aria-label="Next image" onClick={() => setActiveIndex((p) => Math.min(p + 1, gallery.length - 1))} className="p-2 rounded-md hover:bg-slate-100">›</button>
                </div>
              )}

              {/* subtle floating badges */}
              <div className="pointer-events-none">
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.6 }} className="absolute -top-6 right-6">
                  <div className="bg-white rounded-2xl px-3 py-2 shadow flex items-center gap-2 text-sm">
                    <div className="p-1 rounded-md bg-gradient-to-br from-[#3B9ACB] to-[#2a8bc2] text-white"><Zap size={14} /></div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase">Status</div>
                      <div className="text-xs font-semibold text-slate-800">Instant Deploy</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: [0, -6, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 1.2 }} className="absolute bottom-6 left-6">
                  <div className="bg-white rounded-2xl px-3 py-2 shadow flex items-center gap-2 text-sm">
                    <div className="p-1 rounded-md bg-gradient-to-br from-[#3B9ACB] to-[#2a8bc2] text-white"><TrendingUp size={14} /></div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase">Status</div>
                      <div className="text-xs font-semibold text-slate-800">High Efficiency</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Zoom modal */}
      {enableZoom && isZoomOpen && (
        <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-[1000] flex items-center justify-center p-6" onClick={() => setIsZoomOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden />
          <div className="relative max-w-[1100px] w-full h-[80vh] rounded-xl overflow-hidden bg-white" onClick={(e) => e.stopPropagation()}>
            <div className="absolute top-4 right-4 z-20">
              <button onClick={() => setIsZoomOpen(false)} className="bg-white rounded-full p-2 shadow" aria-label="Close image viewer">✕</button>
            </div>

            <div className="w-full h-full relative">
              <Image src={activeImage.src} alt={activeImage.alt || "Zoomed product image"} fill style={{ objectFit: "contain", background: "#0f172a" }} sizes="100vw" priority />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetailHero;
