'use client'

import Image from 'next/image'


export default function AboutContent() {
    return (
        <section className="py-section-padding-mobile md:py-section-padding-desktop max-w-7xl mx-auto px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
                {/* Left: Map/Visual */}
                <div className="relative group">
                    <div className="aspect-square bg-surface-container rounded-xl overflow-hidden border border-neutral-100">
                        <Image
                            src="https://res.cloudinary.com/vbi4em8b/image/upload/v1784192079/AT7_7795_ql3qo9.webp"
                            alt="Project Cornelia locations across India"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right: About Content */}
                <div className="space-y-6">
                    <div>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                            Our Mission
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                            Project Cornelia is dedicated to bringing women's voices to the forefront of democratic participation. We believe that women's leadership, research, and activism are fundamental to building just and equitable societies.
                        </p>
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            Through legal literacy, policy advocacy, and community organizing, we work to center women's experiences in conversations that shape our future.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                            Our Focus Areas
                        </h3>
                        <ul className="space-y-2">
                            {['Legal Empowerment', 'Policy Research', 'Community Building', 'Youth Leadership'].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="font-body-md text-on-surface">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}