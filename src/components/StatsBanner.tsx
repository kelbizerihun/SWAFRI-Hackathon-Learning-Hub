export default function StatsBanner() {
  const stats = [
    { value: "10,000+", label: "Students" },
    { value: "500+", label: "Courses" },
    { value: "200+", label: "Instructors" },
    { value: "95%", label: "Completion Rate" },
  ];

  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "10px 0 70px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        
        {/* Solid Royal Blue Container matching screenshot */}
        <div 
          style={{
            backgroundColor: "#2563EB",
            borderRadius: "28px",
            padding: "44px 32px",
            boxShadow: "0 10px 25px -5px rgba(37,99,235,0.25)",
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/20">
            {stats.map((item, idx) => (
              <div 
                key={item.label} 
                className={`flex flex-col items-center justify-center ${
                  idx >= 2 ? "pt-6 lg:pt-0" : ""
                }`}
              >
                <div 
                  style={{
                    color: "#FFFFFF",
                    fontSize: "clamp(32px, 3.5vw, 44px)",
                    fontWeight: 900,
                    letterSpacing: "-1px",
                    lineHeight: 1.1,
                    marginBottom: "6px",
                  }}
                >
                  {item.value}
                </div>
                <p 
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: "15px",
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
