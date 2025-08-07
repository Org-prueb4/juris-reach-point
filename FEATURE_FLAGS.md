# Feature Flags

Este proyecto utiliza un sistema de feature flags para activar/desactivar funcionalidades específicas de manera fácil y controlada.

## Configuración

Los feature flags se configuran en el archivo `src/lib/feature-flags.ts`.

## Feature Flags Disponibles

### CONTACT_FORM_ENABLED
- **Descripción**: Controla si el formulario de contacto se muestra en la sección de contacto
- **Valor por defecto**: `false` (deshabilitado)
- **Ubicación**: Formulario de contacto dentro de la sección de contacto
- **Nota**: La información de contacto siempre se muestra, solo el formulario está controlado por este flag

## Cómo Activar/Desactivar Features

Para activar o desactivar un feature flag:

1. Abre el archivo `src/lib/feature-flags.ts`
2. Cambia el valor del feature flag deseado:
   ```typescript
   export const FEATURE_FLAGS = {
     CONTACT_FORM_ENABLED: true, // Cambiar a true para activar el formulario
   } as const;
   ```
3. Guarda el archivo
4. La aplicación se actualizará automáticamente

## Comportamiento de la Sección de Contacto

### Con el formulario habilitado (`CONTACT_FORM_ENABLED: true`):
- ✅ Sección de contacto visible
- ✅ Formulario de contacto visible
- ✅ Información de contacto visible
- ✅ Beneficios y horarios visibles

### Con el formulario deshabilitado (`CONTACT_FORM_ENABLED: false`):
- ✅ Sección de contacto visible
- ❌ Formulario de contacto oculto
- ✅ Información de contacto visible
- ✅ Beneficios y horarios visibles

## Agregar Nuevos Feature Flags

Para agregar un nuevo feature flag:

1. Agrega la nueva propiedad en `FEATURE_FLAGS`:
   ```typescript
   export const FEATURE_FLAGS = {
     CONTACT_FORM_ENABLED: false,
     NUEVO_FEATURE: false, // Agregar aquí
   } as const;
   ```

2. Usa el feature flag en tu componente:
   ```typescript
   import { isFeatureEnabled } from "@/lib/feature-flags";
   
   const MiComponente = () => {
     if (!isFeatureEnabled('NUEVO_FEATURE')) {
       return null;
     }
     
     // Tu componente aquí
   };
   ```

## Ventajas

- **Despliegue controlado**: Puedes desplegar código sin activar la funcionalidad
- **Rollback rápido**: Desactiva features problemáticos sin redeploy
- **Testing**: Prueba features en producción con un grupo limitado de usuarios
- **Flexibilidad**: Activa/desactiva features sin cambios de código
- **UX consistente**: La información de contacto siempre está disponible para los usuarios

## Notas Importantes

- Los feature flags se evalúan en tiempo de compilación
- Para cambios en feature flags, necesitas reiniciar el servidor de desarrollo
- Los feature flags están tipados para evitar errores
- La sección de contacto siempre está presente, solo el formulario se oculta/muestra 