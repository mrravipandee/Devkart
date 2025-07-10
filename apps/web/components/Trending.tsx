"use client";

import React from 'react';
import { ChevronLeft, ChevronRight, Flame, ShoppingCart, Check } from 'lucide-react';
import { MoveButton } from 'ui';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
    id: number;
    title: string;
    price: number;
    downloads: number;
    imageUrl: string;
    category: string;
    rating?: number;
}

interface TrendingSectionProps {
    products: Product[];
    title?: string;
    description?: string;
    showViewAll?: boolean;
}

const TrendingSection: React.FC<TrendingSectionProps> = ({
    products,
    title = "Trending",
    description = "Trending Projects",
    showViewAll = true,
}) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [direction, setDirection] = React.useState<'left' | 'right'>('right');
    const [isHovering, setIsHovering] = React.useState(false);

    const nextSlide = () => {
        setDirection('right');
        setCurrentIndex((prevIndex) =>
            prevIndex >= products.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setDirection('left');
        setCurrentIndex((prevIndex) =>
            prevIndex <= 0 ? products.length - 1 : prevIndex - 1
        );
    };

    // Auto-rotate slides every 5 seconds when not hovering
    React.useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovering) {
                nextSlide();
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [isHovering, currentIndex]);

    // Determine which products to display (handles wrap-around)
    const getVisibleProducts = () => {
        const visible = [];
        for (let i = 0; i < 4; i++) {
            const index = (currentIndex + i) % products.length;
            visible.push(products[index]);
        }
        return visible;
    };

    const visibleProducts = getVisibleProducts();

    return (
        <div
            className="bg-gradient-to-b from-gray-50 to-white"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <section className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
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

                    <div className="flex space-x-2">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm hover:shadow-md"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="text-gray-600" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm hover:shadow-md"
                            aria-label="Next"
                        >
                            <ChevronRight className="text-gray-600" />
                        </button>
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    <AnimatePresence custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            initial={{ opacity: 0, x: direction === 'right' ? 100 : -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction === 'right' ? -100 : 100 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                        >
                            {visibleProducts.map((product) => (
                                <ProductCard key={`${currentIndex}-${product.id}`} product={product} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {showViewAll && (
                <div className="mt-10 mb-10 flex justify-center">
                    <MoveButton
                        text="See All Projects"
                        href="/best-sellers"
                        className="mt-0 px-8 py-3 text-lg font-normal"
                    />
                </div>
            )}

            <section className="container mx-auto">
                <hr className="border-t border-gray-200 w-full" />
            </section>
        </div>
    );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isAdded, setIsAdded] = React.useState(false);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="article"
            aria-label={`Product: ${product.title}`}
            whileHover={{ y: -5 }}
        >
            <div className="relative overflow-hidden h-48">
                <motion.img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    initial={{ scale: 1 }}
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.5 }}
                />

                {isHovered && (
                    <motion.div
                        className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.button
                            onClick={handleAddToCart}
                            className={`px-4 py-2 rounded-full font-medium flex items-center space-x-2 ${isAdded ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'
                                } text-white transition-all duration-300`}
                            aria-label={isAdded ? 'Added to cart' : 'Add to cart'}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isAdded ? (
                                <Check className="w-5 h-5" />
                            ) : (
                                <ShoppingCart className="w-5 h-5" />
                            )}
                            <span>{isAdded ? 'Added!' : 'Add to Cart'}</span>
                        </motion.button>
                    </motion.div>
                )}
            </div>

            <div className="p-5">
                <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full mb-2">
                    {product.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 line-clamp-2 mb-2">
                    {product.title.slice(0, 20)}...
                </h3>

                {product.rating && (
                    <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(product.rating!)
                                    ? 'text-yellow-400'
                                    : 'text-gray-300'
                                    }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                        <span className="text-xs text-gray-500 ml-1">
                            ({product.rating.toFixed(1)})
                        </span>
                    </div>
                )}

                <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-900 font-bold text-lg">${product.price.toFixed(2)}</span>
                    <span className="text-gray-500 text-sm">
                        {product.downloads.toLocaleString()} downloads
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default TrendingSection;