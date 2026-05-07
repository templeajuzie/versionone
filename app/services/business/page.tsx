export default function BUSINESSCategoryPage() {
  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-[#2D3E75] mb-8 uppercase">BUSINESS</h1>
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 min-h-[400px]">
          <p className="text-gray-600 text-lg">Explore our comprehensive BUSINESS services and programs.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* We can add dynamic links here later */}
            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 text-gray-400 italic">
              Detailed programs and pathways are listed in the menu above.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
