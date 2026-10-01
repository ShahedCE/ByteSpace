import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function InputField({ label, ...props }: InputFieldProps) {
  return (
    <div className="flex flex-col group w-full lg:max-w-[453px]" style={{ height: "77px", gap: "8px" }}>
      <label
        className="text-[#242528] group-focus-within:text-[#b5d61a] group-focus-within:-translate-y-1 transform transition-all duration-300 ease-out"
        style={{
          fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        {label}
      </label>
      <input
        {...props}
        className="placeholder-[#9CA3AF] border border-[#E6E8EC] focus:border-[#D4FB20] focus:shadow-[0_0_0_4px_rgba(212,251,32,0.2)] transition-all duration-300 ease-out"
        style={{
          width: "100%",
          height: "48px",
          borderRadius: "12px",
          padding: "12px 24px",
          outline: "none",
          fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "160%",
          color: "#242528",
          letterSpacing: props.type === "password" ? "0px" : "normal",
        }}
      />
    </div>
  );
}
