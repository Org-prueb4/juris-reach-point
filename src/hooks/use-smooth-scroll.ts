import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the header height to offset the scroll position
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight || 0;
      
      // Calculate the target position with extra padding for better UX
      const targetPosition = element.offsetTop - headerHeight - 30; // 30px extra padding
      
      // Check if smooth scrolling is supported
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: Math.max(0, targetPosition), // Ensure we don't scroll to negative values
          behavior: 'smooth'
        });
      } else {
        // Fallback for browsers that don't support smooth scrolling
        window.scrollTo(0, Math.max(0, targetPosition));
      }
    }
  }, []);

  return { scrollToSection };
}; 