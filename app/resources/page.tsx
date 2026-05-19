"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function ResourcesPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <div className=" mx-auto px-8 lg:px-16 pt-5 pb-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start  mx-auto w-full">
          {/* Booklet Image */}
          <div className="lg:w-110 shrink-0">
            <div className="w-full rounded-xl overflow-hidden flex flex-col items-center justify-between">
                <Image src="/figma-refs/ref.png" alt="Saja Logo" width={400} height={400} className="" />
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 w-1/2">
            <h1 className="text-[36px] font-bold text-black mb-4">
              The Art &amp; Science of Memorable Customer Experience
            </h1>
            <p className="text-[18px] text-[#494949] mb-8">
              Discover how to turn feedback into meaningful action that improves satisfaction, loyalty, and growth.
            </p>

            <div className="flex flex-col gap-6 mb-6">
              <div>
                <label className="block text-[16px] font-medium text-black mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border-b border-gray-300 pb-2 text-[14px] placeholder-[#c2c2c2] focus:outline-none focus:border-[#0095da]"
                />
              </div>
              <div>
                <label className="block text-[16px] font-medium text-black mb-2">Email ID</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full border-b border-gray-300 pb-2 text-[14px] placeholder-[#c2c2c2] focus:outline-none focus:border-[#0095da]"
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
              <label htmlFor="resources-consent" className="text-[16px] text-black">
                I give Saja permission to contact me
              </label>
            </div>

            <p className="text-[16px] text-[#494949] mb-8">
              For more information please review our{" "}
              <a href="#" className="text-[#0095da] hover:underline">Privacy Policy</a>.
            </p>

            <button style={{padding:"5px 10px"}} className="btn-primary text-[16px] font-semibold  justify-center">
              Download the Booklet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
