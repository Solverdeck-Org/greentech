import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';

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
    </div>
  );
}