import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, Users, Mail } from "lucide-react";

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicy = ({ isOpen, onClose }: PrivacyPolicyProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-legal-navy flex items-center gap-2">
            <Shield className="h-6 w-6 text-legal-gold" />
            Política de Privacidad
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
              Compromiso con tu privacidad
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Tu privacidad es fundamental para nosotros. Esta política describe cómo recopilamos, 
              utilizamos y protegemos tu información personal cuando utilizas nuestro sitio web.
            </p>
          </div>

          {/* Información que recopilamos */}
          <div>
            <h3 className="text-lg font-semibold text-legal-navy mb-4 flex items-center gap-2">
              <Eye className="h-5 w-5 text-legal-gold" />
              Información que recopilamos
            </h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <strong>Información de contacto:</strong>
                <ul className="mt-2 ml-4 space-y-1">
                  <li>• Nombre y apellidos</li>
                  <li>• Dirección de correo electrónico</li>
                  <li>• Número de teléfono</li>
                  <li>• Información de la empresa (si aplica)</li>
                </ul>
              </div>
              <div>
                <strong>Información del caso:</strong>
                <ul className="mt-2 ml-4 space-y-1">
                  <li>• Descripción del problema legal</li>
                  <li>• Documentos relacionados</li>
                  <li>• Historial de comunicaciones</li>
                </ul>
              </div>
              <div>
                <strong>Información técnica:</strong>
                <ul className="mt-2 ml-4 space-y-1">
                  <li>• Dirección IP y datos del navegador</li>
                  <li>• Páginas visitadas y tiempo de navegación</li>
                  <li>• Dispositivo y sistema operativo</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Uso de la información */}
          <div className="bg-legal-gold/5 rounded-lg p-6 border border-legal-gold/20">
            <h3 className="text-lg font-semibold text-legal-navy mb-3">
              Cómo utilizamos tu información
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong>Prestación de servicios:</strong> Para evaluar tu caso, proporcionar 
                asesoría legal y gestionar la relación abogado-cliente.
              </p>
              <p>
                <strong>Comunicación:</strong> Para responder a tus consultas, enviar información 
                relevante y mantenerte informado sobre tu caso.
              </p>
              <p>
                <strong>Mejora del servicio:</strong> Para analizar el uso del sitio web y 
                mejorar nuestros servicios y experiencia del usuario.
              </p>
              <p>
                <strong>Cumplimiento legal:</strong> Para cumplir con obligaciones legales, 
                regulatorias y profesionales.
              </p>
            </div>
          </div>

          {/* Compartir información */}
          <div>
            <h3 className="text-lg font-semibold text-legal-navy mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-legal-gold" />
              Compartir información
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong>No vendemos información:</strong> No vendemos, alquilamos o comercializamos 
                tu información personal con terceros.
              </p>
              <p>
                <strong>Proveedores de servicios:</strong> Podemos compartir información con 
                proveedores de servicios que nos ayudan a operar nuestro negocio (hosting, email, etc.).
              </p>
              <p>
                <strong>Requerimiento legal:</strong> Podemos divulgar información cuando lo requiera 
                la ley o para proteger nuestros derechos y seguridad.
              </p>
            </div>
          </div>

          {/* Protección de datos */}
          <div>
            <h3 className="text-lg font-semibold text-legal-navy mb-4 flex items-center gap-2">
              <Lock className="h-5 w-5 text-legal-gold" />
              Protección de datos
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong>Medidas de seguridad:</strong> Implementamos medidas técnicas y organizativas 
                apropiadas para proteger tu información personal.
              </p>
              <p>
                <strong>Acceso limitado:</strong> Solo el personal autorizado tiene acceso a tu 
                información personal.
              </p>
              <p>
                <strong>Retención de datos:</strong> Conservamos tu información solo durante el 
                tiempo necesario para los fines descritos en esta política.
              </p>
            </div>
          </div>

          {/* Tus derechos */}
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">Tus derechos</h4>
            <div className="space-y-2 text-sm text-blue-700">
              <p>
                <strong>Acceso y rectificación:</strong> Puedes solicitar acceso a tu información 
                personal y corregir datos inexactos.
              </p>
              <p>
                <strong>Portabilidad:</strong> Puedes solicitar una copia de tus datos en formato 
                estructurado.
              </p>
              <p>
                <strong>Supresión:</strong> Puedes solicitar la eliminación de tu información 
                personal en ciertas circunstancias.
              </p>
              <p>
                <strong>Oposición:</strong> Puedes oponerte al procesamiento de tus datos 
                personales en ciertos casos.
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

export default PrivacyPolicy; 