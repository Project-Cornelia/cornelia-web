'use client'

export default function InitDialog({ selectedInitiative, setSelectedInitiative }) {
  return (
    <>
      {selectedInitiative && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-5xl mb-4">{selectedInitiative.emoji || '📌'}</div>
                    <h2 className="text-3xl font-bold">{selectedInitiative.title}</h2>
                  </div>
                  <button
                    onClick={() => setSelectedInitiative(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-4">
                      {selectedInitiative.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-sm font-medium text-gray-600">{selectedInitiative.status}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">Overview</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedInitiative.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">Full Description</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedInitiative.fullDescription}</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded border border-gray-200">
                    <p className="text-sm text-gray-600 font-semibold mb-2">Impact</p>
                    <p className="text-xl font-bold text-gray-900">{selectedInitiative.impact}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedInitiative(null)}
                  className="w-full mt-8 px-6 py-3 bg-gray-100 text-gray-900 rounded hover:bg-gray-200 transition-colors font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
    </>
  )
}