"use client";

import Image from "next/image";
import { safeImageSrc } from "@/lib/image";
import Link from "next/link";
import { Menu, User, Heart, HelpCircle } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useEffect, useRef, useState } from "react";
import { applications } from "@/data/Application/applications";
import { SearchDropdown } from "@/components/common/SearchDropdown";
import type { SearchResult } from "@/app/api/search/route";
import { singleFrequencyData } from "@/data/categories/singleFrequencyData";
import { seedFiberData } from "@/data/categories/seedFiberData";
import { highPowerData } from "@/data/categories/highPowerData";
import { wavelengthConversionData } from "@/data/categories/wavelengthConversionData";
import { broadbandAseData } from "@/data/categories/broadbandAseData";
import { fiberAmplifierData } from "@/data/categories/fiberAmplifierData";
import { laserTestingData } from "@/data/categories/laserTestingData";
import { sledLightData } from "@/data/categories/sledLightData";

const categoryTitleMap = [
  { title: "Single-Frequency Fiber Lasers", data: singleFrequencyData },
  { title: "Seed Lasers", data: seedFiberData },
  { title: "High-Power Fiber Lasers", data: highPowerData },
  { title: "Wavelength Conversion Lasers", data: wavelengthConversionData },
  { title: "Broadband & ASE Sources", data: broadbandAseData },
  { title: "Fiber Amplifiers", data: fiberAmplifierData },
  { title: "Testing Systems", data: laserTestingData },
  { title: "Point Light Sources", data: sledLightData },
];

const productCategories = categoryTitleMap.map((item) => ({
  title: item.title,
  slug: item.data.url.replace("/", ""),
  image: item.data.hero.image,
  children: item.data.subCategories.map((subCat) => ({
    title: subCat.name,
    slug: subCat.id ?? "",
  })),
}));


