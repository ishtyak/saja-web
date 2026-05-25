const aiFeatures = [
  {
    title: "Build with AI",
    description:
      "Generate a ready-to-use survey in seconds, choose a prompt or write your own, then customize or expand as needed.",
  },
  {
    title: "AI-Powered Sentiment Analysis",
    description:
      "Automatically analyse open-text responses and get sentiment summaries and insights, without reading every response.",
  },
  {
    title: "AI-Driven Data Insights",
    description:
      "Explore results faster by asking analysis questions in the dashboard, or choose from a library of ready-made AI prompts.",
  },
  {
    title: "Smarter Question Design",
    description:
      "Stuck on answer options? AI suggests relevant choices for single and multiple choice questions.",
  },
];

export default function AISection() {
  return (
    <section className="w-full  py-20">
      <div className="max-w-360 mx-auto px-8 lg:px-16">
        <h2 className="heading font-bold text-[#0095da] text-center mb-4">
          AI That Works Where You Need It
        </h2>
        <p className="h-desc text-[#494949] text-center max-w-3xl mx-auto mb-16">
          AI-powered assistance at every stage, from building your survey to understanding what your customers truly mean.
        </p>

        {/* <div> */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-2 justify-items-center w-2/3">
            {aiFeatures.map((f) => (
              <div
                key={f.title}
                className="w-full max-w-[420px] min-h-[220px] rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100
                     flex flex-col justify-start"
              >
                <h3 className="h-desc font-semibold text-[#0095DA] mb-3">
                  {f.title}
                </h3>

                <p className="text-[8px] md:text-[14px] lg:text-[16px] 2xl:text-[18px] leading-7 text-[#494949]">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}
