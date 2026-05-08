"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function ResourcesPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-20">
          <div className="flex flex-col lg:flex-row gap-16 items-start max-w-4xl mx-auto">
            {/* Booklet Image */}
            <div className="lg:w-[360px] flex-shrink-0">
              <div className="w-full aspect-[3/4] rounded-xl overflow-hidden border border-gray-200 shadow-md bg-gradient-to-b from-[#1a1a2e] to-[#16213e] flex flex-col items-center justify-between p-8">
                <div className="flex flex-col items-center gap-3 w-full">
                  <Image src="/saja-logo.png" alt="Saja Logo" width={80} height={52} className="brightness-0 invert" />
                  <p className="text-white text-[16px] font-semibold text-center mt-2">
                    The Art &amp; Science of Memorable CX
                  </p>
                  <p className="text-gray-300 text-[12px] text-center">
                    Designed to help you gain a better understanding of what to factor in when planning your customer experience strategy.
                  </p>
                </div>
                {/* Silhouette image placeholder */}
                <div className="w-full flex-1 flex items-center justify-center my-4">
                  <div className="w-32 h-40 bg-gradient-to-t from-gray-400 to-transparent rounded-full opacity-30" />
                </div>
                <p className="text-white text-[14px] italic font-medium">Ascend with Insights</p>
              </div>
            </div>

            {/* Form */}
            <div className="flex-1">
              <h1 className="text-[40px] font-bold text-black mb-4">
                The Art &amp; Science of Memorable Customer Experience
              </h1>
              <p className="text-[22px] text-[#494949] mb-8">
                Discover how to turn feedback into meaningful action that improves satisfaction, loyalty, and growth.
              </p>

              <div className="flex flex-col gap-6 mb-6">
                <div>
                  <label className="block text-[18px] font-medium text-black mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border-b border-gray-300 pb-2 text-[16px] placeholder-[#c2c2c2] focus:outline-none focus:border-[#0095da]"
                  />
                </div>
                <div>
                  <label className="block text-[18px] font-medium text-black mb-2">Email ID</label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full border-b border-gray-300 pb-2 text-[16px] placeholder-[#c2c2c2] focus:outline-none focus:border-[#0095da]"
                  />
                </div>
              </div>

              <div className="mb-4 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="resources-consent"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-[#0095da]"
                />
                <label htmlFor="resources-consent" className="text-[18px] font-medium text-black">
                  I give Saja permission to contact me
                </label>
              </div>

              <p className="text-[16px] text-[#494949] mb-8">
                For more information please review our{" "}
                <a href="#" className="text-[#0095da] hover:underline">Privacy Policy</a>.
              </p>

              <button className="btn-primary text-[16px] font-semibold w-full justify-center">
                Download the Booklet
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
