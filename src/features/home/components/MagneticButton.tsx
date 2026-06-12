import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react';
import { useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { gsap } from 'gsap';
import styles from '../homeStyles.module.css';

type MagneticButtonProps = {
  href?: string;
  label: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
};

export function MagneticButton({
  href,
  label,
  variant = 'primary',
  className = '',
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  const innerRef = useRef<HTMLSpanElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handlePointerMove = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion || !buttonRef.current || !innerRef.current) {
      return;
    }

    const bounds = buttonRef.current.getBoundingClientRect();
    const offsetX = event.clientX - bounds.left - bounds.width / 2;
    const offsetY = event.clientY - bounds.top - bounds.height / 2;

    gsap.to(buttonRef.current, {
      x: offsetX * 0.16,
      y: offsetY * 0.2,
      duration: 0.35,
      ease: 'power3.out',
    });

    gsap.to(innerRef.current, {
      x: offsetX * 0.08,
      y: offsetY * 0.1,
      duration: 0.4,
      ease: 'power3.out',
    });
  };

  const handlePointerLeave = () => {
    if (!buttonRef.current || !innerRef.current) {
      return;
    }

    gsap.to([buttonRef.current, innerRef.current], {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.45)',
    });
  };

  const handleClick = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const ripple = {
      id: Date.now(),
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };

    setRipples((current) => [...current, ripple]);
    window.setTimeout(() => {
      setRipples((current) => current.filter((item) => item.id !== ripple.id));
    }, 650);
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`${styles.button} ${variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary} ${className}`}
      onClick={handleClick}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
    >
      <span ref={innerRef} className={styles.buttonInner}>
        {label}
      </span>
      <span className={styles.buttonGlow} aria-hidden="true" />
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className={styles.ripple}
          style={{ left: ripple.x, top: ripple.y } as CSSProperties}
          aria-hidden="true"
        />
      ))}
    </a>
  );
}
