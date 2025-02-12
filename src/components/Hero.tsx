import React from 'react';
import { ArrowRight, Brain, Database, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gray-900 min-h-screen flex items-center overflow-hidden">
      {/* Wavy background design at the bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="block w-full">
          <path
            fill="#1F2937"
            fillOpacity="1"
            d="M0,192L60,176C120,160,240,128,360,128C480,128,600,160,720,176C840,192,960,192,1080,186.7C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Decorative floating icons in the background */}
      <div className="absolute top-10 left-10 opacity-20">
        <Brain className="h-16 w-16 text-blue-600" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <Database className="h-16 w-16 text-green-600" />
      </div>
      <div className="absolute top-20 right-20 opacity-20">
        <Globe className="h-16 w-16 text-yellow-600" />
      </div>

      {/* Main content area */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          Innovating the Future with Smart Technology
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          We deliver intelligent, data-driven solutions that empower businesses to thrive in a digital world.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#services" className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            Discover Our Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a href="#contact" className="bg-transparent border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            Get in Touch
          </a>
        </div>
        {/* Additional icons row for enhanced visual appeal */}
        <div className="mt-12 flex justify-center space-x-8">
          <Brain className="h-12 w-12 text-blue-600" />
          <Database className="h-12 w-12 text-green-600" />
          <Globe className="h-12 w-12 text-yellow-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;