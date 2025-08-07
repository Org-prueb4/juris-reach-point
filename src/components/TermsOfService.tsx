import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Shield, Users, Scale } from "lucide-react";

interface TermsOfServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfService = ({ isOpen, onClose }: TermsOfServiceProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-legal-navy flex items-center gap-2">
            <FileText className="h-6 w-6 text-legal-gold" />
            Términos de Servicio
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
              Aceptación de los términos
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Al acceder y utilizar este sitio web, aceptas estar sujeto a estos términos y condiciones. 
              Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro sitio.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold text-legal-navy mb-4 flex items-center gap-2">
              <Scale className="h-5 w-5 text-legal-gold" />
              Servicios Jurídicos
            </h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                <strong>Naturaleza de los servicios:</strong> Ofrecemos servicios de consultoría jurídica 
                y representación legal en diversas áreas del derecho. La información en este sitio web es 
                únicamente informativa y no constituye asesoría legal.
              </p>
              <p>
                <strong>Consultas iniciales:</strong> Las consultas gratuitas son evaluaciones preliminares 
                y no garantizan resultados específicos. Cada caso requiere análisis individual.
              </p>
              <p>
                <strong>Representación:</strong> La representación legal formal requiere un contrato 
                de servicios por separado y el pago de honorarios acordados.
              </p>
            </div>
          </div>

          {/* Limitaciones */}
          <div className="bg-legal-gold/5 rounded-lg p-6 border border-legal-gold/20">
            <h3 className="text-lg font-semibold text-legal-navy mb-3">
              Limitaciones y responsabilidades
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong>Información del sitio:</strong> El contenido de este sitio web se proporciona 
                "tal como está" sin garantías de ningún tipo, expresas o implícitas.
              </p>
              <p>
                <strong>No garantía de resultados:</strong> No garantizamos resultados específicos 
                en casos legales, ya que cada situación es única y depende de múltiples factores.
              </p>
              <p>
                <strong>Confidencialidad:</strong> La información compartida a través de este sitio 
                web no está protegida por el privilegio abogado-cliente hasta que se establezca 
                una relación formal.
              </p>
            </div>
          </div>

          {/* Uso del sitio */}
          <div>
            <h3 className="text-lg font-semibold text-legal-navy mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-legal-gold" />
              Uso del sitio web
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong>Uso permitido:</strong> Puedes utilizar este sitio web únicamente para 
                fines legítimos y de acuerdo con estos términos.
              </p>
              <p>
                <strong>Prohibiciones:</strong> No está permitido usar el sitio para actividades 
                ilegales, transmitir contenido dañino, o interferir con su funcionamiento.
              </p>
              <p>
                <strong>Propiedad intelectual:</strong> Todo el contenido de este sitio web está 
                protegido por derechos de autor y otras leyes de propiedad intelectual.
              </p>
            </div>
          </div>

          {/* Modificaciones */}
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">Modificaciones</h4>
            <p className="text-sm text-blue-700">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. 
              Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
            </p>
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

export default TermsOfService; 