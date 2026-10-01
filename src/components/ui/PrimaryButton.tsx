import React from "react";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  width?: string;
}

export default function PrimaryButton({ text, width = "123px", ...props }: PrimaryButtonProps) {
  return (
    <button
      {...props}
      className="bg-[#D4FB20] hover:bg-[#bce600] transition-colors duration-300"
      style={{
        width: width,
        height: "46px",
        borderRadius: "24px",
        padding: "12px 24px",
        fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "120%",
        color: "#242528",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      {text}
    </button>
  );
}
