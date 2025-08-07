import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  BookOpen, 
  MapPin, 
  Mail, 
  Phone,
  Linkedin,
  GraduationCap,
  Users,
  Shield,
  Gavel,
  Building2
} from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  photo: string;
  description: string;
  specialties: string[];
  education: string[];
  experience: string;
  languages: string[];
  contact: {
    email: string;
    phone: string;
    linkedin?: string;
  };
  achievements: string[];
}

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TeamModal = ({ isOpen, onClose }: TeamModalProps) => {
  const teamMembers: TeamMember[] = [
         {
       id: 1,
       name: "Dr. María Elena Rodríguez",
       position: "Socia Fundadora y Directora General",
       photo: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=300&fit=crop&crop=face",
      description: "Abogada con más de 20 años de experiencia en derecho corporativo y comercial. Especialista en fusiones y adquisiciones, con un historial probado de éxito en transacciones complejas.",
      specialties: ["Derecho Corporativo", "Fusiones y Adquisiciones", "Compliance", "Contratos Comerciales"],
      education: [
        "Doctorado en Derecho Comercial - Universidad de Harvard",
        "Maestría en Derecho Corporativo - Universidad de Columbia",
        "Abogada - Universidad Nacional de Colombia"
      ],
      experience: "20+ años",
      languages: ["Español", "Inglés", "Francés"],
      contact: {
        email: "maria.rodriguez@legalconsult.com",
        phone: "+1 (234) 567-8901",
        linkedin: "maria-rodriguez-legal"
      },
      achievements: [
        "Premio al Abogado del Año 2023 - Cámara de Comercio",
        "Top 100 Abogados Corporativos - Revista Legal",
        "Certificación en Compliance Internacional"
      ]
    },
         {
       id: 2,
       name: "Dr. Carlos Andrés Mendoza",
       position: "Socio y Director de Litigios",
       photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Experto en litigios civiles y comerciales con una tasa de éxito del 95%. Especializado en arbitraje internacional y mediación de conflictos complejos.",
      specialties: ["Litigios Civiles", "Arbitraje Internacional", "Mediación", "Derecho Procesal"],
      education: [
        "Maestría en Litigios - Universidad de Georgetown",
        "Especialización en Arbitraje - Universidad de Londres",
        "Abogado - Universidad de los Andes"
      ],
      experience: "18+ años",
      languages: ["Español", "Inglés", "Portugués"],
      contact: {
        email: "carlos.mendoza@legalconsult.com",
        phone: "+1 (234) 567-8902"
      },
      achievements: [
        "Arbitro Certificado por la CCI",
        "Mediador Acreditado Internacional",
        "Premio Excelencia en Litigios 2022"
      ]
    },
         {
       id: 3,
       name: "Dra. Ana Sofía Vargas",
       position: "Socia y Directora de Derecho Laboral",
       photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
      description: "Especialista en derecho laboral y seguridad social con amplia experiencia en representación tanto de empleadores como trabajadores en conflictos complejos.",
      specialties: ["Derecho Laboral", "Seguridad Social", "Negociación Colectiva", "Compliance Laboral"],
      education: [
        "Maestría en Derecho Laboral - Universidad de Salamanca",
        "Especialización en Seguridad Social - Universidad de Barcelona",
        "Abogada - Universidad Javeriana"
      ],
      experience: "15+ años",
      languages: ["Español", "Inglés"],
      contact: {
        email: "ana.vargas@legalconsult.com",
        phone: "+1 (234) 567-8903"
      },
      achievements: [
        "Experta en Derecho Laboral Internacional",
        "Consultora de la OIT",
        "Autora de 3 libros sobre Derecho Laboral"
      ]
    },
         {
       id: 4,
       name: "Dr. Roberto Alejandro Silva",
       position: "Socio y Director de Derecho Penal",
       photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Abogado penalista con experiencia en defensa de casos de alta complejidad. Especializado en derecho penal económico y delitos informáticos.",
      specialties: ["Derecho Penal", "Derecho Penal Económico", "Delitos Informáticos", "Procesos Disciplinarios"],
      education: [
        "Maestría en Derecho Penal - Universidad de Madrid",
        "Especialización en Cibercrimen - Universidad de Stanford",
        "Abogado - Universidad Externado de Colombia"
      ],
      experience: "12+ años",
      languages: ["Español", "Inglés", "Italiano"],
      contact: {
        email: "roberto.silva@legalconsult.com",
        phone: "+1 (234) 567-8904"
      },
      achievements: [
        "Especialista en Cibercrimen Certificado",
        "Defensor de Casos de Alto Perfil",
        "Instructor en Derecho Penal Digital"
      ]
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                 <DialogHeader>
           <DialogTitle className="text-2xl font-bold text-legal-navy">
             Nuestro Equipo de Abogados
           </DialogTitle>
           <p className="text-muted-foreground">
             Conoce a nuestros abogados especializados, comprometidos con la excelencia 
             y la defensa de tus derechos.
           </p>
         </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-8 mt-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                             {/* Header con foto */}
               <div className="relative">
                 <div className="h-48 bg-gradient-to-br from-legal-navy to-legal-navy-light flex items-center justify-center">
                   <img 
                     src={member.photo} 
                     alt={member.name}
                     className="w-40 h-40 rounded-full object-cover border-4 border-white/20"
                     onError={(e) => {
                       const target = e.target as HTMLImageElement;
                       target.style.display = 'none';
                       target.nextElementSibling?.classList.remove('hidden');
                     }}
                   />
                   <div className="w-40 h-40 bg-white/20 rounded-full flex items-center justify-center hidden">
                     <Users className="h-20 w-20 text-white" />
                   </div>
                 </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-legal-gold font-medium">{member.position}</p>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 space-y-4">
                {/* Descripción */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>

                {/* Especialidades */}
                <div>
                  <h4 className="font-semibold text-legal-navy mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Especialidades
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="bg-legal-gold/10 text-legal-gold">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Educación */}
                <div>
                  <h4 className="font-semibold text-legal-navy mb-2 flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Educación
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {member.education.map((edu, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-legal-gold rounded-full mt-2 flex-shrink-0"></div>
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Información adicional */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-legal-navy">Experiencia:</span>
                    <p className="text-muted-foreground">{member.experience}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-legal-navy">Idiomas:</span>
                    <p className="text-muted-foreground">{member.languages.join(", ")}</p>
                  </div>
                </div>

                {/* Logros */}
                <div>
                  <h4 className="font-semibold text-legal-navy mb-2 flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Logros Destacados
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {member.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-legal-gold rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contacto */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-legal-navy mb-3">Contacto Directo</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-legal-navy" />
                      <a href={`mailto:${member.contact.email}`} className="text-legal-navy hover:underline">
                        {member.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-legal-navy" />
                      <a href={`tel:${member.contact.phone}`} className="text-legal-navy hover:underline">
                        {member.contact.phone}
                      </a>
                    </div>
                    {member.contact.linkedin && (
                      <div className="flex items-center gap-2">
                        <Linkedin className="h-4 w-4 text-legal-navy" />
                        <a 
                          href={`https://linkedin.com/in/${member.contact.linkedin}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-legal-navy hover:underline"
                        >
                          LinkedIn
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-muted-foreground text-sm">
            Nuestro equipo está comprometido con brindarte la mejor asesoría legal. 
            Agenda una consulta gratuita para conocer más sobre cómo podemos ayudarte.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamModal; 