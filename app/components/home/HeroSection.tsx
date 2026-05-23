import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full h-[86vh] flex items-center bg-white">
      <div className="max-w-360 mx-auto px-8 lg:px-16 pt-20 pb-16">
        {/* Hero headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-[56px] font-bold leading-[1.15] text-black">
            From{" "}
            <span className="text-[#0095da]">Surveys</span> to{" "}
            <span className="text-[#0095da]">Analytics</span> –{" "}
            everything made smarter with{" "}
            <span className="text-[#0095da]">AI</span>
          </h1>
          <p className="mt-6 text-[24px] text-black font-medium max-w-2xl mx-auto">
            Design surveys manually or generate them using AI. Saja helps you capture meaningful feedback, and turn responses into clear insights, without effort.
          </p>
          <div className="mt-8">
            <Link href="/get-started" style={{padding:'5px 10px'}} className="btn-primary  text-[20px]">
              Create Your First Survey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
