import React from 'react';
import type { NewsItem } from '../types';

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'WaysAhead Unveils Next-Gen AI Data Platform',
    summary:
      'Harness the power of advanced data analytics and machine learning to drive your business forward.',
    date: '2025-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: '2',
    title: 'Global Summit: AI Experts Discuss Future Innovations',
    summary:
      'Leading voices in technology gather to explore the potential of artificial intelligence across industries.',
    date: '2025-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: '3',
    title: "Strategic Acquisition Boosts WaysAhead's Global Reach",
    summary:
      'A major acquisition positions WaysAhead as a leader in integrating AI with traditional business solutions.',
    date: '2025-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: '4',
    title: 'Next-Gen IoT Integration Revolutionizes Manufacturing',
    summary:
      'Discover how innovative IoT solutions are streamlining manufacturing processes and boosting efficiency.',
    date: '2025-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
];

const News = () => {
  return (
    <section className="relative bg-gray-900 overflow-hidden" id="news">
      {/* Optional tech-pattern background overlay */}
      <div className="absolute inset-0 -z-10 bg-[url('/images/tech-pattern.png')] bg-cover bg-center opacity-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Latest News</h2>
          <p className="mt-2 text-lg text-gray-300">
            Stay updated with the latest trends and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item) => (
            <a key={item.id} href="#" className="group block">
              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-blue-400">{item.date}</div>
                  <h3 className="mt-1 text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300 line-clamp-3">
                    {item.summary}
                  </p>
                  <button className="mt-4 text-sm text-blue-400 font-medium hover:underline">
                    Read More &rarr;
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;