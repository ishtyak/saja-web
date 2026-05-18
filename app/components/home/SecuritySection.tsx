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
            <div className="w-24 h-24 flex items-center justify-center mb-6">
              <svg viewBox="0 0 96 96" fill="none" className="w-full h-full">
                <path d="M48 8L12 24v28c0 22.4 15.4 43.3 36 48 20.6-4.7 36-25.6 36-48V24L48 8z" fill="#e6f4fb" stroke="#0095da" strokeWidth="3"/>
                <path d="M34 48l10 10 18-20" stroke="#0095da" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-[36px] font-bold text-black">Security &amp; Compliance</h2>
          </div>

          {/* Right: features */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {securityFeatures.map((f) => (
              <div key={f.title} className="flex gap-4">
                <ShieldIcon />
                <div>
                  <p className="text-[16px] font-medium text-[#1a191e] mb-1">{f.title}</p>
                  <p className="text-[16px] text-[#727b84]">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
