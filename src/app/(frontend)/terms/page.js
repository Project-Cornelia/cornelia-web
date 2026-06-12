'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Terms() {
  return (
    <>
      <Header />
      <main className="bg-surface overflow-x-hidden">
        {/* Spacer for fixed header */}
        <div className="bg-surface-tint h-32 md:h-40"></div>

        {/* Page Header */}
        <section className="bg-surface-tint py-12 md:py-16 px-gutter">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-surface mb-4">Terms of Service</h1>
            <p className="font-body-md text-body-md text-surface-dim">
              Last updated: April 6, 2024
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">1. Agreement to Terms</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">2. Use License</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Project Cornelia AINA Foundation's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 text-on-surface-variant">
                  <li className="font-body-md text-body-md">Modifying or copying the materials</li>
                  <li className="font-body-md text-body-md">Using the materials for any commercial purpose or for any public display</li>
                  <li className="font-body-md text-body-md">Attempting to decompile or reverse engineer any software contained on the website</li>
                  <li className="font-body-md text-body-md">Removing any copyright or other proprietary notations from the materials</li>
                  <li className="font-body-md text-body-md">Transferring the materials to another person or "mirroring" the materials on any other server</li>
                </ul>
              </div>

              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">3. Disclaimer</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  The materials on Project Cornelia AINA Foundation's website are provided on an 'as is' basis. Project Cornelia AINA Foundation makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">4. Limitations</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  In no event shall Project Cornelia AINA Foundation or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Project Cornelia AINA Foundation's website, even if Project Cornelia AINA Foundation or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">5. Accuracy of Materials</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  The materials appearing on Project Cornelia AINA Foundation's website could include technical, typographical, or photographic errors. Project Cornelia AINA Foundation does not warrant that any of the materials on its website are accurate, complete, or current. Project Cornelia AINA Foundation may make changes to the materials contained on its website at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">6. Links</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Project Cornelia AINA Foundation has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Project Cornelia AINA Foundation of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">7. Modifications</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Project Cornelia AINA Foundation may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">8. Governing Law</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>

              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">9. Contact Information</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <ul className="space-y-2">
                  <li className="font-body-md text-body-md">
                    <span className="text-primary font-label-lg">Email:</span> <span className="text-on-surface-variant">contact@corneliafoundation.org</span>
                  </li>
                  <li className="font-body-md text-body-md">
                    <span className="text-primary font-label-lg">Address:</span> <span className="text-on-surface-variant">Delhi University, New Delhi, India</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
