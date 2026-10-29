import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0B0F19 0%, #0d1424 50%, #0B0F19 100%)" }}
    >
      {/* Background glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,240,255,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            {/* Tag badge */}
            <div className="section-tag mb-6 w-fit">
              <span>✨</span>
              <span>BIG AMBITIONS. YOUR NEXT STEP.</span>
            </div>

            {/* Headline */}
            <h1
              className="font-black leading-tight mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", lineHeight: "1.12" }}
            >
              Learn New Skills.{" "}
              <br />
              Build Your Future{" "}
              <span className="gradient-text">Today!</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              Access high-quality courses, AI-powered learning paths, and real career
              opportunities — all in one place. Start your journey and transform your ambitions
              into achievements.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button className="btn-primary flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white">
                Start E-Learning
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="btn-outline flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white">
                Explore Courses
              </button>
            </div>

            {/* Community */}
            <div className="flex items-center gap-4">
              {/* Avatars */}
              <div className="flex -space-x-3">
                {["#8B5CF6", "#2563EB", "#059669", "#DC2626", "#D97706"].map((color, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white border-2"
                    style={{
                      background: color,
                      borderColor: "#0B0F19",
                      zIndex: 5 - i,
                    }}
                  >
                    {["A", "B", "C", "D", "E"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                  <span className="text-white font-semibold text-sm ml-1">4.9/5</span>
                </div>
                <p className="text-slate-400 text-xs">
                  from our community — Join{" "}
                  <span className="text-white font-medium">10,000+ curious minds</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Illustration card */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="relative rounded-3xl overflow-hidden w-full max-w-lg"
              style={{
                background: "linear-gradient(135deg, #1a1f35, #131929)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
              }}
            >
              {/* Illustration image — user will drop their image in /public/hero.png */}
              <div
                className="w-full aspect-square relative flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #1e3a5f 100%)" }}
              >
                <Image
                  src="/images/hero.png"
                  alt="AI-powered learning illustration"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Fallback content when no image */}
                <div className="relative z-10 text-center p-8">
                  <div className="text-7xl mb-4">🎓</div>
                  <p className="text-slate-300 text-sm">Drop hero.png in /public/images/</p>
                </div>
              </div>

              {/* AI-powered badge */}
              <div
                className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(0,240,255,0.1)",
                  border: "1px solid rgba(0,240,255,0.3)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-medium" style={{ color: "#00F0FF" }}>
                  AI-powered learning
                </span>
              </div>

              {/* Floating stat card */}
              <div
                className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl"
                style={{
                  background: "rgba(11,15,25,0.9)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400">Active learners</p>
                    <p className="text-white font-bold text-lg">10,000+</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">Completion rate</p>
                    <p className="font-bold text-lg" style={{ color: "#00F0FF" }}>95%</p>
                  </div>
                  <div className="text-2xl animate-float">🚀</div>
                </div>
              </div>
            </div>

            {/* Floating badge top-left */}
            <div
              className="absolute -top-4 -left-4 px-3 py-2 rounded-xl animate-float"
              style={{
                background: "rgba(37,99,235,0.9)",
                border: "1px solid rgba(37,99,235,0.6)",
                animationDelay: "0.5s",
              }}
            >
              <p className="text-white text-xs font-semibold">500+ Courses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
