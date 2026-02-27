import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

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
          Looking for a QA leader who transforms quality from a checkpoint into a competitive advantage? Let's talk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
            asChild
          >
            <a href="mailto:contact@alianwar.dev">
              <Mail size={18} /> Email Me
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
            asChild
          >
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
