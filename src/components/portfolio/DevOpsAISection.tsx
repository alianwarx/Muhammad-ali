import { Container, FileCode, ShieldCheck, Brain, FileSearch, MessageSquare } from "lucide-react";

const devops = [
  { icon: Container, label: "Docker Containerization" },
  { icon: FileCode, label: "YAML Pipeline Debugging" },
  { icon: ShieldCheck, label: "CI/CD Quality Gates" },
];

const ai = [
  { icon: Brain, label: "AI-Assisted Requirement Analysis" },
  { icon: FileSearch, label: "AI-Supported Test Generation" },
  { icon: MessageSquare, label: "Log Summarization & Defect Triage" },
];

export default function DevOpsAISection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
            Technical Edge
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            DevOps & AI in QA
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 fade-up" style={{ transitionDelay: "0.15s" }}>
          {/* DevOps */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary border-b border-border pb-2">
              DevOps Integration
            </h3>
            {devops.map((d) => (
              <div key={d.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <d.icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-sm text-foreground">{d.label}</p>
              </div>
            ))}
          </div>

          {/* AI */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary border-b border-border pb-2">
              AI Capabilities
            </h3>
            {ai.map((a) => (
              <div key={a.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <a.icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-sm text-foreground">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
