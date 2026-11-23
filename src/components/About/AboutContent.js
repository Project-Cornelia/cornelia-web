'use client'

import Image from 'next/image'


export default function AboutContent() {
    return (
        <section className="py-section-padding-mobile md:py-section-padding-desktop max-w-7xl mx-auto px-gutter">
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center"> */}
                {/* Left: Map/Visual */}
                {/* <div className="relative group">
                    <div className="aspect-square bg-surface-container rounded-xl overflow-hidden border border-neutral-100">
                        <Image
                            src="https://res.cloudinary.com/vbi4em8b/image/upload/v1784192079/AT7_7795_ql3qo9.webp"
                            alt="Project Cornelia locations across India"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </div> */}

                {/* Right: About Content */}
                {/* <div className="space-y-6"> */}
                    <div>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                            Our Mission
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                            Balanced political participation and power-sharing between women and men in decision-making is the internationally agreed target set in the Beijing Declaration and Platform for Action. Cornelia Foundation aims to un-hush the female voices in political discussions at all levels through awareness and intervention. Only through greater involvement of females in democratic discussions, will we be able to challenge the tyranny of male gaze in policy, politics and law. According to the United Nations, “at the current rate, gender equality in the highest positions of power will not be reached for another 130 years”, and we believe that a bottom-top approach to gender equality will help us enhance the rate of progress.

                        </p>
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            For us, political awareness is not only about increasing the number of women representatives in the Parliament, Legislative Assemblies and Local Governance bodies but also about making women conscious of their rights, decision-making and freedom at the level of family, community, and society. 
                        </p>
                    </div>
                    <br />
                    <div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                            The Four mission pillars
                        </h3>
                        <ul className="space-y-2">
                            {['Political Literacy', 'Political Self-Awareness', 'Political Participation', 'Knowledge Creation & Dissemination'].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="font-body-md text-on-surface">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                {/* </div> */}
            {/* </div> */}
        </section>
    )
}