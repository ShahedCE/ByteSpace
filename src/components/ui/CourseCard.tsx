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
      className="relative shrink-0 bg-white hover:shadow-md transition-shadow flex flex-col p-4 w-full max-w-[373px] mx-auto rounded-[24px] border border-[#E6E8EC]"
    >
      {/* Image Area */}
      <div className="relative w-full aspect-[341/195.14] rounded-xl overflow-hidden border border-[#E6E8EC]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        {/* Overlay Pills (Image Info) */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 flex-wrap">
          {[lessons, duration, comments].map((text) => (
            <div
              key={text}
              className="flex items-center justify-center shrink-0 bg-[#F6F6F699] backdrop-blur-[8px] rounded-full px-2 py-1"
            >
              <span 
                className="text-[#3F3F46] leading-[120%]"
                style={{
                  fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col mt-5 gap-[12px] w-full">
        {/* Title & Rating Row */}
        <div className="flex justify-between items-start gap-2">
          {/* Title & Subtitle */}
          <div className="flex flex-col gap-1 w-full overflow-hidden">
            <h3 
              className="leading-[120%] tracking-[-0.01em] text-[#040819] truncate"
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "20px",
              }}
            >
              {title}
            </h3>
            <p 
              className="text-[#82868E] leading-[160%]"
              style={{
                fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
              }}
            >
              by <span className="text-[#003BE2]">{author}</span>
            </p>
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-1 shrink-0">
            <span 
              className="text-[#4B4C53] leading-none"
              style={{
                fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                fontWeight: 400,
                fontSize: "18px",
              }}
            >
              {rating}
            </span>
            <div className="flex items-center justify-center w-6 h-6 -mt-0.5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#D4FB20"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Level & Avatars */}
        <div className="flex items-center gap-3">
          {/* Beginner Pill */}
          <div className="flex items-center justify-center shrink-0 bg-[#F5F5F6] rounded-full px-3 py-1.5 gap-1.5 h-[32px]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#4B4C53">
              <rect x="2" y="14" width="4" height="8" rx="1" />
              <rect x="10" y="8" width="4" height="14" rx="1" />
              <rect x="18" y="2" width="4" height="20" rx="1" />
            </svg>
            <span 
              className="text-[#4B4C53]"
              style={{
                fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
              }}
            >
              {level}
            </span>
          </div>

          {/* Avatars Image */}
          <div className="relative shrink-0 w-[128px] h-[32px]">
            <Image
              src="/images/signup.png"
              alt="Students"
              fill
              className="object-contain object-left"
            />
          </div>
        </div>

        {/* Price */}
        <div className="flex items-end gap-1 mt-1">
          <span 
            className="leading-[120%] tracking-[-0.01em] text-[#003BE2]"
            style={{
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "20px",
            }}
          >
            ${price}
          </span>
          <span 
            className="leading-[160%] text-[#4F4F4F]"
            style={{
              fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
              fontWeight: 400,
              fontSize: "12px",
            }}
          >
            /lifetime
          </span>
        </div>
      </div>
    </div>
  );
}

