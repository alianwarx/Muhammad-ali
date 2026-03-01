import React, { useEffect, useRef } from "react";
import { AlertTriangle, ArrowLeft, Shield, GitBranch, Users } from "lucide-react";

const principles = [
  {
    icon: <AlertTriangle size={18} />,
    title: "Risk-Based Testing",
    description:
      "Not all code carries equal risk. Testing strategy must be proportional to business impact, deployment frequency, and failure consequence. Effort flows where it matters most.",
    highlight: "Prioritize by consequence",
  },
  {
    icon: <ArrowLeft size={18} />,
    title: "Shift-Left Approach",
    description:
      "Defects are cheapest at the source. Quality gates, DoD/DoR definitions, and 3-Amigos sessions bring quality thinking into requirements and design — before a single line is written.",
    highlight: "Quality starts at discovery",
  },
  {
    icon: <Shield size={18} />,
    title: "Automation as Safety Net",
    description:
      "Automation is not a replacement for thinking — it's a permanent guardian. Well-designed automated suites protect known behavior, freeing exploratory effort for the unknown.",
    highlight: "Protect what is known",
  },
  {
    icon: <GitBranch size={18} />,
    title: "CI/CD as Quality Governance",
    description:
      "Deployment pipelines are quality enforcement mechanisms. Tests as gates transform CI/CD from delivery infrastructure into a continuous quality audit system.",
    highlight: "Gates over gates",
  },
  {
    icon: <Users size={18} />,
    title: "Collaboration over Silos",
    description:
      "Quality is a shared organizational responsibility. Cross-functional alignment between Product, Dev, and QA removes late-stage surprises and builds shared ownership of outcomes.",
    highlight: "Shared accountability",
  },
];

export default function QualityPhilosophy() {
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
      style={{ padding: "6rem 0", background: "white" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left: intro */}
          <div className="lg:col-span-2">  
            <div className="mb-16 fade-up">
              <div className="divider-line" />

                <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2 ">
                  Principles
                </p>
                <h2
                    style={{
                      color: "#0F2A4A",
                      letterSpacing: "-0.02em",
                      marginBottom: "1rem",
                    }}
                  className="text-3xl md:text-4xl font-bold text-primary">
                  Quality Philosophy
                </h2>
                <p style={{ color: "#4A5568", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                  These are not just methodologies — they are guiding principles that shape how I design quality systems, influence teams, and make strategic decisions.
                </p>

              <div
                style={{
                    background: "hsl(158.18deg 25.58% 91.57%)",
                    border: "1px solid #E2E8F0",
                    borderRadius: "8px",
                    padding: "1.25rem 1.5rem",
                }}
                >
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#0F2A4A",
                    fontWeight: 600,
                    fontStyle: "italic",
                    lineHeight: 1.6,

                  }}
                >
                  "Quality is not a phase — it is an architectural commitment made from day one."
                  {/* "Quality is not a phase. It is an architecture decision made at the beginning of every sprint." */}
                </p>
              </div>
            </div>
        </div>

          {/* Right: principle cards */}
          <div className="lg:col-span-3 space-y-4"
          >
            {principles.map((p, i) => (
              <div
                key={i}
                className="philosophy-pill fade-up 
                          border border-gray-200
                          transform transition-all duration-300 
                          hover:shadow-lg hover:-translate-y-1 "
                style={{
                  borderRadius: "8px",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  background: "white",
                  border: "1px solid #E2E8F0",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "6px",
                    background: "hsl(158.18deg 25.58% 91.57%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "hsl(155.05deg 55.19% 35.88%)",
                    flexShrink: 0,
                  }}
                >
                  {p.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "#0F2A4A",
                      }}
                    >
                      {p.title}
                    </h3>
                      <span className="green-tag">{p.highlight}</span>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "#4A5568", lineHeight: 1.7 }}>
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}