import { Button } from "@/components/ui/button";
import { ArrowDown, User } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <div className="flex justify-center md:justify-end fade-up">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary bg-secondary flex items-center justify-center overflow-hidden">
              <User className="w-32 h-32 text-muted-foreground" />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6 fade-up" style={{ transitionDelay: "0.15s" }}>
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">
                Senior QA Engineer
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Muhammad Ali
                <br />
                Anwar
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-md">
              Automation · DevOps-Driven Quality · Test Leadership
            </p>
            <blockquote className="border-l-4 border-accent pl-4 text-xl italic text-primary/80">
              "I design quality systems — not just test cases."
            </blockquote>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2" asChild>
              <a href="#journey">
                Explore My Journey <ArrowDown size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
