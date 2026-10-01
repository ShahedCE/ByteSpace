import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CourseCard from "@/components/ui/CourseCard";
import InputField from "@/components/ui/InputField";
import PrimaryButton from "@/components/ui/PrimaryButton";

export const metadata: Metadata = {
  title: "Sign Up | ByteSpace",
  description: "Create a new ByteSpace account",
};

export default function SignupPage() {
  return (
    <div
      className="relative w-full flex justify-center overflow-x-hidden min-h-[1024px] bg-[#003BE2]"
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

      {/* Main Content Wrapper (1440x1024 exact constraints on desktop) */}
      <div
        className="relative z-10 w-full max-w-[1440px] h-auto lg:h-[1024px] flex flex-col lg:block items-center pb-[60px] lg:pb-0"
      >
        {/* Header Container */}
        <header
          className="relative lg:absolute mt-8 lg:mt-0 lg:top-[35px] lg:left-[122px] self-start ml-6 lg:ml-0"
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
          className="relative lg:absolute flex flex-col mt-8 lg:mt-0 lg:top-[120px] lg:left-[122px] w-full max-w-[475px] px-6 lg:px-0 gap-4"
        >
          <h1
            className="text-[20px] lg:text-[20px] whitespace-nowrap"
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "120%",
              letterSpacing: "-0.01em",
              color: "#F5F5F6",
            }}
          >
            Sign up and come in
          </h1>
          <p
            className="text-[16px] sm:text-[18px] w-full lg:w-[475px]"
            style={{
              fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
              color: "#F5F5F6",
            }}
          >
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
          </p>
        </div>

        {/* Left Visual Area / Cards Container */}
        <div
          className="relative lg:absolute mt-8 lg:mt-0 lg:top-[305px] lg:left-[97px] w-[548px] h-[700px] transform scale-[0.6] sm:scale-[0.8] lg:scale-100 origin-top shrink-0 overflow-hidden lg:overflow-visible"
        >
          {/* Lower Card (Background) */}
          <div
            className="absolute z-10 max-lg:-translate-y-[20px]"
            style={{
              top: "109px",
              left: "25px",
              width: "373px",
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
              top: "18px",
              left: "136px",
              width: "373px",
              borderRadius: "24px",
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
            className="absolute z-30 pointer-events-none max-lg:translate-y-[15px] max-lg:translate-x-[38px]"
            style={{
              width: "150px",
              height: "150px",
              top: "35px",
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
            className="absolute pointer-events-none z-40 max-lg:-translate-y-[30px] max-lg:-translate-x-[70px]"
            style={{
              width: "180px",
              height: "180px",
              top: "330px",
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
            className="absolute flex flex-col justify-center z-30 max-lg:-translate-y-[45px] max-lg:-translate-x-[51px]"
            style={{
              width: "258px",
              height: "123px",
              top: "445px",
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
                  fontWeight: 500, // Medium
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
                    fontWeight: 700, // Bold
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
                    fontWeight: 400, // Regular
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
            className="absolute z-30 pointer-events-none max-lg:-translate-y-[30px] max-lg:translate-x-[30px]"
            style={{
              width: "200px",
              height: "190px",
              top: "410px",
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
          className="relative lg:absolute bg-white flex flex-col items-center justify-center mt-[-220px] sm:mt-[-140px] lg:mt-0 lg:top-[120px] lg:left-[741px] w-[90%] sm:w-[579px] h-auto lg:h-[784px] rounded-[24px] shadow-[0px_12px_32px_rgba(0,0,0,0.05)] py-10 lg:py-0 px-6 sm:px-0"
        >
          <div
            className="flex flex-col justify-between w-full sm:w-[453px] h-auto lg:h-[672px]"
          >
            <div className="flex flex-col">
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
                  Create an Account
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: "44px",
                    lineHeight: "120%",
                    letterSpacing: "-1%",
                    color: "#000000",
                    marginTop: "0px", // Decreased gap
                  }}
                >
                  Welcome to<br />ByteSpace
                </h2>
              </div>

              {/* Form Fields */}
              <div className="flex flex-col" style={{ gap: "24px" }}>
                <InputField label="Full Name" type="text" placeholder="Jamie Davis" />
                <InputField label="Email" type="email" placeholder="designer@example.com" />
                <InputField label="Password" type="password" placeholder="********" />
              </div>

              <div className="flex justify-end mt-[32px]">
                <PrimaryButton text="Continue" width="123px" />
              </div>
            </div>

            {/* Bottom Text */}
            <div
              className="flex justify-center items-center mt-8 lg:mt-0 w-full h-[26px]"
            >
              <span
                className="flex items-center gap-1 text-[14px] sm:text-[16px] text-[#6B7280]"
                style={{
                  fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                  fontWeight: 400,
                }}
              >
                Already have an account?
                <a href="/login" className="text-[#003BE2] hover:text-[#002ba8] transition-colors duration-300" style={{ fontWeight: 400 }}>
                  Login
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}