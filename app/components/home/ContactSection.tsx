"use client";

import { useState } from "react";

export default function ContactSection() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="contact" className="w-full bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left */}
          <div className="lg:w-[400px] flex-shrink-0">
            <h2 className="text-[50px] font-bold text-black mb-4">Get in touch with Saja</h2>
            <p className="text-[24px] text-[#494949] mb-6">
              Whether you&apos;re looking to run smarter surveys, explore CX use cases, or just understand if Saja is right for you, we&apos;re here to help.
            </p>
            <h3 className="text-[26px] font-bold text-[#0095da] mb-3">What can we help you with?</h3>
            <ul className="flex flex-col gap-2 text-[18px] text-[#727b84]">
              <li>• Request a product demo</li>
              <li>• Discuss your survey or CX requirements</li>
              <li>• Know insights with industry experts</li>
              <li>• Get technical support</li>
            </ul>
          </div>

          {/* Form */}
          <div className="flex-1 max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[18px] font-medium text-black mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border-b border-gray-300 pb-2 text-[16px] text-[#494949] placeholder-[#c2c2c2] focus:outline-none focus:border-[#0095da]"
                />
              </div>
              <div>
                <label className="block text-[18px] font-medium text-black mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full border-b border-gray-300 pb-2 text-[16px] text-[#494949] placeholder-[#c2c2c2] focus:outline-none focus:border-[#0095da]"
                />
              </div>
              <div>
                <label className="block text-[18px] font-medium text-black mb-2">Business Email</label>
                <input
                  type="email"
                  placeholder="Enter email id"
                  className="w-full border-b border-gray-300 pb-2 text-[16px] text-[#494949] placeholder-[#c2c2c2] focus:outline-none focus:border-[#0095da]"
                />
              </div>
              <div>
                <label className="block text-[18px] font-medium text-black mb-2">Country</label>
                <select className="w-full border-b border-gray-300 pb-2 text-[16px] text-[#c2c2c2] focus:outline-none focus:border-[#0095da] bg-transparent">
                  <option value="">--Select Country--</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>India</option>
                  <option>UAE</option>
                  <option>Saudi Arabia</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-[18px] font-medium text-black mb-2">Contact Number</label>
                <input
                  type="tel"
                  placeholder="Enter your contact number"
                  className="w-full border-b border-gray-300 pb-2 text-[16px] text-[#494949] placeholder-[#c2c2c2] focus:outline-none focus:border-[#0095da]"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[18px] font-medium text-black mb-2">Leave us message</label>
              <textarea
                placeholder="Please type your message here..."
                rows={4}
                className="w-full border-b border-gray-300 pb-2 text-[16px] text-[#494949] placeholder-[#c2c2c2] focus:outline-none focus:border-[#0095da] resize-none"
              />
            </div>

            <div className="mb-4 flex items-start gap-3">
              <input
                type="checkbox"
                id="contact-consent"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 accent-[#0095da]"
              />
              <label htmlFor="contact-consent" className="text-[18px] font-medium text-black">
                I give Saja permission to contact me
              </label>
            </div>

            <p className="text-[18px] text-[#494949] mb-8">
              By providing this information, you agree that we may process your personal data in accordance with our Privacy Policy.
            </p>

            <button className="btn-primary text-[24px] font-semibold w-full justify-center">
              Connect with Saja
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
