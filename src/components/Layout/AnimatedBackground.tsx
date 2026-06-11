import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FloatingDecorations } from './FloatingDecorations';
import styles from './AnimatedBackground.module.css';

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollY = window.scrollY;
      const parallaxElements = containerRef.current.querySelectorAll('[data-parallax]');

      parallaxElements.forEach((element) => {
        const speed = parseFloat((element as HTMLElement).dataset.parallax || '0.5');
        const offset = scrollY * speed;
        (element as HTMLElement).style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={styles.backgroundContainer}>
      {/* Floating circles */}
      <motion.div
        className={styles.circle}
        data-parallax="0.2"
        style={{
          top: '5%',
          left: '10%',
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, rgba(21, 94, 89, 0.15), transparent)',
        }}
        animate={{ scale: [1, 1.1, 1], rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className={styles.circle}
        data-parallax="0.3"
        style={{
          top: '20%',
          right: '8%',
          width: '90px',
          height: '90px',
          background: 'radial-gradient(circle, rgba(240, 162, 101, 0.12), transparent)',
        }}
        animate={{ scale: [1.1, 1, 1.1], rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className={styles.circle}
        data-parallax="0.15"
        style={{
          bottom: '10%',
          left: '5%',
          width: '140px',
          height: '140px',
          background: 'radial-gradient(circle, rgba(149, 80, 106, 0.08), transparent)',
        }}
        animate={{ scale: [1, 1.05, 1], rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      {/* Animated gradient blobs */}
      <motion.div
        className={styles.blob}
        data-parallax="0.25"
        style={{
          top: '40%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating leaf shapes */}
      <motion.div
        className={styles.leaf}
        data-parallax="0.35"
        style={{
          top: '15%',
          left: '25%',
        }}
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
          rotate: [0, 15, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className={styles.leaf}
        data-parallax="0.2"
        style={{
          top: '60%',
          right: '15%',
          transform: 'scaleX(-1)',
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, -15, 0],
          rotate: [0, -20, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* Grid pattern overlay */}
      <div className={styles.gridPattern} data-parallax="0.1" />

      {/* Shimmer effect lines */}
      <motion.div
        className={styles.shimmer}
        data-parallax="0.4"
        animate={{
          opacity: [0, 0.5, 0],
          x: ['-100%', '100%'],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating tea leaves and bubbles */}
      <FloatingDecorations />
    </div>
  );
}
