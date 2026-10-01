/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function CTA() {
  return (
    <section
      className="relative w-full flex justify-center items-center overflow-hidden bg-[#003BE2] min-h-auto lg:min-h-[488px]"
    >
      {/* 1440px Container with Grid and Content */}
      <div
        className="relative w-full max-w-[1440px] h-auto lg:h-[488px] mx-auto pb-[60px] lg:pb-0"
        style={{
          // Grid lines: 12 columns, 4 rows
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 2px, transparent 2px)
          `,
          backgroundSize: "calc(100% / 12) calc(100% / 4)",
          backgroundPosition: "top left",
        }}
      >
        {/* Floating Icons */}
        <img
          src="/icons/cta/left-top.png"
          alt="Top Left Spring"
          className="absolute top-0 left-0 w-[80px] h-[70px] sm:w-[150px] sm:h-[130px] lg:w-[260px] lg:h-[230px] object-contain pointer-events-none"
        />
        <img
          src="/icons/cta/top-2ndleft.png"
          alt="Top 2nd Left Spring"
          className="absolute top-[5px] left-[60px] sm:left-[100px] lg:left-[178px] w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] lg:w-[175px] lg:h-[175px] object-contain pointer-events-none"
        />
        <img
          src="/icons/cta/middle-left.png"
          alt="Middle Left Cone"
          className="absolute top-[100px] sm:top-[160px] lg:top-[230px] left-0 w-[45px] h-[60px] sm:w-[80px] sm:h-[110px] lg:w-[140px] lg:h-[190px] object-contain pointer-events-none"
        />
        <img
          src="/icons/cta/left-bottom.png"
          alt="Left Bottom Ring"
          className="absolute -bottom-[5px] lg:-bottom-[10px] left-[10px] lg:left-[30px] w-[100px] h-[60px] sm:w-[200px] sm:h-[120px] lg:w-[340px] lg:h-[200px] object-contain object-bottom pointer-events-none"
        />
        <img
          src="/icons/cta/most-right.png"
          alt="Most Right Cylinder"
          className="absolute top-[10px] lg:top-[20px] -right-[2px] lg:-right-[5px] w-[60px] h-[100px] sm:w-[120px] sm:h-[200px] lg:w-[210px] lg:h-[360px] object-contain pointer-events-none"
        />
        <img
          src="/icons/cta/top-2nd right.png"
          alt="Top 2nd Right Pyramid"
          className="absolute top-[5px] right-[40px] sm:right-[80px] lg:right-[150px] w-[60px] h-[60px] sm:w-[110px] sm:h-[110px] lg:w-[190px] lg:h-[190px] object-contain pointer-events-none"
        />
        <img
          src="/icons/cta/right-bottom.png"
          alt="Right Bottom Spring"
          className="absolute bottom-0 right-0 w-[90px] h-[60px] sm:w-[180px] sm:h-[120px] lg:w-[310px] lg:h-[200px] object-contain object-bottom pointer-events-none"
        />

        {/* Text Content */}
        <div
          className="relative z-10 flex flex-col items-center px-6 lg:px-0 mt-[40px] lg:mt-[85px]"
        >
          <h2
            className="w-full lg:w-[710px] text-[24px] sm:text-[36px] lg:text-[44px]"
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 600,
              lineHeight: "120%",
              letterSpacing: "-0.01em",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Unlock Your Potential as a Creator with ByteSpace
          </h2>

          <p
            className="w-full lg:w-[964px] text-[14px] sm:text-[16px] lg:text-[18px] mt-4 sm:mt-6 lg:mt-[40px]"
            style={{
              fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
              fontWeight: 400,
              lineHeight: "160%",
              textAlign: "center",
              color: "#F5F5F6",
            }}
          >
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>

          <button
            className="flex justify-center items-center hover:opacity-90 transition-opacity mt-6 sm:mt-8 lg:mt-[40px] mb-[40px] sm:mb-[60px] lg:mb-[84px] w-[150px] sm:w-[172px] h-[40px] sm:h-[46px]"
            style={{
              backgroundColor: "#D4FB20",
              borderRadius: "24px",
              gap: "8px",
            }}
          >
            <span
              className="text-[14px] lg:text-[16px]"
              style={{
                fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                fontWeight: 500,
                lineHeight: "120%",
                color: "#242528",
              }}
            >
              Join as Creator
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
