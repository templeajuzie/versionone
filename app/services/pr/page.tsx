export default function PRCategoryPage() {
  return (
    <main className="min-h-screen pt-32">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h1 className="mb-8 text-4xl font-bold text-[#2D3E75] uppercase">PR</h1>
        <div className="min-h-[400px] rounded-lg border border-gray-100 bg-white p-8 shadow-xl">
          <p className="text-lg text-gray-600">Explore our comprehensive PR services and programs.</p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* We can add dynamic links here later */}
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-6 text-gray-400 italic">
              Detailed programs and pathways are listed in the menu above.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
