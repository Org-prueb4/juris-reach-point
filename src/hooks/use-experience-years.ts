import { useState, useEffect } from 'react';

export const useExperienceYears = (startYear: number = 2009) => {
  const [yearsOfExperience, setYearsOfExperience] = useState<number>(15);

  useEffect(() => {
    const calculateExperience = () => {
      const currentYear = new Date().getFullYear();
      const calculatedYears = currentYear - startYear;
      
      // Asegurar que nunca sea menor que el valor por defecto
      const finalYears = Math.max(calculatedYears, 15);
      setYearsOfExperience(finalYears);
    };

    calculateExperience();
  }, [startYear]);

  return yearsOfExperience;
}; 