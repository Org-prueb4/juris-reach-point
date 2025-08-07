// Feature flags configuration
// Para activar/desactivar funcionalidades específicas

import { truncate } from "node:fs";

export const FEATURE_FLAGS = {
  // Contact form functionality
  CONTACT_FORM_ENABLED: false, // Cambiar a true cuando quieras activar el formulario
  
  // Otros feature flags pueden agregarse aquí
  // EXAMPLE_FEATURE: false,
} as const;

export type FeatureFlag = keyof typeof FEATURE_FLAGS;

// Función helper para verificar si un feature flag está habilitado
export const isFeatureEnabled = (flag: FeatureFlag): boolean => {
  return FEATURE_FLAGS[flag];
};

// Función para obtener el valor de un feature flag
export const getFeatureFlag = <T extends boolean>(flag: FeatureFlag): T => {
  return FEATURE_FLAGS[flag] as T;
}; 