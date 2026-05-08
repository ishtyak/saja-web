import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-24">
          {/* Three-column layout matching Figma design */}
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center min-h-[500px]">
            {/* Left: Curiosity & Empathy */}
            <div className="lg:w-[350px] text-center lg:text-right">
              <h2 className="text-[28px] font-bold text-[#0095da] mb-4">Curiosity &amp; Empathy</h2>
              <p className="text-[16px] text-[#494949] leading-relaxed">
                Our name is inspired from two words, Questions and Answers. In Arabic, sa is the first letter of sawal which means question and ja is the first word of jawab which means answers. We celebrate curiosity and empathy. We strongly believe in the value of the oft-cited phrase that anthropology &quot;makes the familiar strange and the strange familiar.&quot; The wave symbol in our logo represents curiosity and pursuit of advancement, which is what makes the mankind more fulfilled and alive.
              </p>
            </div>

            {/* Center: Circular diagram */}
            <div className="lg:w-[340px] flex-shrink-0 flex justify-center">
              <div className="relative w-[320px] h-[320px]">
                {/* Outer ring text */}
                <svg viewBox="0 0 320 320" className="w-full h-full absolute inset-0">
                  {/* Outer circle path for text */}
                  <defs>
                    <path id="top-arc" d="M 160,160 m -130,0 a 130,130 0 1,1 260,0" />
                    <path id="bottom-arc" d="M 160,160 m 130,0 a 130,130 0 1,1 -260,0" />
                  </defs>
                  {/* Decorative outer ellipses */}
                  <ellipse cx="160" cy="160" rx="150" ry="90" fill="none" stroke="#d0d0d0" strokeWidth="1.5" transform="rotate(-30 160 160)" />
                  <ellipse cx="160" cy="160" rx="150" ry="90" fill="none" stroke="#d0d0d0" strokeWidth="1.5" transform="rotate(30 160 160)" />
                  
                  {/* Curved text */}
                  <text fontSize="11" fill="#494949" fontWeight="600">
                    <textPath href="#top-arc" startOffset="5%">Making the Strange Familiar</textPath>
                  </text>
                  <text fontSize="11" fill="#494949" fontWeight="600">
                    <textPath href="#bottom-arc" startOffset="5%">Making the familiar strange</textPath>
                  </text>

                  {/* Labels around */}
                  <text x="60" y="120" fontSize="13" fill="#494949" fontWeight="600" transform="rotate(-60 60 120)">Curiosity</text>
                  <text x="240" y="120" fontSize="13" fill="#494949" fontWeight="600" transform="rotate(60 240 120)">Empathy</text>
                  <text x="70" y="230" fontSize="13" fill="#494949" fontWeight="600" transform="rotate(60 70 230)">Growth</text>
                  <text x="230" y="230" fontSize="13" fill="#494949" fontWeight="600" transform="rotate(-60 230 230)">Dialogue</text>
                </svg>

                {/* Center circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[140px] h-[140px] rounded-full bg-[#0095da] flex flex-col items-center justify-center text-white text-center shadow-lg">
                    <span className="text-[20px] font-bold leading-tight">Ascend</span>
                    <span className="text-[20px] font-bold leading-tight">with</span>
                    <span className="text-[20px] font-bold leading-tight">Insights</span>
                    {/* Wave underline */}
                    <svg width="60" height="10" viewBox="0 0 60 10" className="mt-1">
                      <path d="M0 5 Q15 0 30 5 Q45 10 60 5" stroke="white" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Dialogue & Growth */}
            <div className="lg:w-[350px] text-center lg:text-left">
              <h2 className="text-[28px] font-bold text-[#0095da] mb-4">Dialogue &amp; Growth</h2>
              <p className="text-[16px] text-[#494949] leading-relaxed">
                Any initiative for an effective strategy and planning has to rely on engagement, feedback and learning. We seek to develop customized solutions that help our users get feedback in a simple and effective way. They should be able to create surveys with ease as well as analyze the data effectively. Saja also means tranquility, the state before a pursuit of excellence and after we have achieved our goals.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
