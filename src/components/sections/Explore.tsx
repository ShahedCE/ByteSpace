import Image from "next/image";

export default function Explore() {
  const categories = [
    { title: "Design", icon: "/icons/explore-icons/Frame.svg" },
    { title: "Development", icon: "/icons/explore-icons/Style=Filled.svg" },
    { title: "IT & Software", icon: "/icons/explore-icons/Style=Filled (1).svg" },
    { title: "Business", icon: "/icons/explore-icons/Style=Round.svg" },
    { title: "Marketing", icon: "/icons/explore-icons/Vector.svg" },
    { title: "Photography", icon: "/icons/explore-icons/Style=Outlined.svg" },
  ];

  return (
    <section
      className="w-full bg-white flex flex-col items-center px-4"
      style={{ marginTop: "72px", paddingBottom: "120px" }}
    >
      <div className="flex flex-col items-center text-center w-full">
        <h2
          className="text-[#040819]"
          style={{
            width: "792px",
            fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "120%",
            letterSpacing: "-0.01em",
            maxWidth: "100%", // For responsiveness
          }}
        >
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p
          className="text-[#82868E]"
          style={{
            width: "917px",
            marginTop: "16px",
            fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "160%",
            letterSpacing: "0%",
            maxWidth: "100%", // For responsiveness
          }}
        >
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>

        {/* Categories Container */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-full max-w-[1202px] gap-4 sm:gap-6 lg:gap-[40px] mt-[68px]"
        >
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-50 bg-white w-full aspect-square max-w-[167px] mx-auto"
              style={{
                borderRadius: "24px",
                border: "1px solid #CED0D3",
              }}
            >
              <div
                className="flex flex-col items-center justify-center"
                style={{ gap: "12px" }}
              >
                {/* Icon Circle */}
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "40px",
                    backgroundColor: "#D4FB20",
                    padding: "12px",
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={category.icon}
                      alt={category.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <span
                  className="text-[#040819] text-[14px] sm:text-[16px] lg:text-[20px] text-center"
                  style={{
                    fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                    fontWeight: 500,
                    lineHeight: "120%",
                  }}
                >
                  {category.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
