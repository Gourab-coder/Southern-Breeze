import { type ChangeEvent, type FormEvent, useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import styles from './homeStyles.module.css';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { SiteHeader } from './components/SiteHeader';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { FlavorsSection } from './components/sections/FlavorsSection';
import { HeroSection } from './components/sections/HeroSection';
import { JournalSection } from './components/sections/JournalSection';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { useHeroIntroAnimation } from './hooks/useHeroIntroAnimation';

export function HomePage() {
  const prefersReducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const heroRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const introRef = useRef<HTMLParagraphElement | null>(null);
  const actionsRef = useRef<HTMLDivElement | null>(null);
  const visualRef = useRef<HTMLDivElement | null>(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const auraX = useSpring(pointerX, { stiffness: 170, damping: 28, mass: 0.25 });
  const auraY = useSpring(pointerY, { stiffness: 170, damping: 28, mass: 0.25 });
  const ringX = useSpring(pointerX, { stiffness: 280, damping: 40, mass: 0.2 });
  const ringY = useSpring(pointerY, { stiffness: 280, damping: 40, mass: 0.2 });
  const auraBackground = useMotionTemplate`radial-gradient(circle, rgba(110, 231, 255, 0.32) 0%, rgba(110, 231, 255, 0.08) 38%, transparent 70%)`;

  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 140, damping: 24 });
  const heroScroll = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroCopyY = useTransform(heroScroll.scrollYProgress, [0, 1], [0, 120]);
  const heroVisualY = useTransform(heroScroll.scrollYProgress, [0, 1], [0, -100]);
  const heroGlowRotate = useTransform(heroScroll.scrollYProgress, [0, 1], [0, 16]);

  useHeroIntroAnimation({
    heroRef,
    titleRef,
    introRef,
    actionsRef,
    visualRef,
    prefersReducedMotion,
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX - 180);
      pointerY.set(event.clientY - 180);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [pointerX, pointerY, prefersReducedMotion]);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className={styles.pageShell}>
      <motion.div className={styles.scrollProgress} style={{ scaleX: progressScale }} />

      {!prefersReducedMotion ? (
        <>
          <motion.div
            className={styles.pointerAura}
            style={{ x: auraX, y: auraY, background: auraBackground }}
          />
          <motion.div className={styles.pointerRing} style={{ x: ringX, y: ringY }} />
        </>
      ) : null}

      <BackgroundCanvas />

      <SiteHeader
        activeSection="home"
        menuOpen={menuOpen}
        onCloseMenu={() => setMenuOpen(false)}
        onToggleMenu={() => setMenuOpen((current) => !current)}
      />

      <main className={styles.main}>
        <HeroSection
          heroRef={heroRef}
          titleRef={titleRef}
          introRef={introRef}
          actionsRef={actionsRef}
          visualRef={visualRef}
          heroCopyY={heroCopyY}
          heroVisualY={heroVisualY}
          heroGlowRotate={heroGlowRotate}
        />
        <FlavorsSection />
        <ExperienceSection />
        <ReviewsSection />
        <JournalSection />
        <ContactSection
          email={email}
          submitted={submitted}
          onEmailChange={handleEmailChange}
          onSubmit={handleSubmit}
        />
      </main>
    </div>
  );
}
