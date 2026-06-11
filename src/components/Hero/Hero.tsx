import { motion, useScroll, useTransform } from 'framer-motion';
import cardImage from '../../assets/card img.png';
import styles from './Hero.module.css';

// These cards sit below the hero and summarize the brand quickly.
const stats = [
  { value: '4', label: 'signature flavors' },
  { value: '0g', label: 'sugar per serving' },
  { value: 'Southern', label: 'hosted with warmth' },
];

export function Hero() {
  const { scrollY } = useScroll();
  // Decorative leaves move slightly on scroll to keep the hero from feeling static.
  const leafY = useTransform(scrollY, [0, 300], [0, -24]);

  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-title">
      <div className="container">
        <motion.div
          className={styles.showcase}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          {/* Background image and overlay are split so text contrast can be tuned in CSS only. */}
          <div className={styles.backdrop} style={{ backgroundImage: `url(${cardImage})` }} />
          <div className={styles.overlay} />
          <div className={styles.layout}>
            <div className={styles.copy}>
              <span className={`${styles.heroEyebrow} section-eyebrow`}>Premium Southern Tea</span>
              <h1 className={styles.heroTitle} id="hero-title">
                Sweet Tea Made Better
              </h1>
              <p className={styles.subtitle}>Classic Southern flavor with a modern refresh.</p>
              <p className={styles.heroCopy}>
                Crafted for modern porches, brunch tables, and chilled everyday rituals with a
                brighter premium finish.
              </p>

              <div className={styles.featurePills} aria-label="Brand highlights">
                <span>Small-batch feel</span>
                <span>Crisp citrus finish</span>
                <span>Porch-ready serve</span>
              </div>

              <div className={styles.actions}>
                <a className="button-primary" href="#products">
                  Explore Flavors
                </a>
                <a className="button-secondary" href="#recipes">
                  Our Story
                </a>
              </div>
            </div>
          </div>
          {/* These are purely decorative and can be removed without affecting content. */}
          <motion.span className={`${styles.leaf} ${styles.leafLeft}`} style={{ y: leafY }} />
          <motion.span className={`${styles.leaf} ${styles.leafRight}`} style={{ y: leafY }} />
        </motion.div>

        {/* Secondary metrics panel under the hero. */}
        <div className={styles.stats} aria-label="Brand highlights">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className={styles.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45 }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
