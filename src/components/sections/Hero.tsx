import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent pb-0">
      {/* Floating 3D Geometric Accents (Matching Figma) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden w-full z-10">
        {/* 1. Top-Left: Mirrored mask-group.svg with exact #D4FB20 color, tucked into the left screen edge */}
        <div
          className="absolute top-[60px] sm:top-[80px] lg:top-[100px] -left-20 sm:-left-28 lg:-left-[130px] pointer-events-none select-none z-10 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[386.79px] lg:h-[386.79px]"
          style={{
            transform: "scaleX(-1)",
          }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundColor: "#D4FB20",
              WebkitMaskImage: "url('/icons/mask-group.svg')",
              maskImage: "url('/icons/mask-group.svg')",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              filter: "drop-shadow(0px 20px 35px rgba(0, 0, 0, 0.25))",
            }}
          />
        </div>

        {/* 2. Middle-Left: White Zigzag (Bigger size, shifted right & up) */}
        <div className="absolute top-[280px] sm:top-[310px] lg:top-[350px] left-6 sm:left-16 lg:left-[150px] w-[95px] sm:w-[140px] lg:w-[185px] z-10">
          <Image
            src="/icons/mask-group.svg"
            alt=""
            width={170}
            height={170}
            className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
          />
        </div>

        {/* 3. White Torus (Cone.svg) is positioned directly on top of the Ellipse inside Central Visual Stage */}

        {/* 4. Top-Right: Lime Pillar / Cylinder (Flush to the right edge of the screen) */}
        <div
          className="absolute top-[40px] sm:top-[70px] lg:top-[100px] right-0 pointer-events-none select-none z-10 w-[120px] h-[210px] sm:w-[160px] sm:h-[280px] md:w-[180px] md:h-[314px] lg:w-[213px] lg:h-[372px]"
        >
          <Image
            src="/icons/mask-group2.svg"
            alt=""
            width={213}
            height={372}
            priority
            className="w-full h-full object-contain object-right drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
          />
        </div>

        {/* 5. Middle-Right: White Pyramid (Tetrahedron) - fine-tuned size & shifted slightly right */}
        <div className="absolute top-[330px] sm:top-[360px] lg:top-[350px] right-5 sm:right-10 lg:right-[118px] w-[80px] sm:w-[120px] lg:w-[188px] z-10">
          <Image
            src="/icons/Mask Group-triangle.svg"
            alt=""
            width={188}
            height={188}
            className="w-full h-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.2)]"
          />
        </div>


      </div>

      {/* Main Content Container (with exact 50px top gap from Header) */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center pt-[50px]">
        {/* Main Heading */}
        <h1
          className="text-white text-center font-semibold text-[38px] sm:text-[50px] md:text-[62px] lg:text-[72px] leading-[115%] lg:leading-[120%] tracking-[-0.01em] max-w-[935px] select-none font-poppins"
          style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif" }}
        >
          Get Access to Hundreds
          <br className="hidden sm:inline" /> Courses Available
        </h1>

        {/* Subtitle Description (exact Figma specs: 819x29, 1 line, Satoshi 18px 160% #E5E6E8) */}
        <p
          className="mt-6 text-center select-none font-satoshi md:whitespace-nowrap flex items-center justify-center mx-auto"
          style={{
            fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "160%",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#E5E6E8",
            width: "819px",
            maxWidth: "100%",
            minHeight: "29px",
          }}
        >
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar (width: 581; height: 52; gap: 16px) - lowered down */}
        <div
          className="mt-14 sm:mt-16 md:mt-[68px] w-full max-w-[590px] flex flex-col sm:flex-row items-center gap-3 sm:gap-[16px]"
          role="search"
        >
          {/* Input field with search icon */}
          <div className="w-full sm:flex-1 h-[52px] bg-white rounded-full flex items-center px-5 gap-3 shadow-md focus-within:ring-2 focus-within:ring-[#D4FB20]">
            <svg
              className="w-6 h-6 shrink-0"
              style={{ color: "#6B7280" }}
              fill="none"
              stroke="#6B7280"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent border-none outline-none font-satoshi placeholder:text-[#6B7280] text-[#18181B]"
              style={{
                fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "160%",
                letterSpacing: "0%",
                color: "#18181B",
              }}
              aria-label="Search courses, topics, or creators"
            />
          </div>

          {/* Search Button (compact size) */}
          <button
            type="button"
            className="w-full sm:w-auto h-[48px] px-6 bg-[#D4FB20] font-satoshi rounded-full hover:brightness-105 active:scale-95 transition-all shadow-md flex items-center justify-center shrink-0 cursor-pointer"
            style={{
              fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "120%",
              letterSpacing: "0%",
              color: "#18181B",
            }}
          >
            Search
          </button>
        </div>

        {/* Central Visual Stage: Arch + Man + Floating Cards - closer to search bar */}
        <div className="relative mt-1 sm:mt-2 md:mt-3 lg:mt-[0px] w-full max-w-[1149px] flex justify-center items-center">
          <div className="absolute bottom-0 lg:bottom-auto lg:top-[74px] w-[120%] sm:w-[110%] lg:w-full max-w-[1149px] pointer-events-none select-none z-0 flex justify-center">
            <Image
              src="/icons/Ellipse 7.png"
              alt=""
              width={1149}
              height={460}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* 3. White Torus (Cone.svg) - Exact Figma: 342x342, top: 682px, left: 18px */}
          <div
            className="absolute z-10 pointer-events-none select-none top-[120px] sm:top-[140px] md:top-[155px] lg:top-[167px] -left-10 sm:-left-16 md:-left-24 lg:-left-[128px] w-[110px] h-[110px] sm:w-[160px] sm:h-[160px] md:w-[220px] md:h-[220px] lg:w-[342px] lg:h-[342px]"
          >
            <Image
              src="/icons/Cone.svg"
              alt=""
              width={342}
              height={342}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Man Image with Headphones and Laptop (shadow strictly towards the right side of screen) */}
          <div className="relative z-20 w-[310px] sm:w-[420px] md:w-[500px] lg:w-[578px]">
            <Image
              src="/images/image.png"
              alt="ByteSpace Student holding laptop"
              width={578}
              height={541}
              priority
              className="w-full h-auto object-contain select-none pointer-events-none"
              style={{
                filter:
                  "drop-shadow(26px 0px 32px rgba(0, 0, 0, 0.35)) drop-shadow(10px 0px 15px rgba(0, 0, 0, 0.2))",
              }}
            />
          </div>

          {/* Floating Card 1: UI/UX Design (Exact Figma: 208x70, r:16, p:16, gap:8, Satoshi 16px 500 120%) */}
          <div
            className="absolute z-30 top-[60px] sm:top-[80px] md:top-[90px] lg:top-[124px] left-[10%] sm:left-[16%] md:left-[20%] lg:left-[258px] bg-white rounded-lg lg:rounded-[16px] p-2 lg:p-[16px] shadow-[0px_10px_30px_rgba(0,0,0,0.12)] border border-gray-100/80 flex flex-col justify-center select-none w-[110px] sm:w-[140px] lg:w-[208px] h-[45px] sm:h-[55px] lg:h-[70px]"
            style={{
              background: "#FFFFFF",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.12)",
            }}
          >
            <span
              className="text-[9px] sm:text-[12px] lg:text-[16px]"
              style={{
                fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                fontWeight: 500,
                lineHeight: "120%",
                letterSpacing: "0%",
                verticalAlign: "middle",
                color: "#18181B",
                display: "flex",
                alignItems: "center",
              }}
            >
              UI/UX Design
            </span>
            <span
              className="text-[7px] sm:text-[9px] lg:text-[12px]"
              style={{
                fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                fontWeight: 400,
                lineHeight: "120%",
                letterSpacing: "0%",
                color: "#6B7280",
                whiteSpace: "nowrap",
                marginTop: "4px",
              }}
            >
              200 Courses &nbsp;•&nbsp; 1000+ Students
            </span>
          </div>

          {/* Floating Card 2: Learning Progress (Exact Figma: 232x131, r:16, p:16, gap:8, Poppins 48px 600 120% -1%) */}
          <div
            className="absolute z-30 top-[80px] sm:top-[100px] md:top-[115px] lg:top-[136px] right-[10%] sm:right-[15%] md:right-[18%] lg:right-[220px] bg-white rounded-lg lg:rounded-[16px] p-2 lg:p-[16px] shadow-[0px_10px_30px_rgba(0,0,0,0.12)] border border-gray-100/80 flex flex-col justify-between select-none w-[120px] sm:w-[160px] lg:w-[232px] h-[65px] sm:h-[85px] lg:h-[131px]"
            style={{
              background: "#FFFFFF",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.12)",
            }}
          >
            <span
              className="text-[7px] sm:text-[10px] lg:text-[14px]"
              style={{
                fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                fontWeight: 500,
                lineHeight: "120%",
                letterSpacing: "0%",
                color: "#6B7280",
              }}
            >
              Learning Progress
            </span>
            <span
              className="text-[24px] sm:text-[32px] lg:text-[48px]"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                fontWeight: 600,
                lineHeight: "120%",
                letterSpacing: "-1%",
                verticalAlign: "middle",
                color: "#18181B",
                display: "flex",
                alignItems: "center",
              }}
            >
              55%
            </span>
            {/* Progress bar track */}
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#CBFC01] rounded-full transition-all duration-1000"
                style={{ width: "55%" }}
              />
            </div>
          </div>

          {/* Floating Card 3: Happy Students (Exact Figma: 258x121, r:16, p:16, gap:8, Satoshi 16px 500, Image 232x43) */}
          <div
            className="absolute z-30 top-[180px] sm:top-[200px] md:top-[240px] lg:top-[322px] left-[6%] sm:left-[12%] md:left-[14%] lg:left-[182px] bg-white rounded-lg lg:rounded-[16px] p-2 lg:p-[16px] shadow-[0px_10px_30px_rgba(0,0,0,0.12)] border border-gray-100/80 flex flex-col justify-between select-none w-[130px] sm:w-[170px] lg:w-[258px] h-[70px] sm:h-[85px] lg:h-[121px]"
            style={{
              background: "#FFFFFF",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.12)",
            }}
          >
            <div className="flex items-center justify-between">
              <span
                className="text-[10px] sm:text-[12px] lg:text-[16px]"
                style={{
                  fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                  fontWeight: 500,
                  lineHeight: "120%",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                  color: "#18181B",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Happy Students
              </span>
            </div>
            <div className="flex items-center gap-[4px] -mt-[2px]">
              <span
                className="text-[9px] sm:text-[11px] lg:text-[12px]"
                style={{
                  fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#18181B",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                4.5
              </span>
              <span
                className="text-[8px] sm:text-[10px] lg:text-[12px]"
                style={{
                  fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                  fontWeight: 400,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#6B7280",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                (240)
              </span>
              <div className="inline-flex items-center justify-center shrink-0 w-2 sm:w-3 lg:w-[16px]">
                <Image
                  src="/icons/Star.svg"
                  alt="Rating Star"
                  width={16}
                  height={16}
                  className="w-full h-auto object-contain shrink-0"
                  style={{
                    borderRadius: "0.5px",
                    opacity: 1,
                  }}
                />
              </div>
            </div>
            {/* Overlapping Avatars with 2K+ indicator (Exact Figma: 232x43) */}
            <div
              className="overflow-hidden flex items-center w-full lg:w-[232px] h-auto lg:h-[43px]"
            >
              <Image
                src="/images/Auto Layout Horizontal .png"
                alt="2000+ Happy Students"
                width={232}
                height={43}
                className="w-full h-full object-contain object-left"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 6. Bottom-Right: White Spring Coil (mask-group3.svg - Sitting directly on top of the Ellipse) */}
      <div
        className="absolute z-20 pointer-events-none select-none bottom-[20px] sm:bottom-[30px] lg:bottom-[45px] -right-[5px] sm:-right-[10px] lg:-right-[30px] w-[100px] sm:w-[150px] lg:w-[331.53px] lg:h-[331.53px]"
      >
        <Image
          src="/icons/mask-group3.svg"
          alt=""
          width={332}
          height={332}
          className="w-full h-full object-contain object-right drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
        />
      </div>
    </section>
  );
}
