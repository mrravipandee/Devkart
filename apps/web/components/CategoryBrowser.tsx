"use client";

import React from 'react';
import {
  Code,
  Paintbrush,
  Smartphone,
  Globe,
  Monitor,
  Gamepad,
  Database,
  Shield,
  ChevronLeft,
  ChevronRight,
  Flame
} from 'lucide-react';
import { motion } from 'framer-motion';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface CategoryBrowserProps {
  categories?: Category[];
  title?: string;
  description?: string;
  showNavigation?: boolean;
  onCategoryClick?: (categoryId: string) => void;
}

const defaultCategories: Category[] = [
  {
    id: "development",
    name: "Dev Tools",
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: "design",
    name: "Design",
    icon: <Paintbrush className="w-6 h-6" />,
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    id: "web",
    name: "Web Apps",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    id: "system",
    name: "System",
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    id: "games",
    name: "Games",
    icon: <Gamepad className="w-6 h-6" />,
  },
  {
    id: "database",
    name: "Database",
    icon: <Database className="w-6 h-6" />,
  },
  {
    id: "security",
    name: "Security",
    icon: <Shield className="w-6 h-6" />,
  },
];

const CategoryBrowser: React.FC<CategoryBrowserProps> = ({
  categories = defaultCategories,
  title = "Categories",
  description = "Browse by category",
  showNavigation = true,
  onCategoryClick,
}) => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    onCategoryClick?.(categoryId);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <div className="flex items-center">
            <div
              className="relative h-6 mr-2"
            >
              <svg
                width="24"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-500 absolute top-1/2 -translate-y-1/2"
              >
                <rect
                  x="4"
                  y="4"
                  width="14"
                  height="20"
                  rx="2"
                  fill="currentColor"
                />
              </svg>
              <h2 className="text-xl font-medium text-blue-600 relative z-10 pl-7">
                {title}
              </h2>
            </div>
          </div>
          <p className="text-gray-900 text-2xl font-bold mt-2 max-w-lg">{description}</p>
        </div>

        {showNavigation && (
          <div className="flex space-x-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous categories"
            >
              <ChevronLeft className="text-gray-600" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next categories"
            >
              <ChevronRight className="text-gray-600" />
            </button>
          </div>
        )}
      </div>

      <div className="relative">
        <div
          ref={containerRef}
          className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`flex flex-col items-center justify-center p-6 w-40 h-40 rounded-lg transition-all duration-200 ${selectedCategory === category.id
                  ? "bg-blue-50 border-2 border-blue-300"
                  : "bg-white border border-gray-200 hover:bg-gray-50"
                }`}
              aria-label={`Browse ${category.name}`}
            >
              <motion.div
                className={`p-3 rounded-full mb-3 ${selectedCategory === category.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600"
                  }`}
                whileHover={{ rotate: 10 }}
              >
                {category.icon}
              </motion.div>
              <span
                className={`text-sm font-medium text-center px-1 ${selectedCategory === category.id
                    ? "text-blue-600"
                    : "text-gray-700"
                  }`}
              >
                {category.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBrowser;