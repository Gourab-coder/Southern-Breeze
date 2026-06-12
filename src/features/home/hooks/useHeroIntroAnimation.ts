import { type RefObject, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

type UseHeroIntroAnimationArgs = {
  heroRef: RefObject<HTMLElement | null>;
  titleRef: RefObject<HTMLHeadingElement | null>;
  introRef: RefObject<HTMLParagraphElement | null>;
  actionsRef: RefObject<HTMLDivElement | null>;
  visualRef: RefObject<HTMLDivElement | null>;
  prefersReducedMotion: boolean | null;
};

export function useHeroIntroAnimation({
  heroRef,
  titleRef,
  introRef,
  actionsRef,
  visualRef,
  prefersReducedMotion,
}: UseHeroIntroAnimationArgs) {
  useLayoutEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      const titleWords = titleRef.current?.querySelectorAll('span');

      gsap.set([introRef.current, actionsRef.current, visualRef.current], {
        opacity: 0,
        y: 40,
      });

      if (titleWords?.length) {
        gsap.set(titleWords, {
          opacity: 0,
          yPercent: 120,
          rotateX: -70,
        });
      }

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      if (titleWords?.length) {
        timeline.to(titleWords, {
          opacity: 1,
          yPercent: 0,
          rotateX: 0,
          duration: 1.05,
          stagger: 0.08,
        });
      }

      timeline
        .to(introRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.55')
        .to(actionsRef.current, { opacity: 1, y: 0, duration: 0.75 }, '-=0.5')
        .to(visualRef.current, { opacity: 1, y: 0, scale: 1, duration: 1 }, '-=0.9');
    }, heroRef);

    return () => context.revert();
  }, [actionsRef, heroRef, introRef, prefersReducedMotion, titleRef, visualRef]);
}
