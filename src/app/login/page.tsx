import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CourseCard from "@/components/ui/CourseCard";
import InputField from "@/components/ui/InputField";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SocialButton from "@/components/ui/SocialButton";

export const metadata: Metadata = {
  title: "Login | ByteSpace",
  description: "Login to your ByteSpace account",
};

export default function LoginPage() {
  return (
    <div
      className="relative w-full flex justify-center selection:bg-[#D4FB20] selection:text-black overflow-x-hidden"
      style={{
        backgroundColor: "#003BE2",
        minHeight: "1024px",
      }}
    >
      {/* Blueprint Grid Background */}
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

      {/* Main Content Wrapper (1440x1024 exact constraints) */}
      <div
        className="relative z-10 w-full"
        style={{
          maxWidth: "1440px",
          height: "1024px",
        }}
      >
        {/* Header Container */}
        <header
          className="absolute"
          style={{
            top: "35px",
            left: "122px",
          }}
        >
          <Link href="/">
            <div style={{ width: "29px", height: "32px" }}>
              <Image
                src="/icons/logo.svg"
                alt="ByteSpace Logo"
                width={29}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
        </header>

        {/* Left Text Frame */}
        <div
          className="absolute flex flex-col"
          style={{
            width: "475px",
            height: "127px",
            top: "120px",
            left: "122px",
            gap: "16px",
          }}
        >
          <h1
            style={{
              width: "202px",
              height: "24px",
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "120%",
              letterSpacing: "-0.01em",
              color: "#F5F5F6",
              whiteSpace: "nowrap",
            }}
          >
            Sign in with ease
          </h1>
          <p
            style={{
              width: "475px",
              height: "87px",
              fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
              color: "#F5F5F6",
            }}
          >
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
          </p>
        </div>

        {/* Left Visual Area / Cards Container */}
        <div
          className="absolute"
          style={{
            width: "548px",
            height: "585px",
            top: "305px",
            left: "97px",
          }}
        >
          {/* Lower Card (Background) */}
          <div
            className="absolute z-10"
            style={{
              top: "89px",
              left: "25px",
            }}
          >
            <CourseCard
              image="/images/card-image2.jpg"
              title="Build Digital Asset"
              author="purepearl studio"
              price={25}
              rating={4.5}
              lessons="17 Lessons"
              duration="2 hours 16 mins"
              comments="59 Comments"
              level="Beginner"
            />
          </div>

          {/* Upper Card (Foreground) */}
          <div
            className="absolute z-20"
            style={{
              top: "0px",
              left: "136px",
            }}
          >
            <CourseCard
              image="/images/card-image3.jpg"
              title="the Power of Big Data"
              author="purepearl studio"
              price={25}
              rating={4.5}
              lessons="17 Lessons"
              duration="2 hours 16 mins"
              comments="59 Comments"
              level="Beginner"
            />
          </div>

          {/* Green Ring */}
          <div
            className="absolute z-30 pointer-events-none"
            style={{
              width: "150px",
              height: "150px",
              top: "15px",
              left: "52px",
            }}
          >
            <Image
              src="/images/cone-green.png"
              alt="Green Cone"
              fill
              className="object-contain"
            />
          </div>

          {/* White Scribble */}
          <div
            className="absolute pointer-events-none z-40"
            style={{
              width: "180px",
              height: "180px",
              top: "320px",
              left: "370px",
            }}
          >
            <Image
              src="/icons/mask-group.svg"
              alt="White Scribble"
              fill
              className="object-contain"
            />
          </div>

          {/* Happy Students Rectangle */}
          <div
            className="absolute flex flex-col justify-center z-30"
            style={{
              width: "258px",
              height: "123px",
              top: "435px",
              left: "251px",
              backgroundColor: "#D4FB20",
              borderRadius: "16px",
              padding: "16px",
              gap: "8px",
            }}
          >
            <div className="flex flex-col gap-[2px]">
              <span
                style={{
                  fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#242528",
                }}
              >
                Happy Students
              </span>
              <div className="flex items-center gap-[4px]">
                <span
                  style={{
                    fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    lineHeight: "150%",
                    color: "#242528",
                  }}
                >
                  4.5
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                    fontWeight: 400,
                    fontSize: "10px",
                    lineHeight: "150%",
                    color: "#242528",
                  }}
                >
                  (240)
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: "0.5px" }}>
                  <path d="M8 1L10.163 5.383L15 6.087L11.5 9.5L12.326 14.307L8 12.033L3.674 14.307L4.5 9.5L1 6.087L5.837 5.383L8 1Z" fill="#003BE2" />
                </svg>
              </div>
            </div>

            <div style={{ width: "232px", height: "43px", position: "relative" }}>
              <Image
                src="/images/rectangle-image.png"
                alt="Happy Students Avatars"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Green Ring */}
          <div
            className="absolute z-30 pointer-events-none"
            style={{
              width: "200px",
              height: "190px",
              top: "400px",
              left: "-10px",
            }}
          >
            <Image
              src="/icons/cta/top-2nd right.png"
              alt="Green Ring"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Form Frame */}
        <div
          className="absolute bg-white flex flex-col items-center justify-start"
          style={{
            width: "579px",
            height: "784px",
            top: "120px",
            left: "741px",
            borderRadius: "24px",
            boxShadow: "0px 12px 32px rgba(0, 0, 0, 0.05)",
            paddingTop: "60px",
          }}
        >
          <div
            className="flex flex-col"
            style={{
              width: "453px",
            }}
          >
            {/* Header */}
            <div className="flex flex-col" style={{ marginBottom: "40px" }}>
              <span
                style={{
                  fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "160%",
                  color: "#003BE2",
                }}
              >
                Sign In
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "44px",
                  lineHeight: "120%",
                  letterSpacing: "-1%",
                  color: "#000000",
                  marginTop: "0px",
                }}
              >
                Welcome Back
              </h2>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col" style={{ gap: "24px" }}>
              <InputField label="Email" type="email" placeholder="designer@example.com" />
              <InputField label="Password" type="password" placeholder="********" />
            </div>

            <div className="flex justify-end mt-[32px]">
              <PrimaryButton text="Sign In" width="104px" />
            </div>

            {/* Divider */}
            <div className="flex items-center w-full mt-[73px]" style={{ gap: "11px" }}>
              <div className="flex-grow border-t border-[#D1D5DB]"></div>
              <span
                className="text-[#9CA3AF]"
                style={{
                  fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "160%",
                }}
              >
                or
              </span>
              <div className="flex-grow border-t border-[#D1D5DB]"></div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center mt-[40px] gap-[16px]">
              <SocialButton iconSrc="/images/fb.png" altText="Facebook" />
              <SocialButton iconSrc="/images/google.png" altText="Google" />
            </div>
          </div>

          {/* Bottom Text Absolute positioned */}
          <div
            className="absolute flex justify-center items-center w-full"
            style={{ bottom: "40px" }}
          >
            <span
              style={{
                fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#6B7280",
                display: "flex",
                gap: "4px",
                alignItems: "center",
              }}
            >
              New user?
              <Link href="/signup" className="text-[#003BE2] hover:text-[#002ba8] transition-colors duration-300" style={{ fontWeight: 400 }}>
                Create an account
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
