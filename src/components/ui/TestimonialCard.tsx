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
      className="flex flex-col"
      style={{
        width: "374px",
        height: "432px",
        backgroundColor: "#FFFFFF",
        borderRadius: "24px",
        padding: "24px",
        gap: "24px",
      }}
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
          style={{
            fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "120%",
            letterSpacing: "-0.01em",
            color: "#000000",
          }}
        >
          {name}
        </h3>
        <span
          style={{
            marginTop: "4px",
            fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "160%",
            color: "#003BE2",
          }}
        >
          {title}
        </span>
      </div>
      <p
        style={{
          fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "160%",
          color: "#4F4F4F",
        }}
      >
        {text}
      </p>
    </div>
  );
}