export default function Header() {
  const [activeCategory, setActiveCategory] = useState(productCategories[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Fetch search results
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (!searchQuery.trim()) {
      setSearchResults([]);
      setShowSearchDropdown(false);
      return;
    }

    setIsSearching(true);
    searchTimeoutRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
        const data = await res.json();
        setSearchResults(data.results || []);
        setShowSearchDropdown(true);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setIsSearching(false);
      }
    }, 300); // Debounce 300ms

    return () => {
      if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    };
  }, [searchQuery]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowSearchDropdown(false);
      }
    };

    if (showSearchDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearchDropdown]);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md">
      {/* TOP FLOOR */}
      <div className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-3 flex items-center gap-4">
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            aria-label="menu"
          >
            <Menu className="h-5 w-5 text-[#3B9ACB]" />
          </button>

            <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src={safeImageSrc("/techwin-logo-rectangle.png")}
              alt="Techwin Logo"
              width={150}
              height={50}
              priority
              style={{ width: "auto", height: "auto" }}
              className="object-contain"
            />
          </Link>

          <div className="flex-1">
            <div className="relative w-full" ref={searchContainerRef}>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery.trim() && setShowSearchDropdown(true)}
                placeholder="Search for Products, Models, Keywords..."
                className="w-full rounded-full border border-gray-200 px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3B9ACB]"
                aria-label="Search"
              />
              <button
                onClick={() => {
                  if (searchQuery.trim()) {
                    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
                  }
                }}
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#3B9ACB] text-white px-4 py-1.5 rounded-full text-sm hover:bg-[#2D87B7]"
              >
                Search
              </button>
              {showSearchDropdown && (
                <SearchDropdown
                  query={searchQuery}
                  isLoading={isSearching}
                  results={searchResults}
                  onResultClick={() => {
                    setSearchQuery("");
                    setShowSearchDropdown(false);
                  }}
                />
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-5 ml-4">
            <Link
              href="/account"
              className="flex items-center gap-2 text-sm text-[#3B9ACB] hover:text-[#00527b]"
            >
              <User className="h-4 w-4" /> <span>Profile</span>
            </Link>
            <Link
              href="/wishlist"
              className="flex items-center gap-2 text-sm text-[#3B9ACB] hover:text-[#00527b]"
            >
              <Heart className="h-4 w-4" /> <span>Wishlist</span>
            </Link>
            <Link
              href="/help"
              className="flex items-center gap-2 text-sm text-[#3B9ACB] hover:text-[#00527b]"
            >
              <HelpCircle className="h-4 w-4" /> <span>Help</span>
            </Link>
          </div>
        </div>
      </div>

      {/* SECOND FLOOR */}
      <nav className="bg-[#3B9ACB] text-white border-t border-[#2B7CA8]">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="flex items-center justify-between">
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center space-x-1">
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className="px-4 py-3 rounded text-sm font-medium text-white hover:bg-white hover:text-[#3B9ACB] transition-colors"
                      >
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about"
                        className="px-4 py-3 rounded text-sm font-medium text-white hover:bg-white hover:text-[#3B9ACB] transition-colors"
                      >
                        About Us
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Product Category - MEGA MENU */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-4 py-3 rounded text-sm font-medium text-[#2B7CA8]">
                      Product Category
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white p-4 shadow-lg rounded-md">
                      <div className="w-[760px] max-w-full text-[#111]">
                        <div className="grid grid-cols-3 gap-6">
                          {/* Left column: categories */}
                          <div>
                            <h4 className="text-sm font-semibold mb-3 text-[#3B9ACB]">
                              Categories
                            </h4>
                            <ul className="space-y-2 text-sm leading-6">
                              {productCategories.map((cat) => (
                                <li
                                  key={cat.slug}
                                  onMouseEnter={() => setActiveCategory(cat)}
                                >
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={`/products/${cat.slug}`}
                                      className="block rounded px-2 py-1 hover:bg-[#EAF6FC] hover:text-[#3B9ACB]"
                                    >
                                      {cat.title}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Middle: selected category quick links */}
                          <div>
                            <h4 className="text-sm font-semibold mb-3 text-[#3B9ACB]">
                              {activeCategory.title}
                            </h4>
                            {activeCategory.children.length > 0 ? (
                              <ul className="space-y-2 text-sm">
                                {activeCategory.children.map((product) => (
                                  <li key={product.slug}>
                                    <Link
                                      href={`/products/${activeCategory.slug}/${product.slug}`}
                                      className="block px-2 py-1 rounded hover:bg-[#EAF6FC] hover:text-[#3B9ACB]"
                                    >
                                      {product.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-sm text-gray-500">
                                No sub-categories.
                              </p>
                            )}
                          </div>

                          {/* Right: placeholder for image / promo */}
                          <div>
                            <h4 className="text-sm font-semibold mb-3 text-[#3B9ACB]">
                              Featured
                            </h4>
                            {activeCategory.image ? (
                              <Link href={`/products/${activeCategory.slug}`}>
                                <div className="relative h-28 w-full rounded overflow-hidden">
                                  <Image
                                    src={safeImageSrc(activeCategory.image)}
                                    alt={`Featured image for ${activeCategory.title}`}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 240px"
                                    className="object-cover"
                                  />
                                </div>
                              </Link>
                            ) : (
                              <div className="bg-gray-100 h-28 rounded flex items-center justify-center text-sm text-gray-500">
                                No image available
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/contact"
                        className="px-4 py-3 rounded text-sm font-medium text-white hover:bg-white hover:text-[#3B9ACB] transition-colors"
                      >
                        Contact
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-4 py-3 rounded text-sm font-medium text-[#3B9ACB] hover:bg-white hover:text-[#3B9ACB] transition-colors">
                      Application
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white p-4 shadow-lg rounded-md">
                      <div className="w-[420px] max-w-full text-[#111]">
                        <h4 className="text-sm font-semibold mb-3 text-[#3B9ACB]">
                          Applications
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                          {applications.slice(0, 10).map((app) => (
                            <li key={app.slug}>
                              <Link
                                href={`/application/${app.slug}`}
                                className="flex items-center gap-3 p-2 rounded hover:bg-[#EAF6FC]"
                              >
                                <div className="h-10 w-10 relative shrink-0">
                                  <Image
                                    src={safeImageSrc(app.image)}
                                    alt={app.name}
                                    width={40}
                                    height={40}
                                    style={{ width: "auto", height: "auto" }}
                                    className="object-cover rounded"
                                  />
                                </div>
                                <div className="text-sm">
                                  <div className="font-medium text-[#111]">{app.name}</div>
                                  <div className="text-xs text-gray-500 truncate">{app.short}</div>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="hidden md:flex items-center gap-3 py-1">
              <Link
                href="/request-quote"
                className="px-4 py-2 bg-white text-[#3B9ACB] rounded font-medium text-sm hover:bg-[#EAF6FC]"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
