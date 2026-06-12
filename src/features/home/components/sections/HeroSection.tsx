import { type RefObject } from 'react';
import { motion, type MotionValue, useReducedMotion } from 'framer-motion';
import { headingWords, heroMetrics } from '../../homeContent';
import { products } from '../../../../data/products';
import styles from '../../homeStyles.module.css';
import { MagneticButton } from '../MagneticButton';

type HeroSectionProps = {
  heroRef: RefObject<HTMLElement | null>;
  titleRef: RefObject<HTMLHeadingElement | null>;
  introRef: RefObject<HTMLParagraphElement | null>;
  actionsRef: RefObject<HTMLDivElement | null>;
  visualRef: RefObject<HTMLDivElement | null>;
  heroCopyY: MotionValue<number>;
  heroVisualY: MotionValue<number>;
  heroGlowRotate: MotionValue<number>;
};

export function HeroSection({
  heroRef,
  titleRef,
  introRef,
  actionsRef,
  visualRef,
  heroCopyY,
  heroVisualY,
  heroGlowRotate,
}: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.hero} id="home" ref={heroRef}>
      <div className={styles.heroGrid}>
        <motion.div className={styles.heroCopy} style={{ y: heroCopyY }}>
          <span className={styles.eyebrow}>Naturally Sweetened Southern Tea</span>
          <h1 className={styles.heroTitle} ref={titleRef}>
            {headingWords.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </h1>
          <p className={styles.heroLead} ref={introRef}>
            Enjoy the refreshing taste of Southern Breeze Sweet Tea, crafted with real tea and
            naturally sweetened for the perfect balance of flavor and comfort in every sip.
          </p>
          <div className={styles.heroActions} ref={actionsRef}>
            <MagneticButton href="#/flavors" label="Shop Flavors" />
            <MagneticButton
              href="#/contact"
              label="Find a Store"
              variant="secondary"
            />
          </div>
          <div className={styles.heroMetrics}>
            {heroMetrics.map((item) => (
              <motion.div
                key={item.label}
                className={styles.metricCard}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className={styles.heroVisualWrap} style={{ y: heroVisualY }} ref={visualRef}>
          <motion.div className={styles.heroHalo} style={{ rotate: heroGlowRotate }} />
          <div className={styles.heroVisual}>
            <div className={styles.visualCardLarge}>
              <div className={styles.visualLabel}>
                <span>Fan Favorite</span>
                <strong>Meet Peach Tea</strong>
              </div>
              <img
                src={products[1].image}
                alt={products[1].alt}
                className={styles.heroBottleMain}
                fetchPriority="high"
              />
            </div>

            <motion.div
              className={styles.visualCardSmall}
              animate={prefersReducedMotion ? undefined : { y: [0, -16, 0] }}
              transition={{
                duration: 6.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            >
              <span>Summer Favorite</span>
              <img
                src={products[2].image}
                alt={products[2].alt}
                className={styles.heroBottleSide}
              />
            </motion.div>

            <motion.div
              className={styles.visualGlassPanel}
              animate={prefersReducedMotion ? undefined : { y: [0, 14, 0] }}
              transition={{
                duration: 7.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            >
              <p>Bright peach flavor and smooth brewed tea for sunny afternoons and easy moments.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        className={styles.scrollCue}
        href="#/flavors"
        animate={prefersReducedMotion ? undefined : { y: [0, 10, 0] }}
        transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY }}
      >
        <span />
        See the flavors
      </motion.a>
    </section>
  );
}
