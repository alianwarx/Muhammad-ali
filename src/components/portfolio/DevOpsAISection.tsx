import { Container, FileCode, GitMerge, Brain, FileSearch, FlaskConical } from "lucide-react";

const devopsSkills = [
  {
  icon: Container,
    title: "Docker Containerization",
    description:
      "Containerized test environments enabling reproducible, environment-agnostic test execution. Tests run consistently across local, staging, and CI runners.",
    category: "DevOps",
  },
  {
  icon: FileCode,
    title: "YAML Pipeline Debugging",
    description:
      "Proficient in authoring and debugging Azure DevOps and GitHub Actions pipelines. Ability to diagnose pipeline failures and optimize stage execution order.",
    category: "DevOps",
  },
  {
  icon: GitMerge,
    title: "CI/CD Quality Gates",
    description:
      "Designed test-as-gate patterns that enforce quality thresholds before deployment proceeds. Quality becomes a non-negotiable constraint in the delivery process.",
    category: "DevOps",
  },
  {
  icon: Brain,
    title: "AI-Assisted Requirement Analysis",
    description:
      "Using AI tools to surface ambiguities, identify missing edge cases, and accelerate requirement validation — reducing defects that originate in story gaps.",
    category: "AI in QA",
  },
  {
  icon: FlaskConical,
    title: "AI-Supported Test Generation",
    description:
      "Leveraging generative AI to accelerate test case authoring for happy paths and boundary conditions. AI as a force multiplier for test coverage — not a replacement for judgment.",
    category: "AI in QA",
  },
  {
  icon: FileSearch,
    title: "Log Summarization & Defect Triage",
    description:
      "AI-assisted analysis of build logs and error traces. Faster root cause identification reduces time-to-resolution and keeps deployment velocity high.",
    category: "AI in QA",
  },
];

export default function DevOpsAISection() {
    const devops = devopsSkills.filter((s) => s.category === "DevOps");
  const ai = devopsSkills.filter((s) => s.category === "AI in QA");
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
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Expanding quality engineering beyond test authoring — into pipeline architecture, containerization, and AI-augmented workflows.
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
              <span className="tag">DevOps Engineering</span>
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
              <span className="tag">AI in QA</span>
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
              Tool Stack
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
                "and More...",
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
