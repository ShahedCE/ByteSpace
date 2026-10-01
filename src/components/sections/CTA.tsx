/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function CTA() {
  return (
    <section
      className="relative w-full flex justify-center items-center overflow-hidden"
      style={{
        backgroundColor: "#003BE2",
        // The section itself is full width but we enforce 1440x488 layout height
        minHeight: "488px",
      }}
    >
      {/* 1440px Container with Grid and Content */}
      <div
        className="relative w-full"
        style={{
          width: "1440px",
          maxWidth: "1440px",
          height: "488px",
          margin: "0 auto",
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
          className="absolute"
          style={{
            width: "260px",
            height: "230px",
            top: "0px",
            left: "0px",
          }}
        />
        <img
          src="/icons/cta/top-2ndleft.png"
          alt="Top 2nd Left Spring"
          className="absolute"
          style={{
            width: "175px",
            height: "175px",
            top: "5px",
            left: "178px",
          }}
        />
        <img
          src="/icons/cta/middle-left.png"
          alt="Middle Left Cone"
          className="absolute"
          style={{
            width: "140px",
            height: "190px",
            top: "230px",
            left: "0px",
          }}
        />
        <img
          src="/icons/cta/left-bottom.png"
          alt="Left Bottom Ring"
          className="absolute"
          style={{
            width: "340px",
            height: "200px",
            bottom: "-10px",
            left: "30px",
          }}
        />
        <img
          src="/icons/cta/most-right.png"
          alt="Most Right Cylinder"
          className="absolute"
          style={{
            width: "210px",
            height: "360px",
            top: "20px",
            right: "-5px",
          }}
        />
        <img
          src="/icons/cta/top-2nd right.png"
          alt="Top 2nd Right Pyramid"
          className="absolute"
          style={{
            width: "190px",
            height: "190px",
            top: "5px",
            right: "150px",
          }}
        />
        <img
          src="/icons/cta/right-bottom.png"
          alt="Right Bottom Spring"
          className="absolute"
          style={{
            width: "310px",
            height: "200px",
            bottom: "0px",
            right: "0px",
          }}
        />

        {/* Text Content */}
        <div
          className="relative z-10 flex flex-col items-center"
          style={{
            marginTop: "85px",
          }}
        >
          <h2
            style={{
              width: "710px",
              maxWidth: "100%",
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "44px",
              lineHeight: "120%",
              letterSpacing: "-0.01em",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Unlock Your Potential as a Creator with ByteSpace
          </h2>

          <p
            style={{
              width: "964px",
              maxWidth: "100%",
              marginTop: "40px",
              fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
              textAlign: "center",
              color: "#F5F5F6",
            }}
          >
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>

          <button
            className="flex justify-center items-center hover:opacity-90 transition-opacity"
            style={{
              width: "172px",
              height: "46px",
              marginTop: "40px",
              marginBottom: "84px", // Gap to bottom
              backgroundColor: "#D4FB20",
              borderRadius: "24px",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                fontWeight: 500,
                fontSize: "18px",
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
