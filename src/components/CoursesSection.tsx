import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    id: 1,
    tag: "Design",
    tagClass: "tag-design",
    title: "UI/UX Design Fundamentals",
    instructor: "Sarah Johnson",
    rating: 4.9,
    reviews: 2341,
    hours: "24h",
    progress: 35,
    image: "/images/course-design.png",
    color: "#8B5CF6",
  },
  {
    id: 2,
    tag: "Development",
    tagClass: "tag-dev",
    title: "Full-Stack Web Development",
    instructor: "Alex Chen",
    rating: 4.8,
    reviews: 1892,
    hours: "48h",
    progress: 12,
    image: "/images/course-dev.png",
    color: "#2563EB",
  },
  {
    id: 3,
    tag: "Data science",
    tagClass: "tag-data",
    title: "Data Science with Python",
    instructor: "Dr. Maria Lopez",
    rating: 4.9,
    reviews: 3102,
    hours: "36h",
    progress: 0,
    image: "/images/course-data.png",
    color: "#10B981",
  },
  {
    id: 4,
    tag: "Artificial intelligence",
    tagClass: "tag-ai",
    title: "AI/ML Everyday Productivity",
    instructor: "James Osei",
    rating: 4.7,
    reviews: 978,
    hours: "20h",
    progress: 0,
    image: "/images/course-ai.png",
    color: "#F59E0B",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="star" style={{ fontSize: "11px" }}>
          {i < Math.floor(rating) ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export default function CoursesSection() {
  return (
    <section className="py-20" style={{ background: "#0d1120" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="section-tag mb-4 w-fit">📖 COURSE CATALOG</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Small steps. Powerful skills.
            </h2>
            <p className="text-slate-400">
              Explore hands-on courses designed for real-world results.
            </p>
          </div>
          <Link
            href="/courses"
            className="flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            View all courses
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((course) => (
            <div key={course.id} className="course-card rounded-2xl flex flex-col">
              {/* Thumbnail */}
              <div
                className="relative aspect-video overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${course.color}22, ${course.color}08)`,
                }}
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Fallback emoji */}
                <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-30">
                  {course.tag === "Design" ? "🎨" : course.tag === "Development" ? "💻" : course.tag === "Data science" ? "📊" : "🤖"}
                </div>
              </div>

              <div className="p-4 flex flex-col flex-1">
                {/* Tag */}
                <span
                  className={`${course.tagClass} inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-2 w-fit`}
                >
                  {course.tag}
                </span>

                {/* Title */}
                <h3 className="text-white font-semibold text-sm leading-snug mb-2 flex-1">
                  {course.title}
                </h3>

                {/* Instructor */}
                <p className="text-slate-400 text-xs mb-3">by {course.instructor}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <StarRating rating={course.rating} />
                  <span className="text-white text-xs font-medium">{course.rating}</span>
                  <span className="text-slate-500 text-xs">({course.reviews.toLocaleString()})</span>
                </div>

                {/* Progress bar (only if enrolled) */}
                {course.progress > 0 && (
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 mt-auto border-t border-white/5">
                  <span className="text-slate-400 text-xs">⏱ {course.hours}</span>
                  <button className="flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                    Enroll Now
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
