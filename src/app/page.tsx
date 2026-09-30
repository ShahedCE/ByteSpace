import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white selection:bg-[#D4FB20] selection:text-black overflow-x-hidden">
      {/* Hero Section Container with Blue Background & Blueprint Grid (Ends at the base of the ellipse) */}
      <div className="relative w-full bg-[#003BE2]">
        {/* Continuous Blueprint Grid starting strictly from the left edge (0, 0) so no cut boxes appear on the left */}
        <div
          className="absolute inset-0 pointer-events-none select-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.14) 1.5px, transparent 1.5px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.14) 1.5px, transparent 1.5px)
            `,
            backgroundSize: "120px 120px",
            backgroundPosition: "0 0",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col">
          <Navbar />
          <Hero />
        </div>
      </div>

      {/* From ellipse end onwards: Clean White Background */}
      <main className="flex-1 bg-white">
        {/* Future sections (Stats, Courses, Testimonials, etc.) will be placed here */}
      </main>
      <Footer />
    </div>
  );
}
