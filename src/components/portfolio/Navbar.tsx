import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: t("navbar.journey"), href: "#journey" },
    { label: t("navbar.evolution"), href: "#evolution" },
    { label: t("navbar.caseStudies"), href: "#cases" },
    { label: t("navbar.impact"), href: "#impact" },
    { label: t("navbar.philosophy"), href: "#philosophy" },
    { label: t("navbar.contact"), href: "#contact" },
  ];

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

  const toggleLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight text-primary">
          {t("navbar.brand")}
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
          
          {/* Language Toggle */}
          <div className="flex items-center gap-2 border-l border-border pl-8 ml-4">
            <button
              onClick={() => toggleLanguage("en")}
              className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                currentLang === "en"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-primary"
              }`}
              aria-label={t("navbar.languageToggleLabel")}
              title="English"
            >
              EN
            </button>
            <button
              onClick={() => toggleLanguage("no")}
              className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                currentLang === "no"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-primary"
              }`}
              aria-label={t("navbar.languageToggleLabel")}
              title="Norsk Bokmål"
            >
              NO
            </button>
          </div>

          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
              {t("navbar.letsConnect")}
            </a>
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
          
          {/* Mobile Language Toggle */}
          <div className="flex items-center gap-2 pt-4 border-t border-border mt-4">
            <span className="text-xs text-muted-foreground font-medium">{t("navbar.languageToggleLabel")}:</span>
            <button
              onClick={() => {
                toggleLanguage("en");
                setMobileOpen(false);
              }}
              className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                currentLang === "en"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => {
                toggleLanguage("no");
                setMobileOpen(false);
              }}
              className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                currentLang === "no"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              NO
            </button>
          </div>

          <Button size="sm" className="w-full bg-accent text-accent-foreground" asChild>
            <a href="#journey" onClick={(e) => {
                handleNavClick(e, "#journey");
                setMobileOpen(false);
              }}>
              {t("navbar.exploreMyJourney")}
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}
