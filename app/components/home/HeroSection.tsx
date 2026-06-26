import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full max-w-7xl h-[86vh] mx-auto flex items-center bg-white">
      <div className="max-w-360 mx-auto px-8 lg:px-16 pt-20 pb-16">
        {/* Hero headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <p className="heading font-bold leading-[1.15] text-black">
            From{" "}
            <span className="text-[#0095da]">Surveys</span> to{" "}
            <span className="text-[#0095da]">Analytics</span> –{" "}
            everything made smarter with{" "}
            <span className="text-[#0095da]">AI</span>
          </p>
          <p className="h-desc mt-6 text-black font-medium max-w-2xl mx-auto">
            Design surveys manually or generate them using AI. Saja helps you capture meaningful feedback, and turn responses into clear insights, without effort.
          </p>
          <div className="mt-8">
            <Link href="https://insights.saja.biz/signup" target="_blank" style={{ padding: '10px 18px' }} className="btn-primary button">
              Create Your First Survey
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-3  border-2 border-[#A9E4FF] p-3 rounded-lg">
            <div className="flex items-center">
              <Image src={'/figma-refs/krossiq.png'} alt="krossIq" height={20} width={100}></Image>
            </div>
            <div className="text-lg">
              <p>Need Advanced Analytics?</p>
              <Link target="_blank" className="text-sky-500 flex " href={'https://krossiq.com'}>Try KrossIQ Now <ArrowRight /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
