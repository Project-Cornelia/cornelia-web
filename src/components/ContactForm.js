'use client'

import { useState } from 'react'

export default function ContactForm({ variant = 'full', onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Prepare payload based on form variant
      const payload = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }

      // Include subject only if it's provided (full form variant)
      if (variant === 'full' && formData.subject) {
        payload.subject = formData.subject
      }

      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Failed to submit message')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      if (onSuccess) {
        onSuccess()
      }

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      console.error('Error submitting form:', err)
      setError('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Shared input/textarea styles
  const inputClass =
    'w-full px-4 py-3 bg-surface border border-outline-variant rounded-lg font-body-sm text-body-sm text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'

  const footerInputClass =
    'w-full bg-transparent border-none focus:ring-0 py-2 text-sm text-neutral-100 placeholder-neutral-100/30'

  const footerLabelClass = 'block font-label-md text-label-md text-neutral-100/50 mb-0.5'

  if (variant === 'footer') {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className={footerLabelClass}>Name</label>
          <div className="border-b border-neutral-100/30">
            <input
              type="text"
              placeholder="John Doe"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={footerInputClass}
            />
          </div>
        </div>
        <div>
          <label className={footerLabelClass}>Email</label>
          <div className="border-b border-neutral-100/30">
            <input
              type="email"
              placeholder="example@example.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={footerInputClass}
            />
          </div>
        </div>
        <div>
          <label className={footerLabelClass}>Message</label>
          <div className="border-b border-neutral-100/30">
            <textarea
              placeholder="Your Message Here"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="1"
              className={`${footerInputClass} resize-none`}
            />
          </div>
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="bg-neutral-100 text-neutral-900 px-6 py-2 rounded-full font-label-lg text-label-lg hover:bg-primary-fixed transition-colors disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>
    )
  }

  // Full variant (contact page)
  return (
    <div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface mb-8">Send us a Message</h2>

      {submitted && (
        <div className="mb-6 p-4 bg-surface-container border border-primary/30 rounded-xl">
          <p className="font-body-sm text-body-sm text-primary font-semibold">
            ✓ Message sent! We'll be in touch soon.
          </p>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-surface-container border border-red-300/30 rounded-xl">
          <p className="font-body-sm text-body-sm text-red-600 font-semibold">
            Error: {error}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-label-lg text-label-lg text-on-surface-variant mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-label-lg text-label-lg text-on-surface-variant mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block font-label-lg text-label-lg text-on-surface-variant mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={inputClass}
            placeholder="What is this about?"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-label-lg text-label-lg text-on-surface-variant mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className={`${inputClass} resize-none`}
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full px-8 py-3 bg-primary text-surface font-label-lg text-label-lg rounded-full hover:opacity-90 disabled:opacity-50 transition-all active:scale-95 shadow-md"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
