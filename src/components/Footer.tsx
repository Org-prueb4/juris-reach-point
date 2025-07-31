import { Scale, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const services = [
    "Derecho Corporativo",
    "Derecho Laboral", 
    "Derecho Civil",
    "Litigios",
    "Derecho Penal",
    "Consultoría Legal"
  ];

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
    { name: "Blog Legal", href: "#" },
    { name: "Casos de Éxito", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" }
  ];

  return (
    <footer className="bg-legal-navy text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-legal-gold rounded-lg">
                <Scale className="h-6 w-6 text-legal-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold">LegalConsult</h3>
                <p className="text-sm text-gray-300">Consultorio Jurídico</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Tu socio legal de confianza con más de 15 años de experiencia 
              brindando soluciones jurídicas integrales y personalizadas.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-white/10 rounded-lg hover:bg-legal-gold hover:text-legal-navy transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#servicios" 
                    className="text-gray-300 hover:text-legal-gold transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-legal-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-legal-gold mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Calle Principal 123</p>
                  <p className="text-gray-300 text-sm">Centro Empresarial, Oficina 450</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-legal-gold" />
                <a 
                  href="tel:+1234567890" 
                  className="text-gray-300 hover:text-legal-gold transition-colors text-sm"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-legal-gold" />
                <a 
                  href="mailto:info@legalconsult.com" 
                  className="text-gray-300 hover:text-legal-gold transition-colors text-sm"
                >
                  info@legalconsult.com
                </a>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-legal-gold/10 rounded-lg border border-legal-gold/20">
              <h5 className="text-legal-gold font-semibold text-sm mb-2">Emergencias 24/7</h5>
              <p className="text-gray-300 text-xs">
                Para casos urgentes, contáctanos en cualquier momento.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm">
              © 2024 LegalConsult. Todos los derechos reservados.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-legal-gold transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-300 hover:text-legal-gold transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-300 hover:text-legal-gold transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;