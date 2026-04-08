'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Terms() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600">
              Last updated: April 6, 2024
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">2. Use License</h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Project Cornelia AINA Foundation's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">3. Disclaimer</h2>
              <p className="text-gray-700 mb-6">
                The materials on Project Cornelia AINA Foundation's website are provided on an 'as is' basis. Project Cornelia AINA Foundation makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">4. Limitations</h2>
              <p className="text-gray-700 mb-6">
                In no event shall Project Cornelia AINA Foundation or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Project Cornelia AINA Foundation's website, even if Project Cornelia AINA Foundation or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">5. Accuracy of Materials</h2>
              <p className="text-gray-700 mb-6">
                The materials appearing on Project Cornelia AINA Foundation's website could include technical, typographical, or photographic errors. Project Cornelia AINA Foundation does not warrant that any of the materials on its website are accurate, complete, or current. Project Cornelia AINA Foundation may make changes to the materials contained on its website at any time without notice.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">6. Links</h2>
              <p className="text-gray-700 mb-6">
                Project Cornelia AINA Foundation has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Project Cornelia AINA Foundation of the site. Use of any such linked website is at the user's own risk.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">7. Modifications</h2>
              <p className="text-gray-700 mb-6">
                Project Cornelia AINA Foundation may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">8. Governing Law</h2>
              <p className="text-gray-700 mb-6">
                These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">9. Contact Information</h2>
              <p className="text-gray-700 mb-2">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Email:</strong> contact@corneliafoundation.org
                </li>
                <li>
                  <strong>Address:</strong> Delhi University, New Delhi, India
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
