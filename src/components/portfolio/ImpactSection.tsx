import { useEffect, useRef, useState } from "react";
import { TrendingUp, BarChart3, Layers, Network, ShieldCheck } from "lucide-react";

const metrics = [
  { icon: TrendingUp, value: 85, suffix: "%", label: "Deployment Stability Improved" },
  { icon: BarChart3, value: 70, suffix: "%", label: "Manual Regression Reduced" },
  { icon: Layers, value: 3, suffix: "", label: "QA Frameworks Built from Zero" },
  { icon: Network, value: 10, suffix: "+", label: "Systems Integrated & Tested" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "CI/CD Governance Enabled" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 1500;
          const step = (ts: number) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-accent">
      {count}{suffix}
    </div>
  );
}

export default function ImpactSection() {
  return (
    <section id="impact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
            Measurable Outcomes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Impact & Results
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="text-center space-y-3 fade-up"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <m.icon className="w-7 h-7 text-accent" />
              </div>
              <AnimatedCounter target={m.value} suffix={m.suffix} />
              <p className="text-xs text-muted-foreground font-medium">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
