import { Hospital, Hotel, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const industries = [
  {
    name: "Hospitality & Tourism",
    description:
      "Guest satisfaction surveys, real-time service recovery, and multi-location feedback tracking.",
    icon: 'hospitality.png',
  },
  {
    name: "Healthcare",
    description:
      "Patient experience measurement, post-care follow-ups, and clinical feedback collection.",
    icon: 'helathcare.png',
  },
  {
    name: "Retail & FMCG",
    description:
      "In-store feedback, product satisfaction surveys, and customer journey insights.",
    icon: 'retail.png',
  },
];

export default function IndustriesSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className=" mx-auto ">
        <h2 className="heading font-bold text-[#0095da] text-center mb-4">
          Feedback solutions for every industry
        </h2>

        <p className="h-desc text-[#494949] text-center max-w-3xl mx-auto mb-16">
          Saja adapts to how different organizations ask questions and act on
          answers. Fast or deep, anonymous or tracked.
        </p>

        <div className="sm:flex justify-center gap-3">
          {industries.map((ind) => {
            const Icon = ind.icon;

            return (
              <div
                key={ind.name}
                className="border border-gray-200 rounded-2xl p-8 w-80 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  {/* <Icon size={40} className="text-[#0095da]" /> */}
                  <Image src={`/figma-refs/${Icon}`} alt={Icon} height={50} width={50} ></Image>
                </div>

                <h3 className="wwd-f-title font-bold text-black mb-3">
                  {ind.name}
                </h3>

                <p className="wwd-f-desc text-[#494949]">
                  {ind.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="bg-[#FDBD07] h-41 md:h-45 lg:h-49 xl:53.75 flex  items-center justify-center py-6  px-10 text-center mt-10">
          <div className="flex flex-col gap-5 justify-center items-center">
            <p className="strip-title text-center text-black  ">
              Want a quick demo for your industry?
            </p>

            <Link
              href="#contact"
              className="w-fit inline-flex items-center justify-center rounded-full bg-[#0095da] px-4 py-2 text-[18px] font-bold text-white hover:opacity-90 transition"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}