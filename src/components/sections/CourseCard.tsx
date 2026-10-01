import Image from "next/image";

export interface CourseCardProps {
  image: string;
  title: string;
  author: string;
  price: number;
  rating: number;
  lessons: string;
  duration: string;
  comments: string;
  level: string;
}

export default function CourseCard({
  image = "/images/image-1.jpg",
  title = "Learn Figma from Basic",
  author = "purepearl studio",
  price = 25,
  rating = 4.5,
  lessons = "17 Lessons",
  duration = "2 hours 16 mins",
  comments = "59 Comments",
  level = "Beginner",
}: CourseCardProps) {
  return (
    <div
      className="relative shrink-0 bg-white hover:shadow-md transition-shadow"
      style={{
        width: "373px",
        height: "384px",
        borderRadius: "24px",
        border: "1px solid #E6E8EC", // Thin silver border
      }}
    >
      {/* Image Area */}
      <div
        className="absolute overflow-hidden"
        style={{
          width: "341px",
          height: "195.14px",
          top: "16px",
          left: "16px",
          borderRadius: "12px",
          border: "1px solid #E6E8EC", // Thin silver border for image
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        {/* Overlay Pills (Image Info) */}
        <div
          className="absolute flex items-center"
          style={{
            width: "315px",
            height: "26px",
            top: "150px",
            left: "13px",
            gap: "12px",
          }}
        >
          {[lessons, duration, comments].map((text) => (
            <div
              key={text}
              className="flex items-center justify-center shrink-0"
              style={{
                height: "32px", // Increased height
                borderRadius: "24px",
                padding: "6px 12px",
                background: "#F6F6F699",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <span
                className="text-[#3F3F46]"
                style={{
                  fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "120%",
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div
        className="absolute flex flex-col justify-between"
        style={{
          width: "341px", // Increased width to match image width and prevent text cutoff
          height: "131px",
          top: "232px",
          left: "16px",
        }}
      >
        {/* Title & Subtitle */}
        <div className="flex flex-col gap-[4px]">
          <h3
            style={{
              width: "280px", // Give title enough width but prevent it from overlapping rating
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "120%",
              letterSpacing: "-0.01em",
              color: "#040819",
              verticalAlign: "middle",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {title}
          </h3>
          <p
            className="text-[#82868E]"
            style={{
              fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "160%",
            }}
          >
            by <span className="text-[#003BE2]">{author}</span>
          </p>
        </div>

        {/* Level & Avatars */}
        <div className="flex items-center gap-[12px]">
          {/* Beginner Pill */}
          <div
            className="flex items-center justify-center shrink-0 bg-[#F5F5F6]"
            style={{
              width: "97px",
              height: "32px",
              gap: "4px",
              borderRadius: "24px",
              padding: "6px 12px",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#4B4C53">
              <rect x="2" y="14" width="4" height="8" rx="1" />
              <rect x="10" y="8" width="4" height="14" rx="1" />
              <rect x="18" y="2" width="4" height="20" rx="1" />
            </svg>
            <span
              style={{
                width: "49px",
                height: "14px",
                fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "120%",
                color: "#4B4C53",
                textAlign: "center",
                verticalAlign: "middle",
                display: "inline-block",
              }}
            >
              {level}
            </span>
          </div>

          {/* Avatars Image */}
          <div
            className="relative shrink-0"
            style={{ width: "128px", height: "32px" }}
          >
            <Image
              src="/images/signup.png"
              alt="Students"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Price */}
        <div className="flex items-end gap-[4px]">
          <span
            style={{
              width: "36px",
              height: "24px",
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "120%",
              letterSpacing: "-0.01em",
              color: "#003BE2",
              verticalAlign: "middle",
              display: "inline-block",
            }}
          >
            ${price}
          </span>
          <span
            style={{
              width: "42px",
              height: "19px",
              fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "160%",
              color: "#4F4F4F",
              verticalAlign: "middle",
              display: "inline-block",
            }}
          >
            /lifetime
          </span>
        </div>
      </div>

      {/* Rating */}
      <div
        className="absolute flex items-center justify-end"
        style={{
          height: "29px",
          top: "232px",
          left: "296px", // Adjusted left position since elements are bigger
          right: "17px", // Snap to right edge padding (373 - 17 = 356. 356 - 306 = 50. So 17px right gap.)
          gap: "0px", // Reduced gap to 0px
        }}
      >
        <span
          style={{
            width: "26px",
            height: "29px",
            fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
            fontWeight: 400,
            fontSize: "18px", // Adjusted so it fits within 26px width
            lineHeight: "29px",
            color: "#4B4C53", // Slightly deeper color
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {rating}
        </span>
        <div
          className="relative shrink-0 flex items-center justify-center"
          style={{ width: "24px", height: "24px", marginTop: "-2px" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#D4FB20"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
