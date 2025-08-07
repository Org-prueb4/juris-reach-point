import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  FileText, 
  Gavel, 
  Shield, 
  BookOpen,
  ArrowRight
} from "lucide-react";
import { useWhatsApp } from "@/hooks/use-whatsapp";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useState } from "react";
import InfoModal from "./InfoModal";

const Services = () => {
  const { openWhatsApp } = useWhatsApp();
  const { scrollToSection } = useSmoothScroll();
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const services = [
    {
      icon: Building2,
      title: "Derecho Corporativo",
      description: "Constitución de empresas, contratos comerciales, fusiones y adquisiciones.",
      features: ["Constitución de empresas", "Contratos comerciales", "Fusiones y adquisiciones", "Compliance corporativo"]
    },
    {
      icon: Users,
      title: "Derecho Laboral",
      description: "Asesoría integral en relaciones laborales para empleadores y trabajadores.",
      features: ["Contratos de trabajo", "Despidos y liquidaciones", "Seguridad social", "Conflictos laborales"]
    },
    {
      icon: FileText,
      title: "Derecho Civil",
      description: "Soluciones legales para asuntos personales, familiares y patrimoniales.",
      features: ["Derecho de familia", "Sucesiones", "Contratos civiles", "Responsabilidad civil"]
    },
    {
      icon: Gavel,
      title: "Litigios",
      description: "Representación judicial experta en todas las instancias.",
      features: ["Demandas civiles", "Procesos penales", "Arbitraje", "Mediación"]
    },
    {
      icon: Shield,
      title: "Derecho Penal",
      description: "Defensa penal especializada con amplia experiencia procesal.",
      features: ["Defensa penal", "Procesos disciplinarios", "Investigaciones", "Recursos"]
    },
    {
      icon: BookOpen,
      title: "Consultoría Legal",
      description: "Asesoría preventiva para evitar conflictos legales futuros.",
      features: ["Auditorías legales", "Políticas internas", "Capacitaciones", "Due diligence"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-secondary">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-legal-gold/10 text-legal-gold px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="h-4 w-4" />
            <span>Servicios Especializados</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Áreas de Práctica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos servicios jurídicos integrales con un enfoque personalizado 
            para cada cliente, respaldados por años de experiencia y resultados exitosos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <CardHeader className="pb-4">
                <div className="p-3 bg-legal-navy/10 rounded-lg w-fit mb-4 group-hover:bg-legal-navy group-hover:text-white transition-all duration-300">
                  <service.icon className="h-6 w-6 text-legal-navy group-hover:text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-legal-gold rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-legal-navy group-hover:text-white group-hover:border-legal-navy"
                  onClick={() => {
                    setSelectedService(service.title);
                    setIsInfoModalOpen(true);
                  }}
                >
                  Más información
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-legal-navy to-legal-navy-light rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Necesitas asesoría legal especializada?
          </h3>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Nuestro equipo de abogados expertos está listo para ayudarte. 
            Agenda una consulta gratuita y conoce cómo podemos resolver tu situación legal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" onClick={() => openWhatsApp()}>
              Consulta Gratuita
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-legal-gold bg-legal-gold/20 backdrop-blur-sm hover:bg-legal-gold hover:text-legal-navy font-semibold"
              onClick={() => scrollToSection('servicios')}
            >
              Ver Todos los Servicios
            </Button>
          </div>
        </div>
      </div>
      
      {/* Info Modal */}
      <InfoModal 
        isOpen={isInfoModalOpen} 
        onClose={() => setIsInfoModalOpen(false)} 
        selectedService={selectedService}
      />
    </section>
  );
};

export default Services;