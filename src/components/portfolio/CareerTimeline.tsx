import { Code, Search, Cog, GitBranch, ClipboardList, Crown } from "lucide-react";

const stages = [
  { icon: Code, label: "Developer", desc: "Development & simulation systems. Understanding systems from inside-out shaped a uniquely holistic QA perspective." },
  { icon: Search, label: "QA Engineer", desc: "Manual testing, defect management. First exposure to enterprise-scale quality governance and transitioned into quality engineering." },
  { icon: Cog, label: "Automation", desc: "Playwright, data-driven frameworks. Architected data-driven Page Object Model frameworks for complex C#/Redis/Web stacks. Elevated automation maturity across engineering teams." },
  { icon: GitBranch, label: "CI/CD Integration", desc: "Pipeline gates, deployment governance. Integrated automated tests as deployment gates within CI/CD pipelines. Quality became a hard constraint — not an afterthought — in every release cycle." },
  { icon: ClipboardList, label: "QA Strategy", desc: "Process design, DoD/DoR, test strategy. Established QA frameworks from scratch. Introduced process maturity: Definition of Done, Definition of Ready, 3-Amigos sessions, Test Strategy, k6 performance testing." },
  { icon: Crown, label: "Test Leadership", desc: "Mentoring, stakeholder alignment. Owning the quality vision. Coaching engineers, aligning Product and Dev, conducting Playwright training, shaping sprint ceremonies, and driving WCAG accessibility compliance." },
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
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            A deliberate progression from developer to quality architect — each step building toward strategic test leadership.
          </p>
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
                  <div className="hidden md:block absolute top-9 -right-2 w-6 h-6 rotate-45 border-t-2 border-r-2 border-accent z-20" style={{ right: "-1rem" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
