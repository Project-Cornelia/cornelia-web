'use client'

import Link from 'next/link'


export default function Maintenance() {
  return (
        

    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* { logo} */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center overflow-hidden">
            <img 
              src="/images/cornelia_logo.png"  // Path relative to the public folder
              alt="Project Cornelia Logo" 
              className="w-full h-full object-contain p-2" 
            />
          </div>
        </div>

        {/* Main Message */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#050504] leading-tight">
            Thank you for your visit
          </h1>

          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-[#050504]">
              We're currently rebuilding ourselves to celebrate our {" "}
            <span className="text-2xl sm:text-3xl font-bold text-[#936A60]">
              5th year {" "}
            </span>
              of
            </p>
            <p className="text-xl sm:text-2xl font-semibold text-[#050504] space-y-2">
              <span className="block">Collective</span>
              <span className="block text-[#B2A9A3]">|</span>
              <span className="block">Conversation</span>
              <span className="block text-[#B2A9A3]">|</span>
              <span className="block">Criticism</span>
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-4 pt-8">
          <p className="text-base sm:text-lg text-[#050504]">
            In the meantime, you can reach out to us at {" "}
            <a
              href="mailto:contact.projectcornelia@gmail.com"
              className="font-bold underline text-[#936A60] hover:text-[#7D5A50] transition-colors"
              >
              contact.projectcornelia@gmail.com
            </a>
          </p>
        </div>

        {/* Footer Note */}
        <div className="pt-12 border-t border-[#B2A9A3]">
          <p className="text-sm sm:text-base text-[#B2A9A3]">
            We'll be back soon with a fresh new look
          </p>
        </div>
      </div>
    </div>
  )
}
