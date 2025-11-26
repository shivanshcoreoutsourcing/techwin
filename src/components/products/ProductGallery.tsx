// src/components/products/ProductGallery.tsx
"use client";
import React, { useState, MouseEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export type GalleryImage = { src: string; alt?: string };
export type ProductGalleryProps = {
  images?: GalleryImage[];
};

const fallbackImages: GalleryImage[] = [
  { src: "/products/Single-Frequency-Fiber-Lasers/ultra-narrow-linewidth.jpg", alt: "Product view 1" },
  { src: "/hero/laser-1.jpg", alt: "Product view 2" },
  { src: "/hero/laser-2.jpg", alt: "Product view 3" },
  { src: "/hero/laser-3.jpg", alt: "Product view 4" },
];

export default function ProductGallery({ images = [] }: ProductGalleryProps) {
  const galleryImages = images.length > 0 ? images : fallbackImages;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState({ x: 0, y: 0, scale: 1 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setZoom({ x, y, scale: 2 });
  };

  const handleMouseLeave = () => {
    setZoom({ x: 0, y: 0, scale: 1 });
  };

  const activeImage = galleryImages[activeIndex];

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <div className="md:col-span-1 order-2 md:order-1">
        <div className="flex md:flex-col gap-2">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative w-full aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? "ring-2 ring-offset-2 ring-blue-500 shadow-lg shadow-white/80"
                  : "hover:shadow-md hover:shadow-white/50"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt ?? `Thumbnail ${index + 1}`}
                fill
                sizes="(max-width: 768px) 20vw, 10vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="md:col-span-4 order-1 md:order-2">
        <div
          className="relative aspect-square w-full rounded-lg overflow-hidden group cursor-zoom-in shadow-xl shadow-white/50 ring-1 ring-white/20"
          onClick={() => setLightboxOpen(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={activeImage.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt ?? "Main product image"}
                fill
                sizes="(max-width: 768px) 90vw, 70vw"
                className="object-cover transition-transform duration-300"
                style={{
                  transformOrigin: `${zoom.x * 100}% ${zoom.y * 100}%`,
                  transform: `scale(${zoom.scale})`,
                }}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(true);
              }}
              className="p-2 rounded-full bg-white/70 backdrop-blur-sm text-gray-800 hover:bg-white"
            >
              <Maximize2 size={18} />
            </button>
          </div>

          {galleryImages.length > 1 && (
            <>
              <div className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
                  }}
                  className="p-2 rounded-full bg-white/70 backdrop-blur-sm text-gray-800 hover:bg-white"
                >
                  <ChevronLeft size={20} />
                </button>
              </div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
                  }}
                  className="p-2 rounded-full bg-white/70 backdrop-blur-sm text-gray-800 hover:bg-white"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative w-[90vw] h-[90vh]">
              <Image
                src={activeImage.src}
                alt={activeImage.alt ?? "Lightbox image"}
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-white bg-white/20 hover:bg-white/30"
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
