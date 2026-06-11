import { motion } from 'framer-motion';
import styles from './BrandQuote.module.css';

export function BrandQuote() {
  return (
    <section className={styles.section} aria-label="Brand statement">
      <div className={`container ${styles.wrap}`}>
        <motion.div
          className={styles.accent}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
        />
        <motion.blockquote
          className={styles.quote}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          “Southern hospitality in every sip.”
        </motion.blockquote>
      </div>
    </section>
  );
}
