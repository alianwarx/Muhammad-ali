import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { AlertTriangle, ArrowLeft, Shield, GitBranch, Users } from "lucide-react";

export default function QualityPhilosophy() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  const principles = [
    {
      icon: <AlertTriangle size={18} />,
      title: t("philosophy.principles.riskBased.title"),
      description: t("philosophy.principles.riskBased.description"),
      highlight: t("philosophy.principles.riskBased.highlight"),
    },
    {
      icon: <ArrowLeft size={18} />,
      title: t("philosophy.principles.shiftLeft.title"),
      description: t("philosophy.principles.shiftLeft.description"),
      highlight: t("philosophy.principles.shiftLeft.highlight"),
    },
    {
      icon: <Shield size={18} />,
      title: t("philosophy.principles.automationSafety.title"),
      description: t("philosophy.principles.automationSafety.description"),
      highlight: t("philosophy.principles.automationSafety.highlight"),
    },
    {
      icon: <GitBranch size={18} />,
      title: t("philosophy.principles.cicdGovernance.title"),
      description: t("philosophy.principles.cicdGovernance.description"),
      highlight: t("philosophy.principles.cicdGovernance.highlight"),
    },
    {
      icon: <Users size={18} />,
      title: t("philosophy.principles.collaboration.title"),
      description: t("philosophy.principles.collaboration.description"),
      highlight: t("philosophy.principles.collaboration.highlight"),
    },
  ];

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
      id="philosophy"
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
                  {t("philosophy.sectionTag")}
                </p>
                <h2
                    style={{
                      color: "#0F2A4A",
                      letterSpacing: "-0.02em",
                      marginBottom: "1rem",
                    }}
                  className="text-3xl md:text-4xl font-bold text-primary">
                  {t("philosophy.title")}
                </h2>
                <p style={{ color: "#4A5568", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                  {t("philosophy.intro")}
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
                  {t("philosophy.quote")}
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