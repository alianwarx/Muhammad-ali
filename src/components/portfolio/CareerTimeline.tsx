import { Code, Search, Cog, GitBranch, ClipboardList, Crown } from "lucide-react";

const stages = [
  { icon: Code, label: "Developer", desc: "Full-stack development & simulation systems" },
  { icon: Search, label: "QA Engineer", desc: "Manual testing, defect management" },
  { icon: Cog, label: "Automation", desc: "Playwright, data-driven frameworks" },
  { icon: GitBranch, label: "CI/CD Integration", desc: "Pipeline gates, deployment governance" },
  { icon: ClipboardList, label: "QA Strategy", desc: "Process design, DoD/DoR, test strategy" },
  { icon: Crown, label: "Test Leadership", desc: "Mentoring, stakeholder alignment" },
];

export default function CareerTimeline() {
  return (
    <section id="evolution" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
            Transformation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Career Evolution
          </h2>
        </div>

        <div className="relative fade-up" style={{ transitionDelay: "0.2s" }}>
          {/* Horizontal line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border" />

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-4">
            {stages.map((s, i) => (
              <div key={s.label} className="flex flex-col items-center text-center relative">
                <div className="w-24 h-24 rounded-full bg-background border-2 border-accent flex items-center justify-center mb-4 relative z-10">
                  <s.icon className="w-8 h-8 text-accent" />
                </div>
                <p className="font-semibold text-primary text-sm">{s.label}</p>
                <p className="text-xs text-muted-foreground mt-1 max-w-[140px]">{s.desc}</p>
                {i < stages.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-2 w-4 h-4 rotate-45 border-t-2 border-r-2 border-accent z-20" style={{ right: "-1rem" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
