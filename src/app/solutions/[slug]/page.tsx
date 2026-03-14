import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// 1. Mock Data: This acts as your database until the backend is ready
const solutionsDB: Record<string, any> = {
  'energy-management': {
    category: "Energy Management",
    headline: "Take full control of your facility's energy consumption.",
    description: "Integrate directly with smart meters and IoT devices to get real-time visibility into where your energy is going. Identify waste, optimize usage, and lower your operational costs immediately.",
    imageSrc: "/solution-1.jpg",
    benefits: [
      "Real-time IoT smart meter integration",
      "Automated anomaly detection and alerts",
      "Cost-tracking across multiple facilities",
      "Peak-load forecasting and optimization"
    ]
  },
  'carbon-accounting': {
    category: "Carbon Accounting",
    headline: "Automate your complete path to Net-Zero.",
    description: "Stop wrestling with manual spreadsheets. Greentech automatically calculates your Scope 1, 2, and 3 emissions using standardized global emission factors, turning complex supply chain data into actionable insights.",
    imageSrc: "/solution-2.jpg",
    benefits: [
      "Comprehensive Scope 1, 2 & 3 tracking",
      "GHG Protocol and ISO 14064 compliance",
      "Automated supplier data collection",
      "One-click audit-ready ESG reporting"
    ]
  }
};

// 2. We need the same layout data for the Navbar and Footer
const appName = "Greentech";
const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'About Us', href: '/#about' },
];
const footerLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Contact', href: '/contact' },
];

export default function SolutionDetail({ params }: { params: { slug: string } }) {
  // Fetch the specific solution based on the URL parameter
  const solution = solutionsDB[params.slug];

  // If the user types a random URL like /solutions/fake-page, show a 404
  if (!solution) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Navbar appName={appName} links={navLinks} />
      
      <main className="grow">
        {/* Solution Hero Section */}
        <section className="px-6 py-20 md:py-32 bg-gray-50 border-b border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full text-sm font-semibold text-green-700 bg-green-100 tracking-wide uppercase">
              {solution.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              {solution.headline}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
              {solution.description}
            </p>
            <Link href="/signup" className="inline-block px-8 py-3.5 text-white bg-green-600 rounded-lg hover:bg-green-700 font-medium text-lg transition-all shadow-lg shadow-green-600/20">
              Start tracking today
            </Link>
          </div>
        </section>

        {/* Deep Dive & Benefits Section */}
        <section className="px-6 py-24 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left: Feature Image */}
            <div className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 aspect-4/3 bg-gray-100">
                <Image 
                  src={solution.imageSrc} 
                  alt={solution.category} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Benefits List */}
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Core Capabilities</h2>
              <div className="space-y-6">
                {solution.benefits.map((benefit: string, idx: number) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{benefit}</h3>
                      <p className="text-gray-600 mt-1">
                        Seamlessly integrated into the Greentech ecosystem to keep your team focused on execution, not data entry.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer appName={appName} links={footerLinks} />
    </div>
  );
}