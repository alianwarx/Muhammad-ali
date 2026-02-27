import { MessageCircle, Clock, FileEdit, Presentation } from "lucide-react";

const items = [
  { icon: MessageCircle, label: "Stakeholder Communication", desc: "Clear, structured reporting to technical and non-technical audiences." },
  { icon: Clock, label: "Constructive Challenge", desc: "Pushing back on unrealistic deadlines with data-driven reasoning." },
  { icon: FileEdit, label: "Story Refinement", desc: "Collaborating with Product Owners to sharpen requirements and acceptance criteria." },
  { icon: Presentation, label: "Playwright Training", desc: "Internal sessions to upskill teams on modern test automation." },
];

export default function LeadershipSection() {
  return (
    <section className="py-24 bg-section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
            Ready to Lead
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Leadership & Consulting Readiness
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <div
              key={item.label}
              className="flex gap-4 p-5 rounded-xl bg-card border border-border fade-up"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-primary text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
