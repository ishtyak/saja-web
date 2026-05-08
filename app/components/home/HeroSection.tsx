import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 pt-20 pb-16">
        {/* Hero headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-[44px] font-bold leading-[1.15] text-black">
            From{" "}
            <span className="text-black">Surveys</span> to{" "}
            <span className="text-black">Analytics</span> –{" "}
            everything made smarter with{" "}
            <span className="text-[#0095da]">AI</span>
          </h1>
          <p className="mt-6 text-[20px] text-black font-medium max-w-2xl mx-auto">
            Design surveys manually or generate them using AI. Saja helps you capture meaningful feedback, and turn responses into clear insights, without effort.
          </p>
          <div className="mt-8">
            <Link href="/get-started" className="btn-primary text-[16px] font-bold">
              Create Your First Survey
            </Link>
          </div>
        </div>
      </div>

      {/* Yellow banner */}
      <div className="w-full bg-[#f5a623] py-5">
        <p className="text-center text-white text-[42px] font-bold">What we do?</p>
      </div>

      {/* Tagline under yellow */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-10 text-center">
        <h2 className="text-[40px] font-bold text-black">
          Design. Collect. Analyse. All in one platform.
        </h2>
        <p className="mt-4 text-[20px] text-[#494949] font-medium max-w-3xl mx-auto">
          Start from a blank canvas, use AI or upload your Questionnaire, all your choice. Customize every element without compromising speed or structure.
        </p>
      </div>
    </section>
  );
}
