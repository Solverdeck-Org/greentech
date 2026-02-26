import Image from 'next/image';
import Link from 'next/link';

interface SolutionItem {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

interface SolutionsProps {
  title: string;
  subtitle: string;
  solutions: SolutionItem[];
}

export default function Solutions({ title, subtitle, solutions }: SolutionsProps) {
  return (
    <section id="solutions" className="px-6 py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="flex flex-col gap-24">
          {solutions.map((solution, idx) => {
            // Alternates the layout direction based on even/odd index
            const isEven = idx % 2 === 0;
            
            return (
              <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                
                {/* Text Content */}
                <div className="flex-1 space-y-6 text-center lg:text-left">
                  <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-green-700 bg-green-100 tracking-wide">
                    {solution.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{solution.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{solution.description}</p>
                  
                  <Link href={solution.href} className="text-green-600 font-medium hover:text-green-700 inline-flex items-center gap-1 transition-colors mt-4">
                    Explore solution
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Image Content */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50 aspect-4/3">
                    <Image 
                      src={solution.imageSrc} 
                      alt={solution.title} 
                      fill
                      className="object-cover"
                    />
                    {/* Fallback placeholder if no image exists yet */}
                    {/* <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">Feature Graphic (800x600)</div> */}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}