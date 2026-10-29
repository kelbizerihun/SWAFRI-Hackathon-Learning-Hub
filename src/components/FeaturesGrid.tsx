const features = [
  {
    icon: "📚",
    title: "Courses",
    desc: "Access 500+ expert-led courses across design, tech, data, and more.",
    color: "#2563EB",
  },
  {
    icon: "📊",
    title: "Dashboard",
    desc: "Track your progress, streaks, and achievements in one smart dashboard.",
    color: "#8B5CF6",
  },
  {
    icon: "🤖",
    title: "AI Chatbot",
    desc: "Get instant answers, study help, and personalized recommendations.",
    color: "#00F0FF",
  },
  {
    icon: "💼",
    title: "Careers",
    desc: "Browse internships, jobs, and certifications matched to your skills.",
    color: "#F59E0B",
  },
  {
    icon: "📅",
    title: "Events",
    desc: "Join live workshops, webinars, and hackathons with industry pros.",
    color: "#10B981",
  },
  {
    icon: "❓",
    title: "FAQ",
    desc: "Find quick answers to every question about the platform.",
    color: "#EC4899",
  },
  {
    icon: "ℹ️",
    title: "About Us",
    desc: "Meet the team building the future of accessible education.",
    color: "#06B6D4",
  },
  {
    icon: "✉️",
    title: "Contact Us",
    desc: "Reach us anytime — we're here to help you grow.",
    color: "#F97316",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-20" style={{ background: "#0B0F19" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="section-tag mb-4 w-fit">🧩 WHAT WE OFFER</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Everything you need to move forward
          </h2>
          <p className="text-slate-400 max-w-lg">
            From curated learning paths to AI-powered support — we have every tool you need to
            succeed.
          </p>
        </div>

        {/* 2×4 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="feature-card relative rounded-2xl p-6 cursor-pointer group"
            >
              {/* Top-right arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H7M17 7v10"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Icon */}
              <div
                className="w-11 h-11 flex items-center justify-center rounded-xl mb-4 text-xl"
                style={{
                  background: `${f.color}18`,
                  border: `1px solid ${f.color}30`,
                }}
              >
                {f.icon}
              </div>

              <h3 className="font-semibold text-white text-sm mb-2">{f.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
