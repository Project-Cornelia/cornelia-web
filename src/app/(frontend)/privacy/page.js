'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">
              Last updated: April 6, 2024
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-700 mb-6">
                Project Cornelia AINA Foundation ("we," "us," or "our") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Information Collection and Use</h2>
              <p className="text-gray-700 mb-6">
                We collect several different types of information for various purposes to provide and improve our service to you.
              </p>

              <h3 className="text-xl font-semibold mb-3">Types of Data Collected:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Personal Data: Name, email address, phone number, postal address</li>
                <li>Usage Data: Browser type, IP address, pages visited, time spent on pages</li>
                <li>Cookies and Tracking Data: We use cookies to track user activity and preferences</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">Use of Data</h2>
              <p className="text-gray-700 mb-4">
                Project Cornelia AINA Foundation uses the collected data for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so we can improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">Security of Data</h2>
              <p className="text-gray-700 mb-6">
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Contact Us</h2>
              <p className="text-gray-700 mb-2">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Email:</strong> contact@corneliafoundation.org
                </li>
                <li>
                  <strong>Address:</strong> Delhi University, New Delhi, India
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>

              <p className="text-gray-600 text-sm mt-8 pt-8 border-t border-gray-200">
                If you have any questions about your rights or our privacy practices, please contact us at contact@corneliafoundation.org
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
