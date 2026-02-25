'use client';

import Link from 'next/link';
import React, { useState } from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  appName: string;
  links: NavLink[];
}

export default function Navbar({ appName, links }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white border-b border-gray-100">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          {/* Greentech Logo Placeholder */}
          <div className="w-8 h-8 bg-green-600 rounded-md"></div>
          <span className="text-xl font-bold text-gray-900">{appName}</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, idx) => (
            <Link key={idx} href={link.href} className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
            Log in
          </Link>
          <Link href="/signup" className="px-5 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 font-medium transition-colors shadow-sm">
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-green-600 focus:outline-none transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? (
            /* Close Icon (X) */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Menu Icon (Hamburger) */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg z-50">
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((link, idx) => (
              <Link 
                key={idx} 
                href={link.href} 
                className="block text-gray-600 hover:text-green-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)} // Closes menu when a link is clicked
              >
                {link.label}
              </Link>
            ))}
            
            <hr className="border-gray-100 my-2" />
            
            <div className="flex flex-col gap-3">
              <Link 
                href="/login" 
                className="w-full text-center text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Log in
              </Link>
              <Link 
                href="/signup" 
                className="w-full text-center px-5 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 font-medium transition-colors shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}