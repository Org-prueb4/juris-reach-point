import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Scale, Phone, Mail } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useWhatsApp } from "@/hooks/use-whatsapp";
import { useActiveSection } from "@/hooks/use-active-section";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const { openWhatsApp } = useWhatsApp();
  const activeSection = useActiveSection();

  const navigation = [
    { name: "Inicio", href: "inicio" },
    { name: "Servicios", href: "servicios" },
    { name: "Nosotros", href: "nosotros" },
    { name: "Contacto", href: "contacto" },
  ];

  const handleNavigationClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="hidden md:flex justify-end items-center py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>+1 (234) 567-8900</span>
            </a>
            <a href="mailto:info@consultoriojuridico.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@consultoriojuridico.com</span>
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-legal-navy to-legal-navy-light rounded-lg">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">LegalConsult</h1>
              <p className="text-xs text-muted-foreground">Consultorio Jurídico</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigationClick(item.href)}
                className={`transition-colors font-medium cursor-pointer relative ${
                  activeSection === item.href
                    ? 'text-legal-gold font-semibold'
                    : 'text-foreground hover:text-legal-gold'
                }`}
              >
                {item.name}
                {activeSection === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-legal-gold rounded-full"></div>
                )}
              </button>
            ))}
            <Button variant="hero" size="lg" onClick={() => openWhatsApp()}>
              Consulta Gratuita
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigationClick(item.href)}
                  className={`transition-colors font-medium py-2 text-left cursor-pointer ${
                    activeSection === item.href
                      ? 'text-legal-gold font-semibold bg-legal-gold/10 rounded-lg px-3'
                      : 'text-foreground hover:text-legal-gold'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button variant="hero" className="mt-4" onClick={() => openWhatsApp()}>
                Consulta Gratuita
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;