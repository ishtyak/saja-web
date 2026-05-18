import Link from "next/link";

const appFeatures = [
  {
    title: "Interviewer Access",
    description: "Generate secure login credentials for field teams.",
  },
  {
    title: "App-Based Surveys",
    description: "Assigned surveys appear automatically after login.",
  },
  {
    title: "Online & Offline Mode",
    description: "Collect responses without internet. Sync later.",
  },
  {
    title: "Field & Kiosk Ready",
    description: "Perfect for in-person interviews and on-site feedback.",
  },
  {
    title: "Controlled Permissions",
    description: "Interviewers can record responses only, no edits.",
  },
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#0095da] flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function SajaAppSection() {
  return (
    <section className="w-full bg-[#f0f8ff] py-20">
      <div className="max-w-360 mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text content */}
          <div className="flex-1">
            <h2 className="text-[36px]  text-[#0095da] mb-4">
              Saja App for Offline Data Collection
            </h2>
            <p className="text-[18px] text-[#494949] mb-10">
              Empower your teams to capture real-world feedback anywhere.
            </p>
            <ul className="flex flex-col gap-5 mb-10">
              {appFeatures.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <CheckIcon />
                  <div>
                    <p className="text-[16px] font-medium text-[#1a191e]">{f.title}</p>
                    <p className="text-[16px] text-[#727b84]">{f.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/get-started" className="text-[18px] text-[#0095da] font-medium hover:underline">
              Get Started with App →
            </Link>
          </div>

          {/* App mockup placeholder */}
          <div className="lg:w-87.5 shrink-0 flex justify-center">
            <div className="w-62.5 h-120 bg-white rounded-[40px] shadow-2xl border-4 border-gray-200 flex flex-col overflow-hidden">
              {/* Phone header */}
              <div className="bg-[#0095da] px-4 py-3 flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#0095da] text-xs font-bold">S</span>
                </div>
                <span className="text-white text-sm font-semibold">SAJA</span>
              </div>
              {/* Phone body mockup */}
              <div className="flex-1 p-4 flex flex-col gap-3">
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="h-2 bg-gray-300 rounded mb-2 w-3/4"></div>
                  <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                </div>
                <div className="bg-[#e6f4fb] rounded-lg p-3">
                  <div className="h-2 bg-[#0095da] rounded mb-2 w-full"></div>
                  <div className="h-2 bg-[#0095da] opacity-50 rounded w-2/3"></div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="h-2 bg-gray-300 rounded mb-2 w-3/4"></div>
                  <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                </div>
                <div className="mt-auto">
                  <div className="bg-[#0095da] rounded-full py-2 text-white text-center text-sm font-semibold">
                    Submit Response
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
