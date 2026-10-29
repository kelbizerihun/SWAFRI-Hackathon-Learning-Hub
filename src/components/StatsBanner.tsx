"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Students", icon: "👨‍🎓" },
  { value: 500, suffix: "+", label: "Courses", icon: "📚" },
  { value: 200, suffix: "+", label: "Instructors", icon: "👩‍🏫" },
  { value: 95, suffix: "%", label: "Completion Rate", icon: "🏆" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ stat, started }: { stat: (typeof stats)[0]; started: boolean }) {
  const count = useCountUp(stat.value, 1800, started);
  return (
    <div className="text-center">
      <div className="text-2xl mb-1">{stat.icon}</div>
      <div className="stats-number">
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <p className="text-blue-200 text-sm font-medium mt-1">{stat.label}</p>
    </div>
  );
}

export default function StatsBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-16"
      style={{ background: "linear-gradient(135deg, #1d4ed8, #1e40af)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
