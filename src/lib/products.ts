// src/lib/products.ts
// --- add these exports (adjust file reading logic to your project if needed) ---

import fs from "fs";
import path from "path";
import { runInNewContext } from "vm";
import type { Product } from "@/types/categories";

/**
 * reads the /data/products folder structure and returns an array:
 * [{ categorySlug, categoryTitle, products: [{slug, title}] }]
 *
 * Adjust to how your product data files are structured.
 */
function findProductsDir(): string | null {
  // Look up a few directory levels for either `src/data/products` or `Frontend/src/data/products`.
  // This helps when Next infers a different workspace root (monorepo / multiple lockfiles).
  let dir = process.cwd();
  for (let i = 0; i < 6; i++) {
    const cand1 = path.join(dir, "src", "data", "products");
    const cand2 = path.join(dir, "Frontend", "src", "data", "products");
    if (fs.existsSync(cand1)) return cand1;
    if (fs.existsSync(cand2)) return cand2;
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }

  // final fallbacks
  const fallbackA = path.join(process.cwd(), "src", "data", "products");
  const fallbackB = path.join(process.cwd(), "data", "products");
  if (fs.existsSync(fallbackA)) return fallbackA;
  if (fs.existsSync(fallbackB)) return fallbackB;
  return null;
}

export function getAllProducts(): { categorySlug: string; categoryTitle?: string; products: { slug: string; title: string }[] }[] {
  // look in src/data/products first (repo layout), fallback to data/products at repo root
  const productsDir = findProductsDir();
  if (!productsDir) return [];

  const categories = fs.readdirSync(productsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((dir) => {
      const dirName = dir.name;
      // normalize category slug to lowercase-hyphen format
      const categorySlug = dirName.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "-").replace(/--+/g, "-").replace(/(^-|-$)/g, "");
      const categoryPath = path.join(productsDir, dirName);
      // assume each product has an index.json or product .ts exporting metadata; we fall back to file names
      const productEntries = fs.readdirSync(categoryPath, { withFileTypes: true })
        .filter((f) => f.isDirectory() || f.name.endsWith(".json") || f.name.endsWith(".md") || f.name.endsWith('.ts') || f.name.endsWith('.tsx') || f.name.endsWith('.js'))
        .map((f) => {
          const rawName = f.isDirectory() ? f.name : f.name.replace(/\.(json|md|ts|tsx|js)$/, "");
          const slug = rawName.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "-").replace(/--+/g, "-").replace(/(^-|-$)/g, "");
          // attempt to load metadata if present
          let title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
          try {
            const potentialMetaPath = path.join(categoryPath, slug, "meta.json");
            if (fs.existsSync(potentialMetaPath)) {
              const meta = JSON.parse(fs.readFileSync(potentialMetaPath, "utf8"));
              if (meta.title) title = meta.title;
            } else {
              // optionally look for a single file product export (adapt for your data files)
            }
          } catch (err) {
            // ignore
          }
          return { slug, title };
        });

      return {
        categorySlug,
        categoryTitle: categorySlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        products: productEntries,
      };
    });

  return categories;
}

/**
 * convenience: list category slugs only
 */
export function getAllCategories(): string[] {
  const products = getAllProducts();
  return products.map((p) => p.categorySlug);
}

/**
 * Returns an array of params suitable for Next.js generateStaticParams
 * e.g. [{ category: 'my-category', product: 'my-product' }, ...]
 */
export function getAllProductPaths(): { category: string; product: string }[] {
  const categories = getAllProducts();
  const out: { category: string; product: string }[] = [];
  for (const c of categories) {
    for (const p of c.products) {
      out.push({ category: c.categorySlug, product: p.slug });
    }
  }
  // debug: log number of generated paths during dev to aid troubleshooting
  if (process.env.NODE_ENV !== "production") {
    try {
      // eslint-disable-next-line no-console
      console.debug("[getAllProductPaths] generated", out.length, "paths. sample:", out.slice(0, 10));
    } catch (e) {}
  }
  return out;
}

/**
 * Attempts to load a single product's front-end shape by category + slug.
 * Looks for several possible file patterns under the repository `data/products` folder:
 * - data/products/<category>/<slug>/product.json
 * - data/products/<category>/<slug>.json
 * - data/products/<category>/<slug>/meta.json
 * - data/products/<category>/<slug>.ts (using VM execution)
 * If none exist, returns null.
 */
