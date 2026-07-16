'use client'

export default function InitCTA() {
    return (
        <section className="bg-black text-white section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Work</h2>
                <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
                    Your support helps us amplify women's voices and create systemic change through law and policy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="https://milaap.org/fundraisers/plc-ahaana-againstacid"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition-colors font-semibold"
                    >
                        Donate Now
                    </a>
                    <a
                        href="https://forms.gle/auEAXJ96GoRzLPmr9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border-2 border-white text-white rounded hover:bg-white hover:text-black transition-colors font-semibold"
                    >
                        Join Us
                    </a>
                </div>
            </div>
        </section>
    )
}