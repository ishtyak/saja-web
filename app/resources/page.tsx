"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ResourcesPage() {
  const [agreed, setAgreed] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const downloadBooklet = async () => {
    try {
      if (!name || !email) {
        alert("Please fill all fields");
        return;
      }

      if (!agreed) {
        alert("Please give permission to continue");
        return;
      }

      setLoading(true);

      const payload = {
        // request_type: "download_booklet",
        name: name,
        email: email,
      };

      const response = await fetch(
        "https://saja.biz/sendbookMail.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      alert("Booklet request submitted successfully");

      setName("");
      setEmail("");
      setAgreed(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className=" mx-auto px-8 lg:px-16 pt-5 pb-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start  mx-auto w-full">
          {/* Booklet Image */}
          <div className="lg:w-110 shrink-0">
            <div className="w-full rounded-xl overflow-hidden flex flex-col items-center justify-between">
              <Image
                src="/figma-refs/ref.png"
                alt="Saja Logo"
                width={400}
                height={400}
                className=""
              />
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 sm:w-1/2">
            <h1 className="text-[50px] font-bold text-black mb-4">
              The Art &amp; Science of Memorable Customer Experience
            </h1>

            <p className="text-[24px] text-[#494949] mb-8">
              Discover how to turn feedback into meaningful action that improves
              satisfaction, loyalty, and growth.
            </p>

            <div className="flex flex-col gap-6 mb-6">
              <div>
                <label className="block text-[22px] font-medium text-black mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-b border-gray-300 pb-2 text-[14px] placeholder-[#c2c2c2] focus:outline-none focus:border-[#0095da]"
                />
              </div>

              <div>
                <label className="block text-[22px] font-medium text-black mb-2">
                  Email ID
                </label>

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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

              <label
                htmlFor="resources-consent"
                className="text-[22px] text-black"
              >
                I give Saja permission to contact me
              </label>
            </div>

            <p className="text-[16px] text-[#494949] mb-8">
              For more information please review our{" "}
              <Link
                href="/privacy-policy"
                className="text-[#0095da] hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>

            <button
              onClick={downloadBooklet}
              disabled={loading}
              style={{ padding: "5px 10px" }}
              className="btn-primary text-[16px] font-semibold justify-center disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Download the Booklet"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}