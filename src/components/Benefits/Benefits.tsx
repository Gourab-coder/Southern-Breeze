import { motion } from 'framer-motion';
import styles from './Benefits.module.css';

const benefits = [
  {
    title: 'Real Tea Leaves',
    copy: 'True brewed tea character with a smooth body and a familiar Southern finish.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 4c-5.5.3-8.9 2.3-10.6 5.5C6.7 12.5 7 16.4 7.7 20c3.5-.5 7.2-1.7 9.4-4.4C20 12 20.1 8.1 19 4Z" />
        <path d="M5 19c2.8-2.8 6.1-5.4 9.8-7.6" />
      </svg>
    ),
  },
  {
    title: 'Zero Sugar',
    copy: 'Sweet satisfaction without the heavy syrup profile traditional bottles often lean on.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 7a5 5 0 0 1 10 0c0 1.8-.9 3.1-2.4 4.3L12 13l-2.6-1.7C7.9 10.1 7 8.8 7 7Z" />
        <path d="M5 19 19 5" />
      </svg>
    ),
  },
  {
    title: 'Zero Calories',
    copy: 'Light enough for everyday pouring, with flavor that still feels indulgent and complete.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3c4.4 0 8 3.6 8 8s-3.6 10-8 10-8-5.6-8-10 3.6-8 8-8Z" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: 'Cold Brew Ready',
    copy: 'Made for chilled routines, easy entertaining, and premium tea moments on demand.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 4h8v4l2 3v6a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-6l2-3V4Z" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
];

export function Benefits() {
  return (
    <section className={styles.section} id="benefits" aria-labelledby="benefits-title">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-eyebrow">Why It Feels Better</span>
          <h2 className="section-title" id="benefits-title" >
            Crafted for lighter sipping and polished everyday rituals.
          </h2>
        </motion.div>
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.42, delay: index * 0.06 }}
            >
              <div className={styles.icon}>{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
