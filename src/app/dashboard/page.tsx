import React from 'react';

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Welcome Banner */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Welcome back, Team!</h2>
          <p className="text-gray-600 mt-1">Here is what is happening with your energy consumption today.</p>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm shadow-sm">
          Generate Report
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium text-gray-500">Total Energy (This Month)</p>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
              +2.4%
            </span>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-2">124,500 <span className="text-lg text-gray-500 font-medium">kWh</span></p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium text-gray-500">Carbon Footprint (Scope 1 & 2)</p>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
              -12.5%
            </span>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-2">42.8 <span className="text-lg text-gray-500 font-medium">tCO2e</span></p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium text-gray-500">Active Facilities</p>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-2">4 <span className="text-lg text-gray-500 font-medium">Locations</span></p>
        </div>

      </div>

      {/* Placeholder for Data Chart */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm min-h-[400px] flex items-center justify-center">
        <div className="text-center text-gray-400">
          <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          <p className="font-medium">Energy Consumption Chart</p>
          <p className="text-sm mt-1">Ready for Supabase data integration</p>
        </div>
      </div>

    </div>
  );
}