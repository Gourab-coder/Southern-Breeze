import { motion } from 'framer-motion';
import styles from './Newsletter.module.css';

export function Newsletter() {
  return (
    <section className={styles.section} aria-labelledby="newsletter-title">
      <div className={`container ${styles.panel}`}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-eyebrow">Stay Poured In</span>
          <h2 className="section-title" id="newsletter-title">
            Seasonal drops, serving ideas, <br/> and first sips from the porch.
          </h2>
          <p className={`${styles.headerCopy} section-copy`}>
            From porch-classic original to fruit-forward favorites.
          </p>
        </motion.div>
        <motion.form
          className={styles.form}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <label className={styles.label} htmlFor="email">
            Email address
          </label>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            aria-label="Email address"
          />
          <button className="button-primary" type="submit">
            Subscribe
          </button>
        </motion.form>
      </div>
    </section>
  );
}
