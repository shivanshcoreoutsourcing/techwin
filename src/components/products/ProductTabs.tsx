"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Download, Headphones, Info, Layers, BarChart3 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type Tab = {
  id: string;
  label: string;
  icon?: string;
  content: React.ReactNode;
};

export type ProductTabsProps = {
  tabs: Tab[];
  sidebar?: React.ReactNode;
  heroImage?: { src: string; alt?: string };
};

const PRIMARY_BLUE = "#3B9ACB";
const ACCENT_BLUE = "#00a9e0";
const DEFAULT_IMAGE = "/products/Single-Frequency-Fiber-Lasers/ultra-narrow-linewidth.jpg";

const iconMap: Record<string, React.ReactNode> = {
  overview: <BookOpen size={18} />,
  specifications: <Info size={18} />,
  comparison: <BarChart3 size={18} />,
  applications: <Layers size={18} />,
  downloads: <Download size={18} />,
  support: <Headphones size={18} />,
};

const getIconForTab = (tab: Tab): React.ReactNode => {
  if (tab.icon && iconMap[tab.icon]) return iconMap[tab.icon];
  return iconMap[tab.id.toLowerCase()] ?? <BookOpen size={18} />;
};

export default function ProductTabs({ tabs, sidebar, heroImage }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id ?? "");

  if (!tabs || tabs.length === 0) return null;

  return (
    <section className="w-full py-12 md:py-16" style={{ backgroundColor: PRIMARY_BLUE }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/10">
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src={heroImage?.src ?? DEFAULT_IMAGE}
                  alt={heroImage?.alt ?? "Product Image"}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <div className="relative mb-6">
                  <nav className="flex space-x-2 border border-white/10 rounded-full p-1" aria-label="Product tabs">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                          "relative flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 text-sm md:text-base font-medium transition-colors duration-300 focus:outline-none rounded-full",
                          activeTab === tab.id ? "text-white" : "text-gray-300 hover:text-white"
                        )}
                        aria-pressed={activeTab === tab.id}
                      >
                        {activeTab === tab.id && (
                          <motion.div
                            layoutId="active-tab-pill"
                            className="absolute inset-0 bg-white/20 rounded-full"
                            style={{ borderRadius: 9999 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10">{getIconForTab(tab)}</span>
                        <span className="relative z-10">{tab.label}</span>
                      </button>
                    ))}
                  </nav>
                </div>

                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="mt-8"
                >
                  <div className="prose prose-invert max-w-none text-gray-200">
                    {tabs.find((t) => t.id === activeTab)?.content}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:sticky top-28">
            {sidebar}
          </aside>
        </div>
      </div>
    </section>
  );
}
