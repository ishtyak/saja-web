import Image from "next/image";

export default function TeamsSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-360 mx-auto px-8 lg:px-16">
        <h2 className="text-[36px] font-bold text-[#0095da] mb-4">
          Built for Teams, Not Just Individuals
        </h2>
        <p className="text-[16px] text-[#494949] mb-16 max-w-3xl">
          Whether your team is designing surveys together or collecting responses on the ground, Saja adapts to how you work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="sm:flex hidden sm:visible justify-center">
            <Image src={'/figma-refs/bingo.png'} alt="bingo" height={200} width={400} ></Image>
          </div>
          {/* Collaborator Card */}
          <div className="flex flex-col gap-16">
            <div className="border border-gray-200 rounded-2xl p-8">
              <button className="text-[32px] font-bold text-black mb-4 bg-[#F9BE00] rounded-full px-3">Collaborator</button>
              <p className="text-[16px] text-[#494949] mb-4">
                Invite team members to work on surveys with role-based permissions; view, edit, manage, or analyse, you decide who can do what.
              </p>
              <p className="text-[16px] text-[#494949]">
                <strong>Audit Logs:</strong> Track all edits, launches, and updates through comprehensive audit logs for full transparency.
              </p>
              <p className="text-[16px] text-[#494949] mt-2">
                Built for market research, on-ground studies, and large-scale data collection.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-8">
              <button className="text-[32px] font-bold text-black mb-4 bg-[#F9BE00] rounded-full px-3">Interviewer</button>
              <p className="text-[16px] text-[#494949] mb-4">
                Create interviewer logins for field teams or kiosks. Interviewers simply log in and start collecting responses on the Saja App.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
