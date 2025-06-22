import { useState, useEffect } from 'react';

export function useScrollSpy(elementIds: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = elementIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(elementIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(elementIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementIds, offset]);

  return activeId;
}
