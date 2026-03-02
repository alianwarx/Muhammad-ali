import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import JourneyPhotos from "./JourneyPhotos";

export default function JourneyMap() {
  const { t } = useTranslation();
  const [active, setActive] = useState<number | null>(null);

  const milestones = [
    {
      id: 1,
      label: t("journey.milestones.1.label"),
      sub: t("journey.milestones.1.sub"),
      x: 80,
      y: 220,
      summary: t("journey.milestones.1.summary"),
    },
    {
      id: 2,
      label: t("journey.milestones.2.label"),
      sub: t("journey.milestones.2.sub"),
      x: 250,
      y: 120,
      summary: t("journey.milestones.2.summary"),
    },
    {
      id: 3,
      label: t("journey.milestones.3.label"),
      sub: t("journey.milestones.3.sub"),
      x: 400,
      y: 180,
      summary: t("journey.milestones.3.summary"),
    },
    {
      id: 4,
      label: t("journey.milestones.4.label"),
      sub: t("journey.milestones.4.sub"),
      x: 530,
      y: 100,
      summary: t("journey.milestones.4.summary"),
    },
    {
      id: 5,
      label: t("journey.milestones.5.label"),
      sub: t("journey.milestones.5.sub"),
      x: 660,
      y: 170,
      summary: t("journey.milestones.5.summary"),
    },
    {
      id: 6,
      label: t("journey.milestones.6.label"),
      sub: t("journey.milestones.6.sub"),
      x: 800,
      y: 90,
      summary: t("journey.milestones.6.summary"),
    },
  ];

  const pathD = `M ${milestones.map((m) => `${m.x} ${m.y}`).join(" L ")}`;
  const totalLength = 1200;

  return (
    <section id="journey" className="py-24 bg-section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 fade-up">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
            {t("journey.sectionTag")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {t("journey.title")}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            {t("journey.subtitle")}
          </p>
        </div>

        <div className="fade-up overflow-x-auto" style={{ transitionDelay: "0.2s" }}>
          <div className="mt-8 mb-6 fade-up" style={{ transitionDelay: "0.3s" }}>
            <JourneyPhotos />
          </div>
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
            <span style={{ fontSize: "0.72rem", color: "#718096", fontWeight: 500 }}>{t("journey.hoverHint")}</span>
          </div>
        </div>
        </div>
        </div>
    </section>
  );
}
