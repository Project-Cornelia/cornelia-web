'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="bg-surface overflow-x-hidden">
        {/* Spacer for fixed header */}
        <div className="bg-surface-tint h-32 md:h-40"></div>

        {/* Page Header */}
        <section className="bg-surface-tint bg-surface-container-low py-12 md:py-16 px-gutter">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-surface mb-4">Privacy Policy</h1>
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
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Introduction</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Project Cornelia AINA Foundation ("we," "us," or "our") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
                </p>
              </div>

              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Information Collection and Use</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                  We collect several different types of information for various purposes to provide and improve our service to you.
                </p>

                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Types of Data Collected:</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-on-surface-variant">
                  <li className="font-body-md text-body-md">Personal Data: Name, email address, phone number, postal address</li>
                  <li className="font-body-md text-body-md">Usage Data: Browser type, IP address, pages visited, time spent on pages</li>
                  <li className="font-body-md text-body-md">Cookies and Tracking Data: We use cookies to track user activity and preferences</li>
                </ul>
              </div>

              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Use of Data</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                  Project Cornelia AINA Foundation uses the collected data for various purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 text-on-surface-variant">
                  <li className="font-body-md text-body-md">To provide and maintain our service</li>
                  <li className="font-body-md text-body-md">To notify you about changes to our service</li>
                  <li className="font-body-md text-body-md">To provide customer support</li>
                  <li className="font-body-md text-body-md">To gather analysis or valuable information so we can improve our service</li>
                  <li className="font-body-md text-body-md">To monitor the usage of our service</li>
                  <li className="font-body-md text-body-md">To detect, prevent and address technical issues</li>
                </ul>
              </div>

              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Security of Data</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
                </p>
              </div>

              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Contact Us</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
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

              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Changes to This Privacy Policy</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Your Rights</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 text-on-surface-variant">
                  <li className="font-body-md text-body-md">Access the personal data we hold about you</li>
                  <li className="font-body-md text-body-md">Request correction of inaccurate data</li>
                  <li className="font-body-md text-body-md">Request deletion of your data</li>
                  <li className="font-body-md text-body-md">Opt-out of marketing communications</li>
                  <li className="font-body-md text-body-md">Data portability</li>
                </ul>

                <p className="font-body-sm text-body-sm text-on-surface-variant border-t border-neutral-100 pt-6">
                  If you have any questions about your rights or our privacy practices, please contact us at contact@corneliafoundation.org
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
