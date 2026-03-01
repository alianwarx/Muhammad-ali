import { MessageCircle, Clock, GitPullRequest, Presentation } from "lucide-react";

const leadershipAreas = [
  {
    icon: MessageCircle,
    title: "Stakeholder Communication",
    points: [
      "Translating technical quality risks into business-impact language.",
      "Presenting coverage reports and sprint quality metrics to product owners.",
      "Bridging technical and business decision-making conversations.",
    ],
  },
  {
    icon: Clock,
    title: "Constructive Challenge",
    points: [
      "Challenging unrealistic deadlines using data.",
      "Raising quality risks early before commitments lock in.",
      "Advocating sustainable delivery over short-term velocity.",
    ],
  },
  {
    icon: GitPullRequest,
    title: "User Story Refinement",
    points: [
      "Improving acceptance criteria clarity with Product Owners.",
      "Facilitating 3-Amigos alignment sessions.",
      "Introducing Definition of Ready frameworks.",
    ],
  },
  {
    icon: Presentation,
    title: "Internal Training & Enablement",
    points: [
      "Delivered internal Playwright training sessions.",
      "Coached engineers on test design principles, locator strategies, and maintainable test architecture.",
      "Positioned QA as a shared team capability.",
    ],
  },
];

export default function Leadership() {
  return (
    <section className="py-24 bg-section-alt">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-5 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 fade-up">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
              Ready to Lead
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Leadership & <br />
              Consulting <br />
              Readiness
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              A Test Lead is not a senior tester — it is a quality strategist,
              team coach, and organizational influencer.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              These capabilities have been demonstrated across real engagements —
              not theoretical frameworks.
            </p>

            {/* Consulting Indicators */}
            <div className="space-y-3">
              {[
                "Cross-functional team alignment",
                "Strategic quality ownership",
                "Process design from scratch",
                "Executive-level communication",
                "Engineering team coaching",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-muted-foreground font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {leadershipAreas.map((area, i) => (
              <div
                key={area.title}
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