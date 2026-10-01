import React from "react";
import Image from "next/image";

interface SocialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc: string;
  altText: string;
}

export default function SocialButton({ iconSrc, altText, ...props }: SocialButtonProps) {
  return (
    <button
      {...props}
      className="w-[72px] h-[72px] rounded-[24px] border border-[#D1D5DB] flex items-center justify-center hover:bg-gray-50 transition-colors"
    >
      <div style={{ width: "40px", height: "40px", position: "relative" }}>
        <Image src={iconSrc} alt={altText} fill className="object-contain" />
      </div>
    </button>
  );
}
