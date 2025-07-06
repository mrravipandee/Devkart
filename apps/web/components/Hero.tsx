"use client";
import { MoveButton, DemoButton } from "@surfbit/ui";
import React from "react";
import { Code, Paintbrush, Smartphone, Server, Globe } from "lucide-react";

const Hero = () => {
  const categoryIcons = [
    { icon: <Code size={24} />, name: "Dev Tools" },
    { icon: <Paintbrush size={24} />, name: "Design" },
    { icon: <Smartphone size={24} />, name: "Mobile" },
    { icon: <Server size={24} />, name: "System" },
    { icon: <Globe size={24} />, name: "Web" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden py-20 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] bg-[size:100px_100px] bg-repeat bg-center"></div>

      {/* Blurred blobs */}
      <div className="hidden lg:block absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-blob1"></div>
      <div className="hidden lg:block absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-blob2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-gray-300 text-gray-800 text-sm font-medium rounded-full px-4 py-1.5 shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-105">
            🚀 New Collection Just Dropped!
            <span className="ml-1.5 text-blue-600 font-semibold hover:underline cursor-pointer">
              Shop Now →
            </span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
          Elevate Your <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Digital Experience
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10">
          Discover premium digital products curated for creators, innovators,
          and visionaries.
          <br className="hidden sm:block" />
          Instant delivery, lifetime updates, and exceptional support.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a
            href="#featured"
            className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-md hover:shadow-xl"
          >
            Shop Best Sellers
            <svg
              className="ml-2 w-5 h-5 hover:-translate-y-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300"
          >
            How It Works
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          {categoryIcons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-16 h-16 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:scale-105 transition-transform duration-300"
            >
              {item.icon}
              <span className="text-xs mt-1 text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-700">
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((item) => (
                <img
                  key={item}
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                  src={`https://randomuser.me/api/portraits/${
                    item % 2 === 0 ? "women" : "men"
                  }/${item + 20}.jpg`}
                  alt="Happy customer"
                  loading="lazy"
                />
              ))}
            </div>
            <span className="ml-3 text-sm font-medium">
              Trusted by <span className="font-bold">10,000+</span> developers
            </span>
          </div>

          <div className="hidden sm:block w-px h-6 bg-gray-300"></div>

          <div className="flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-1.5 text-sm font-medium">
              <span className="font-bold">4.9/5</span> (2,500+ reviews)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
