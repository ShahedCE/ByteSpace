/* eslint-disable @next/next/no-img-element */
export default function ProfessionalGrowth() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: "1440px", // Forces the section to be this tall, cutting off the rest due to overflow-hidden
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
        className="relative mx-auto flex"
        style={{
          width: "1202px",
          maxWidth: "100%",
          paddingTop: "120px", // Base top padding for the image
          gap: "65px",
        }}
      >
        {/* Left Portion: Text & Stats */}
        <div
          className="flex flex-col shrink-0"
          style={{
            marginTop: "74px",
            width: "574px",
            height: "404px",
            gap: "40px"
          }}
        >
          {/* Heading */}
          <h2
            style={{
              width: "574px",
              height: "106px",
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "44px",
              lineHeight: "120%",
              letterSpacing: "-0.01em",
              color: "#040819",
            }}
          >
            Your Path to Professional Growth Starts Here!
          </h2>

          {/* Subheading */}
          <p
            style={{
              width: "477px",
              height: "145px",
              fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
              color: "#82868E",
            }}
          >
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
          </p>

          {/* Stats */}
          <div
            className="flex items-center"
            style={{
              gap: "56px"
            }}
          >
            {/* Stat 1 */}
            <div className="flex flex-col" style={{ gap: "4px" }}>
              <span
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: "36px",
                  lineHeight: "44px",
                  letterSpacing: "-0.01em",
                  color: "#003BE2",
                }}
              >
                12K
              </span>
              <span
                style={{
                  fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
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
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: "36px",
                  lineHeight: "44px",
                  letterSpacing: "-0.01em",
                  color: "#003BE2",
                }}
              >
                70+
              </span>
              <span
                style={{
                  fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
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
                style={{
                  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: "36px",
                  lineHeight: "44px",
                  letterSpacing: "-0.01em",
                  color: "#003BE2",
                }}
              >
                16
              </span>
              <span
                style={{
                  fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
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
          className="relative shrink-0"
          style={{
            width: "700px",
            height: "720px",
            marginTop: "-10px",
            marginLeft: "-25px",
          }}
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
        className="relative mx-auto flex items-center"
        style={{
          width: "1202px",
          maxWidth: "100%",
          marginTop: "-120px", // Moved up even further
          gap: "34px", // 580 + 34 = 614px (maintains right text alignment with man image)
        }}
      >
        {/* Left Portion: Image */}
        <div
          className="relative shrink-0"
          style={{
            width: "580px", // Increased width
            height: "750px", // Increased height
          }}
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
          className="flex flex-col shrink-0"
          style={{
            width: "580px",
            height: "388px",
            gap: "40px",
            marginTop: "-80px", // Moves the text portion up relative to the image
            marginLeft: "5px", // Shifts text 5px to the right
          }}
        >
          {/* Heading */}
          <h2
            style={{
              width: "391px",
              height: "106px",
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "44px",
              lineHeight: "120%",
              letterSpacing: "-0.01em",
              color: "#040819",
            }}
          >
            Create <span style={{ fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif" }}>&</span> Manage Courses Easily.
          </h2>

          {/* Subheading */}
          <p
            style={{
              width: "574px",
              height: "58px",
              color: "#4B4C53",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "160%",
                color: "#242528",
              }}
            >
              ByteSpace
            </span>
            <span
              style={{
                fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                fontWeight: 400,
                fontSize: "18px",
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
