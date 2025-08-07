import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Shield, Cookie, Settings, Eye, Lock } from "lucide-react";

interface CookiesPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookiesPolicy = ({ isOpen, onClose }: CookiesPolicyProps) => {
  const cookieTypes = [
    {
      icon: Shield,
      title: "Cookies Esenciales",
      description: "Necesarias para que el sitio funcione correctamente",
      examples: ["Sesión de usuario", "Seguridad"],
      duration: "Sesión"
    },
    {
      icon: Eye,
      title: "Cookies Analíticas",
      description: "Nos ayudan a mejorar nuestro sitio web",
      examples: ["Estadísticas de visitas", "Páginas más populares"],
      duration: "2 años"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-legal-navy flex items-center gap-2">
            <Cookie className="h-6 w-6 text-legal-gold" />
            Política de Cookies
          </DialogTitle>
          <p className="text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </DialogHeader>

                 <div className="space-y-6">
           {/* Introducción */}
           <div className="bg-legal-navy/5 rounded-lg p-6 border border-legal-navy/20">
             <h3 className="text-lg font-semibold text-legal-navy mb-3">
               ¿Qué son las cookies?
             </h3>
             <p className="text-muted-foreground leading-relaxed">
               Las cookies son pequeños archivos que se almacenan en tu dispositivo para mejorar tu experiencia 
               en nuestro sitio web. Nos ayudan a recordar tus preferencias y analizar el uso del sitio.
             </p>
           </div>

           {/* Tipos de Cookies */}
           <div>
             <h3 className="text-lg font-semibold text-legal-navy mb-4">
               Tipos de cookies que utilizamos
             </h3>
             <div className="grid md:grid-cols-2 gap-4">
               {cookieTypes.map((type, index) => (
                 <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                   <div className="flex items-start gap-3 mb-3">
                     <div className="p-2 bg-legal-gold/10 rounded-lg">
                       <type.icon className="h-5 w-5 text-legal-gold" />
                     </div>
                     <div>
                       <h4 className="font-semibold text-legal-navy">{type.title}</h4>
                       <p className="text-sm text-muted-foreground">{type.description}</p>
                     </div>
                   </div>
                   <div className="space-y-2">
                     <div className="text-xs text-muted-foreground">
                       <strong>Ejemplos:</strong> {type.examples.join(', ')}
                     </div>
                     <div className="text-xs text-muted-foreground">
                       <strong>Duración:</strong> {type.duration}
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Gestión de Cookies */}
           <div className="bg-legal-gold/5 rounded-lg p-6 border border-legal-gold/20">
             <h3 className="text-lg font-semibold text-legal-navy mb-3">
               ¿Cómo gestionar las cookies?
             </h3>
             <p className="text-sm text-muted-foreground mb-4">
               Puedes configurar tu navegador para rechazar cookies, pero esto puede afectar el funcionamiento 
               del sitio. Para más información, consulta la configuración de privacidad de tu navegador.
             </p>
             <div className="grid md:grid-cols-2 gap-2 text-xs text-muted-foreground">
               <div>• Chrome: Configuración → Privacidad y seguridad → Cookies</div>
               <div>• Firefox: Opciones → Privacidad y seguridad → Cookies</div>
               <div>• Safari: Preferencias → Privacidad → Cookies</div>
               <div>• Edge: Configuración → Cookies y permisos del sitio</div>
             </div>
           </div>

                       {/* Información legal simplificada */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-medium text-blue-800 mb-2">Información legal</h4>
              <div className="space-y-2 text-sm text-blue-700">
                <p>
                  <strong>Base legal:</strong> Utilizamos cookies con tu consentimiento y para mejorar nuestros servicios.
                </p>
                <p>
                  <strong>Tus derechos:</strong> Puedes retirar tu consentimiento y ejercer tus derechos de privacidad.
                </p>
              </div>
            </div>
         </div>

                 {/* Footer */}
         <div className="mt-6 pt-4 border-t border-gray-100">
           <div className="flex justify-end">
             <Button onClick={onClose} className="bg-legal-navy hover:bg-legal-navy/90">
               Entendido
             </Button>
           </div>
         </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookiesPolicy; 