import { useTranslation } from "react-i18next";
import { Container, FileCode, GitMerge, Brain, FileSearch, FlaskConical } from "lucide-react";

export default function DevOpsAISection() {
  const { t } = useTranslation();

  const devopsSkills = [
    {
      icon: Container,
      title: t("devops.skills.docker.title"),
      description: t("devops.skills.docker.description"),
      category: "DevOps",
    },
    {
      icon: FileCode,
      title: t("devops.skills.yaml.title"),
      description: t("devops.skills.yaml.description"),
      category: "DevOps",
    },
    {
      icon: GitMerge,
      title: t("devops.skills.cicdGates.title"),
      description: t("devops.skills.cicdGates.description"),
      category: "DevOps",
    },
    {
      icon: Brain,
      title: t("devops.skills.aiRequirements.title"),
      description: t("devops.skills.aiRequirements.description"),
      category: "AI in QA",
    },
    {
      icon: FlaskConical,
      title: t("devops.skills.aiTestGen.title"),
      description: t("devops.skills.aiTestGen.description"),
      category: "AI in QA",
    },
    {
      icon: FileSearch,
      title: t("devops.skills.logSummarization.title"),
      description: t("devops.skills.logSummarization.description"),
      category: "AI in QA",
    },
  ];

  const devops = devopsSkills.filter((s) => s.category === "DevOps");
  const ai = devopsSkills.filter((s) => s.category === "AI in QA");

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
            {t("devops.sectionTag")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {t("devops.title")}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            {t("devops.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 fade-up" style={{ transitionDelay: "0.15s" }}>
          {/* DevOps */}
          <div>
            <div
              className="flex items-center gap-2 mb-6"
              style={{
                paddingBottom: "0.75rem",
                borderBottom: "1px solid #E2E8F0",
              }}
            >
              <span className="tag">{t("devops.devopsTag")}</span>
            </div>
            <div className="space-y-5">
              {devops.map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: "#0F2A4A",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p style={{ fontSize: "0.82rem", color: "#4A5568", lineHeight: 1.7 }}>
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI in QA */}
          <div>
            <div
              className="flex items-center gap-2 mb-6"
              style={{
                paddingBottom: "0.75rem",
                borderBottom: "1px solid #E2E8F0",
              }}
            >
              <span className="tag">{t("devops.aiTag")}</span>
            </div>
            <div className="space-y-5">
              {ai.map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: "#0F2A4A",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p style={{ fontSize: "0.82rem", color: "#4A5568", lineHeight: 1.7 }}>
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Tool stack */}
        <div
          style={{
            marginTop: "3rem",
            padding: "1.5rem 2rem",
            background: "white",
            border: "1px solid #E2E8F0",
            borderRadius: "8px",
          }}
          className="fade-up"
        >
          <p
            style={{
              fontSize: "0.65rem",
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#718096",
              marginBottom: "1rem",
            }}
          >
            {t("devops.toolStackLabel")}
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Playwright",
              "k6",
              "Docker",
              "Azure DevOps",
              "GitHub Actions",
              "C#",
              "JavaScript",
              "Python",
              "Redis",
              "YAML",
              "WCAG 2.1",
              "Postman",
              "Git",
              "Jira",
              "Confluence",
              t("devops.andMore"),
            ].map((tool) => (
              <span key={tool} className="tag">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
