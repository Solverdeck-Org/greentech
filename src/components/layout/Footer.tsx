
export default function Footer() {
  return (
    <footer className="px-6 py-10 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <div className="w-6 h-6 bg-blue-600 rounded-md"></div>
          <span className="text-lg font-bold text-gray-900">YourSaaS</span>
        </div>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} YourSaaS Inc. All rights reserved.
      </div>
    </footer>
  );
}