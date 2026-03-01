import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, Target, Zap, TrendingUp, Users } from "lucide-react";

const cases = [
  {
    id: "equinor",
    company: "Equinor",
    industry: "Energy · Enterprise",
    headline: "From Manual Regression to Automated Confidence",
    context:
      "A manual-heavy regression process with no structured automation strategy. Release cycles were unpredictable, and test coverage depended entirely on individual effort and institutional memory.",
    action:
      "Introduced Playwright-based automation for regression coverage. Designed reusable test suites aligned with release checkpoints. Established the concept of a 'quality baseline' that teams could rely on across releases.",
    impact:
      "Increased release predictability. Reduced time spent on repetitive regression. Created a foundation for scalable automation that outlasted the engagement.",
    leadership:
      "Advocated for automation investment to stakeholders. Trained team members on test scripting principles. Positioned QA as a strategic function rather than a final-stage bottleneck.",
    tags: ["Playwright", "Regression Automation", "Enterprise QA"],
  },
  {
    id: "sekal",
    company: "Sekal",
    industry: "Oil & Gas · Deep Tech",
    headline: "CI/CD Quality Gates for a Complex Legacy Architecture",
    context:
      "A complex technical stack — C#, Redis, Web Portal — with loosely coupled services and no automated quality guardrails. Deployments were frequent, and instability was common.",
    action:
      "Implemented a data-driven Page Object Model (POM) framework. Mapped test coverage to deployment risk zones. Integrated automated test suites as hard deployment gates within CI/CD pipelines. Structured cross-team test ownership.",
    impact:
      "Reduced deployment instability. Established automated quality governance as a CI/CD norm. Improved cross-team collaboration by clarifying test responsibilities across 10+ system interfaces.",
    leadership:
      "Collaborated with architects and DevOps to design pipeline integration. Surfaced quality risks early in planning sessions. Built cross-functional trust through transparent defect triage.",
    tags: ["C# · Redis", "Data-Driven POM", "CI/CD Gates", "10+ Systems"],
  },
  {
    id: "lyse",
    company: "Lyse",
    industry: "Utilities · Consumer Tech",
    headline: "Establishing QA Culture from Zero",
    context:
      "No structured QA process existed. Sprints lacked clear acceptance criteria, test strategy was absent, and quality was treated as an implicit developer responsibility.",
    action:
      "Introduced Definition of Done (DoD), Definition of Ready (DoR), and 3-Amigos sessions. Authored the first formal Test Strategy. Integrated pipeline validation. Launched k6 performance testing and WCAG accessibility compliance checks.",
    impact:
      "Transformed sprint predictability. Enabled early defect detection before code reached staging. Established accessibility and performance as measurable quality dimensions — not afterthoughts.",
    leadership:
      "Drove QA process design from the ground up with Product Owner alignment. Facilitated Scrum ceremonies and Poker Planning sessions. Became the quality anchor for the entire product organization.",
    tags: ["k6 Performance", "WCAG Accessibility", "Test Strategy", "3-Amigos"],
  },
  {
    id: "laerdal",
    company: "Laerdal Medical",
    industry: "MedTech · Simulation",
    headline: "Quality Engineering in Safety-Critical Medical Simulation",
    context:
      "A Unity-based 3D simulation platform integrated with physical medical manikins responding to real-time physiological data. The stakes: training healthcare professionals for life-critical scenarios.",
    action:
      "Developed and tested simulation logic ensuring accurate physical-digital synchronization. Built understanding of system integration between hardware sensors, real-time data streams, and 3D rendering pipelines.",
    impact:
      "Contributed to a product used in hospital training programs globally. Built deep cross-domain knowledge — software, hardware, domain logic — that shaped a uniquely holistic approach to quality.",
    leadership:
      "Operated at the intersection of engineering and domain expertise. Collaborated with medical experts and hardware engineers. This experience directly informed later QA strategy work by understanding quality from a developer's perspective.",
    tags: ["Unity", "Real-Time Data", "Medical Simulation", "Hardware Integration"],
  },
];

function CaseCard({ c }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="case-card fade-up"
      style={{ background: "white", borderRadius: "10px", overflow: "hidden" }}
    >

      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "1.75rem 2rem",
          textAlign: "left",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "1rem",
        }}
      >
        <div style={{ flex: 1 }}>
          <div className="flex flex-wrap items-center gap-2 mb-3 ">
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#2A7A5A",
              }}
            >
              {c.company}
            </span>
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#CBD5E0",
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: "0.7rem", color: "#718096", fontWeight: 500 }}>
              {c.industry}
            </span>
          </div>
          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "#0F2A4A",
              lineHeight: 1.3,
              marginBottom: "0.75rem",
            }}
          >
            {c.headline}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {c.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div
          style={{
            color: open ? "#2A7A5A" : "#0F2A4A",
            transition: "color 0.2s",
            flexShrink: 0,
            marginTop: "0.25rem",
          }}
        >
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      {/* Expanded content */}
      {open && (
        <div
          style={{
            borderTop: "1px solid #E2E8F0",
            padding: "1.75rem 2rem",
            background: "rgba(15,42,74,0.015)",
          }}
        >
          <div className="grid md:grid-cols-2 gap-6 ">
            {[
              {
                icon: <Target size={14} />,
                label: "Context",
                content: c.context,
                color: "#64748B",
              },
              {
                icon: <Zap size={14} />,
                label: "Action",
                content: c.action,
                color: "#1A3D6B",
              },
              {
                icon: <TrendingUp size={14} />,
                label: "Impact",
                content: c.impact,
                color: "#2A7A5A",
              },
              {
                icon: <Users size={14} />,
                label: "Leadership",
                content: c.leadership,
                color: "#0F2A4A",
              },
            ].map((block) => (
              <div key={block.label}>
                <div
                  className="flex items-center gap-2 mb-2"
                  style={{ color: block.color }}
                >
                  {block.icon}
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: block.color,
                    }}
                  >
                    {block.label}
                  </span>
                </div>
                <p style={{ fontSize: "0.875rem", color: "#4A5568", lineHeight: 1.7 }}>
                  {block.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CaseStudies() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) sectionRef.current.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="section-fade"
      style={{ padding: "6rem 0", background: "#f5f8f8" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
            Proven Results
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Case Studies
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Four engagements that demonstrate transformation capability — from automation design to cultural change.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {cases.map((c) => (
            <CaseCard key={c.id} c={c} />
          ))}
        </div>
      </div>
    </div>
  );
}