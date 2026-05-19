import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#E7E7E7] border-t border-gray-200">
      <div className="max-w-360 mx-auto px-8 lg:px-16 py-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Logo & Tagline */}
          <div className="lg:w-1/2 shrink-0">
            <Image src="/saja-logo.png" alt="Saja Logo" width={200} height={200} style={{ height: "auto" }} />
            <p className="text-[#494949] text-[28px] font-bold mt-3">Ascend with Insights</p>
          </div>

          {/* Links */}
          <div className="lg:w-1/2 flex-1 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {/* Product */}
            <div>
              <h4 className="text-[#494949] text-[16px] font-bold mb-4">Product</h4>
              <ul className="flex flex-col gap-3">
                {[{label:"Features",href:'/#features'}, {label:"Pricing",href:'/pricing'}, {label:"Case studies",href:'/#'}, {label:"Reviews",href:'/#'}, {label:"Updates",href:'/#'}].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[#929292] text-[14px] hover:text-[#0095da] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[#494949] text-[16px] font-bold mb-4">Company</h4>
              <ul className="flex flex-col gap-3">
                {[{label:"About",href:'/about'}, {label:"Contact us",href:'/#contact'}, {label:"Resources",href:'/resources'}, {label:"Faq",href:'/faq'}].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[#929292] text-[14px] hover:text-[#0095da] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-[#494949] text-[16px] font-bold mb-4">Support</h4>
              <ul className="flex flex-col gap-3">
                {["Getting started", "Help center", "Server status", "Report a bug", "Chat support"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[#929292] text-[14px] hover:text-[#0095da] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <em className="text-[#494949] text-[14px]">
            Copyright © 2026 SAJA Feedback Insights | All Rights Reserved
          </em>
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a href="#" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#0095da] hover:text-[#0095da] text-[#494949] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="#" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#0095da] hover:text-[#0095da] text-[#494949] transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#0095da] hover:text-[#0095da] text-[#494949] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/listenwithsaja/" target="_blank" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#0095da] hover:text-[#0095da] text-[#494949] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#0095da] hover:text-[#0095da] text-[#494949] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.5a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
