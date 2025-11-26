// src/components/quote/RequestQuoteButton.tsx
"use client";

import React, { useState } from "react";
import RequestQuoteModal from "@/components/quote/RequestQuoteModal";

export default function RequestQuoteButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sticky floating button (bottom-right) */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Request a Quote"
        className="fixed z-50 right-5 bottom-5 md:right-8 md:bottom-8 flex items-center gap-3 px-4 py-3 rounded-full shadow-lg text-white font-semibold"
        style={{ background: "var(--color-primary)", boxShadow: "0 12px 30px rgba(16,64,102,0.16)" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2v6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12h-6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 12h6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22v-6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="hidden sm:inline">Request Quote</span>
      </button>

      {/* If you want a header CTA variant add a small pill in header that calls setOpen(true) */}
      <RequestQuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
