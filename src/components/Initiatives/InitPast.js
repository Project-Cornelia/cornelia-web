'use client'

export default function InitPast({ pastInitiatives, setSelectedInitiative }) {
    return (
        <>
        {/* Past Initiatives */}
            {pastInitiatives.length > 0 && (
                <div>
                    <h2 className="text-2xl font-bold mb-8">Past Initiatives</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {pastInitiatives.map((initiative) => (
                            <div
                                key={initiative.id}
                                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow opacity-75"
                            >
                                <div className="p-6">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="text-4xl">{initiative.emoji || '📌'}</div>
                                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full">
                                            {initiative.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>

                                    {/* Status */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="inline-block w-2 h-2 bg-gray-400 rounded-full"></span>
                                        <span className="text-sm font-medium text-gray-600">{initiative.status}</span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {initiative.description}
                                    </p>

                                    {/* Impact */}
                                    <div className="bg-gray-50 p-4 rounded mb-4 border border-gray-200">
                                        <p className="text-sm text-gray-600 font-semibold">Impact:</p>
                                        <p className="text-lg font-bold text-gray-900">{initiative.impact}</p>
                                    </div>

                                    {/* Learn More Button */}
                                    <button
                                        onClick={() => setSelectedInitiative(initiative)}
                                        className="w-full px-4 py-2 text-sm font-semibold text-gray-900 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}