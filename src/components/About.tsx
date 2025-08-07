import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  BookOpen, 
  Clock,
  CheckCircle,
  Star
} from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      number: "500+",
      label: "Casos Exitosos",
      description: "Resultados favorables para nuestros clientes"
    },
    {
      icon: Users,
      number: "15+",
      label: "Años de Experiencia",
      description: "Trayectoria sólida en el sector jurídico"
    },
    {
      icon: BookOpen,
      number: "50+",
      label: "Áreas Especializadas",
      description: "Cobertura integral del derecho"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Disponibilidad",
      description: "Atención cuando más nos necesites"
    }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Integridad",
      description: "Actuamos con la más alta ética profesional en cada caso que asumimos."
    },
    {
      icon: Star,
      title: "Excelencia",
      description: "Búsqueda constante de los mejores resultados para nuestros clientes."
    },
    {
      icon: Users,
      title: "Compromiso",
      description: "Dedicación total a la defensa de los intereses de quienes confían en nosotros."
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-background">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-legal-gold/10 text-legal-gold px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            <span>Quiénes Somos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tu Socio Legal de Confianza
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Somos un consultorio jurídico con más de 15 años de experiencia, especializado en 
            brindar soluciones legales integrales a personas naturales y empresas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Experiencia que marca la diferencia
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                En <strong className="text-foreground">LegalConsult</strong>, entendemos que cada 
                situación legal es única y requiere un enfoque personalizado. Nuestro equipo de 
                abogados especializados combina amplia experiencia con un profundo conocimiento 
                del marco jurídico actual.
              </p>
              <p>
                Nos caracterizamos por mantener una comunicación clara y transparente con nuestros 
                clientes, explicando cada paso del proceso legal de manera comprensible y manteniéndolos 
                informados en todo momento.
              </p>
              <p>
                Nuestro compromiso va más allá de la representación legal; somos asesores estratégicos 
                que ayudamos a prevenir problemas futuros y a tomar decisiones informadas.
              </p>
            </div>
            
            <div className="mt-8">
              <Button variant="hero" size="lg">
                Conoce Nuestro Equipo
              </Button>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="p-3 bg-legal-navy/10 rounded-lg w-fit mx-auto mb-4">
                    <achievement.icon className="h-6 w-6 text-legal-navy" />
                  </div>
                  <div className="text-3xl font-bold text-legal-navy mb-2">
                    {achievement.number}
                  </div>
                  <div className="font-semibold text-foreground mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Nuestros Valores
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y definen nuestra relación con cada cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-legal-gold/10 rounded-full w-fit mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-legal-gold" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;