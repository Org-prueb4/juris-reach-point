# Consultorio Jurídico - Sitio Web Profesional

## 📋 Descripción del Proyecto

Este es un sitio web moderno y profesional para un consultorio jurídico, desarrollado con tecnologías web actuales. El proyecto incluye una interfaz elegante con navegación suave, diseño responsive y componentes optimizados para la experiencia del usuario.

## ✨ Características Principales

- **Diseño Responsive**: Optimizado para todos los dispositivos
- **Navegación Suave**: Scroll automático entre secciones
- **Interfaz Moderna**: Diseño profesional con colores corporativos
- **Componentes Reutilizables**: Arquitectura modular con shadcn/ui
- **SEO Optimizado**: Metadatos y estructura semántica
- **Accesibilidad**: Cumple estándares de accesibilidad web

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para mayor robustez
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework de CSS utilitario
- **shadcn/ui** - Componentes de UI modernos
- **Lucide React** - Iconografía elegante
- **React Router** - Navegación entre páginas

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd juris-reach-point
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:8080
   ```

## 📁 Estructura del Proyecto

```
juris-reach-point/
├── src/
│   ├── components/          # Componentes React
│   │   ├── ui/             # Componentes de UI base
│   │   ├── Header.tsx      # Navegación principal
│   │   ├── Hero.tsx        # Sección principal
│   │   ├── Services.tsx    # Servicios ofrecidos
│   │   ├── About.tsx       # Información del consultorio
│   │   ├── Contact.tsx     # Formulario de contacto
│   │   └── Footer.tsx      # Pie de página
│   ├── hooks/              # Hooks personalizados
│   │   └── use-smooth-scroll.ts
│   ├── pages/              # Páginas de la aplicación
│   └── assets/             # Recursos estáticos
├── public/                 # Archivos públicos
│   ├── favicon.svg         # Icono del sitio
│   └── favicon.ico         # Icono alternativo
└── package.json            # Configuración del proyecto
```

## 🎨 Personalización

### Colores del Tema

El proyecto utiliza una paleta de colores profesional:

- **Azul Marino** (`--legal-navy`): Autoridad y confianza
- **Dorado** (`--legal-gold`): Prestigio y elegancia
- **Grises** (`--legal-gray`): Neutralidad y profesionalismo

### Componentes Principales

- **Header**: Navegación fija con scroll suave
- **Hero**: Sección principal con llamada a la acción
- **Services**: Grid de servicios jurídicos
- **About**: Información del consultorio y valores
- **Contact**: Formulario de contacto funcional

## 📱 Responsive Design

El sitio está optimizado para:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Construcción para producción
npm run build:dev    # Construcción en modo desarrollo
npm run preview      # Vista previa de la construcción

# Linting
npm run lint         # Verificar código
```

## 🚀 Despliegue

### Opciones de Despliegue

1. **Vercel** (Recomendado)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Conectar repositorio GitHub
   - Configurar build command: `npm run build`
   - Configurar publish directory: `dist`

3. **GitHub Pages**
   ```bash
   npm run build
   # Subir contenido de /dist a gh-pages branch
   ```

## 🎯 Funcionalidades Implementadas

- ✅ Navegación suave entre secciones
- ✅ Diseño responsive completo
- ✅ Componentes UI modernos
- ✅ Optimización de rendimiento
- ✅ SEO básico implementado
- ✅ Favicon personalizado
- ✅ Formularios funcionales

## 📞 Soporte

Para consultas sobre el proyecto:

- **Email**: juanayalasalazar1@gmail.com
- **GitHub**: IngJuanAyala

## 📄 Licencia

Este proyecto es de uso privado para el consultorio jurídico.

---

**Desarrollado con ❤️ para consultorios jurídicos profesionales**
