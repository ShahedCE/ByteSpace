import React from "react";

export interface TestimonialCardProps {
  image: string;
  name: string;
  title: string;
  text: string;
}

export default function TestimonialCard({
  image,
  name,
  title,
  text,
}: TestimonialCardProps) {
  return (
    <div
      className="flex flex-col shrink-0 w-full lg:max-w-[374px] h-auto lg:h-[432px] p-6 bg-white rounded-[24px] gap-6"
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <div className="flex flex-col">
        <h3
          className="text-[18px] lg:text-[20px]"
          style={{
            fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            fontWeight: 600,
            lineHeight: "120%",
            letterSpacing: "-0.01em",
            color: "#000000",
          }}
        >
          {name}
        </h3>
        <span
          className="mt-1 text-[16px] lg:text-[18px]"
          style={{
            fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
            fontWeight: 400,
            lineHeight: "160%",
            color: "#003BE2",
          }}
        >
          {title}
        </span>
      </div>
      <p
        className="text-[14px] sm:text-[16px] lg:text-[18px]"
        style={{
          fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
          fontWeight: 400,
          lineHeight: "160%",
          color: "#4F4F4F",
        }}
      >
        {text}
      </p>
    </div>
  );
}
