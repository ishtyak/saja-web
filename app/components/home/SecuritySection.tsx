import { CircleCheck } from "lucide-react";
import Image from "next/image";

const securityFeatures = [
  {
    title: "Secure Cloud Infrastructure",
    description: "Hosted on robust, industry-leading cloud platforms with advanced security protocols.",
  },
  {
    title: "Access Control",
    description: "Role-based access and controlled data visibility ensure only authorized personnel see sensitive information.",
  },
  {
    title: "Encrypted Data Storage",
    description: "All data is encrypted both in transit and at rest, with regular backups for disaster recovery.",
  },
  {
    title: "Privacy-First Approach",
    description: "We prioritize privacy for all sensitive feedback, adhering to strict data protection regulations.",
  },
];

function ShieldIcon() {
  return (
    <svg className="w-6 h-6 text-[#0095da] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export default function SecuritySection() {
  return (
    <section className="w-full bg-[#f8f9fa] py-20">
      <div className="max-w-360 mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: shield icon + title */}
          <div className="lg:w-100 shrink-0">
             <Image src={'/figma-refs/security.png'} alt="Security&Compilance" width={400} height={400}></Image>
          </div>

          {/* Right: features */}
          <div>
            <h2 className="wwd-title  font-bold text-black mb-10">Security &amp; Compliance</h2>
            <div className="flex-1 grid grid-cols-1  gap-x-12 gap-y-8">

              {securityFeatures.map((f) => (
                <div key={f.title} className="flex gap-4">
                  {/* <ShieldIcon /> */}
                  <CircleCheck fill="#0095DA" color="white" />
                  <div>
                    <p className="wwd-f-title font-bold text-[#1a191e] mb-1">{f.title}</p>
                    <p className="wwd-f-desc text-[#727b84]">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
