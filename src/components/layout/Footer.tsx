import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const menuColumn1 = [
    "Featured Courses",
    "Featured Categories",
    "Business",
    "IT",
    "Design",
  ];
  const menuColumn2 = [
    "Development",
    "Marketing",
    "Photography",
    "Finance",
    "Sport",
  ];
  const menuColumn3 = [
    "Become a Creator",
    "Affiliate Program",
    "Contact",
    "Help",
    "About",
  ];

  return (
    <footer
      className="w-full flex justify-center bg-[#FFFFFF] border-t border-[#D1D5DB]"
    >
      <div
        className="relative flex flex-col justify-between w-full max-w-[1204px] px-6 lg:px-0 pt-10 pb-8 lg:pt-[70px] lg:pb-[50px] min-h-[525px]"
      >
        {/* Top Content: Logo/Newsletter & Menu */}
        <div className="flex flex-col lg:flex-row justify-between w-full gap-12 lg:gap-0">
          {/* Left Side: Logo & Newsletter */}
          <div className="flex flex-col">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-[8px]">
              <div className="relative -translate-y-[2px]" style={{ width: "29px", height: "31.5px" }}>
                <Image
                  src="/icons/logo.svg"
                  alt="ByteSpace Logo"
                  width={29}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-clash), 'Clash Display', sans-serif",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "100%",
                  color: "#242528",
                  paddingTop: "2px",
                }}
              >
                ByteSpace
              </span>
            </Link>

            {/* Newsletter Text */}
            <p
              className="mt-[16px] w-full lg:w-[528px]"
              style={{
                fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "160%",
                color: "#242528",
              }}
            >
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Email Field & Search Button */}
            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center mt-6 lg:mt-[45px] gap-4 sm:gap-[24px]"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-[376px] h-[52px] rounded-[100px] border border-[#D1D5DB] px-6 placeholder:text-[#242528] focus:border-[#242528] transition-colors outline-none"
                style={{
                  fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#242528",
                }}
              />
              <button
                className="w-full sm:w-[104px] h-[46px] rounded-[24px] bg-[#D4FB20] px-6 hover:opacity-90 transition-opacity flex items-center justify-center shrink-0"
                style={{
                  fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "120%",
                  color: "#242528",
                }}
              >
                Search
              </button>
            </div>

            {/* Consent Text */}
            <p
              className="mt-6 lg:mt-[24px] w-full lg:w-[504px]"
              style={{
                fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "160%",
                color: "#242528",
              }}
            >
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Side: Menu */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 w-full lg:w-[580px] mt-8 lg:mt-[50px] gap-8 lg:gap-[83px]"
          >
            {/* Column 1 */}
            <div className="flex flex-col gap-[16px]">
              {menuColumn1.map((item, idx) => (
                <Link
                  href="/404"
                  key={idx}
                  className="hover:underline underline-offset-4"
                  style={{
                    fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "160%",
                    color: "#242528",
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-[16px]">
              {menuColumn2.map((item, idx) => (
                <Link
                  href="/404"
                  key={idx}
                  className="hover:underline underline-offset-4"
                  style={{
                    fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "160%",
                    color: "#242528",
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-[16px] lg:ml-[-48px]">
              {menuColumn3.map((item, idx) => (
                <Link
                  href="/404"
                  key={idx}
                  className="hover:underline underline-offset-4"
                  style={{
                    fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "160%",
                    color: "#242528",
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0 border-t-2 border-[#E6E8EC] pt-6 lg:pt-[20px] mt-12 lg:mt-0 text-center sm:text-left"
        >
          <span
            style={{
              fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "160%",
              color: "#242528",
            }}
          >
            @ 2023 ByteSpace. All rights reserved.
          </span>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-[24px]">
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(
              (text, idx) => (
                <Link
                  key={idx}
                  href="/404"
                  className="hover:underline underline-offset-4"
                  style={{
                    fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "160%",
                    color: "#242528",
                  }}
                >
                  {text}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
