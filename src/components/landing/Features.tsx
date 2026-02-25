interface FeatureItem {
  title: string;
  desc: string;
}

export default function Features() {
  const features: FeatureItem[] = [
    { title: 'Real-time Sync', desc: 'Your data updates instantly across all devices and team members.' },
    { title: 'Secure Infrastructure', desc: 'Enterprise-grade security with end-to-end encryption for your peace of mind.' },
    { title: 'Advanced Analytics', desc: 'Get deep insights into your performance with customizable dashboards.' },
  ];

  return (
    <section id="features" className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Everything you need to succeed</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                {/* Icon Placeholder */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}