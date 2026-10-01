import React from "react";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function Testimonial() {
  return (
    <section
      className="relative w-full flex justify-center overflow-hidden"
      style={{
        minHeight: "784px",
        backgroundColor: "#FFFFFF",
        backgroundImage: `
          radial-gradient(
            ellipse 600px 500px at 52% 25%,
            rgba(195, 235, 60, 0.80) 0%,
            rgba(210, 245, 100, 0.35) 35%,
            transparent 70%
          ),
          radial-gradient(
            ellipse 600px 600px at 100% 45%,
            rgba(195, 235, 60, 0.6) 0%,
            rgba(210, 245, 100, 0.25) 40%,
            transparent 70%
          ),
          radial-gradient(
            ellipse 1000px 800px at -8% 100%,
            rgba(125, 140, 255, 0.6) 0%,
            rgba(190, 205, 255, 0.3) 45%,
            transparent 72%
          ),
          linear-gradient(
            to top,
            rgba(125, 140, 255, 0.08) 0%,
            transparent 60%
          )
        `,
      }}
    >
      <div
        className="relative mx-auto flex flex-col"
        style={{
          width: "1204px",
          maxWidth: "100%",
        }}
      >
        {/* Top Text Row */}
        <div
          className="flex justify-between w-full"
          style={{
            marginTop: "74px", // Paragraph starts at 74px from top
          }}
        >
          <h2
            style={{
              width: "577px",
              marginTop: "36px", // (110 - 74 = 36px) to place heading at 110px from top
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "44px",
              lineHeight: "120%",
              letterSpacing: "-0.01em",
              color: "#000000",
            }}
          >
            Discover What Our<br />Community Is Saying
          </h2>

          <p
            style={{
              width: "580px",
              fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
              color: "#4F4F4F",
            }}
          >
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Cards Row */}
        <div
          className="flex w-full"
          style={{
            marginTop: "72px",
            marginBottom: "60px",
            gap: "41px",
          }}
        >
          {[
            {
              image: "/images/1st.png",
              name: "Sarah M.",
              title: "Enthusiastic Learner",
              text: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
            },
            {
              image: "/images/2nd.png",
              name: "James L.",
              title: "Lifelong Learner",
              text: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
            },
            {
              image: "/images/3rd.png",
              name: "Alex B.",
              title: "Inspired Creator",
              text: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
            }
          ].map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              image={testimonial.image}
              name={testimonial.name}
              title={testimonial.title}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
