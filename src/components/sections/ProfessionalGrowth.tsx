/* eslint-disable @next/next/no-img-element */
export default function ProfessionalGrowth() {
  return (
    <section
      className="relative w-full overflow-hidden h-auto lg:h-[1440px]"
      style={{
        backgroundColor: "#ECEEF8",
        backgroundImage: `
          radial-gradient(
            ellipse 600px 500px at 30% 8%,
            rgba(212, 251, 32, 0.45) 0%,
            rgba(212, 251, 32, 0.2) 45%,
            transparent 70%
          ),
          radial-gradient(
            ellipse 500px 400px at 5% 90%,
            rgba(212, 251, 32, 0.6) 0%,
            rgba(212, 251, 32, 0.3) 40%,
            transparent 68%
          ),
          radial-gradient(
            ellipse 600px 520px at 105% 0%,
            rgba(175, 165, 225, 0.25) 0%,
            rgba(190, 185, 230, 0.10) 45%,
            transparent 72%
          ),
          radial-gradient(
            ellipse 1000px 800px at 100% 100%,
            rgba(120, 160, 255, 0.4) 0%,
            rgba(140, 170, 240, 0.15) 50%,
            transparent 75%
          ),
          radial-gradient(
            ellipse 500px 600px at 0% 50%,
            rgba(150, 180, 255, 0.15) 0%,
            rgba(160, 190, 240, 0.05) 45%,
            transparent 70%
          ),
          radial-gradient(
            ellipse 800px 800px at 50% 30%,
            rgba(255, 255, 255, 0.7) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            transparent 80%
          ),
          radial-gradient(
            ellipse 1600px 1000px at 60% 60%,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0.5) 45%,
            rgba(212, 251, 32, 0.15) 70%,
            transparent 85%
          )
        `,
      }}
    >
      {/* Container for the top part */}
      <div
        className="relative mx-auto flex flex-col lg:flex-row w-full max-w-[1202px] px-6 lg:px-0 pt-[60px] lg:pt-[120px] gap-[40px] lg:gap-[65px]"
      >
        {/* Left Portion: Text & Stats */}
        <div
          className="flex flex-col items-center text-center lg:items-start lg:text-left shrink-0 w-full lg:w-[574px] lg:h-[404px] mt-[20px] lg:mt-[74px] gap-[30px] lg:gap-[40px]"
        >
          {/* Heading */}
          <h2
            className="w-full lg:w-[574px] lg:h-[106px] text-[28px] sm:text-[36px] lg:text-[44px]"
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 600,
              lineHeight: "120%",
              letterSpacing: "-0.01em",
              color: "#040819",
            }}
          >
            Your Path to Professional Growth Starts Here!
          </h2>

          {/* Subheading */}
          <p
            className="w-full lg:w-[477px] lg:h-[145px] text-[16px] sm:text-[18px]"
            style={{
              fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
              fontWeight: 400,
              lineHeight: "160%",
              color: "#82868E",
            }}
          >
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
          </p>

          {/* Stats */}
          <div
            className="flex items-center justify-center lg:justify-start gap-[30px] lg:gap-[56px] w-full"
          >
            {/* Stat 1 */}
            <div className="flex flex-col" style={{ gap: "4px" }}>
              <span
                className="text-[28px] sm:text-[36px] leading-[120%] lg:leading-[44px]"
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  color: "#003BE2",
                }}
              >
                12K
              </span>
              <span
                className="text-[14px] sm:text-[18px]"
                style={{
                  fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                  fontWeight: 400,
                  lineHeight: "160%",
                  color: "#4B4C53",
                }}
              >
                Students
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col" style={{ gap: "4px" }}>
              <span
                className="text-[28px] sm:text-[36px] leading-[120%] lg:leading-[44px]"
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  color: "#003BE2",
                }}
              >
                70+
              </span>
              <span
                className="text-[14px] sm:text-[18px]"
                style={{
                  fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                  fontWeight: 400,
                  lineHeight: "160%",
                  color: "#4B4C53",
                }}
              >
                Courses
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col" style={{ gap: "4px" }}>
              <span
                className="text-[28px] sm:text-[36px] leading-[120%] lg:leading-[44px]"
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  color: "#003BE2",
                }}
              >
                16
              </span>
              <span
                className="text-[14px] sm:text-[18px]"
                style={{
                  fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                  fontWeight: 400,
                  lineHeight: "160%",
                  color: "#4B4C53",
                }}
              >
                Creators
              </span>
            </div>
          </div>
        </div>

        {/* Right Portion: Graphics */}
        <div
          className="relative shrink-0 w-full md:w-[80%] mx-auto lg:mx-0 lg:w-[700px] h-auto lg:h-[720px] mt-[40px] lg:mt-[-10px] lg:ml-[-25px]"
        >
          <img
            src="/images/right-image.png"
            alt="Professional Growth Graphics"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      {/* Container for the bottom part */}
      <div
        className="relative mx-auto flex flex-col-reverse lg:flex-row items-center w-full max-w-[1202px] px-6 lg:px-0 mt-[20px] lg:mt-[-120px] gap-[40px] lg:gap-[34px]"
      >
        {/* Left Portion: Image */}
        <div
          className="relative shrink-0 w-full md:w-[80%] mx-auto lg:mx-0 lg:w-[580px] h-auto lg:h-[750px]"
        >
          <img
            src="/images/female-image.png"
            alt="Female Professional"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "left", // Reverted to just left alignment
            }}
          />
        </div>

        {/* Right Portion: Text Content */}
        <div
          className="flex flex-col items-center text-center lg:items-start lg:text-left shrink-0 w-full lg:w-[580px] lg:h-[388px] gap-[30px] lg:gap-[40px] mt-[20px] lg:mt-[-80px] lg:ml-[5px]"
        >
          {/* Heading */}
          <h2
            className="w-full lg:w-[391px] lg:h-[106px] text-[28px] sm:text-[36px] lg:text-[44px]"
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 600,
              lineHeight: "120%",
              letterSpacing: "-0.01em",
              color: "#040819",
            }}
          >
            Create <span style={{ fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif" }}>&</span> Manage Courses Easily.
          </h2>

          {/* Subheading */}
          <p
            className="w-full max-w-[574px]"
            style={{
              color: "#4B4C53",
            }}
          >
            <span
              className="text-[16px] sm:text-[18px]"
              style={{
                fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                fontWeight: 700,
                lineHeight: "160%",
                color: "#242528",
              }}
            >
              ByteSpace
            </span>
            <span
              className="text-[16px] sm:text-[18px]"
              style={{
                fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                fontWeight: 400,
                lineHeight: "160%",
              }}
            >
              {" "}supports individuals or entities in the creation, publication, and administration of educational courses.
            </span>
          </p>

          {/* Feature List */}
          <div className="flex flex-col gap-[16px]">
            {[
              "Share Your Expertise",
              "Monetize Your Passion",
              "Flexibility and Autonomy",
              "Build a Community"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-[8px]">
                <img
                  src="/images/rightmark.svg"
                  alt="Check"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginTop: "2px",
                    marginLeft: "2px",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                    fontWeight: 500,
                    fontSize: "18px",
                    lineHeight: "120%",
                    color: "#040819",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
