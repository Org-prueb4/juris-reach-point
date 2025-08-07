import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacy: boolean;
}

interface UseContactFormReturn {
  formData: ContactFormData;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  handleInputChange: (field: keyof ContactFormData, value: string | boolean) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      privacy: false
    });
    setIsSuccess(false);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message || !formData.privacy) {
      setError('Por favor completa todos los campos obligatorios y acepta la política de privacidad.');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Por favor ingresa un email válido.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Configuración de EmailJS usando variables de entorno
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Verificar que las credenciales estén configuradas
      if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS no está configurado. Por favor revisa la documentación EMAILJS_SETUP.md');
      }

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        from_phone: formData.phone || 'No proporcionado',
        subject: formData.subject,
        message: formData.message,
        to_name: 'LegalConsult'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSuccess(true);
      resetForm();
    } catch (err) {
      console.error('Error sending email:', err);
      
      // Manejo específico de errores
      if (err instanceof Error) {
        if (err.message.includes('EmailJS no está configurado')) {
          setError('El formulario no está configurado. Por favor contacta al administrador.');
        } else if (err.message.includes('Invalid template')) {
          setError('Error en la configuración del template. Por favor contacta al administrador.');
        } else if (err.message.includes('Invalid service')) {
          setError('Error en la configuración del servicio. Por favor contacta al administrador.');
        } else {
          setError('Hubo un error al enviar tu consulta. Por favor intenta nuevamente o contáctanos directamente por teléfono.');
        }
      } else {
        setError('Hubo un error inesperado. Por favor intenta nuevamente o contáctanos directamente por teléfono.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    isSuccess,
    error,
    handleInputChange,
    handleSubmit,
    resetForm
  };
}; 