import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const milestones = [
  {
    id: 1,
    label: "Islamia University",
    sub: "Bahawalpur, Pakistan",
    x: 80,
    y: 220,
    summary: "Bachelor's degree — Built foundation in Computer Science and software development.",
  },
  {
    id: 2,
    label: "University of Stavanger",
    sub: "Stavanger, Norway",
    x: 250,
    y: 120,
    summary: "Master's in Computer Science — Specialized in Data Science and deepened expertise in software engineering, software quality, distributed systems, and research-driven engineering.",
  },
  {
    id: 3,
    label: "Laerdal Medical",
    sub: "Developer",
    x: 400,
    y: 180,
    summary: "Unity-based 3D simulation integrated with physical medical manikin reacting to real-time data. Gained deep understanding of real-time data systems and quality from a development perspective.",
  },
  {
    id: 4,
    label: "Equinor",
    sub: "QA Engineer",
    x: 530,
    y: 100,
    summary: "Transitioned from manual-heavy testing to Playwright automation. Introduced structured regression frameworks reducing dependency on ad-hoc testing and increasing release predictability.",
  },
  {
    id: 5,
    label: "Sekal",
    sub: "Automation & CI/CD",
    x: 660,
    y: 170,
    summary: "Tackled complex C#/Redis/Server/Web architecture. Implemented data-driven POM framework and integrated tests as CI/CD deployment gates, significantly reducing deployment instability.",
  },
  {
    id: 6,
    label: "Lyse",
    sub: "QA Framework Design",
    x: 800,
    y: 90,
    summary: "Built QA from zero structured QA. Introduced DoD, DoR, 3-Amigos, test strategy, Scrum ceremonies, pipeline validation, k6 performance testing, WCAG compliance accessibility. Transformed the devlopment into a streamlined, quality-focused process with a strong emphasis on automation and continuous improvement.",
  },
];

export default function JourneyMap() {
  const [active, setActive] = useState<number | null>(null);

  const pathD = `M ${milestones.map((m) => `${m.x} ${m.y}`).join(" L ")}`;
  const totalLength = 1200;

  return (
    <section id="journey" className="py-24 bg-section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 fade-up">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
            The Path
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            From Pakistan to Norway
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            From Pakistan to Norway — an academic and professional path built on continuous growth and transformation.
          </p>
        </div>

        <div className="fade-up overflow-x-auto" style={{ transitionDelay: "0.2s" }}>
          <svg viewBox="0 0 900 300" className="w-full min-w-[700px] h-auto">
            {/* Animated path */}
            <path
              d={pathD}
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
            <path
              d={pathD}
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="2.5"
              strokeDasharray={totalLength}
              strokeDashoffset={totalLength}
              className="animate-dash"
            />

            {/* Nodes */}
            {milestones.map((m) => (
              <g key={m.id}>
                <Popover open={active === m.id} onOpenChange={(open) => setActive(open ? m.id : null)}>
                  <PopoverTrigger asChild>
                    <g className="cursor-pointer" onMouseEnter={() => setActive(m.id)} onMouseLeave={() => setActive(null)}>
                      <circle
                        cx={m.x}
                        cy={m.y}
                        r="18"
                        fill="hsl(var(--background))"
                        stroke="hsl(var(--accent))"
                        strokeWidth="2.5"
                        className="transition-all hover:fill-[hsl(var(--accent)/0.1)]"
                      />
                      <circle
                        cx={m.x}
                        cy={m.y}
                        r="6"
                        fill="hsl(var(--accent))"
                      />
                      <text
                        x={m.x}
                        y={m.y + 34}
                        textAnchor="middle"
                        className="text-[11px] font-semibold fill-primary"
                      >
                        {m.label}
                      </text>
                      <text
                        x={m.x}
                        y={m.y + 48}
                        textAnchor="middle"
                        className="text-[9px] fill-muted-foreground"
                      >
                        {m.sub}
                      </text>
                    </g>
                  </PopoverTrigger>
                  <PopoverContent className="w-64 text-sm" side="top" sideOffset={24}>
                    <p className="font-semibold text-primary mb-1">{m.label}</p>
                    <p className="text-muted-foreground">{m.summary}</p>
                  </PopoverContent>
                </Popover>
              </g>
            ))}
          </svg>
                  {/* Flags legend */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-2 text-center">
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0F2A4A" }} />
            <span style={{ fontSize: "0.72rem", color: "#718096", fontWeight: 500 }}>Hover on the nodes to explore</span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
