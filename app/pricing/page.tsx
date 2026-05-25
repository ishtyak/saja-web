"use client";

import { useState } from "react";
import Link from "next/link";

type PlanTab = "Individual" | "Teams" | "Enterprise" | "Market Research";

function CheckIcon({ color = "#0095da" }: { color?: string }) {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill={color}>
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

// Plan data for Individual tab
const individualPlans = [
  {
    id: "free",
    name: "Free",
    price: "Free",
    priceLabel: null,
    sub: "Upgrade to unlock more benefits!",
    ctaLabel: "Choose Plan",
    highlight: false,
    users: "1 user",
    responses: "200 responses per year",
    features: ["Unlimited Surveys", "Max 10 questions per survey","NPS", "Email Support"],
  },
  {
    id: "standard",
    name: "Individual Standard",
    price: "$20",
    priceLabel: "/ month",
    sub: "$240 billed annually",
    ctaLabel: "Choose Plan",
    highlight: true,
    users: "1 user",
    responses: "2,000 responses per year",
    features: ["Unlimited Surveys", "Unlimited Questions", "NPS", "Phone Support"],
  },
  {
    id: "advantage",
    name: "Individual Advantage",
    price: "$40",
    priceLabel: "/ month",
    sub: "$480 billed annually",
    ctaLabel: "Choose Plan",
    highlight: false,
    users: "1 user",
    responses: "25,000 responses per year",
    features: ["Unlimited Surveys", "Unlimited Questions", "Advanced Logic", "Advanced Randomization"],
  },
];

// Plan data for Teams tab
const teamsPlans = [
  {
    id: "team-standard",
    name: "Team Standard",
    price: "$20",
    priceLabel: "/ user/ month",
    sub: "Minimum 3 users",
    ctaLabel: "Choose Plan",
    highlight: true,
    users: "3+ users",
    responses: "50,000 responses per year",
    features: ["Unlimited Surveys", "Team Collaboration", "Role-based permissions", "Audit Logs"],
  },
  {
    id: "team-advantage",
    name: "Team Advantage",
    price: "$40",
    priceLabel: "/ user/ month",
    sub: "Minimum 5 users",
    ctaLabel: "Choose Plan",
    highlight: false,
    users: "5+ users",
    responses: "100,000 responses per year",
    features: ["Everything in Team Standard", "Advanced Randomization", "Saja App Access", "Dedicated Support"],
  },
];

// Complete feature comparison data based on spreadsheet
const featureComparisonRows = {
  "Pricing & Plans": [
    { feature: "Price (US $ per month)", free: "Free", standard: "$20", advantage: "$40" },
    { feature: "Number of users", free: "1", standard: "1", advantage: "1" },
    { feature: "Number of responses per year", free: "200", standard: "2,000", advantage: "25,000" },
  ],
  "Survey Creation": [
    { feature: "AI Survey Creation", free: true, standard: true, advantage: true },
    { feature: "Upload Questionnaire .docx to auto-create", free: true, standard: true, advantage: true },
    { feature: "Start from Scratch", free: true, standard: true, advantage: true },
  ],
  "Question Types": [
    { feature: "Single Choice", free: true, standard: true, advantage: true },
    { feature: "Multiple Choice", free: true, standard: true, advantage: true },
    { feature: "Dropdown", free: true, standard: true, advantage: true },
    { feature: "Multi Select Dropdown", free: true, standard: true, advantage: true },
    { feature: "Single Textbox", free: true, standard: true, advantage: true },
    { feature: "Multiple Textbox", free: true, standard: true, advantage: true },
    { feature: "Long Text", free: true, standard: true, advantage: true },
    { feature: "NPS", free: false, standard: true, advantage: true },
    { feature: "Single Rating", free: true, standard: true, advantage: true },
    { feature: "Multiple Rating", free: true, standard: true, advantage: true },
    { feature: "Customization in Rating (Smiley, Slider etc)", free: false, standard: true, advantage: true },
    { feature: "Rating Matrix", free: true, standard: true, advantage: true },
    { feature: "Bipolar Matrix", free: false, standard: true, advantage: true },
    { feature: "Textbox Matrix", free: true, standard: true, advantage: true },
    { feature: "Paragraph", free: true, standard: true, advantage: true },
    { feature: "Header & Paragraph", free: true, standard: true, advantage: true },
    { feature: "Image Feedback", free: false, standard: true, advantage: true },
    { feature: "Audio Feedback", free: false, standard: true, advantage: true },
    { feature: "Video Feedback", free: false, standard: true, advantage: true },
    { feature: "Ask media feedback based on selected option", free: false, standard: true, advantage: true },
    { feature: "Date & Time", free: true, standard: true, advantage: true },
    { feature: "Rank Order", free: true, standard: true, advantage: true },
    { feature: "Intro Page", free: true, standard: true, advantage: true },
    { feature: "Thank you Page", free: true, standard: true, advantage: true },
    { feature: "Maps", free: true, standard: true, advantage: true },
    { feature: "Location", free: true, standard: true, advantage: true },
  ],
  "Logic Types": [
    { feature: "Skip Logic", free: true, standard: true, advantage: true },
    { feature: "Delayed Branching", free: true, standard: true, advantage: true },
    { feature: "Question Display", free: false, standard: true, advantage: true },
    { feature: "Options Display", free: false, standard: true, advantage: true },
    { feature: "Carry Forward Logic", free: false, standard: true, advantage: true },
    { feature: "Priority Logic", free: false, standard: true, advantage: true },
    { feature: "Embedded Data", free: false, standard: true, advantage: true },
    { feature: "Auto Select Options", free: false, standard: true, advantage: true },
    { feature: "Show/Hide Questions", free: false, standard: true, advantage: true },
    { feature: "Show/Hide Options", free: false, standard: true, advantage: true },
  ],
  "Piping": [
    { feature: "Question Piping", free: true, standard: true, advantage: true },
    { feature: "Embedded Data Piping", free: false, standard: true, advantage: true },
    { feature: "Advanced Looping", free: false, standard: true, advantage: true },
  ],
  "Design & Themes": [
    { feature: "Add Logo", free: true, standard: true, advantage: true },
    { feature: "10+ Theme Templates", free: true, standard: true, advantage: true },
    { feature: "Custom Theme", free: false, standard: true, advantage: true },
    { feature: "Font formatting", free: false, standard: true, advantage: true },
    { feature: "Colors customization", free: false, standard: true, advantage: true },
    { feature: "Background Image", free: false, standard: true, advantage: true },
    { feature: "Alignment", free: true, standard: true, advantage: true },
    { feature: "Custom Navigation Buttons", free: true, standard: true, advantage: true },
    { feature: "Button colors and placement", free: false, standard: true, advantage: true },
    { feature: "Survey Progress bar", free: true, standard: true, advantage: true },
    { feature: "Branded subdomain", free: false, standard: true, advantage: true },
  ],
  "Survey Controls & Settings": [
    { feature: "Add Section", free: true, standard: true, advantage: true },
    { feature: "Basic Randomization", free: true, standard: true, advantage: true },
    { feature: "Advanced Randomization", free: false, standard: false, advantage: true },
    { feature: "Text Validation", free: true, standard: true, advantage: true },
    { feature: "Customizable validation messages", free: false, standard: false, advantage: true },
    { feature: "Add image in question options", free: true, standard: true, advantage: true },
    { feature: "Add subtext", free: false, standard: true, advantage: true },
    { feature: "Set Quota", free: true, standard: true, advantage: true },
    { feature: "Advanced Quota Management", free: false, standard: true, advantage: true },
    { feature: "Timer", free: false, standard: true, advantage: true },
    { feature: "Redirect upon completion", free: false, standard: true, advantage: true },
    { feature: "Select Ranking Range", free: false, standard: true, advantage: true },
    { feature: "Automatic question numbering", free: true, standard: true, advantage: true },
    { feature: "Auto Advance", free: true, standard: true, advantage: true },
    { feature: "Redirect Link", free: false, standard: true, advantage: true },
    { feature: "Alert Email", free: false, standard: true, advantage: true },
    { feature: "Question Library", free: true, standard: true, advantage: true },
    { feature: "Download Questionnaire", free: true, standard: true, advantage: true },
    { feature: "Generate choice options using AI", free: true, standard: true, advantage: true },
    { feature: "Multilingual Support", free: false, standard: true, advantage: true },
    { feature: "Auto Translate", free: false, standard: true, advantage: true },
    { feature: "Save & Continue option", free: false, standard: true, advantage: true },
  ],
  "Data Collection": [
    { feature: "QR Code", free: true, standard: true, advantage: true },
    { feature: "Customizable QR Code template", free: false, standard: true, advantage: true },
    { feature: "Email recipients", free: "Upto 3", standard: "Unlimited", advantage: "Unlimited" },
    { feature: "Customizable Email Template", free: false, standard: true, advantage: true },
    { feature: "Bulk email using excel file", free: false, standard: true, advantage: true },
    { feature: "Live survey Weblink", free: true, standard: true, advantage: true },
    { feature: "Personalized Unique Links", free: false, standard: true, advantage: true },
    { feature: "One time response control", free: true, standard: true, advantage: true },
    { feature: "Auto Save responses", free: true, standard: true, advantage: true },
    { feature: "Advanced GPS tracking", free: true, standard: true, advantage: true },
    { feature: "My contacts book", free: true, standard: true, advantage: true },
  ],
  "Analytics & Insights": [
    { feature: "Real time response collection", free: true, standard: true, advantage: true },
    { feature: "Real time dashboard", free: true, standard: true, advantage: true },
    { feature: "AI Sentiment Analysis", free: false, standard: "1 per survey", advantage: "Unlimited" },
    { feature: "Basic Filters", free: true, standard: true, advantage: true },
    { feature: "Advanced Filters", free: true, standard: true, advantage: true },
    { feature: "Ask AI for Data Insights", free: true, standard: true, advantage: true },
    { feature: "Data file (Excel)", free: true, standard: true, advantage: true },
    { feature: "Data file (SPSS)", free: false, standard: true, advantage: true },
    { feature: "Data file (CSV)", free: true, standard: true, advantage: true },
    { feature: "Customizable graph colors", free: true, standard: true, advantage: true },
    { feature: "Multiple graph options", free: true, standard: true, advantage: true },
    { feature: "Download/share graphs", free: true, standard: true, advantage: true },
    { feature: "SPSS (SAV) Viewer", free: false, standard: true, advantage: true },
    { feature: "Bulk Media Download", free: true, standard: true, advantage: true },
  ],
  "Collaboration & Sharing": [
    { feature: "External Dashboard (No login)", free: true, standard: true, advantage: true },
    { feature: "Role-based permissions", free: false, standard: false, advantage: false },
    { feature: "Audit Logs", free: false, standard: false, advantage: false },
    { feature: "Team Collaboration", free: false, standard: false, advantage: false },
    { feature: "Multi User Access", free: false, standard: false, advantage: false },
  ],
  "Security": [
    { feature: "GDPR Compliant", free: true, standard: true, advantage: true },
  ],
  "Support": [
    { feature: "Email Support (Working Hours)", free: true, standard: true, advantage: true },
    { feature: "Live Chat Support (Working Hours)", free: true, standard: true, advantage: true },
    { feature: "Phone Support (Working Hours)", free: false, standard: true, advantage: true },
  ],
};

// Teams feature data
const teamsFeatureRows = {
  "Pricing & Plans": [
    { feature: "Price (US $ per user/month)", standard: "$20", advantage: "$40" },
    { feature: "Number of users", standard: "3+", advantage: "5+" },
    { feature: "Number of responses per year", standard: "50,000", advantage: "100,000" },
  ],
  "Survey Creation": [
    { feature: "AI Survey Creation", standard: true, advantage: true },
    { feature: "Upload Questionnaire .docx to auto-create", standard: true, advantage: true },
    { feature: "Start from Scratch", standard: true, advantage: true },
  ],
  "Question Types": [
    { feature: "All Individual Question Types", standard: true, advantage: true },
    { feature: "Image/Audio/Video Feedback", standard: true, advantage: true },
  ],
  "Logic Types": [
    { feature: "All Logic Types", standard: true, advantage: true },
    { feature: "Advanced Randomization", standard: false, advantage: true },
  ],
  "Collaboration & Sharing": [
    { feature: "Role-based permissions", standard: true, advantage: true },
    { feature: "Audit Logs", standard: true, advantage: true },
    { feature: "Team Collaboration", standard: true, advantage: true },
    { feature: "Multi User Access", standard: true, advantage: true },
  ],
  "Saja App": [
    { feature: "Offline Data Collection", standard: false, advantage: true },
    { feature: "Interviewer Access", standard: false, advantage: true },
    { feature: "Unique ID and password per interviewer", standard: false, advantage: true },
    { feature: "Controlled Permissions", standard: false, advantage: true },
    { feature: "Field & Kiosk Ready", standard: false, advantage: true },
    { feature: "Geotagging", standard: false, advantage: true },
    { feature: "Silent Voice Recording", standard: false, advantage: true },
  ],
  "Support": [
    { feature: "Email Support", standard: true, advantage: true },
    { feature: "Live Chat Support", standard: true, advantage: true },
    { feature: "Phone Support", standard: true, advantage: true },
  ],
};

// Market Research feature data
const marketResearchFeatures = {
  "Research Capabilities": [
    { feature: "Custom Survey Design", basic: true, pro: true, enterprise: true },
    { feature: "Advanced Question Types", basic: false, pro: true, enterprise: true },
    { feature: "Cross-tabulation Analysis", basic: false, pro: true, enterprise: true },
    { feature: "MaxDiff Analysis", basic: false, pro: true, enterprise: true },
    { feature: "Conjoint Analysis", basic: false, pro: false, enterprise: true },
    { feature: "Panel Management", basic: false, pro: false, enterprise: true },
  ],
  "Data Collection": [
    { feature: "QR Code", basic: true, pro: true, enterprise: true },
    { feature: "Live survey Weblink", basic: true, pro: true, enterprise: true },
    { feature: "Personalized Unique Links", basic: false, pro: true, enterprise: true },
    { feature: "Offline Data Collection", basic: false, pro: false, enterprise: true },
  ],
  "Analytics & Reporting": [
    { feature: "Real-time Dashboard", basic: true, pro: true, enterprise: true },
    { feature: "CSV Export", basic: true, pro: true, enterprise: true },
    { feature: "PPTX Reporting", basic: false, pro: true, enterprise: true },
    { feature: "SPSS Export", basic: false, pro: true, enterprise: true },
    { feature: "API Access", basic: false, pro: false, enterprise: true },
  ],
  "Support": [
    { feature: "Email Support", basic: true, pro: true, enterprise: true },
    { feature: "Live Chat Support", basic: true, pro: true, enterprise: true },
    { feature: "Phone Support", basic: false, pro: true, enterprise: true },
    { feature: "Dedicated Support Manager", basic: false, pro: false, enterprise: true },
    { feature: "Customer Success Manager", basic: false, pro: false, enterprise: true },
  ],
};

function CellValue({ val }: { val: boolean | string | number }) {
  if (val === true) return <CheckIcon />;
  if (val === false) return <span className="text-gray-300">—</span>;
  return <span className="text-[14px] text-[#494949]">{val}</span>;
}

function PlanCards({ plans, onPlanSelect, selectedPlanId }: { plans: any[]; onPlanSelect: (planId: string) => void; selectedPlanId: string | null }) {
  return (
    <div className={`grid grid-cols-1  ${plans.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6 mb-12`}>
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`relative rounded-2xl border p-8 flex flex-col items-center text-center transition-all duration-300 cursor-pointer ${selectedPlanId === plan.id
            ? "border-[#0095da] bg-[linear-gradient(180deg,#f7e7b2_0%,#d7e8e8_40%,#84cef7_100%)] shadow-2xl ring-2 ring-[#0095da] ring-opacity-50"
            : plan.highlight && !selectedPlanId
              ? " bg-white shadow-xl md:scale-105 z-10"
              : "border-gray-200 bg-white hover:shadow-lg hover:border-[#0095da]/50"
            }`}
          onClick={() => onPlanSelect(plan.id)}
        >
          {(plan.highlight && !selectedPlanId) || (selectedPlanId === plan.id && plan.highlight) ? (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0095da] text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
              MOST POPULAR
            </div>
          ) : selectedPlanId === plan.id && !plan.highlight ? (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
              SELECTED
            </div>
          ) : null}

          {/* {selectedPlanId === plan.id && (
            <div className="absolute top-3 right-3">
              <div className="bg-[#0095da] rounded-full p-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          )} */}

          <h3 className="text-[20px] font-bold text-black mb-2">{plan.name}</h3>
          <div className="flex items-end gap-1 mb-1">
            <span className="text-[40px] font-bold text-black">{plan.price}</span>
            {plan.priceLabel && <span className="text-[14px] text-[#494949] mb-2">{plan.priceLabel}</span>}
          </div>
          <p className="text-[14px] text-[#494949] mb-2">👥 {plan.users}</p>
          <p className="text-[14px] text-[#494949] mb-6">{plan.sub}</p>
          <button
          style={{
            padding:"5px 40px"
          }}
            onClick={(e) => {
              e.stopPropagation();
              onPlanSelect(plan.id);
            }}
            className={`btn-primary text-center py-3 rounded-full font-semibold transition-all duration-200 mb-6 ${selectedPlanId === plan.id
              ? "bg-[#0095da] text-white shadow-md ring-2 ring-[#0095da] ring-offset-1"
              : plan.highlight
                ? "bg-[#0095da] text-white hover:bg-[#0077b3] shadow-md"
                : "bg-gray-100 text-[#0095da] hover:bg-[#0095da]/10 border border-transparent hover:border-[#0095da]"
              }`}
          >
            {selectedPlanId === plan.id ? "✓ SELECTED" : plan.ctaLabel}
          </button>
          <p className="text-[16px] text-[#0095da] font-medium mb-4">{plan.responses}</p>
          <ul className="flex flex-col gap-2 w-full">
            {plan.features.map((f: string) => (
              <li key={f} className="flex items-center gap-2 text-[15px] text-[#494949]">
                <CheckIcon />
                {f}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// Individual Feature Table
function IndividualFeatureTable() {
  return (
    <div className="mt-8">
      {Object.entries(featureComparisonRows).map(([category, rows]) => (
        <div key={category} className="mb-8">
          <h4 className="text-[18px] font-bold text-black mb-4">{category}</h4>
          {rows.map((row, idx) => (
            <div key={row.feature} className="py-3 flex items-center">
              <div className="w-1/2 md:w-2/5">
                <p className="text-[15px] text-[#494949]">{row.feature}</p>
              </div>
              <div className="w-1/6 md:w-1/5 ">
                <CellValue val={row.free} />
              </div>
              <div className="w-1/6 md:w-1/5 ">
                <CellValue val={row.standard} />
              </div>
              <div className="w-1/6 md:w-1/5 ">
                <CellValue val={row.advantage} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// Teams Feature Table
function TeamsFeatureTable() {
  return (
    <div className="mt-8">
      {Object.entries(teamsFeatureRows).map(([category, rows]) => (
        <div key={category} className="mb-8">
          <h4 className="text-[18px] font-bold text-black mb-4">{category}</h4>
          {rows.map((row, idx) => (
            <div key={row.feature} className="py-3 flex items-center">
              <div className="w-1/2 md:w-2/5">
                <p className="text-[15px] text-[#494949]">{row.feature}</p>
              </div>
              <div className="w-1/4 md:w-1/5 ">
                <CellValue val={row.standard} />
              </div>
              <div className="w-1/4 md:w-1/5 ">
                <CellValue val={row.advantage} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// Market Research Feature Table
function MarketResearchFeatureTable() {
  return (
    <div className="mt-8">
      {Object.entries(marketResearchFeatures).map(([category, rows]) => (
        <div key={category} className="mb-8">
          <h4 className="text-[18px] font-bold text-black mb-4">{category}</h4>
          {rows.map((row, idx) => (
            <div key={row.feature} className="py-3 flex items-center">
              <div className="w-2/5">
                <p className="text-[15px] text-[#494949]">{row.feature}</p>
              </div>
              <div className="w-1/5 ">
                <CellValue val={row.basic} />
              </div>
              <div className="w-1/5 ">
                <CellValue val={row.pro} />
              </div>
              <div className="w-1/5 ">
                <CellValue val={row.enterprise} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// Individual Tab
function IndividualTab() {
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div>
      <PlanCards plans={individualPlans} onPlanSelect={setSelectedPlanId} selectedPlanId={selectedPlanId} />

      <div className="text-center py-8">
        <p className="text-[16px] text-[#494949] mb-4">Dive deeper into what you get with each plan</p>
        <button
          onClick={() => setShowFeatures(!showFeatures)}
          className="text-[18px] font-semibold text-[#0095da] flex items-center gap-2 mx-auto hover:underline"
        >
          {showFeatures ? "HIDE FEATURES" : "EXPLORE FEATURES"}
          <svg className={`w-5 h-5 transition-transform duration-200 ${showFeatures ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {showFeatures && <IndividualFeatureTable />}
    </div>
  );
}

// Teams Tab
function TeamsTab() {
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div>
      <div className="w-full flex justify-center">
        <PlanCards plans={teamsPlans} onPlanSelect={setSelectedPlanId} selectedPlanId={selectedPlanId} />
      </div>

      <div className="text-center py-8">
        <p className="text-[16px] text-[#494949] mb-4">Dive deeper into what you get with each plan</p>
        <button
          onClick={() => setShowFeatures(!showFeatures)}
          className="text-[18px] font-semibold text-[#0095da] flex items-center gap-2 mx-auto hover:underline"
        >
          {showFeatures ? "HIDE FEATURES" : "EXPLORE FEATURES"}
          <svg className={`w-5 h-5 transition-transform duration-200 ${showFeatures ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {showFeatures && <TeamsFeatureTable />}
    </div>
  );
}

// Contact Form Hook
const useContactForm = (formType: string) => {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendQuery = async () => {
    try {
      setLoading(true);
      setSuccessMsg("");
      setErrorMsg("");

      if (!agreed) {
        setErrorMsg("Please accept the permission checkbox.");
        return;
      }

      if (!formData.firstName || !formData.lastName || !formData.email || !formData.country || !formData.phone || !formData.message) {
        setErrorMsg("Please fill all fields.");
        return;
      }

      const response = await fetch("https://saja.biz/sendmail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          country: formData.country,
          phone: formData.phone,
          message: `${formData.message}\n\nForm Type: ${formType}`,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMsg("Your query has been submitted successfully.");
        setFormData({ firstName: "", lastName: "", email: "", country: "", phone: "", message: "" });
        setAgreed(false);
      } else {
        setErrorMsg(result.message || "Something went wrong.");
      }
    } catch (error) {
      setErrorMsg("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { formData, loading, successMsg, errorMsg, agreed, setAgreed, handleChange, sendQuery };
};

// Market Research Tab
function MarketResearchTab() {
  const [showFeatures, setShowFeatures] = useState(false);
  const { formData, loading, successMsg, errorMsg, agreed, setAgreed, handleChange, sendQuery } = useContactForm("Market Research");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendQuery();
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm bg-white">
        <h3 className="text-[28px] font-semibold text-black text-center mb-2">
          Thank you for choosing <span className="text-[#0095da]">Saja</span> for your
        </h3>
        <h3 className="text-[28px] font-semibold text-[#0095da] text-center mb-4">research needs.</h3>
        <p className="text-[18px] text-[#494949] text-center mb-10">
          Every study is different. We price based on your goals, scope, and depth.
          <br />Get in touch for a custom estimate.
        </p>

        {successMsg && <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"><p className="text-green-700 text-center">{successMsg}</p></div>}
        {errorMsg && <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"><p className="text-red-700 text-center">{errorMsg}</p></div>}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
            <div><label className="block text-[16px] font-semibold text-black mb-2">Name</label><input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your name" className="w-full border-b-2 border-gray-200 pb-2 focus:outline-none focus:border-[#0095da]" required /></div>
            <div><label className="block text-[16px] font-semibold text-black mb-2">Last Name</label><input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" className="w-full border-b-2 border-gray-200 pb-2 focus:outline-none focus:border-[#0095da]" required /></div>
            <div><label className="block text-[16px] font-semibold text-black mb-2">Business Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email id" className="w-full border-b-2 border-gray-200 pb-2 focus:outline-none focus:border-[#0095da]" required /></div>
            <div><label className="block text-[16px] font-semibold text-black mb-2">Country</label><select name="country" value={formData.country} onChange={handleChange} className="w-full border-b-2 border-gray-200 pb-2 focus:outline-none focus:border-[#0095da] bg-transparent" required><option value="">Select Country</option><option>United States</option><option>United Kingdom</option><option>India</option><option>Canada</option><option>Australia</option><option>Germany</option><option>France</option><option>UAE</option></select></div>
            <div className="md:col-span-2"><label className="block text-[16px] font-semibold text-black mb-2">Contact Number</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your contact number" className="w-full border-b-2 border-gray-200 pb-2 focus:outline-none focus:border-[#0095da]" required /></div>
          </div>
          <div className="mb-6"><label className="block text-[16px] font-semibold text-black mb-2">Leave us your message here</label><textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write us your request here" rows={3} className="w-full border-b-2 border-gray-200 pb-2 focus:outline-none focus:border-[#0095da] resize-none" required /></div>
          <div className="mb-8"><label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="w-5 h-5 text-[#0095da] rounded" /><span className="text-[14px] text-[#494949]">I agree to the processing of my personal data and consent to be contacted by Saja.</span></label></div>
          <button type="submit" disabled={loading} className="btn-primary px-8 py-3 bg-[#0095da] text-white font-semibold rounded-full hover:bg-[#0077b3] disabled:opacity-50">{loading ? "SENDING..." : "Contact Us"}</button>
        </form>
      </div>

      <div className="text-center mt-12">
        <p className="text-[16px] text-[#494949] mb-4">Dive deeper into what you get with each plan</p>
        <button onClick={() => setShowFeatures(!showFeatures)} className="text-[18px] font-semibold text-[#0095da] flex items-center gap-2 mx-auto hover:underline">
          EXPLORE FEATURES →
        </button>
      </div>

      {showFeatures && <MarketResearchFeatureTable />}
    </div>
  );
}

// Enterprise Tab
function EnterpriseTab() {
  const [showFeatures, setShowFeatures] = useState(false);
  const { formData, loading, successMsg, errorMsg, agreed, setAgreed, handleChange, sendQuery } = useContactForm("Enterprise");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendQuery();
  };

  const enterpriseFeatures = {
    "Platform Capabilities": [
      { feature: "Unlimited Surveys", value: true },
      { feature: "Unlimited Responses", value: true },
      { feature: "Custom Branding", value: true },
      { feature: "White-label Options", value: true },
    ],
    "Security & Compliance": [
      { feature: "GDPR Compliant", value: true },
      { feature: "SOC2 Type II", value: true },
      { feature: "SSO/SAML", value: true },
      { feature: "Private Cloud Deployment", value: true },
    ],
    "Support": [
      { feature: "24/7 Email Support", value: true },
      { feature: "Live Chat Support", value: true },
      { feature: "Phone Support", value: true },
      { feature: "Dedicated Support Manager", value: true },
      { feature: "Customer Success Manager", value: true },
      { feature: "99.9% SLA", value: true },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm bg-white">
        <h3 className="text-[28px] font-semibold text-black text-center mb-2">Thank you for choosing <span className="text-[#0095da]">Saja</span> for your</h3>
        <h3 className="text-[28px] font-semibold text-[#0095da] text-center mb-4">enterprise needs.</h3>
        <p className="text-[18px] text-[#494949] text-center mb-10">Built for teams that need more. Pricing adapts to your scale and requirements.<br />Let's discuss what works best for you.</p>

        {successMsg && <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"><p className="text-green-700 text-center">{successMsg}</p></div>}
        {errorMsg && <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"><p className="text-red-700 text-center">{errorMsg}</p></div>}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
            <div><label className="block text-[16px] font-semibold text-black mb-2">Name</label><input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your name" className="w-full border-b-2 border-gray-200 pb-2 focus:outline-none focus:border-[#0095da]" required /></div>
            <div><label className="block text-[16px] font-semibold text-black mb-2">Last Name</label><input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" className="w-full border-b-2 border-gray-200 pb-2 focus:outline-none focus:border-[#0095da]" required /></div>
            <div><label className="block text-[16px] font-semibold text-black mb-2">Business Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email id" className="w-full border-b-2 border-gray-200 pb-2 focus:outline-none focus:border-[#0095da]" required /></div>
            <div><label className="block text-[16px] font-semibold text-black mb-2">Country</label><select name="country" value={formData.country} onChange={handleChange} className="w-full border-b-2 border-gray-200 pb-2 focus:outline-none focus:border-[#0095da] bg-transparent" required><option value="">Select Country</option><option>United States</option><option>United Kingdom</option><option>India</option><option>Canada</option><option>Australia</option><option>Germany</option><option>UAE</option></select></div>
            <div className="md:col-span-2"><label className="block text-[16px] font-semibold text-black mb-2">Contact Number</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your contact number" className="w-full border-b-2 border-gray-200 pb-2 focus:outline-none focus:border-[#0095da]" required /></div>
          </div>
          <div className="mb-6"><label className="block text-[16px] font-semibold text-black mb-2">Leave us your message here</label><textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write us your request here" rows={3} className="w-full border-b-2 border-gray-200 pb-2 focus:outline-none focus:border-[#0095da] resize-none" required /></div>
          <div className="mb-8"><label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="w-5 h-5 text-[#0095da] rounded" /><span className="text-[14px] text-[#494949]">I agree to the processing of my personal data and consent to be contacted by Saja.</span></label></div>
          <button type="submit" disabled={loading} className="btn-primary px-8 py-3 bg-[#0095da] text-white font-semibold rounded-full hover:bg-[#0077b3] disabled:opacity-50">{loading ? "SENDING..." : "Contact Us"}</button>
        </form>
      </div>

      <div className="text-center mt-12">
        <p className="text-[16px] text-[#494949] mb-4">Dive deeper into what you get with each plan</p>
        <button onClick={() => setShowFeatures(!showFeatures)} className="text-[18px] font-semibold text-[#0095da] flex items-center gap-2 mx-auto hover:underline">
          EXPLORE FEATURES →
        </button>
      </div>

      {showFeatures && (
        <div className="mt-8">
          {Object.entries(enterpriseFeatures).map(([category, rows]) => (
            <div key={category} className="mb-8">
              <h4 className="text-[18px] font-bold text-black mb-4">{category}</h4>
              {rows.map((row, idx) => (
                <div key={row.feature} className="py-3 flex items-center">
                  <div className="w-1/2"><p className="text-[15px] text-[#494949]">{row.feature}</p></div>
                  <div className="w-1/2 text-center"><CellValue val={row.value} /></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const tabs: PlanTab[] = ["Individual", "Teams", "Enterprise", "Market Research"];

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<PlanTab>("Individual");

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 md:py-20 bg-white">
      <h1 className="text-[44px] font-bold text-black text-center mb-4">
        Simple pricing. Powerful insights.
      </h1>
      <p className="text-[20px] text-[#494949] text-center mb-12">
        Choose your plan based on response volume and team size.
      </p>

      <div className="flex justify-center mb-12">
        <div className="flex gap-0 border-b border-gray-200 w-full max-w-2xl">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-[18px] font-medium transition-colors ${activeTab === tab
                ? "text-[#0095da] border-b-2 border-[#0095da]"
                : "text-[#494949] hover:text-[#0095da]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="transition-all duration-300">
        {activeTab === "Individual" && <IndividualTab />}
        {activeTab === "Teams" && <TeamsTab />}
        {activeTab === "Market Research" && <MarketResearchTab />}
        {activeTab === "Enterprise" && <EnterpriseTab />}
      </div>
    </div>
  );
}