// src/types/categories.ts

// --- Backend Data Types ---
// These types represent the raw data structure returned by the backend API.

export interface ICloudinaryImage {
  url: string;
  public_id: string;
}

export interface IProductSection {
  type: string;
  content: any;
}

export interface BackendProduct {
  id: string;
  slug: string;
  title: string;
  shortDescription?: string;
  categories: string[];
  images: ICloudinaryImage[];
  specs?: { [key: string]: any };
  sections: IProductSection[];
  price?: number;
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
}


// --- Frontend Data Types ---
// These types represent the transformed data structure that frontend components use.

export type BreadcrumbItem = { label: string; href?: string };

export type HeroData = {
  title: string;
  tagline: string;
  image: string;
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
  id?: string;
  name: string;
  shortDescription: string;
  details?: string;
};

export type LogoItem = {
  src: string;
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
  trustLogos?: LogoItem[];
  counters?: { label: string; value: string }[];
  faqs?: { q: string; a: string }[];
  downloads?: { label: string; href: string; type?: string }[];
  specGroups?: { label: string; rows: { name: string; value: string }[] }[];
};

export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductSection {
  type: "text" | "features" | "specs" | "comparison" | string; // Loosened to accept other strings
  heading: string;
  content?: string;
  image?: ProductImage;
  bullets?: string[];
  specGroups?: { label: string; rows: { name: string; value: string }[] }[];
  comparisonTable?: {
    headers: string[];
    rows: (string | { text: string; highlight?: boolean })[][];
  };
}

export interface FrontendProduct {
  slug: string;
  category: string;
  published?: boolean;
  featured?: boolean;
  meta: {
    title: string;
    description: string;
    keywords?: string;
  };
  title: string;
  shortDescription: string;
  heroImage: ProductImage;
  galleryImages: ProductImage[];
  datasheetUrl: string;
  sections: ProductSection[];
  relatedProducts?: {
    slug: string;
    title: string;
    shortDescription: string;
    image: ProductImage;
    href: string;
  }[];
}

// Renaming Product to avoid conflicts
export type Product = FrontendProduct;