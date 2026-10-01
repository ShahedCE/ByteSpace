import Image from "next/image";

const partnerLogos = [
  { name: "Logoipsum 1", src: "/icons/logos/Frame (1).png", width: 167, height: 41 },
  { name: "Logoipsum 2", src: "/icons/logos/Frame (2).png", width: 168, height: 41 },
  { name: "Logoipsum 3", src: "/icons/logos/Frame (3).png", width: 170, height: 41 },
  { name: "Logoipsum 4", src: "/icons/logos/Frame (4).png", width: 170, height: 41 },
  { name: "Logoipsum 5", src: "/icons/logos/Frame (5).png", width: 169, height: 42 },
];

export default function LogoPartner() {
  return (
    <section
      aria-label="Partner Logos"
      className="w-full bg-[#F5F5F6] flex justify-center items-center py-10 lg:py-0 lg:h-[202px]"
      style={{ backgroundColor: "#F5F5F6" }}
    >
      <div className="w-full max-w-[1440px] mx-auto flex justify-center items-center px-4 sm:px-6">
        <div
          className="w-full max-w-[1132px] h-auto flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-[72px] py-2"
        >
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-1"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="w-full max-w-[170px] h-auto object-contain select-none pointer-events-none opacity-100 transition-opacity hover:opacity-80"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
