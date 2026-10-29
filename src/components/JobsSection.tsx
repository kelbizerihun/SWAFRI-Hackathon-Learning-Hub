const jobs = [
  {
    tag: "Internship",
    tagClass: "tag-internship",
    company: "Google",
    companyInitial: "G",
    companyBg: "#4285F4",
    title: "Product Design Intern",
    location: "Remote · Paid",
    description:
      "Work with Google's design team to create intuitive user experiences for millions of users worldwide.",
    skills: ["Figma", "UX Research", "Prototyping"],
  },
  {
    tag: "Remote job",
    tagClass: "tag-remote",
    company: "Meta",
    companyInitial: "M",
    companyBg: "#1877F2",
    title: "Junior Frontend Developer",
    location: "Remote · Full-time",
    description:
      "Build and ship features for React-based products used by billions. Strong Next.js & TypeScript experience preferred.",
    skills: ["React", "TypeScript", "CSS"],
  },
  {
    tag: "Certification",
    tagClass: "tag-cert",
    company: "Coursera",
    companyInitial: "C",
    companyBg: "#0056D2",
    title: "Google Data Analytics Certificate",
    location: "Self-paced · Certificate",
    description:
      "Earn a Google-backed certificate in data analytics. Covers SQL, R, Tableau, and data storytelling.",
    skills: ["SQL", "Tableau", "R"],
  },
];

export default function JobsSection() {
  return (
    <section className="py-20" style={{ background: "#0B0F19" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12 items-start">
          <div>
            <div className="section-tag mb-4 w-fit">💼 CAREERS & OPPORTUNITIES</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Your skills.{" "}
              <br />
              Your next opportunity.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Browse curated internships, remote jobs, and certifications that match your
              learning path and career goals.
            </p>
            <button className="btn-primary flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm">
              View All Careers →
            </button>
          </div>
        </div>

        {/* Job Cards */}
        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="feature-card rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 group cursor-pointer"
            >
              {/* Company logo */}
              <div
                className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                style={{ background: job.companyBg }}
              >
                {job.companyInitial}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span
                    className={`${job.tagClass} px-2.5 py-0.5 rounded-full text-xs font-medium`}
                  >
                    {job.tag}
                  </span>
                  <span className="text-slate-500 text-xs">{job.location}</span>
                </div>
                <h3 className="text-white font-semibold text-base mb-1">{job.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  {job.description}
                </p>
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-full text-xs text-slate-300"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div
                className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-all"
                style={{
                  background: "rgba(37,99,235,0.15)",
                  border: "1px solid rgba(37,99,235,0.3)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H7M17 7v10"
                    stroke="#60a5fa"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