export async function getProductData(category: string, productSlug: string) {
  // determine products root (src/data/products preferred)
  let productsRoot = findProductsDir() || path.join(process.cwd(), "src", "data", "products");
  if (!fs.existsSync(productsRoot)) productsRoot = path.join(process.cwd(), "data", "products");

  // Try to locate the actual directory name that corresponds to the category slug (case-insensitive / normalized)
  let base = path.join(productsRoot, category);
  if (!fs.existsSync(base)) {
    try {
      const entries = fs.readdirSync(productsRoot, { withFileTypes: true }).filter((d) => d.isDirectory());
      const match = entries.find((d) => d.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "-").replace(/--+/g, "-").replace(/(^-|-$)/g, "") === category);
      if (match) base = path.join(productsRoot, match.name);
    } catch (e) {
      // ignore
    }
  }

  const candidates = [
    path.join(base, productSlug, "product.json"),
    path.join(base, productSlug + ".json"),
    path.join(base, productSlug, "meta.json"),
    // also consider a TS/JS file with exported default object
    path.join(base, productSlug + ".ts"),
    path.join(base, productSlug + ".tsx"),
    path.join(base, productSlug + ".js"),
  ];

  for (const c of candidates) {
    try {
      if (fs.existsSync(c)) {
        if (process.env.NODE_ENV !== "production") {
          try {
            // eslint-disable-next-line no-console
            console.debug("[getProductData] found candidate:", c);
          } catch (e) {}
        }
        let raw: any = null;
        const ext = path.extname(c).toLowerCase();
        if (ext === ".json" || ext === ".meta") {
          raw = JSON.parse(fs.readFileSync(c, "utf8"));
        } else if (ext === ".ts" || ext === ".tsx" || ext === ".js") {
          // Read the TypeScript/JavaScript file and execute it in a VM context
          const fileContent = fs.readFileSync(c, "utf8");
          
          try {
            // Create a context object to collect exports
            const exports: any = {};
            const context = { exports, module: { exports: {} } };
            
            // Transform the import/export statements to work in VM
            // Remove import statements since they won't work in VM
            let transformedCode = fileContent
              .replace(/import\s+(?:type\s+)?(?:\{[^}]+\}|\*\s+as\s+\w+|\w+)\s+from\s+['"][^'"]+['"]\s*;?/g, "")
              .replace(/export\s+(?:const|let|var)\s+/g, "const ")
              .replace(/export\s+default\s+/g, "exports.default = ")
              .replace(/:\s*Product\s*=/g, " = "); // Remove type annotations like ": Product ="
            
            // Execute the code in a safe VM context
            runInNewContext(transformedCode, context);
            raw = context.exports.default || context.exports;
          } catch (execErr) {
            if (process.env.NODE_ENV !== "production") {
              try { console.debug("[getProductData] failed to execute", c, "error:", execErr); } catch (e) {}
            }
            raw = null;
          }
        }
        if (!raw) {
          if (process.env.NODE_ENV !== "production") {
            try { console.debug("[getProductData] failed to parse raw from", c); } catch (e) {}
          }
          continue;
        }
        if (process.env.NODE_ENV !== "production") {
          try { console.debug("[getProductData] parsed product", productSlug, "from", c); } catch (e) {}
        }
        // Attempt to normalize shape for frontend. If file is backend-shaped, adapt.
        const product: any = {
          slug: raw.slug || productSlug,
          category: category,
          published: raw.published ?? true,
          featured: raw.featured ?? false,
          meta: raw.meta || { title: raw.metaTitle || raw.title || raw.slug, description: raw.metaDescription || raw.shortDescription || "" },
          title: raw.title || raw.metaTitle || productSlug,
          shortDescription: raw.shortDescription || raw.description || "",
          heroImage: raw.heroImage || (raw.images && raw.images[0]) || { src: raw.hero || raw.images?.[0] || "", alt: raw.title || "" },
          galleryImages: raw.galleryImages || (raw.images || []).map((i: any) => (typeof i === 'string' ? { src: i, alt: raw.title || '' } : i)),
          datasheetUrl: raw.datasheetUrl || (raw.datasheets && raw.datasheets[0] && raw.datasheets[0].url) || "",
          sections: raw.sections || [],
          relatedProducts: raw.relatedProducts || [],
        };

        return product;
      }
    } catch (err) {
      // ignore and continue
    }
  }

  return null;
}