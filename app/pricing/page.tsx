"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

type PlanTab = "Individual" | "Teams" | "Enterprise" | "Market Research";

function CheckIcon({ color = "#0095da" }: { color?: string }) {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill={color}>
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

const individualPlans = [
  {
    name: "Basic",
    price: "Free",
    priceLabel: null,
    sub: "Upgrade to unlock more benefits!",
    ctaLabel: "Choose Plan",
    highlight: false,
    responses: "200 responses per year",
    features: ["Unlimited Surveys", "Max 10 questions per survey"],
  },
  {
    name: "Standard",
    price: "$20",
    priceLabel: "/ user/ month",
    sub: "$240 billed annually",
    ctaLabel: "Choose Plan",
    highlight: true,
    responses: "2000 responses per year",
    features: ["Unlimited Surveys", "Unlimited Questions"],
  },
  {
    name: "Advantage",
    price: "$40",
    priceLabel: "/ user/ month",
    sub: "$480 billed annually",
    ctaLabel: "Choose Plan",
    highlight: false,
    responses: "25k responses per year",
    features: ["Unlimited Surveys", "Unlimited Questions"],
  },
];

const featureComparisonRows = {
  Usage: [
    { feature: "Unlimited Surveys", basic: true, standard: true, advantage: true },
    { feature: "Unlimited Questions per Survey", basic: "Max 10 questions per survey", standard: true, advantage: true },
    { feature: "Number of responses per year", basic: "200 responses", standard: "2k responses", advantage: "25k responses" },
  ],
  "Survey Creation": [
    { feature: "Build with AI", basic: true, standard: true, advantage: true },
    { feature: "Auto-create by uploading Questionnaire (.docx)", basic: true, standard: true, advantage: true },
  ],
  "Question Types": [
    { feature: "Single Choice", basic: true, standard: true, advantage: true },
    { feature: "Multiple Choice", basic: true, standard: true, advantage: true },
    { feature: "Dropdown", basic: true, standard: true, advantage: true },
    { feature: "Multiple Dropdown", basic: true, standard: true, advantage: true },
    { feature: "Single Textbox", basic: true, standard: true, advantage: true },
    { feature: "Multiple Textbox", basic: true, standard: true, advantage: true },
    { feature: "NPS", basic: false, standard: true, advantage: true },
  ],
};

function CellValue({ val }: { val: boolean | string }) {
  if (val === true) return <CheckIcon />;
  if (val === false) return <span className="text-gray-300">—</span>;
  return <span className="text-[14px] text-[#494949]">{val}</span>;
}

function IndividualTab() {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {individualPlans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-8 flex flex-col items-center text-center ${
              plan.highlight
                ? "border-[#0095da] bg-[#f0f8ff] shadow-lg"
                : "border-gray-200 bg-white"
            }`}
          >
            <h3 className="text-[20px] font-bold text-black mb-2">{plan.name}</h3>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-[40px] font-bold text-black">{plan.price}</span>
              {plan.priceLabel && (
                <span className="text-[14px] text-[#494949] mb-2">{plan.priceLabel}</span>
              )}
            </div>
            <p className="text-[14px] text-[#494949] mb-6">{plan.sub}</p>
            <button className="btn-primary w-full justify-center mb-6">{plan.ctaLabel}</button>
            <p className="text-[16px] text-[#0095da] font-medium mb-4">{plan.responses}</p>
            <ul className="flex flex-col gap-2 w-full">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-[16px] text-[#494949]">
                  <CheckIcon />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Explore features */}
      <div className="text-center py-8">
        <p className="text-[16px] text-[#494949] mb-4">Dive deeper into what you get with each plan</p>
        <button
          onClick={() => setShowFeatures(!showFeatures)}
          className="text-[18px] font-semibold text-[#0095da] flex items-center gap-2 mx-auto hover:underline"
        >
          EXPLORE FEATURES
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Feature comparison table */}
      {showFeatures && (
        <div className="mt-8">
          <h3 className="text-[36px] font-bold text-black text-center mb-8">Compare everything side by side</h3>
          
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 mb-4 px-4">
            <div />
            {["Basic\nFree", "Standard\n$20/mo", "Advantage\n$40/mo"].map((h, i) => (
              <div key={i} className={`text-center p-4 rounded-xl ${i === 1 ? "bg-[#f0f8ff] border border-[#0095da]" : ""}`}>
                <p className="font-bold text-black whitespace-pre-line text-[16px]">{h}</p>
              </div>
            ))}
          </div>

          {Object.entries(featureComparisonRows).map(([category, rows]) => (
            <div key={category} className="mb-4">
              <div className="bg-gray-50 px-4 py-3">
                <p className="text-[18px] font-bold text-black">{category}</p>
              </div>
              {rows.map((row, ri) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-4 gap-4 px-4 py-3 ${ri % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <p className="text-[16px] text-[#494949]">{row.feature}</p>
                  <div className="flex justify-center"><CellValue val={row.basic} /></div>
                  <div className="flex justify-center"><CellValue val={row.standard} /></div>
                  <div className="flex justify-center"><CellValue val={row.advantage} /></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function EnterpriseTab() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="border border-gray-200 rounded-2xl p-10">
        <h3 className="text-[28px] font-semibold text-black mb-2">
          Thank you for choosing Saja for your{" "}
          <span className="text-[#0095da]">enterprise</span> needs.
        </h3>
        <p className="text-[18px] text-[#494949] text-center mb-8">
          Built for teams that need more. Pricing adapts to your scale and requirements.
          <br />Let&apos;s discuss what works best for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-[18px] font-medium text-black mb-2">Name</label>
            <input type="text" placeholder="Enter your name" className="w-full border-b border-gray-300 pb-2 text-[16px] placeholder-[#c2c2c2] focus:outline-none focus:border-[#0095da]" />
          </div>
          <div>
            <label className="block text-[18px] font-medium text-black mb-2">Last Name</label>
            <input type="text" placeholder="Enter your last name" className="w-full border-b border-gray-300 pb-2 text-[16px] placeholder-[#c2c2c2] focus:outline-none focus:border-[#0095da]" />
          </div>
          <div>
            <label className="block text-[18px] font-medium text-black mb-2">Business Email</label>
            <input type="email" placeholder="Enter email id" className="w-full border-b border-gray-300 pb-2 text-[16px] placeholder-[#c2c2c2] focus:outline-none focus:border-[#0095da]" />
          </div>
          <div>
            <label className="block text-[18px] font-medium text-black mb-2">Country</label>
            <select className="w-full border-b border-gray-300 pb-2 text-[16px] text-[#c2c2c2] focus:outline-none focus:border-[#0095da] bg-transparent">
              <option value="">--Select Country--</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>India</option>
              <option>UAE</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-[18px] font-medium text-black mb-2">Contact Number</label>
            <input type="tel" placeholder="Enter your contact number" className="w-full border-b border-gray-300 pb-2 text-[16px] placeholder-[#c2c2c2] focus:outline-none focus:border-[#0095da]" />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-[18px] font-medium text-black mb-2">Leave us your message here</label>
          <input type="text" placeholder="Write us your request here" className="w-full border-b border-gray-300 pb-2 text-[16px] placeholder-[#c2c2c2] focus:outline-none focus:border-[#0095da]" />
        </div>

        <button className="btn-primary text-[18px] font-semibold mb-8">Contact Us</button>
      </div>

      <div className="text-center mt-10">
        <p className="text-[16px] text-[#494949] mb-4">Dive deeper into what you get with each plan</p>
        <Link href="#" className="text-[18px] font-semibold text-[#0095da] flex items-center gap-2 mx-auto justify-center hover:underline">
          EXPLORE FEATURES
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

const tabs: PlanTab[] = ["Individual", "Teams", "Enterprise", "Market Research"];

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<PlanTab>("Individual");

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-20">
          <h1 className="text-[44px] font-bold text-black text-center mb-4">
            Simple pricing. Powerful insights.
          </h1>
          <p className="text-[20px] text-[#494949] text-center mb-12">
            Choose your plan based on response volume and team size.
          </p>

          {/* Tab bar */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-0 border-b border-gray-200 w-full max-w-2xl">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 text-[18px] font-medium transition-colors ${
                    activeTab === tab
                      ? "text-[#0095da] border-b-2 border-[#0095da]"
                      : "text-[#494949] hover:text-[#0095da]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          {activeTab === "Individual" && <IndividualTab />}
          {activeTab === "Teams" && <IndividualTab />}
          {activeTab === "Enterprise" && <EnterpriseTab />}
          {activeTab === "Market Research" && <IndividualTab />}
        </div>
      </main>
      <Footer />
    </>
  );
}
