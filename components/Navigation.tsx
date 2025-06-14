"use client"

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  LayoutDashboard,
  Code,
  Paintbrush,
  Smartphone,
  Server,
  Gamepad2,
  Database,
  Lock,
  Globe,
  Menu,
  X,
} from "lucide-react";

const SELLER_ITEMS = [
  { name: "My Products", icon: <LayoutDashboard size={16} />, href: "/seller/products" },
  { name: "Sales", icon: <ShoppingCart size={16} />, href: "/seller/sales" },
  { name: "Analytics", icon: <Database size={16} />, href: "/seller/analytics" },
  { name: "Account", icon: <User size={16} />, href: "/seller/account" }
];

const CATEGORIES = [
  {
    name: "Development Tools",
    icon: <Code size={18} />,
    subcategories: [
      { name: "Code Editors", slug: "code-editors" },
      { name: "IDEs", slug: "ides" },
      { name: "Version Control", slug: "version-control" },
      { name: "Debugging Tools", slug: "debugging-tools" },
      { name: "APIs & SDKs", slug: "apis-sdks" }
    ]
  },
  {
    name: "Design Software",
    icon: <Paintbrush size={18} />,
    subcategories: [
      { name: "UI/UX Tools", slug: "ui-ux-tools" },
      { name: "Photo Editing", slug: "photo-editing" },
      { name: "Vector Graphics", slug: "vector-graphics" },
      { name: "3D Modeling", slug: "3d-modeling" }
    ]
  },
  {
    name: "Mobile Apps",
    icon: <Smartphone size={18} />,
    subcategories: [
      { name: "iOS Apps", slug: "ios-apps" },
      { name: "Android Apps", slug: "android-apps" },
      { name: "Cross-Platform", slug: "cross-platform" },
      { name: "Mobile Games", slug: "mobile-games" }
    ]
  },
  {
    name: "Web Applications",
    icon: <Globe size={18} />,
    subcategories: [
      { name: "CMS", slug: "cms" },
      { name: "E-commerce", slug: "ecommerce" },
      { name: "SaaS Products", slug: "saas" },
      { name: "Web Frameworks", slug: "web-frameworks" }
    ]
  },
  {
    name: "System Software",
    icon: <Server size={18} />,
    subcategories: [
      { name: "Operating Systems", slug: "os" },
      { name: "Drivers", slug: "drivers" },
      { name: "Utilities", slug: "utilities" },
      { name: "Security", slug: "security" }
    ]
  },
  {
    name: "Games",
    icon: <Gamepad2 size={18} />,
    subcategories: [
      { name: "PC Games", slug: "pc-games" },
      { name: "Console Games", slug: "console-games" },
      { name: "Game Engines", slug: "game-engines" },
      { name: "Assets & Mods", slug: "assets-mods" }
    ]
  },
  {
    name: "Database Tools",
    icon: <Database size={18} />,
    subcategories: [
      { name: "Database Managers", slug: "db-managers" },
      { name: "ORMs", slug: "orms" },
      { name: "Migration Tools", slug: "migration-tools" },
      { name: "Visualization", slug: "visualization" }
    ]
  },
  {
    name: "Security Software",
    icon: <Lock size={18} />,
    subcategories: [
      { name: "Antivirus", slug: "antivirus" },
      { name: "VPN", slug: "vpn" },
      { name: "Encryption", slug: "encryption" },
      { name: "Pen Testing", slug: "pen-testing" }
    ]
  }
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);

  // Create refs for all categories upfront
  const categoryRefs = useRef<Record<string, React.RefObject<HTMLDivElement>>>({});
  CATEGORIES.forEach(category => {
    categoryRefs.current[category.name] = useRef<HTMLDivElement>(null);
  });

  const [categoryPosition, setCategoryPosition] = useState({
    left: 0,
    width: 0
  });

  useEffect(() => {
    setViewportWidth(window.innerWidth);
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getDropdownPosition = (categoryRef: React.RefObject<HTMLDivElement>) => {
    if (!categoryRef.current || viewportWidth === 0) return { left: '100%', right: 'auto' };
    
    const rect = categoryRef.current.getBoundingClientRect();
    const dropdownWidth = 224;
    
    if (rect.right + dropdownWidth > viewportWidth) {
      return { left: 'auto', right: '100%' };
    }
    
    return { left: '100%', right: 'auto' };
  };

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="mx-auto px-4">
        <div className="bg-white shadow-sm">
          {/* Top navigation bar */}
          <div className="mx-auto py-4 flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo.svg"
                width={32}
                height={32}
                alt="DigitalShop Logo"
                className="mr-2"
              />
              <span className="text-xl font-bold text-primary">Dev-mia</span>
            </Link>

            {/* Navigation items */}
            <div className="flex items-center space-x-4">
              {/* Desktop search */}
              <div className="hidden md:flex relative w-64">
                <input
                  type="text"
                  placeholder="Search software..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>

              {/* Mobile search toggle */}
              <button
                className="md:hidden p-2 text-gray-500 hover:text-primary"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search size={20} />
              </button>

              {/* Shopping cart */}
              <Link href="/cart" className="p-2 text-gray-500 hover:text-primary relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Link>

              {/* Seller dropdown */}
              <div className="hidden md:block relative group">
                <button className="flex items-center px-3 py-2 text-gray-700 hover:text-primary">
                  Sell <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute right-0 mt-0 w-48 bg-white rounded-b-md shadow-lg py-1 z-50 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                  <Link
                    href="/sell"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                  >
                    List New Product
                  </Link>
                  {SELLER_ITEMS.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Account */}
              <Link href="/account" className="hidden md:flex items-center p-2 text-gray-500 hover:text-primary">
                <User size={20} />
              </Link>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden p-2 text-gray-500 hover:text-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Categories bar */}
          <div className=" mx-auto px-4">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-4">
                {/* Categories */}
                {CATEGORIES.map((category) => (
                  <div
                    key={category.name}
                    ref={categoryRefs.current[category.name]}
                    className="relative"
                    onMouseEnter={() => {
                      setActiveCategory(category.name);
                      if (categoryRefs.current[category.name].current) {
                        const rect = categoryRefs.current[category.name].current?.getBoundingClientRect();
                        setCategoryPosition({
                          left: rect?.left || 0,
                          width: rect?.width || 0
                        });
                      }
                    }}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <button className="flex items-center px-1 text-[14px] py-2 text-gray-700 hover:text-primary transition-colors whitespace-nowrap">
                      <span className="mr-1">{category.icon}</span>
                      {category.name}
                      <ChevronDown size={16} className="ml-1" />
                    </button>

                    {activeCategory === category.name && (
                      <div
                        className="absolute left-0 mt-0 w-56 bg-white rounded-b-md shadow-lg py-2 z-50 border border-gray-100"
                        style={{
                          left: `${categoryPosition.left - (categoryRefs.current[category.name].current?.getBoundingClientRect().left ?? 0)}px`
                        }}
                      >
                        {category.subcategories.map((subcat) => (
                          <Link
                            key={subcat.slug}
                            href={`/category/${category.name.toLowerCase()}/${subcat.slug}`}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                          >
                            {subcat.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile search */}
        {isSearchOpen && (
          <div className="md:hidden px-2 pb-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search software..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 py-2">
              <div className="py-2">
                {CATEGORIES.map((category) => (
                  <div key={category.name} className="mb-1">
                    <button
                      onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
                      className="flex items-center justify-between w-full px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                      </div>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${activeCategory === category.name ? 'transform rotate-180' : ''}`}
                      />
                    </button>

                    {activeCategory === category.name && (
                      <div className="pl-10 pr-2 py-1">
                        {category.subcategories.map((subcat) => (
                          <Link
                            key={subcat.slug}
                            href={`/category/${category.name.toLowerCase()}/${subcat.slug}`}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subcat.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Seller dashboard links */}
              <div className="border-t border-gray-100 py-2">
                <h3 className="px-3 py-2 text-sm font-medium text-gray-500">Seller Dashboard</h3>
                <Link
                  href="/sell"
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  List New Product
                </Link>
                {SELLER_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Account link */}
              <div className="border-t border-gray-100 py-2">
                <Link
                  href="/account"
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User size={16} className="mr-2" />
                  My Account
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;