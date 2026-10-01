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
      className="w-full flex justify-center bg-[#FFFFFF]"
      style={{
        height: "525px",
        // The user mentioned top: 5852px which just defines its place on canvas, we just let it flow in DOM
      }}
    >
      <div
        className="relative flex flex-col justify-between"
        style={{
          width: "1204px", // Matches previous section content width (1440 - 118*2)
          maxWidth: "100%",
          paddingTop: "70px",
          paddingBottom: "50px",
        }}
      >
        {/* Top Content: Logo/Newsletter & Menu */}
        <div className="flex justify-between w-full">
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
              style={{
                width: "528px",
                marginTop: "16px",
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
              className="flex items-center"
              style={{
                marginTop: "45px",
                gap: "24px",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: "376px",
                  height: "52px",
                  borderRadius: "100px",
                  border: "1px solid #D1D5DB",
                  padding: "18px 24px",
                  fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#242528",
                  outline: "none",
                }}
                className="placeholder:text-[#242528] focus:border-[#242528] transition-colors"
              />
              <button
                className="hover:opacity-90 transition-opacity"
                style={{
                  width: "104px",
                  height: "46px",
                  borderRadius: "24px",
                  backgroundColor: "#D4FB20",
                  padding: "12px 24px",
                  fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "120%",
                  color: "#242528",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Search
              </button>
            </div>

            {/* Consent Text */}
            <p
              style={{
                width: "504px",
                marginTop: "24px",
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
            className="flex"
            style={{
              width: "580px",
              gap: "83px", // Column-wise gap
              marginTop: "50px", // 70px (paddingTop) + 50px = 120px from top
            }}
          >
            {/* Column 1 */}
            <div className="flex flex-col" style={{ gap: "16px" }}>
              {menuColumn1.map((item, idx) => (
                <Link
                  href="#"
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
            <div className="flex flex-col" style={{ gap: "16px", flex: 1 }}>
              {menuColumn2.map((item, idx) => (
                <Link
                  href="#"
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
            <div className="flex flex-col" style={{ gap: "16px", flex: 1 }}>
              {menuColumn3.map((item, idx) => (
                <Link
                  href="#"
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
          className="flex justify-between items-center w-full"
          style={{
            borderTop: "2px solid #E6E8EC",
            paddingTop: "20px",
          }}
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

          <div className="flex gap-[24px]">
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(
              (text, idx) => (
                <Link
                  key={idx}
                  href="#"
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
