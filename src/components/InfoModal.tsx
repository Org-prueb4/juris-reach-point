import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Gavel,
  Shield,
  Users,
  FileText,
  Clock,
  CheckCircle,
  Phone,
  MessageCircle,
  Mail,
  ArrowRight,
  Building2,
  Scale,
  Briefcase,
  Heart,
  Zap,
  BookOpen
} from "lucide-react";
import { useState } from "react";
import { useWhatsApp } from "@/hooks/use-whatsapp";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

const InfoModal = ({ isOpen, onClose, selectedService }: InfoModalProps) => {
  const [activeTab, setActiveTab] = useState<'servicios' | 'proceso' | 'contacto'>('servicios');
  const { openWhatsApp } = useWhatsApp();

  const serviciosDetallados = {
    "Derecho Corporativo": {
      icon: Building2,
      title: "Derecho Corporativo",
      description: "Fusiones, adquisiciones, constitución de empresas y asesoría empresarial integral.",
      servicios: [
        "Constitución y registro de empresas",
        "Fusiones y adquisiciones (M&A)",
        "Contratos comerciales y empresariales",
        "Compliance corporativo y regulatorio",
        "Gobierno corporativo",
        "Asesoría en inversiones extranjeras"
      ],
      beneficios: [
        "Optimización de estructuras empresariales",
        "Reducción de riesgos legales",
        "Cumplimiento normativo integral",
        "Estrategias de crecimiento empresarial"
      ]
    },
    "Derecho Laboral": {
      icon: Heart,
      title: "Derecho Laboral",
      description: "Asesoría integral en relaciones laborales para empleadores y trabajadores.",
      servicios: [
        "Contratos de trabajo y convenios",
        "Despidos y liquidaciones",
        "Negociaciones colectivas",
        "Seguridad social y prestaciones",
        "Conflictos laborales y huelgas",
        "Auditorías de compliance laboral"
      ],
      beneficios: [
        "Prevención de conflictos laborales",
        "Cumplimiento de normativa laboral",
        "Optimización de costos laborales",
        "Protección de derechos laborales"
      ]
    },
    "Derecho Civil": {
      icon: Scale,
      title: "Derecho Civil",
      description: "Soluciones legales para asuntos personales, familiares y patrimoniales.",
      servicios: [
        "Derecho de familia y sucesiones",
        "Contratos civiles y comerciales",
        "Responsabilidad civil",
        "Propiedad intelectual",
        "Derechos reales",
        "Obligaciones y contratos"
      ],
      beneficios: [
        "Protección de patrimonio familiar",
        "Resolución de conflictos civiles",
        "Asesoría en contratos seguros",
        "Defensa de derechos personales"
      ]
    },
    "Litigios": {
      icon: Gavel,
      title: "Litigios Civiles y Comerciales",
      description: "Representación legal en juicios, arbitrajes y mediaciones con alta tasa de éxito.",
      servicios: [
        "Demandas civiles y comerciales",
        "Procesos de ejecución",
        "Arbitraje nacional e internacional",
        "Mediación y conciliación",
        "Recursos y apelaciones",
        "Litigios complejos"
      ],
      beneficios: [
        "Alta tasa de éxito en litigios",
        "Estrategias de resolución eficientes",
        "Experiencia en todas las instancias",
        "Negociación y acuerdos favorables"
      ]
    },
    "Derecho Penal": {
      icon: Shield,
      title: "Derecho Penal",
      description: "Defensa penal especializada en casos complejos y delitos económicos.",
      servicios: [
        "Defensa penal integral",
        "Delitos económicos y financieros",
        "Procesos disciplinarios",
        "Investigaciones penales",
        "Recursos y apelaciones",
        "Medidas cautelares"
      ],
      beneficios: [
        "Defensa especializada en casos complejos",
        "Protección de derechos fundamentales",
        "Experiencia en delitos económicos",
        "Acompañamiento integral del proceso"
      ]
    },
    "Consultoría Legal": {
      icon: BookOpen,
      title: "Consultoría Legal",
      description: "Asesoría preventiva para evitar conflictos legales futuros.",
      servicios: [
        "Auditorías legales integrales",
        "Políticas internas corporativas",
        "Capacitaciones legales",
        "Due diligence legal",
        "Compliance regulatorio",
        "Prevención de riesgos legales"
      ],
      beneficios: [
        "Prevención de conflictos legales",
        "Optimización de procesos legales",
        "Reducción de riesgos empresariales",
        "Cumplimiento normativo proactivo"
      ]
    }
  };

  const proceso = [
    {
      icon: FileText,
      title: "Evaluación Inicial",
      description: "Analizamos tu caso en una consulta gratuita para determinar la mejor estrategia."
    },
    {
      icon: Users,
      title: "Asignación de Equipo",
      description: "Te asignamos el abogado especializado más adecuado para tu situación."
    },
    {
      icon: Clock,
      title: "Desarrollo del Caso",
      description: "Trabajamos tu caso con transparencia, manteniéndote informado en cada paso."
    },
    {
      icon: CheckCircle,
      title: "Resolución",
      description: "Buscamos la mejor solución legal, priorizando tus intereses y objetivos."
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-legal-navy">
            Más Información
          </DialogTitle>
          <p className="text-muted-foreground">
            Conoce nuestros servicios, cómo trabajamos y cómo podemos ayudarte.
          </p>
        </DialogHeader>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6">
          <button
            onClick={() => setActiveTab('servicios')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'servicios'
                ? 'bg-white text-legal-navy shadow-sm'
                : 'text-gray-600 hover:text-legal-navy'
            }`}
          >
            Nuestros Servicios
          </button>
          <button
            onClick={() => setActiveTab('proceso')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'proceso'
                ? 'bg-white text-legal-navy shadow-sm'
                : 'text-gray-600 hover:text-legal-navy'
            }`}
          >
            Cómo Trabajamos
          </button>
          <button
            onClick={() => setActiveTab('contacto')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'contacto'
                ? 'bg-white text-legal-navy shadow-sm'
                : 'text-gray-600 hover:text-legal-navy'
            }`}
          >
            Contacta Ahora
          </button>
        </div>

                 {/* Contenido de las pestañas */}
         {activeTab === 'servicios' && (
           <div className="space-y-6">
             {selectedService && serviciosDetallados[selectedService as keyof typeof serviciosDetallados] ? (
               <>
                 {/* Servicio seleccionado */}
                 <div className="bg-gradient-to-r from-legal-navy/5 to-legal-gold/5 rounded-lg p-6 border border-legal-navy/20">
                   <div className="flex items-start gap-4 mb-4">
                     <div className="p-3 bg-legal-gold/10 rounded-lg">
                       {(() => {
                         const IconComponent = serviciosDetallados[selectedService as keyof typeof serviciosDetallados].icon;
                         return <IconComponent className="h-8 w-8 text-legal-gold" />;
                       })()}
                     </div>
                     <div>
                       <h3 className="text-xl font-bold text-legal-navy mb-2">
                         {serviciosDetallados[selectedService as keyof typeof serviciosDetallados].title}
                       </h3>
                       <p className="text-muted-foreground">
                         {serviciosDetallados[selectedService as keyof typeof serviciosDetallados].description}
                       </p>
                     </div>
                   </div>
                 </div>

                 {/* Servicios específicos */}
                 <div className="grid md:grid-cols-2 gap-6">
                   <div>
                     <h4 className="font-semibold text-legal-navy mb-3 flex items-center gap-2">
                       <Shield className="h-5 w-5 text-legal-gold" />
                       Servicios que ofrecemos
                     </h4>
                     <ul className="space-y-2">
                       {serviciosDetallados[selectedService as keyof typeof serviciosDetallados].servicios.map((servicio, index) => (
                         <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                           <div className="w-1.5 h-1.5 bg-legal-gold rounded-full mt-2 flex-shrink-0"></div>
                           {servicio}
                         </li>
                       ))}
                     </ul>
                   </div>

                   <div>
                     <h4 className="font-semibold text-legal-navy mb-3 flex items-center gap-2">
                       <CheckCircle className="h-5 w-5 text-green-500" />
                       Beneficios para ti
                     </h4>
                     <ul className="space-y-2">
                       {serviciosDetallados[selectedService as keyof typeof serviciosDetallados].beneficios.map((beneficio, index) => (
                         <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                           <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                           {beneficio}
                         </li>
                       ))}
                     </ul>
                   </div>
                 </div>

                 {/* CTA específico */}
                 <div className="bg-legal-gold/5 rounded-lg p-4 border border-legal-gold/20">
                   <div className="flex items-center gap-2 mb-2">
                     <Zap className="h-5 w-5 text-legal-gold" />
                     <h4 className="font-semibold text-legal-navy">
                       ¿Necesitas asesoría en {selectedService}?
                     </h4>
                   </div>
                   <p className="text-sm text-muted-foreground mb-3">
                     Nuestros especialistas están listos para ayudarte. Agenda una consulta gratuita 
                     para evaluar tu caso específico.
                   </p>
                   <Button 
                     onClick={() => openWhatsApp()}
                     className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy"
                   >
                     Consultar Ahora
                   </Button>
                 </div>
               </>
             ) : (
               // Vista general cuando no hay servicio seleccionado
               <div className="space-y-6">
                 <div className="grid md:grid-cols-2 gap-4">
                   {Object.values(serviciosDetallados).map((servicio, index) => (
                     <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                       <div className="flex items-start gap-3">
                         <div className="p-2 bg-legal-gold/10 rounded-lg">
                           <servicio.icon className="h-5 w-5 text-legal-gold" />
                         </div>
                         <div>
                           <h4 className="font-semibold text-legal-navy mb-1">{servicio.title}</h4>
                           <p className="text-sm text-muted-foreground">{servicio.description}</p>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
                 <div className="bg-legal-gold/5 rounded-lg p-4 border border-legal-gold/20">
                   <div className="flex items-center gap-2 mb-2">
                     <Zap className="h-5 w-5 text-legal-gold" />
                     <h4 className="font-semibold text-legal-navy">¿No encuentras tu área?</h4>
                   </div>
                   <p className="text-sm text-muted-foreground">
                     Contamos con especialistas en múltiples ramas del derecho. Agenda una consulta gratuita 
                     para evaluar tu caso específico.
                   </p>
                 </div>
               </div>
             )}
           </div>
         )}

        {activeTab === 'proceso' && (
          <div className="space-y-6">
            <div className="space-y-4">
              {proceso.map((paso, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-legal-gold rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <paso.icon className="h-5 w-5 text-legal-gold" />
                      <h4 className="font-semibold text-legal-navy">{paso.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{paso.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-legal-navy/5 rounded-lg p-4 border border-legal-navy/20">
              <h4 className="font-semibold text-legal-navy mb-2">Nuestros Compromisos</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Transparencia total en costos y procesos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Comunicación constante sobre el avance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Disponibilidad 24/7 para casos urgentes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Confidencialidad absoluta de tu información
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'contacto' && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-legal-navy mb-2">
                ¿Listo para resolver tu caso legal?
              </h3>
              <p className="text-muted-foreground">
                Elige la forma más conveniente para contactarnos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Button
                onClick={() => openWhatsApp()}
                className="h-auto p-4 flex flex-col items-center gap-2 bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="h-6 w-6" />
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-xs opacity-90">Respuesta inmediata</div>
                </div>
              </Button>

              <Button
                onClick={() => window.open('tel:+1234567890', '_self')}
                className="h-auto p-4 flex flex-col items-center gap-2 bg-legal-navy hover:bg-legal-navy/90"
              >
                <Phone className="h-6 w-6" />
                <div>
                  <div className="font-semibold">Llamar Ahora</div>
                  <div className="text-xs opacity-90">Atención directa</div>
                </div>
              </Button>

              <Button
                onClick={() => window.open('mailto:info@legalconsult.com', '_self')}
                className="h-auto p-4 flex flex-col items-center gap-2 bg-legal-gold hover:bg-legal-gold/90 text-legal-navy"
              >
                <Mail className="h-6 w-6" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-xs opacity-90">Consulta detallada</div>
                </div>
              </Button>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-legal-navy mb-2">Información de Contacto</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-legal-gold" />
                  <span>Lunes a Viernes: 8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-legal-gold" />
                  <span>Emergencias: 24/7 disponible</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-legal-gold" />
                  <span>Consultas presenciales y virtuales</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-gray-100 text-center">
          <p className="text-muted-foreground text-sm">
            Tu confianza es nuestra prioridad. Estamos aquí para defender tus derechos.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal; 