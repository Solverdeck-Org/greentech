import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
      <div className="flex items-center gap-2">
        {/* Logo Placeholder */}
        <div className="w-8 h-8 bg-blue-600 rounded-md"></div>
        <span className="text-xl font-bold text-gray-900">YourSaaS</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
        <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
        <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/login" className="hidden md:block text-gray-600 hover:text-gray-900 font-medium">Log in</Link>
        <button className="px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 font-medium transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
}