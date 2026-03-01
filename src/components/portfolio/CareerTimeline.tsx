import { useTranslation } from "react-i18next";
import { Code, Search, Cog, GitBranch, ClipboardList, Crown } from "lucide-react";

export default function CareerTimeline() {
  const { t } = useTranslation();

  const stages = [
    {
      icon: Code,
      label: t("career.stages.developer.label"),
      desc: t("career.stages.developer.desc"),
    },
    {
      icon: Search,
      label: t("career.stages.qaEngineer.label"),
      desc: t("career.stages.qaEngineer.desc"),
    },
    {
      icon: Cog,
      label: t("career.stages.automation.label"),
      desc: t("career.stages.automation.desc"),
    },
    {
      icon: GitBranch,
      label: t("career.stages.cicd.label"),
      desc: t("career.stages.cicd.desc"),
    },
    {
      icon: ClipboardList,
      label: t("career.stages.qaStrategy.label"),
      desc: t("career.stages.qaStrategy.desc"),
    },
    {
      icon: Crown,
      label: t("career.stages.testLeadership.label"),
      desc: t("career.stages.testLeadership.desc"),
    },
  ];

  return (
    <section id="evolution" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
            {t("career.sectionTag")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {t("career.title")}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            {t("career.subtitle")}
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
