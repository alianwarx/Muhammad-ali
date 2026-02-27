import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cases = [
  {
    company: "Equinor",
    context: "Manual-heavy regression testing slowed release cycles and reduced confidence in deployments.",
    action: "Introduced Playwright-based automation framework, replacing critical manual regression paths with reliable automated suites.",
    impact: "Increased release predictability, reduced manual testing bottleneck, and established automation as a core practice.",
    leadership: "Championed automation adoption across the team, demonstrating ROI through measurable cycle-time improvements.",
  },
  {
    company: "Sekal",
    context: "Complex legacy architecture spanning C#, Redis, and a Web Portal with no structured test automation or deployment gates.",
    action: "Implemented a data-driven Page Object Model framework. Integrated automated tests as CI/CD deployment gates across multiple services.",
    impact: "Reduced deployment instability significantly. Improved cross-team collaboration by providing shared quality metrics and gate criteria.",
    leadership: "Architected the end-to-end test strategy across 10+ interconnected systems, aligning QA with DevOps practices.",
  },
  {
    company: "Lyse",
    context: "No structured QA process existed — testing was ad hoc, sprint predictability was low, and defects were discovered late.",
    action: "Introduced DoD, DoR, 3-Amigos, Scrum ceremonies, Poker Planning. Created comprehensive test strategy. Integrated pipeline validation, k6 performance testing, and WCAG accessibility checks.",
    impact: "Improved sprint predictability and early defect detection. Established quality culture from zero. Enabled performance and accessibility compliance.",
    leadership: "Designed and owned the entire QA framework. Trained team members on process and tooling. Became the quality conscience of the product.",
  },
  {
    company: "Laerdal Medical",
    context: "Unity-based 3D medical simulation system integrated with physical manikins reacting to real-time physiological data.",
    action: "Developed and tested simulation scenarios ensuring accurate real-time data flow between software and hardware components.",
    impact: "Delivered reliable medical training simulations used in healthcare education worldwide.",
    leadership: "Bridged the gap between software development and medical domain requirements, ensuring quality in safety-critical systems.",
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="py-24 bg-section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
            Proven Results
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Case Studies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <Card
              key={c.company}
              className="overflow-hidden border-none shadow-md fade-up"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <CardHeader className="bg-primary text-primary-foreground py-4">
                <CardTitle className="text-lg">{c.company}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Tabs defaultValue="context" className="w-full">
                  <TabsList className="w-full justify-start rounded-none border-b bg-transparent px-4 pt-2">
                    <TabsTrigger value="context" className="text-xs">Context</TabsTrigger>
                    <TabsTrigger value="action" className="text-xs">Action</TabsTrigger>
                    <TabsTrigger value="impact" className="text-xs">Impact</TabsTrigger>
                    <TabsTrigger value="leadership" className="text-xs">Leadership</TabsTrigger>
                  </TabsList>
                  <div className="p-5 min-h-[120px]">
                    <TabsContent value="context" className="mt-0 text-sm text-muted-foreground">{c.context}</TabsContent>
                    <TabsContent value="action" className="mt-0 text-sm text-muted-foreground">{c.action}</TabsContent>
                    <TabsContent value="impact" className="mt-0 text-sm text-muted-foreground">{c.impact}</TabsContent>
                    <TabsContent value="leadership" className="mt-0 text-sm text-muted-foreground">{c.leadership}</TabsContent>
                  </div>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
