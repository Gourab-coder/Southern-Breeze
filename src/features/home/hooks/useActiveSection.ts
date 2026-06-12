import { useEffect, useState } from 'react';

type NavSection = {
  id: string;
};

export function useActiveSection(sections: readonly NavSection[]) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: '-35% 0px -35% 0px', threshold: [0.2, 0.35, 0.5, 0.7] },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return activeSection;
}
