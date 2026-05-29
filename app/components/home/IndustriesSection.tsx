"use client"
import { Hospital, Hotel, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

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
  {
    name: "Food & Beverage",
    description:
      "Dining experience feedback, menu satisfaction, delivery service evaluation, and insights for restaurants, cafés, and food brands.",
    icon: 'fab.png',
  },
  {
    name: "Education & Training",
    description:
      "Learner feedback, evaluation surveys, faculty assessments, and training effectiveness measurement across institutions and programs.",
    icon: 'eat.png',
  },
  {
    name: "Financial Services",
    description:
      "Customer satisfaction tracking, onboarding feedback, service quality insights for banks and financial institutions.",
    icon: 'fs.png',
  },
  {
    name: "Real Estate & Automotive",
    description:
      "Property buyer feedback, dealership experience surveys, after-sales service evaluation, and customer journey tracking.",
    icon: 'reaa.png',
  },
  {
    name: "Technology & SaaS",
    description:
      "User experience feedback, product satisfaction surveys, and customer success insights for digital platforms and software companies.",
    icon: 'tas.png',
  },
  {
    name: "Government & Public Services & NGOs",
    description:
      "Public service feedback, community outreach assessment, and program impact measurement.",
    icon: 'gapsn.png',
  },
];

export default function IndustriesSection() {
  const [slide, setSlide] = useState({
    start: 0,
    end: 3
  })
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
        <div className="flex justify-around items-center">
          <button
            disabled={slide.start === 0}
            className="bg-[#FDBD07] h-fit p-3 rounded-full cursor-pointer" onClick={() => {
              setSlide(prev => ({
                ...prev,
                start: prev.start - 1,
                end: prev.end - 1
              }))
            }}><ChevronLeft /></button>
          <div className="sm:flex justify-center gap-3">
            {industries.slice(slide.start, slide.end).map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.name}
                  className="border border-gray-200 rounded-2xl p-8 lg:w-64 min-h-72 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
          <button
            disabled={slide.end === 9}
            className="bg-[#FDBD07] h-fit p-3 rounded-full cursor-pointer "
            onClick={() => {
              setSlide(prev => ({
                ...prev,
                start: prev.start + 1,
                end: prev.end + 1
              }))
            }}><ChevronRight /></button>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#FDBD07] h-41 md:h-45 lg:h-49 xl:53.75 flex  items-center justify-center py-6  px-10 text-center mt-10">
          <div className="flex flex-col gap-4 justify-center items-center">
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