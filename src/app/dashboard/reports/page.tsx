import React from 'react';

// Mock Data: Recent reports history
const recentReports = [
  { id: 1, name: 'Q1 Carbon Emissions Summary', date: 'Mar 25, 2026', type: 'PDF', size: '2.4 MB' },
  { id: 2, name: 'Monthly Energy Usage - All Sites', date: 'Mar 01, 2026', type: 'CSV', size: '856 KB' },
  { id: 3, name: 'Compliance Audit Data (ISO 14064)', date: 'Feb 15, 2026', type: 'PDF', size: '4.1 MB' },
  { id: 4, name: 'Facility Benchmarking Report', date: 'Jan 30, 2026', type: 'PDF', size: '1.8 MB' },
];

export default function ReportsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Page Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Reports & Analytics</h2>
          <p className="text-gray-600 mt-1 text-sm">Generate, view, and export your sustainability data.</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>Last 30 Days</option>
            <option>This Quarter</option>
            <option>Year to Date</option>
            <option>Last 12 Months</option>
          </select>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            New Report
          </button>
        </div>
      </div>

      {/* Analytics Chart Placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Chart 1 */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Emissions Trend (tCO2e)</h3>
          <div className="flex-1 min-h-[250px] bg-gray-50 rounded-lg border border-dashed border-gray-300 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <svg className="w-10 h-10 mx-auto mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
              <p className="font-medium text-sm">Line Chart Visualization</p>
            </div>
          </div>
        </div>

        {/* Chart 2 */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Energy by Facility</h3>
          <div className="flex-1 min-h-[250px] bg-gray-50 rounded-lg border border-dashed border-gray-300 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <svg className="w-10 h-10 mx-auto mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
              <p className="font-medium text-sm">Donut Chart Visualization</p>
            </div>
          </div>
        </div>

      </div>

      {/* Recent Reports List */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Generated Reports</h3>
        </div>
        <ul className="divide-y divide-gray-200">
          {recentReports.map((report) => (
            <li key={report.id} className="px-6 py-4 hover:bg-gray-50 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${report.type === 'PDF' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                  {report.type === 'PDF' ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 7v4m0 0v4m0-4h4m-4 0H7" /></svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{report.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">Generated on {report.date} • {report.size}</p>
                </div>
              </div>
              <button className="text-sm font-medium text-green-600 hover:text-green-800 transition-colors">
                Download
              </button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}