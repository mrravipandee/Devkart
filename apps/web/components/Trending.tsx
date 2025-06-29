"use client";

import React from 'react';
import { ChevronLeft, ChevronRight, Flame, ShoppingCart, Check } from 'lucide-react';
import { MoveButton } from 'ui'; 

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
    description = "All trending projects",
    showViewAll = true,
}) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    // Auto-rotate slides every 5 seconds
    React.useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (

        <div className=''>
            <section className="container mx-auto px-4 py-12">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <div className="flex items-center">
                            <Flame className="text-orange-500 text-2xl mr-2" />
                            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                        </div>
                        <p className="text-gray-600 mt-1">{description}</p>
                    </div>

                    <div className="flex space-x-2">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="text-gray-600" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Next"
                        >
                            <ChevronRight className="text-gray-600" />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.slice(currentIndex, currentIndex + 4).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

            </section>

            {showViewAll && (
                <div className="mt-10 mb-10 flex justify-center">
                    <MoveButton
                        text="See All Projects"
                        href="/best-sellers"
                        className="mt-0"
                    />
                </div>
            )}

            <section className="container mx-auto">
                <hr className="border-t border-gray-300 w-full" />
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
        <div
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="article"
            aria-label={`Product: ${product.title}`}
        >
            <div className="relative overflow-hidden h-48">
                <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />

                {isHovered && (
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300">
                        <button
                            onClick={handleAddToCart}
                            className={`px-4 py-2 rounded-full font-medium flex items-center space-x-2 ${isAdded ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'
                                } text-white transition-all duration-300 transform hover:scale-105`}
                            aria-label={isAdded ? 'Added to cart' : 'Add to cart'}
                        >
                            {isAdded ? (
                                <Check className="w-5 h-5" />
                            ) : (
                                <ShoppingCart className="w-5 h-5" />
                            )}
                            <span>{isAdded ? 'Added!' : 'Add to Cart'}</span>
                        </button>
                    </div>
                )}
            </div>

            <div className="p-4">
                <span className="inline-block text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded mb-2">
                    {product.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                    {product.title}
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

                <div className="flex justify-between items-center mt-3">
                    <span className="text-gray-900 font-bold">${product.price.toFixed(2)}</span>
                    <span className="text-gray-500 text-sm">
                        {product.downloads.toLocaleString()} downloads
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TrendingSection;