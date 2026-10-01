import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "404 Not Found | ByteSpace",
  description: "The page you are looking for doesn't exist",
};

export default function NotFound() {
  return (
    <div className="relative w-full flex flex-col bg-[#003BE2] overflow-x-hidden">
      {/* Background Blueprint Grid */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.14) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.14) 2px, transparent 2px)
          `,
          backgroundSize: "120px 120px",
          backgroundPosition: "0 0",
        }}
        aria-hidden="true"
      />

      {/* Main Content Area */}
      <div className="relative z-10 w-full flex justify-center">
        <div 
          className="relative w-full flex flex-col items-center lg:block pb-[60px] lg:pb-0 h-auto lg:h-[957px]"
          style={{ maxWidth: "1440px" }}
        >
          <Navbar />

          {/* 404 Image Graphic */}
          <div
            className="relative lg:absolute w-full sm:w-[80%] lg:w-[920px] h-[300px] sm:h-[400px] lg:h-[480px] mt-10 lg:mt-0 lg:top-[160px] lg:left-[260px] z-[1]"
          >
            <Image
              src="/images/404.png"
              alt="404"
              fill
              className="object-contain pointer-events-none"
            />
          </div>

          {/* Texts overlaid on 404 */}
          <div
            className="relative lg:absolute flex flex-col items-center w-full z-10 lg:bottom-[125px] mt-6 lg:mt-0 px-6 lg:px-0"
          >
            <h1
              className="w-full lg:w-[935px] text-[36px] sm:text-[48px] lg:text-[72px]"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                fontWeight: 600,
                lineHeight: "120%",
                letterSpacing: "-0.01em",
                color: "#FFFFFF",
                textAlign: "center",
                margin: "0 0 24px 0",
              }}
            >
              The page you are looking for doesn’t exist
            </h1>

            <p
              className="w-full lg:w-[486px] text-[16px] sm:text-[18px]"
              style={{
                fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                fontWeight: 400,
                lineHeight: "160%",
                color: "#E5E6E8",
                textAlign: "center",
                margin: "0 0 40px 0",
              }}
            >
              Try to use a correct url or go back to homepage to start again
            </p>

            <Link href="/">
              <button
                className="bg-[#D4FB20] hover:bg-[#bce600] transition-colors duration-300 flex items-center justify-center"
                style={{
                  width: "163px",
                  height: "46px",
                  borderRadius: "24px",
                  padding: "12px 24px",
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
                  Back to Home
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full bg-white">
        <Footer />
      </div>
    </div>
  );
}
