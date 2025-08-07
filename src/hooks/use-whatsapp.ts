export const useWhatsApp = () => {
  const phoneNumber = "573001234567"; // TODO: Actualizar con el número real
  const defaultMessage = "Hola, me gustaría hacer una consulta legal.";

  const openWhatsApp = (customMessage?: string) => {
    const message = customMessage || defaultMessage;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return { openWhatsApp, phoneNumber };
}; 