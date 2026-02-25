
export default function Hero() {
  return (
    <section className="px-6 py-20 md:py-32 text-center max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
        The platform that scales with your ambition.
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Streamline your workflow, manage your data seamlessly, and accelerate your growth with our all-in-one suite. 
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto px-8 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 font-medium text-lg transition-colors">
          Start for free
        </button>
        <button className="w-full sm:w-auto px-8 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-medium text-lg transition-colors">
          Book a Demo
        </button>
      </div>
    </section>
  );
}