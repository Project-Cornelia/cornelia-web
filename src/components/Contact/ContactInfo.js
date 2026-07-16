'use client'

export default function ContactInfo() {
  return (
    <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-label-lg text-label-lg text-primary uppercase tracking-widest mb-2">Email</h3>
                  <a
                    href="mailto:contact.projectcornelia@gmail.com"
                    className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors"
                  >
                    contact.projectcornelia@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-label-lg text-label-lg text-primary uppercase tracking-widest mb-2">Location</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Delhi University<br />New Delhi, India
                  </p>
                </div>

                <div>
                  <h3 className="font-label-lg text-label-lg text-primary uppercase tracking-widest mb-3">Follow Us</h3>
                  <div className="flex gap-6">
                    <a
                      href="https://www.instagram.com/project.cornelia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-body-md text-on-surface-variant hover:text-primary transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com/company/project-cornelia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-body-md text-on-surface-variant hover:text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="bg-surface-container border border-neutral-100 rounded-xl p-6">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Response Time</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    We typically respond within 2–3 business days.
                  </p>
                </div>
              </div>
            </div>
  )
}