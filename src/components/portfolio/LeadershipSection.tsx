import { useTranslation } from "react-i18next";
import { MessageCircle, Clock, GitPullRequest, Presentation } from "lucide-react";

export default function Leadership() {
  const { t } = useTranslation();

  const leadershipAreaKeys = [
    { icon: MessageCircle, key: "stakeholder" },
    { icon: Clock, key: "challenge" },
    { icon: GitPullRequest, key: "refinement" },
    { icon: Presentation, key: "training" },
  ];

  const leadershipAreas = leadershipAreaKeys.map((area) => ({
    icon: area.icon,
    key: area.key,
    title: t(`leadership.areas.${area.key}.title`),
    points: [
      t(`leadership.areas.${area.key}.points.0`),
      t(`leadership.areas.${area.key}.points.1`),
      t(`leadership.areas.${area.key}.points.2`),
    ],
  }));

  return (
    <section className="py-24 bg-section-alt">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-5 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 fade-up">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
              {t("leadership.sectionTag")}
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {t("leadership.title")} <br />
              {t("leadership.titleLine2")} <br />
              {t("leadership.titleLine3")}
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("leadership.intro1")}
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("leadership.intro2")}
            </p>

            {/* Consulting Indicators */}
            <div className="space-y-3">
              {[
                "crossFunctional",
                "strategicQuality",
                "processDesign",
                "executiveComm",
                "teamCoaching",
              ].map((indicatorKey, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-muted-foreground font-medium">
                    {t(`leadership.indicators.${indicatorKey}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {leadershipAreas.map((area, i) => (
              <div
                key={area.key}
                className="p-6 rounded-xl bg-card border border-border fade-up transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <area.icon className="w-5 h-5 text-accent" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-primary text-sm mb-3">
                  {area.title}
                </h3>

                {/* Points Under Heading */}
                <ul className="space-y-2">
                  {area.points.map((point, j) => (
                    <li
                      key={j}
                      className="text-xs text-muted-foreground leading-relaxed"
                    >
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}