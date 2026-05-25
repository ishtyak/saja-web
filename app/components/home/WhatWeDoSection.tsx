import Image from "next/image";
import Link from "next/link";

const designFeatures = [
  {
    title: "Rich Question Types",
    description: "Choice, rating, NPS, matrix, text, audio, and video - ask questions the way you need.",
  },
  {
    title: "Advanced Survey Logic",
    description: "Control survey flow with skip, display, piping, looping, and priority logic and more.",
  },
  {
    title: "Smart Question Controls",
    description: "Apply randomization, exclusive options, validation rules, mandatory conditions, scoring. Add images, audio or video.",
  },
  {
    title: "Redirection Link",
    description: "Redirect respondents to different pages based on their responses or ratings.",
  },
  {
    title: "Multilingual Support",
    description: "Run surveys in multiple languages to reach diverse audiences.",
  },
  {
    title: "Custom Themes & Branding",
    description: "Match your brand with custom colors, layouts, and visual styling.",
  },
];

const collectFeatures = [
  {
    title: "Share via link, QR code, email, kiosk, or app",
  },
  {
    title: "Personalized and unique survey links",
  },
  {
    title: "Bulk email campaigns with customization",
  },
  {
    title: "Save progress automatically until submission on app",
  },
  {
    title: "Anonymous response options",
  },
];

const analyseFeatures = [
  {
    title: "Real-time Dashboards",
    description: "Monitor survey results as they come in with dynamic, customizable dashboards.",
  },
  {
    title: "AI Sentiment Analysis",
    description: "Automatically reads open-text feedback as Positive, Neutral, or Negative, saving hours of manual review.",
  },
  {
    title: "External Dashboard",
    description: "Share live survey data with stakeholders, clients, or team members, no Saja account required.",
  },
  {
    title: "SPSS (SAV) File Viewer",
    description: "View and validate your SPSS data directly within Saja – no need to switch tools.",
  },
  {
    title: "Smart Data Filters",
    description: "Use advanced filters to explore your data — by date, time, day, weekday, question, or collectors.",
  },
  {
    title: "Email Alert",
    description: "Receive immediate alerts for low scores or critical responses, enabling rapid intervention.",
  },
  {
    title: "Data Export",
    description: "Export data effortlessly in Excel, CSV, or SPSS for further analysis.",
  },
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#0095da] shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function WhatWeDoSection() {
  return (
    <section className="w-full bg-white">
      {/* Design */}
      <div id="features" className="w-full bg-[#FDBD07] ">
        <p className="text-center text-white text-[45px] font-bold">What we do?</p>
        <p className="text-center text-black text-[40px] font-bold ">Design. Collect. Analyse. All in one platform.</p>
      </div>

      <div className="max-w-360 mx-auto px-8 lg:px-20 py-20 sm:flex">
        <div className="sm:w-2/5"><button className="bg-[#FDBD07] text-[24px] fond-bold py-1 px-5 rounded-full">Design</button></div>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <h2 className="text-[36px] font-bold text-black mb-2">Design surveys your way</h2>
            <div className="">
              <p className="my-4 text-[16px] ">
                Start from a blank canvas, use AI or upload your Questionnaire, all your choice. Customize every element without compromising speed or structure.
              </p>
            </div>
            <Link href="#" className="text-[18px] text-[#0095da] font-medium hover:underline mb-2 inline-block">
              Start Designing →
            </Link>
            <div className="grid grid-cols-1  gap-x-12 gap-y-6 mt-4">
              {designFeatures.map((f) => (
                <div key={f.title}>
                  <p className="text-[18px] font-bold text-[#1a191e] mb-1">{f.title}</p>
                  <p className="text-[14px] text-[#727b84]">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100" />

      {/* Collect */}
      <div className="max-w-360 mx-auto px-8 lg:px-20 pb-20 sm:flex">
        <div className="sm:w-2/5"><button className="bg-[#FDBD07] text-[24px] fond-bold  py-1 px-5 rounded-full">Collect</button></div>
        <div className="flex flex-col gap-12 items-start">
          <div className="flex flex-col">
            <h2 className="text-[36px] font-bold text-black mb-2">Collect Data from Users, easily</h2>
            <p className="text-[18px] text-[#494949] mb-2">
              Reach respondents where they are. Share surveys through flexible channels while keeping responses secure and organized.
            </p>
            <Link href="#" className="text-[22px] text-[#0095da] font-medium hover:underline mb-8 inline-block">
              Collect →
            </Link>
            <ul className="grid grid-cols-1  gap-x-12 gap-y-6 mt-4">
              {collectFeatures.map((f) => (
                <li key={f.title} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[14px] text-[#494949]">{f.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <ul className="flex justify-between mb-2 font-bold text-[#0095DA]">
              <li className="underline">Email</li>
              <li className="underline">Link & QR</li>
              <li className="underline">Saja App</li>
            </ul>
            <Image src={'/figma-refs/collect.png'} alt="Collect" height={400} width={600}></Image>
          </div>

        </div>
      </div>

      <div className="border-t border-gray-100" />

      {/* Analyse */}
      <div className="max-w-360 mx-auto px-8 lg:px-20 pb-20 sm:flex">
        <div className="sm:w-2/5"><button className="bg-[#FDBD07] text-[24px] fond-bold  py-1 px-5 rounded-full">Analyse</button></div>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <h2 className="text-[36px] font-bold text-black mb-2">Understand Feedback Instantly</h2>
            <p className="text-[18px] text-[#494949] mb-2">
              Visual dashboards update in real time, helping you spot trends, issues, and opportunities as feedback comes in.
            </p>
            <Link href="#" className="text-[18px] text-[#0095da] font-medium hover:underline mb-6 inline-block">
              Begin Analyzing →
            </Link>
            <div className="grid grid-cols-1  gap-x-12 gap-y-6">
              {analyseFeatures.map((f) => (
                <div key={f.title}>
                  <p className="text-[18px] font-bold text-[#1a191e] mb-1">{f.title}</p>
                  <p className="text-[14px] text-[#727b84]">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
