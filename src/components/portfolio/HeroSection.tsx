import React, { useEffect, useRef } from "react";
import { ChevronDown, Shield, Cpu, GitBranch, ArrowDown } from "lucide-react";


import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Journey", href: "#journey" },
  { label: "Evolution", href: "#evolution" },
  { label: "Case Studies", href: "#cases" },
  { label: "Impact", href: "#impact" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100);
    }
  }, []);

  return (
    <div
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 50%, #F0FDF4 100%)",
      }}
    >

      {/* Accent shapes */}
      <div
        className="absolute top-20 right-10 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(42,122,90,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(15,42,74,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "2px solid rgba(42, 122, 90, 0.3)",
                  transform: "translate(1px, 20px)",
                }}
              />

              <div className="flex justify-center md:justify-end fade-up">
                  <div className="rounded-full border-4 border-primary bg-secondary flex items-center justify-center overflow-hidden">
                    <img
                      src="./data/main-photo.jpeg"
                      alt="Muhammad Ali Anwar"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Floating badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "-24px",
                    background: "white",
                    border: "1px solid #E2E8F0",
                    borderRadius: "8px",
                    padding: "0.7rem 1rem",
                    boxShadow: "0 8px 24px rgba(15,42,74,0.12)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.65rem",
                      color: "#2A7A5A",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Based in
                  </p>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#0F2A4A",
                      fontWeight: 700,
                    }}
                  >
                  Stavanger, Norway
                </p>
              </div>
            </div>
          </div>
          {/* Text content */}
          <div
            ref={heroRef}
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "opacity 0.9s ease, transform 0.9s ease",
            }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div
                style={{
                  width: "32px",
                  height: "2px",
                  background: "#2A7A5A",
                }}
              />
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#2A7A5A",
                }}
              >
                Senior QA Engineer · Test Lead
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 800,
                color: "#0F2A4A",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Muhammad Ali
              <br />
              <span style={{ color: "#0d3826" }}>Anwar</span>
            </h1>

            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                color: "#4A5568",
                marginBottom: "0.5rem",
                fontWeight: 400,
                lineHeight: 1.5,
              }}
            >
              Senior QA Engineer · Automation · DevOps-Driven Quality
            </p>
            <blockquote
              style={{
                fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
                fontWeight: 600,
                color: "#0F2A4A",
                margin: "2rem 0",
              }}
             className="border-l-4 border-accent pl-4 text-xl italic text-primary/80">
              "I design quality systems ——<br /> not just test cases."
            </blockquote>
            

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: <Shield size={13} />, label: "Risk-Based Testing" },
                { icon: <Cpu size={13} />, label: "Playwright · k6 · BrowserStack" },
                { icon: <GitBranch size={13} />, label: "CI/CD Integration" },
              ].map((badge) => (
                <span key={badge.label} className="tag flex items-center gap-1.5">
                  {badge.icon}
                  {badge.label}
                </span>
              ))}
            </div>
      {/* CTA Button */}
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2" asChild>
              <a href="#journey">
                Explore My Journey <ArrowDown size={18} />
              </a>
            </Button>
          </div>


        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator"
        style={{ color: "rgba(15,42,74,0.3)" }}
      >
        <ChevronDown size={22} />
      </div>
    </div>
  );
}