import { useState, useEffect } from "react";
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // smooth-scroll handler that avoids changing the hash (prevents HashRouter from treating
  // the anchor as a route). keeps the page from reloading / triggering 404s.
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace(/^#/, "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    // close mobile menu if open
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight text-primary">
          MUHAMMAD ALI ANWAR
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>LET'S CONNECT</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="block text-sm text-muted-foreground hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <Button size="sm" className="w-full bg-accent text-accent-foreground" asChild>
            <a href="#journey" onClick={(e) => {
                handleNavClick(e, "#journey");
                setMobileOpen(false);
              }}>
              Explore My Journey
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}
