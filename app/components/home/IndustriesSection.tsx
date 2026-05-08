import Link from "next/link";

const industries = [
  {
    name: "Hospitality & Tourism",
    description: "Guest satisfaction surveys, real-time service recovery, and multi-location feedback tracking.",
    icon: "🏨",
  },
  {
    name: "Healthcare",
    description: "Patient experience measurement, post-care follow-ups, and clinical feedback collection.",
    icon: "🏥",
  },
  {
    name: "Retail & FMCG",
    description: "In-store feedback, product satisfaction surveys, and customer journey insights.",
    icon: "🛒",
  },
];

export default function IndustriesSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <h2 className="text-[44px] font-bold text-[#0095da] text-center mb-4">
          Feedback solutions for every industry
        </h2>
        <p className="text-[20px] text-[#494949] text-center max-w-3xl mx-auto mb-16">
          Saja adapts to how different organizations ask questions and act on answers. Fast or deep, anonymous or tracked.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {industries.map((ind) => (
            <div key={ind.name} className="border border-gray-200 rounded-2xl p-8">
              <div className="text-4xl mb-4">{ind.icon}</div>
              <h3 className="text-[16px] font-semibold text-black mb-3">{ind.name}</h3>
              <p className="text-[16px] text-[#494949]">{ind.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-[#f5a623] rounded-2xl py-6 px-10 text-center">
          <h3 className="text-[40px] font-bold text-black mb-6">
            Want a quick demo for your industry?
          </h3>
          <Link href="#contact" className="btn-primary text-[26px] font-bold">
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
