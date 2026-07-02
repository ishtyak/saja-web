"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Products", href: "/" },
  { label: "Resources", href: "/resources" },
  // { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      router.push("/#contact");
    }
  };

  return (
    <header className="w-full bg-white  border-b border-gray-100  ">
      <div className="max-w-360 mx-auto px-8 lg:px-16 h-[12vh] flex items-center justify-between">
        {/* Logo */}
        <div className="flex gap-10">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/saja-logo.png"
              alt="Saja Logo"
              width={100}
              height={60}
              style={{ height: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-button font-medium transition-colors ${isActive ? "text-[#0095da]" : "text-[#494949] hover:text-[#0095da]"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={handleContactClick} className="nav-button flex items-center gap-2 text-[#494949] font-medium hover:text-[#0095da] transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            Support
          </button>
          <Link
            href="https://insights.saja.biz/login"
            className="nav-button border bg-white border-gray-300 rounded-full px-6 py-1  hover:border-[#0095da] hover:text-[#0095da] transition-colors"
          >
            Login
          </Link>
          <Link href="https://insights.saja.biz/signup" className="relative inline-flex items-center">
            <button className="btn-primary nav-button">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-8 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium py-2 ${pathname === link.href ? "text-[#0095da]" : "text-[#494949]"
                }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-gray-100">
            <Link href="https://insights.saja.biz/login" target="_blank" className="w-1/2 border rounded-full py-1 px-3 text-center">
              Login
            </Link>
            <Link href="https://insights.saja.biz/signup" target="_blank" style={{ padding: "5px 0px", width: "50%" }} className="btn-primary justify-center text-center">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
