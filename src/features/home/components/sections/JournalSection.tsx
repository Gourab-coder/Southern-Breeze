import { motion, useReducedMotion } from 'framer-motion';
import { blogPosts } from '../../../../data/blog';
import styles from '../../homeStyles.module.css';
import { MagneticButton } from '../MagneticButton';

export function JournalSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className={`${styles.section} ${styles.journalSection}`}
      id="journal"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 50 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.sectionHeading}>
        <span className={styles.eyebrow}>Tea inspiration</span>
        <h2>Tea inspiration for everyday moments.</h2>
        <p>
          Discover simple ways to bring more Southern charm, refreshment, and easy hospitality
          into your table and your day.
        </p>
      </div>

      <div className={styles.journalGrid}>
        {blogPosts.map((post, index) => (
          <motion.a
            key={post.id}
            href={post.href}
            className={styles.journalCard}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
          >
            <div className={styles.journalMedia}>
              <img
                src={post.image}
                alt={post.alt}
                loading="lazy"
                className={styles.journalImage}
              />
              <div className={styles.journalOverlay} />
            </div>
            <div className={styles.journalCopy}>
              <span>Read feature</span>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className={styles.sectionActionRow}>
        <MagneticButton href="#/journal" label="Read More Stories" />
      </div>
    </motion.section>
  );
}
