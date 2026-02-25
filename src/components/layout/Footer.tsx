import Link from 'next/link';
import React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  appName: string;
  links: FooterLink[];
}

export default function Footer({ appName, links }: FooterProps) {
  return (
    <footer className="px-6 py-10 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <div className="w-6 h-6 bg-green-600 rounded-md"></div>
          <span className="text-lg font-bold text-gray-900">{appName}</span>
        </div>
        <div className="flex gap-6 text-sm text-gray-500">
          {links.map((link, idx) => (
            <Link key={idx} href={link.href} className="hover:text-green-600 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} {appName} Inc. All rights reserved.
      </div>
    </footer>
  );
}