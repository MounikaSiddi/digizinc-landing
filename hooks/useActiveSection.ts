// hooks/useActiveSection.ts
'use client';

import { useEffect, useState, useRef } from 'react';

interface Options extends IntersectionObserverInit {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useActiveSection = (sectionIds: string[], options?: Options) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '0px 0px -50% 0px', // Adjust this to control when a section becomes active
        threshold: 0, // As soon as any part of the target enters the viewport
        ...options,
      }
    );

    observerRef.current = observer;

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sectionIds, options]);

  return activeSection;
};
