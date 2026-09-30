import CourseCard from "@/components/sections/CourseCard";

export default function Discover() {
  const row1 = [
    { label: "Featured", active: true },
    { label: "Music" },
    { label: "Drawing & Painting" },
    { label: "Marketing" },
    { label: "Animation" },
    { label: "Social Media" },
    { label: "UI/UX Design" },
    { label: "Creative Marketing" },
  ];

  const row2 = [
    { label: "Digital Illustration" },
    { label: "Film & Video" },
    { label: "Crafts" },
    { label: "Freelance & Entrepreneurship" },
    { label: "Graphic Design" },
    { label: "Photography" },
  ];

  const row3 = [
    { label: "Productivity" },
    { label: "Web Development" },
    { label: "Data Science" },
    { label: "Cooking" },
    { label: "+ More", isMore: true },
  ];

  const Tab = ({ label, active, isMore }: { label: string; active?: boolean; isMore?: boolean }) => (
    <div
      className="flex items-center justify-center shrink-0 cursor-pointer select-none"
      style={{
        height: "43px",
        borderRadius: "24px",
        padding: isMore ? "0px" : "12px 16px",
        background: isMore ? "transparent" : (active ? "#D4FB20" : "#F5F5F6"),
        transition: "all 0.2s ease-in-out",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "120%",
          letterSpacing: "0%",
          color: isMore ? "#003BE2" : (active ? "#040819" : "#3F3F46"),
        }}
      >
        {label}
      </span>
    </div>
  );

  return (
    <section className="w-full bg-white flex flex-col items-center px-4 mt-[72px] pb-[100px]">
      <div className="flex flex-col items-center text-center w-full">
        <h2
          style={{
            fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "44px",
            lineHeight: "120%",
            letterSpacing: "-1%",
            maxWidth: "588px",
            color: "#040819",
          }}
        >
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>

        <p
          className="mt-[20px]"
          style={{
            fontFamily: "var(--font-satoshi), 'Satoshi', sans-serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "160%",
            letterSpacing: "0%",
            maxWidth: "917px",
            color: "#82868E",
          }}
        >
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
        </p>
      </div>

      {/* Tabs Container */}
      <div className="flex flex-col items-center w-full mt-[42px]" style={{ gap: "21px" }}>
        {/* Row 1 */}
        <div className="flex items-center justify-center flex-wrap" style={{ gap: "16px", maxWidth: "1086px" }}>
          {row1.map((tab, idx) => (
            <Tab key={idx} label={tab.label} active={tab.active} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex items-center justify-center flex-wrap" style={{ gap: "16px", maxWidth: "952px" }}>
          {row2.map((tab, idx) => (
            <Tab key={idx} label={tab.label} />
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex items-center justify-center flex-wrap" style={{ gap: "16px", maxWidth: "622px" }}>
          {row3.map((tab, idx) => (
            <Tab key={idx} label={tab.label} isMore={tab.isMore} />
          ))}
        </div>
      </div>

      {/* Course Cards Grid Container */}
      <div 
        className="flex flex-wrap justify-start"
        style={{
          width: "1199px",
          height: "808px",
          marginTop: "77px",
          gap: "40px",
        }}
      >
        {[
          {
            image: "/images/image-1.jpg",
            title: "Learn Figma from Basic",
            author: "purepearl studio",
            price: 25,
            rating: 4.5,
            lessons: "17 Lessons",
            duration: "2 hours 16 mins",
            comments: "59 Comments",
            level: "Beginner",
          },
          {
            image: "/images/card-image2.jpg",
            title: "Build Digital Asset",
            author: "purepearl studio",
            price: 25,
            rating: 4.5,
            lessons: "17 Lessons",
            duration: "2 hours 16 mins",
            comments: "59 Comments",
            level: "Beginner",
          },
          {
            image: "/images/card-image3.jpg",
            title: "the Power of Big Data",
            author: "purepearl studio",
            price: 25,
            rating: 4.5,
            lessons: "17 Lessons",
            duration: "2 hours 16 mins",
            comments: "59 Comments",
            level: "Beginner",
          },
          {
            image: "/images/card-image4.jpg",
            title: "Balancing Productivity an...",
            author: "purepearl studio",
            price: 25,
            rating: 4.5,
            lessons: "17 Lessons",
            duration: "2 hours 16 mins",
            comments: "59 Comments",
            level: "Beginner",
          },
          {
            image: "/images/card-image5.jpg",
            title: "Mastering Money Manage...",
            author: "purepearl studio",
            price: 25,
            rating: 4.5,
            lessons: "17 Lessons",
            duration: "2 hours 16 mins",
            comments: "59 Comments",
            level: "Beginner",
          },
          {
            image: "/images/card-image6.jpg",
            title: "From Idea to Startup Succ...",
            author: "purepearl studio",
            price: 25,
            rating: 4.5,
            lessons: "17 Lessons",
            duration: "2 hours 16 mins",
            comments: "59 Comments",
            level: "Beginner",
          }
        ].map((course, idx) => (
          <CourseCard 
            key={idx}
            image={course.image}
            title={course.title}
            author={course.author}
            price={course.price}
            rating={course.rating}
            lessons={course.lessons}
            duration={course.duration}
            comments={course.comments}
            level={course.level}
          />
        ))}
      </div>
    </section>
  );
}
