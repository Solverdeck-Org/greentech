import React from 'react';

interface SolutionItem {
  title: string;
  category: string;
  description: string;
}

interface SolutionsProps {
  title: string;
  subtitle: string;
  solutions: SolutionItem[];
}

export default function Solutions({ title, subtitle, solutions }: SolutionsProps) {
  return (
    <section id="solutions" className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, idx) => (
            <div key={idx} className="flex flex-col p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <span className="text-sm font-semibold text-green-600 tracking-wider uppercase mb-2">
                {solution.category}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{solution.description}</p>
              <a href="#" className="text-green-600 font-medium hover:text-green-700 inline-flex items-center gap-1 transition-colors">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}