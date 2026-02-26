import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Solutions from '@/components/landing/Solutions';

export default function LandingPage() {
  // Data definitions
  const appName = "Greentech";

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'About Us', href: '#about' },
  ];

  const heroContent = {
    headline: "Sustainable tech for a better tomorrow.",
    subheadline: "Empowering businesses to reduce their carbon footprint and optimize energy consumption through smart, data-driven solutions.",
    primaryCta: { label: "Start your green journey", href: "/signup" },
    secondaryCta: { label: "Learn more", href: "/about" }
  };

  const featuresData = {
    title: "Why choose Greentech?",
    items: [
      { title: 'Energy Tracking', desc: 'Monitor your resource consumption in real-time across all your facilities.' },
      { title: 'Carbon Offsetting', desc: 'Automated calculations and actionable insights to achieve net-zero.' },
      { title: 'Compliance Ready', desc: 'Generate reports instantly to meet global environmental regulations.' },
    ]
  };

  const solutionsData = [
  { 
    category: "Energy Management", 
    title: "Track consumption across all facilities", 
    description: "Get granular visibility into your energy usage. Our platform integrates directly with your smart meters to provide real-time data and anomaly alerts.",
    imageSrc: "/solution-1.png",
    href: "/solutions/energy-management" // The actual route
  },
  { 
    category: "Carbon Accounting", 
    title: "Automate your scope 1, 2, and 3 emissions", 
    description: "Stop relying on manual spreadsheets. Greentech automatically calculates your carbon footprint based on standardized global emission factors.",
    imageSrc: "/solution-2.png",
    href: "/solutions/carbon-accounting" // The actual route
  }
];

  const footerLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar appName={appName} links={navLinks} />
      <main>
        <Hero content={heroContent} />
        <Features title={featuresData.title} features={featuresData.items} />
      </main>
      <Footer appName={appName} links={footerLinks} />
      <Solutions title="Tailored for your industry" subtitle="Everything you need to reach Net-Zero." solutions={solutionsData} />
    </div>
  );
}