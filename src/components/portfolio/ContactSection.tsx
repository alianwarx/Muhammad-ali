import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8 fade-up">
        <p className="text-sm font-medium tracking-widest uppercase text-accent">
          Get in Touch
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Let's Build Reliable Systems
        </h2>
        <p className="text-primary-foreground/70 max-w-lg mx-auto">
          If you're looking for a consultant who who transforms quality from a checkpoint into a competitive advantage and brings quality strategy, not just test execution — let's talk.
        </p>
        <p className="text-primary-foreground/70 max-w-lg mx-auto">
          I design quality systems that scale, mentor teams that grow, and establish processes that outlast the engagement.
        </p>        

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
            asChild
          >
            <a href="mailto:muhammadali.anwarx@gmail.com">
              <Mail size={18} /> SEND AN EMAIL
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground text-[hsl(220deg_100%_31.52%)] hover:bg-primary-foreground/10 gap-2"
            asChild
          >
            <a href="https://linkedin.com/in/muhammad-ali-anwar" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} /> CONNECT ON LINKEDIN
            </a>
          </Button> 
        </div>
          {/* Footer */}
        <div
          style={{
            marginTop: "5rem",
            marginBottom: "-3rem",
            paddingTop: "2rem",
            borderTop: "1px solid #E2E8F0",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              color: "#A0AEC0",
              letterSpacing: "0.06em",
            }}
          >
            Muhammad Ali Anwar · Senior QA Engineer
          </p>
          <div
            className="flex items-center justify-center gap-2"
            style={{ color: "#718096", fontSize: "0.82rem", fontWeight: 500 }}
          >
            <MapPin size={13} />
            <span>Stavanger, Norway</span>
          </div>
        </div>
      </div>
    </section>
  );
}
