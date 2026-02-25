import Link from 'next/link';
import React from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  appName: string;
  links: NavLink[];
}

export default function Navbar({ appName, links }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
      <div className="flex items-center gap-2">
        {/* Logo Placeholder - You can make this green for Greentech! */}
        <div className="w-8 h-8 bg-green-600 rounded-md"></div>
        <span className="text-xl font-bold text-gray-900">{appName}</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        {links.map((link, idx) => (
          <Link key={idx} href={link.href} className="text-gray-600 hover:text-green-600 transition-colors">
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link href="/login" className="hidden md:block text-gray-600 hover:text-gray-900 font-medium">Log in</Link>
        <Link href="/signup" className="px-5 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 font-medium transition-colors">
          Get Started
        </Link>
      </div>
    </nav>
  );
}