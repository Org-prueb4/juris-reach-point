import { Button } from "@/components/ui/button";
import { Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-legal.jpg";
import { useWhatsApp } from "@/hooks/use-whatsapp";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useExperienceYears } from "@/hooks/use-experience-years";

const Hero = () => {
  const { openWhatsApp } = useWhatsApp();
  const { scrollToSection } = useSmoothScroll();
  const yearsOfExperience = useExperienceYears();
  
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Consultorio Jurídico Profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-legal-navy/90 via-legal-navy/70 to-legal-navy/50"></div>
      </div>

             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-legal-gold/20 text-legal-gold px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              <span>+{yearsOfExperience} años de experiencia</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Asesoría Jurídica
              <span className="block text-legal-gold">Profesional</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-lg">
              Protegemos tus derechos y los de tu empresa con soluciones legales integrales, 
              personalizadas y de la más alta calidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="gold" size="lg" className="text-lg px-8 py-4" onClick={() => openWhatsApp()}>
                Consulta Gratuita
              </Button>
                             <Button 
                 variant="outline" 
                 size="lg" 
                 className="border-white text-legal-gold bg-legal-gold/20 backdrop-blur-sm hover:bg-legal-gold hover:text-legal-navy text-lg px-8 py-4 font-semibold"
                 onClick={() => scrollToSection('servicios')}
               >
                 Nuestros Servicios
               </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-legal-gold mb-2">500+</div>
                <div className="text-sm text-gray-300">Casos Exitosos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-legal-gold mb-2">{yearsOfExperience}+</div>
                <div className="text-sm text-gray-300">Años Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-legal-gold mb-2">100%</div>
                <div className="text-sm text-gray-300">Confidencialidad</div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="lg:flex hidden justify-end">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md">
              <h3 className="text-white text-xl font-semibold mb-6">¿Por qué elegirnos?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-legal-gold/20 rounded-lg">
                    <Shield className="h-5 w-5 text-legal-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Protección Total</h4>
                    <p className="text-gray-300 text-sm">Defendemos tus intereses con máxima dedicación</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-legal-gold/20 rounded-lg">
                    <Users className="h-5 w-5 text-legal-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Atención Personalizada</h4>
                    <p className="text-gray-300 text-sm">Cada caso recibe atención única y especializada</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-legal-gold/20 rounded-lg">
                    <Award className="h-5 w-5 text-legal-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Resultados Probados</h4>
                    <p className="text-gray-300 text-sm">Historial exitoso en diversas áreas del derecho</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;