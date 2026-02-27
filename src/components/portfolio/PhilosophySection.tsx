import { Target, ArrowLeftRight, Shield, GitBranch, Users } from "lucide-react";

const pillars = [
  { icon: Target, label: "Risk-Based Testing", desc: "Focus effort where failure costs the most." },
  { icon: ArrowLeftRight, label: "Shift-Left Approach", desc: "Quality starts at requirements, not after code." },
  { icon: Shield, label: "Automation as Safety Net", desc: "Reliable automated suites catch regressions early." },
  { icon: GitBranch, label: "CI/CD Governance", desc: "Pipelines as quality gates, not just deployment tools." },
  { icon: Users, label: "Collaboration Over Silos", desc: "QA embedded in the team, not a separate phase." },
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 bg-section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
            Principles
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Quality Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {pillars.map((p, i) => (
            <div
              key={p.label}
              className="text-center space-y-4 fade-up"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 border border-border flex items-center justify-center mx-auto">
                <p.icon className="w-7 h-7 text-accent" />
              </div>
              <p className="font-semibold text-primary text-sm">{p.label}</p>
              <p className="text-xs text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
