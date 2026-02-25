import Link from 'next/link';
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
    <section className="px-6 py-20 md:py-32 text-center max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
        {content.headline}
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        {content.subheadline}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href={content.primaryCta.href} className="w-full sm:w-auto px-8 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 font-medium text-lg transition-colors">
          {content.primaryCta.label}
        </Link>
        <Link href={content.secondaryCta.href} className="w-full sm:w-auto px-8 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-medium text-lg transition-colors">
          {content.secondaryCta.label}
        </Link>
      </div>
    </section>
  );
}