const events = [
  {
    type: "Workshop",
    typeColor: "#8B5CF6",
    typeBg: "rgba(139,92,246,0.15)",
    month: "NOV",
    day: "12",
    title: "Design your first portfolio-ready app",
    presenter: "Sarah K. — UX Lead @ Figma",
    time: "10:00 AM — 1:00 PM GMT",
  },
  {
    type: "Webinar",
    typeColor: "#2563EB",
    typeBg: "rgba(37,99,235,0.15)",
    month: "NOV",
    day: "18",
    title: "Your next chapter: a career in tech",
    presenter: "David Okafor — Sr. Engineer @ Google",
    time: "3:00 PM — 4:30 PM GMT",
  },
  {
    type: "Hackathon",
    typeColor: "#10B981",
    typeBg: "rgba(16,185,129,0.15)",
    month: "NOV",
    day: "24",
    title: "Build AI at this weekend challenge",
    presenter: "Open to all — Hosted by Learning Hub",
    time: "48-hour event, Nov 24–26",
  },
];

export default function EventsSection() {
  return (
    <section className="py-20" style={{ background: "#0d1120" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="section-tag mb-4 w-fit">📅 EVENTS & WORKSHOPS</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Learn together. Go further.
            </h2>
            <p className="text-slate-400">
              Live sessions with industry experts to accelerate your growth.
            </p>
          </div>
          <button className="flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
            View all events
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
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

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {events.map((event) => (
            <div
              key={event.title}
              className="feature-card rounded-2xl p-6 flex flex-col gap-4 group cursor-pointer"
            >
              {/* Type badge */}
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold w-fit"
                style={{
                  background: event.typeBg,
                  color: event.typeColor,
                  border: `1px solid ${event.typeColor}30`,
                }}
              >
                {event.type}
              </span>

              {/* Date + Info */}
              <div className="flex items-start gap-4">
                <div className="event-date-badge flex-shrink-0">
                  <div className="text-xs text-blue-300 font-medium">{event.month}</div>
                  <div className="text-white font-bold text-xl leading-none">{event.day}</div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm leading-snug mb-1">
                    {event.title}
                  </h3>
                  <p className="text-slate-400 text-xs">{event.presenter}</p>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#64748b" strokeWidth="2" />
                  <path d="M12 6v6l4 2" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {event.time}
              </div>

              {/* Register button */}
              <button className="flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors mt-auto">
                Register
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
          ))}
        </div>
      </div>
    </section>
  );
}
