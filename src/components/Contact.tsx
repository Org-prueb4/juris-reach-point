import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+1 (234) 567-8900", "+1 (234) 567-8901"],
      action: "tel:+1234567890"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@legalconsult.com", "consultas@legalconsult.com"],
      action: "mailto:info@legalconsult.com"
    },
    {
      icon: MapPin,
      title: "Dirección",
      details: ["Calle Principal 123", "Centro Empresarial, Oficina 450"],
      action: ""
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun - Vie: 8:00 AM - 6:00 PM", "Sáb: 9:00 AM - 1:00 PM"],
      action: ""
    }
  ];

  const benefits = [
    "Consulta inicial gratuita",
    "Respuesta en menos de 24 horas",
    "Evaluación personalizada de tu caso",
    "Sin compromiso inicial"
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-legal-gold/10 text-legal-gold px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Phone className="h-4 w-4" />
            <span>Contacto</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comienza tu Consulta Legal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contacta con nosotros y recibe asesoría 
            legal profesional adaptada a tus necesidades específicas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Envíanos tu consulta</CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre *</Label>
                    <Input id="firstName" placeholder="Tu nombre" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido *</Label>
                    <Input id="lastName" placeholder="Tu apellido" required />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" type="tel" placeholder="+1 (234) 567-8900" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto *</Label>
                  <Input id="subject" placeholder="Tema de tu consulta" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe tu situación legal..."
                    className="min-h-[120px]"
                    required 
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="mt-1"
                    required 
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    Acepto la <a href="#" className="text-legal-navy hover:underline">política de privacidad</a> y 
                    autorizo el tratamiento de mis datos personales.
                  </label>
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Consulta
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-legal-navy/10 rounded-lg">
                      <info.icon className="h-5 w-5 text-legal-navy" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm">
                          {info.action ? (
                            <a href={info.action} className="hover:text-legal-navy transition-colors">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-legal-navy to-legal-navy-light text-white">
              <CardHeader>
                <CardTitle>¿Por qué contactarnos?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-legal-gold flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-gray-200">
                    <strong>Emergencias:</strong> Para casos urgentes, 
                    contáctanos directamente al teléfono disponible 24/7.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;