"use client";

import { useState } from "react";

type FormDataType = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phone: string;
  message: string;
};

export default function ContactSection() {
  const [agreed, setAgreed] = useState(false);

  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendQuery = async () => {
    try {
      setLoading(true);
      setSuccessMsg("");
      setErrorMsg("");

      if (!agreed) {
        setErrorMsg("Please accept permission checkbox.");
        return;
      }

      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.country ||
        !formData.phone ||
        !formData.message
      ) {
        setErrorMsg("Please fill all fields.");
        return;
      }

      const response = await fetch("https://saja.biz/sendmail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          country: formData.country,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMsg("Your query has been submitted successfully.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          country: "",
          phone: "",
          message: "",
        });
        setAgreed(false);
      } else {
        setErrorMsg(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setErrorMsg("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-linear-to-b from-[#FDDF7E] to-[#0095DA] py-20">
      <div className="max-w-360 mx-auto px-8 lg:px-16">
        <div className="flex  flex-col lg:flex-row gap-16 items-start">

          {/* Left */}
          <div className="lg:w-100 shrink-0">
            <h2 className="text-[36px] font-bold text-black mb-4">
              Get in touch with Saja
            </h2>

            <p className="text-[14px] text-[#494949] mb-6">
              Whether you're looking to run smarter surveys, explore CX use
              cases, or just understand if Saja is right for you, we're here to
              help.
            </p>

            <h3 className="text-[18px] font-bold text-[#0095da] mb-3">
              What can we help you with?
            </h3>

            <ul className="flex flex-col gap-2 text-[14px] text-[#727b84]">
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
                <label className="block text-[14px] font-medium mb-2">
                  Name
                </label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border-b pb-2 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium mb-2">
                  Last Name
                </label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full border-b pb-2 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium mb-2">
                  Business Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter email id"
                  className="w-full border-b pb-2 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium mb-2">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border-b pb-2 focus:outline-none"
                >
                  <option value="">--Select Country--</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>India</option>
                  <option>UAE</option>
                  <option>Saudi Arabia</option>
                </select>
              </div>

              <div>
                <label className="block text-[14px] font-medium mb-2">
                  Contact Number
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Enter your contact number"
                  className="w-full border-b pb-2 focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[14px] font-medium mb-2">
                Leave us message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Please type your message here..."
                className="w-full border-b pb-2 focus:outline-none resize-none"
              />
            </div>

            <div className="mb-4 flex items-center gap-3">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className=" w-4 h-4"
              />

              <label className="text-[14px] font-medium">
                I give Saja permission to contact me
              </label>
            </div>

            <p className="text-[14px] text-[#494949] mb-8">
              By providing this information, you agree that we may process your
              personal data in accordance with our Privacy Policy.
            </p>

            {successMsg && (
              <p className="text-green-600 mb-4">{successMsg}</p>
            )}

            {errorMsg && (
              <p className="text-red-600 mb-4">{errorMsg}</p>
            )}

            <button
              onClick={sendQuery}
              disabled={loading}
              className="btn-second text-[14px] font-semibold justify-center"
            >
              {loading ? "Submitting..." : "Connect with Saja"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}