import Image from "next/image";
import Link from "next/link";

const appFeatures = [
  {
    icn: "/figma-refs/int-acc.png",
    title: "Interviewer Access",
    description: "Generate secure login credentials for field teams.",
  },
  {
    icn: "/figma-refs/app-bas.png",
    title: "App-Based Surveys",
    description: "Assigned surveys appear automatically after login.",
  },
  {
    icn: "/figma-refs/onl-ofl.png",
    title: "Online & Offline Mode",
    description: "Collect responses without internet. Sync later.",
  },
  {
    icn: "/figma-refs/fie-kio.png",
    title: "Field & Kiosk Ready",
    description: "Perfect for in-person interviews and on-site feedback.",
  },
  {
    icn: "/figma-refs/con-per.png",
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
    <section className="w-full pt-5 pb-20">
      <div className="mx-auto px-16 lg:px-30">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text content */}
          <div className="flex-1">
            <h2 className="wwd-title  font-bold text-[#0095da] mb-4">
              Saja App for Offline Data Collection
            </h2>
            <p className="wwd-desc text-[#494949] mb-5">
              Empower your teams to capture real-world feedback anywhere.
            </p>
            <Link href="/get-started" className="wwd-link text-[#0095DA] font-medium hover:underline">
              Get Started with App →
            </Link>
            <ul className="flex flex-col gap-5 mt-8">
              {appFeatures.map((f) => (
                <li key={f.title} className="flex gap-4">
                  {/* <CheckIcon /> */}
                  <Image src={f.icn} alt={f.icn} height={20} width={50} ></Image>
                  <div>
                    <p className="wwd-f-title font-bold text-[#1a191e]">{f.title}</p>
                    <p className="wwd-f-desc text-[#727b84]">{f.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* App mockup placeholder */}
          <div className=" shrink-0 bg-transparent flex justify-center">
            <div className="w-72 h-120 rounded-[40px]  flex flex-col overflow-hidden">
              <div className="flex-1 p-4 flex flex-col gap-3">
                {/* <Image src={'/figma-refs/s-app-1.png'} alt="s-app" height={600} width={200}></Image> */}
                <img src={'/figma-refs/s-app-1.png'} alt="s-app" className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
