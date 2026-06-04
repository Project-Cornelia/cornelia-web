'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-lg text-gray-600">
              Have questions or want to collaborate? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

                <div className="space-y-8">
                  {/* Email */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <a
                      href="mailto:contact@corneliafoundation.org"
                      className="text-lg text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      contact@corneliafoundation.org
                    </a>
                  </div>

                  {/* Location */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="text-gray-600">
                      Delhi University<br />
                      New Delhi, India
                    </p>
                  </div>

                  {/* Social Media */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-6">
                      <a
                        href="https://www.instagram.com/project.cornelia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.linkedin.com/company/project-cornelia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2 text-blue-900">Response Time</h3>
                    <p className="text-blue-800">
                      We typically respond to inquiries within 2-3 business days. Thank you for your patience!
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-semibold">
                      ✓ Thank you! Your message has been sent successfully.
                    </p>
                    <p className="text-green-700 text-sm mt-1">
                      We'll get back to you as soon as possible.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      placeholder="What is this about?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 disabled:bg-gray-400 transition-colors"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">How can I get involved?</h3>
                <p className="text-gray-600">
                  You can fill out our "Work with us" form on the Get Involved page to explore collaboration opportunities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">How can I contribute financially?</h3>
                <p className="text-gray-600">
                  You can donate through our Milaap fundraiser page which supports acid attack survivors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Can I write for your blog?</h3>
                <p className="text-gray-600">
                  Yes! Fill out our "Write for us" form and share your insights on women, law, and policy.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">How often do you respond?</h3>
                <p className="text-gray-600">
                  We aim to respond to all inquiries within 2-3 business days. Thank you for your patience!
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
