# Configuración de EmailJS para el Formulario de Contacto

## ¿Qué es EmailJS?

EmailJS es un servicio gratuito que permite enviar emails directamente desde el frontend de tu aplicación web sin necesidad de un backend. Es perfecto para formularios de contacto.

## Pasos para Configurar EmailJS

### 1. Crear una cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Regístrate para obtener una cuenta gratuita
3. Confirma tu email

### 2. Configurar un Email Service

1. En el dashboard de EmailJS, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Conecta tu cuenta de email
5. Guarda el servicio y anota el **Service ID**

### 3. Crear una Email Template

1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Usa este template como base:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Nueva Consulta Legal</title>
</head>
<body>
    <h2>Nueva Consulta desde el Sitio Web</h2>
    
    <h3>Información del Cliente:</h3>
    <p><strong>Nombre:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Teléfono:</strong> {{from_phone}}</p>
    
    <h3>Detalles de la Consulta:</h3>
    <p><strong>Asunto:</strong> {{subject}}</p>
    <p><strong>Mensaje:</strong></p>
    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        {{message}}
    </div>
    
    <hr>
    <p><small>Este mensaje fue enviado desde el formulario de contacto de LegalConsult.</small></p>
</body>
</html>
```

4. Guarda el template y anota el **Template ID**

### 4. Obtener tu Public Key

1. Ve a "Account" en el dashboard
2. En la sección "API Keys", copia tu **Public Key**

### 5. Actualizar el Código

Reemplaza los valores en el archivo `src/hooks/use-contact-form.ts`:

```typescript
// Líneas 67-69 en use-contact-form.ts
const serviceId = 'TU_SERVICE_ID'; // Reemplazar con tu Service ID
const templateId = 'TU_TEMPLATE_ID'; // Reemplazar con tu Template ID  
const publicKey = 'TU_PUBLIC_KEY'; // Reemplazar con tu Public Key
```

### 6. Configurar Variables de Entorno (Opcional pero Recomendado)

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

Y actualiza el hook para usar estas variables:

```typescript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

## Planes Gratuitos

- **EmailJS Free**: 200 emails por mes
- **EmailJS Starter**: $15/mes para 1,000 emails
- **EmailJS Pro**: $35/mes para 10,000 emails

## Alternativas Gratuitas

Si prefieres otras opciones:

### 1. Formspree
- Ve a [https://formspree.io/](https://formspree.io/)
- Crea un formulario
- Usa la URL del endpoint en lugar de EmailJS

### 2. Netlify Forms
- Si usas Netlify para hosting
- Agrega `data-netlify="true"` al formulario
- Netlify procesará automáticamente los envíos

### 3. Google Forms
- Crea un formulario en Google Forms
- Usa la URL de respuesta para redirigir después del envío

## Pruebas

1. Llena el formulario con datos de prueba
2. Verifica que recibas el email
3. Revisa la consola del navegador para errores
4. Prueba con diferentes navegadores

## Seguridad

- Los datos se envían de forma segura a través de HTTPS
- EmailJS no almacena permanentemente los datos
- Considera agregar reCAPTCHA para mayor seguridad

## Soporte

- [Documentación oficial de EmailJS](https://www.emailjs.com/docs/)
- [Comunidad de EmailJS](https://community.emailjs.com/) 