import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface HeroProps {
  content: {
    headline: string;
    subheadline: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  }
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden font-sans">
      {/* Soft Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-green-100/50 via-white to-white"></div>
      
      <div className="px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
          {content.headline}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          {content.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link href={content.primaryCta.href} className="w-full sm:w-auto px-8 py-3.5 text-white bg-green-600 rounded-lg hover:bg-green-700 font-medium text-lg transition-all shadow-lg shadow-green-600/20">
            {content.primaryCta.label}
          </Link>
          <Link href={content.secondaryCta.href} className="w-full sm:w-auto px-8 py-3.5 text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 font-medium text-lg transition-all shadow-sm">
            {content.secondaryCta.label}
          </Link>
        </div>

        {/* Product Dashboard Mockup - Refined Styling */}
        <div className="relative mx-auto max-w-5xl rounded-2xl p-2 bg-gray-900/5 shadow-2xl backdrop-blur-sm ring-1 ring-gray-900/10 hover:shadow-green-100 transition-shadow">
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white aspect-video relative">
            <Image 
              src="/greentech-dashboard.png" 
              alt="Greentech Analytics Dashboard Preview" 
              fill 
              className="object-cover" 
              priority 
            />
          </div>
        </div>
      </div>
    </section>
  );
}