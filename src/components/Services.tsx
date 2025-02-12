import React from 'react';
import { ShoppingCart, Globe, BarChart, Package, Camera, Cpu } from 'lucide-react';
import type { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Global Insights',
    description: 'Comprehensive global data analytics for informed decision-making.',
    icon: 'Globe'
  },
  {
    id: '2',
    title: 'Retail Intelligence',
    description: 'Enhance retail operations with real-time data and insights.',
    icon: 'ShoppingCart'
  },
  {
    id: '3',
    title: 'Supply Chain Mastery',
    description: 'Optimize supply chain processes with predictive analytics.',
    icon: 'Package'
  },
  {
    id: '4',
    title: 'Visual Data Processing',
    description: 'Advanced video analytics for actionable business insights.',
    icon: 'Camera'
  },
  {
    id: '5',
    title: 'AI Automation',
    description: 'Leverage AI for seamless automation across industries.',
    icon: 'Cpu'
  },
  {
    id: '6',
    title: 'Spatial Data Analysis',
    description: 'Unlock the power of location-based data for strategic growth.',
    icon: 'BarChart'
  }
];

const iconMap = {
  ShoppingCart,
  Globe,
  BarChart,
  Package,
  Camera,
  Cpu
};

const Services = () => {
  return (
    <section className="py-20 bg-gray-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-300">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.id}
                className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform hover:scale-105 relative group"
              >
                <div className="flex justify-center">
                  <div className="bg-blue-600 p-4 rounded-full shadow-lg -mt-12">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mt-2">
                    {service.description}
                  </p>
                  <div className="mt-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;