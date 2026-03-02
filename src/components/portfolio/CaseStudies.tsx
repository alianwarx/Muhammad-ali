import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronUp, Target, Zap, TrendingUp, Users } from "lucide-react";

function CaseCard({ caseId, c }) {
  const { t } = useTranslation();
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
            {c.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
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
                label: t("cases.contextLabel"),
                content: c.context,
                color: "#64748B",
              },
              {
                icon: <Zap size={14} />,
                label: t("cases.actionLabel"),
                content: c.action,
                color: "#1A3D6B",
              },
              {
                icon: <TrendingUp size={14} />,
                label: t("cases.impactLabel"),
                content: c.impact,
                color: "#2A7A5A",
              },
              {
                icon: <Users size={14} />,
                label: t("cases.leadershipLabel"),
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
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  const cases = [
    {
      id: "equinor",
      company: t("cases.equinor.company"),
      industry: t("cases.equinor.industry"),
      headline: t("cases.equinor.headline"),
      context: t("cases.equinor.context"),
      action: t("cases.equinor.action"),
      impact: t("cases.equinor.impact"),
      leadership: t("cases.equinor.leadership"),
      tags: t("cases.equinor.tags", { returnObjects: true })
    },
    {
      id: "sekal",
      company: t("cases.sekal.company"),
      industry: t("cases.sekal.industry"),
      headline: t("cases.sekal.headline"),
      context: t("cases.sekal.context"),
      action: t("cases.sekal.action"),
      impact: t("cases.sekal.impact"),
      leadership: t("cases.sekal.leadership"),
      tags: t("cases.sekal.tags", { returnObjects: true })
    },
    {
      id: "lyse",
      company: t("cases.lyse.company"),
      industry: t("cases.lyse.industry"),
      headline: t("cases.lyse.headline"),
      context: t("cases.lyse.context"),
      action: t("cases.lyse.action"),
      impact: t("cases.lyse.impact"),
      leadership: t("cases.lyse.leadership"),
      tags: t("cases.lyse.tags", { returnObjects: true })
    },
    {
      id: "laerdal",
      company: t("cases.laerdal.company"),
      industry: t("cases.laerdal.industry"),
      headline: t("cases.laerdal.headline"),
      context: t("cases.laerdal.context"),
      action: t("cases.laerdal.action"),
      impact: t("cases.laerdal.impact"),
      leadership: t("cases.laerdal.leadership"),
      tags: t("cases.laerdal.tags", { returnObjects: true })
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
      id="cases"
      ref={sectionRef}
      className="section-fade"
      style={{ padding: "6rem 0", background: "#f5f8f8" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
            {t("cases.sectionTag")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {t("cases.title")}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            {t("cases.subtitle")}
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {cases.map((c) => (
            <CaseCard key={c.id} caseId={c.id} c={c} />
          ))}
        </div>
      </div>
    </div>
  );
}