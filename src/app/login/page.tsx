import Link from 'next/link';
import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-green-600 rounded-xl mx-auto mb-5 shadow-sm"></div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
          <p className="text-gray-500 mt-2">Log in to your Greentech dashboard.</p>
        </div>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all" placeholder="you@company.com" required />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <a href="#" className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors">Forgot password?</a>
            </div>
            <input type="password" id="password" name="password" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all" placeholder="••••••••" required />
          </div>

          <button type="submit" className="w-full py-3 px-4 mt-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors shadow-sm">
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          Don't have an account?{' '}
          <Link href="/signup" className="text-green-600 font-semibold hover:text-green-700">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}