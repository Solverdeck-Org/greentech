import React from 'react';

// Mock Data: Your backend dev will eventually replace this with a Supabase query
const facilitiesData = [
  { id: 1, name: 'Northside Manufacturing', location: 'Portland, OR', status: 'Active', energy: '45,200 kWh', carbon: '12.4 tCO2e' },
  { id: 2, name: 'Downtown HQ', location: 'Seattle, WA', status: 'Active', energy: '12,800 kWh', carbon: '3.1 tCO2e' },
  { id: 3, name: 'East Bay Logistics Center', location: 'Oakland, CA', status: 'Maintenance', energy: '38,100 kWh', carbon: '14.2 tCO2e' },
  { id: 4, name: 'Austin R&D Facility', location: 'Austin, TX', status: 'Active', energy: '28,400 kWh', carbon: '13.1 tCO2e' },
];

export default function FacilitiesPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Facilities Management</h2>
          <p className="text-gray-600 mt-1 text-sm">Monitor and manage all your connected locations.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm shadow-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Add Facility
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Facility Name
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Energy (MTD)
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Carbon (MTD)
                </th>
                <th scope="col" className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {facilitiesData.map((facility) => (
                <tr key={facility.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{facility.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-600">{facility.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      facility.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {facility.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {facility.energy}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {facility.carbon}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-green-600 hover:text-green-900 transition-colors">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Table Pagination Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <span className="text-sm text-gray-500">Showing 1 to 4 of 4 results</span>
          <div className="flex gap-2">
            <button disabled className="px-3 py-1 border border-gray-300 rounded text-sm font-medium text-gray-400 bg-gray-50 cursor-not-allowed">Previous</button>
            <button disabled className="px-3 py-1 border border-gray-300 rounded text-sm font-medium text-gray-400 bg-gray-50 cursor-not-allowed">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
}