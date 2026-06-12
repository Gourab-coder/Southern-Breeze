import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion';
import homeStyles from '../home/homeStyles.module.css';
import { BackgroundCanvas } from '../home/components/BackgroundCanvas';
import { SiteHeader } from '../home/components/SiteHeader';
import type { RouteId } from './routes';

type SiteLayoutProps = {
  activeRoute: RouteId;
  children: ReactNode;
};

export function SiteLayout({ activeRoute, children }: SiteLayoutProps) {
  const prefersReducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const auraX = useSpring(pointerX, { stiffness: 170, damping: 28, mass: 0.25 });
  const auraY = useSpring(pointerY, { stiffness: 170, damping: 28, mass: 0.25 });
  const ringX = useSpring(pointerX, { stiffness: 280, damping: 40, mass: 0.2 });
  const ringY = useSpring(pointerY, { stiffness: 280, damping: 40, mass: 0.2 });
  const auraBackground = useMotionTemplate`radial-gradient(circle, rgba(110, 231, 255, 0.32) 0%, rgba(110, 231, 255, 0.08) 38%, transparent 70%)`;
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 140, damping: 24 });

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

  return (
    <div className={homeStyles.pageShell}>
      <motion.div className={homeStyles.scrollProgress} style={{ scaleX: progressScale }} />

      {!prefersReducedMotion ? (
        <>
          <motion.div
            className={homeStyles.pointerAura}
            style={{ x: auraX, y: auraY, background: auraBackground }}
          />
          <motion.div className={homeStyles.pointerRing} style={{ x: ringX, y: ringY }} />
        </>
      ) : null}

      <BackgroundCanvas />
      <SiteHeader
        activeSection={activeRoute}
        menuOpen={menuOpen}
        onCloseMenu={() => setMenuOpen(false)}
        onToggleMenu={() => setMenuOpen((current) => !current)}
      />
      <main className={homeStyles.main}>{children}</main>
    </div>
  );
}
