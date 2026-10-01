"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/404" },
    { name: "Creators", href: "/404" },
  ];

  return (
    <header className="relative z-50 w-full h-[120px] bg-transparent">
      <div className="w-full max-w-[1440px] h-full mx-auto px-6 sm:px-10 md:px-[120px] flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FB20] rounded-md"
        >
          <div className="relative w-[29px] h-[32px] shrink-0 -translate-y-[6px]">
            <Image
              src="/icons/logo.svg"
              alt="ByteSpace Logo"
              width={29}
              height={32}
              priority
              className="w-full h-full object-contain"
            />
          </div>
          <span
            className="text-[24px] font-bold text-[#F5F5F6] tracking-[0%] leading-none select-none font-clash"
            style={{ fontFamily: "var(--font-clash), 'Clash Display', sans-serif" }}
          >
            ByteSpace
          </span>
        </Link>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-[24px] md:translate-x-8 lg:translate-x-8">
          {navItems.map((item) => {
            const isSelected = activeTab === item.name;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className={`inline-flex items-center justify-center min-w-[60px] h-[26px] text-[16px] leading-[160%] tracking-[0%] font-satoshi transition-all duration-200 ${isSelected
                    ? "text-white font-normal -translate-y-[2px]"
                    : "text-white/85 font-normal hover:text-white hover:-translate-y-[1px]"
                  }`}
                style={{ fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif" }}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Sign In, Join Us, Cart Icon */}
        <div className="hidden md:flex items-center gap-[24px] md:translate-x-6 lg:translate-x-10">
          <Link
            href="/login"
            className="inline-flex items-center justify-center h-[26px] text-[#F5F5F6] text-[16px] font-normal leading-[160%] tracking-[0%] font-satoshi transition-colors hover:text-white"
            style={{ fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif" }}
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center h-[26px] text-[#F5F5F6] text-[16px] font-normal leading-[160%] tracking-[0%] font-satoshi transition-colors hover:text-white"
            style={{ fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif" }}
          >
            Join Us
          </Link>
          <button
            type="button"
            aria-label="Shopping Cart"
            className="relative w-6 h-6 flex items-center justify-center text-[#F5F5F6] hover:opacity-80 transition-opacity focus:outline-none"
          >
            <Image
              src="/icons/Style=Outlined.svg"
              alt="Cart"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-4">
          <button
            type="button"
            aria-label="Shopping Cart"
            className="w-6 h-6 flex items-center justify-center text-[#F5F5F6]"
          >
            <Image
              src="/icons/Style=Outlined.svg"
              alt="Cart"
              width={22}
              height={22}
            />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#F5F5F6] p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FB20] rounded"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0033c4] border-t border-blue-500/30 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isSelected = activeTab === item.name;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-base transition-colors ${isSelected ? "text-white font-normal" : "text-white/85"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-blue-500/30 flex items-center gap-6">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-sm"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 bg-[#D4FB20] text-black text-sm font-semibold rounded-full"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
