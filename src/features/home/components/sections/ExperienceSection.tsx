import { motion, useReducedMotion } from 'framer-motion';
import { experienceSteps, featureCards } from '../../homeContent';
import styles from '../../homeStyles.module.css';

const toneClassMap = {
  cyan: styles.toneCyan,
  peach: styles.tonePeach,
  pink: styles.tonePink,
  lime: styles.toneLime,
} as const;

export function ExperienceSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className={`${styles.section} ${styles.featureSection}`}
      id="experience"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 50 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.sectionHeading}>
        <span className={styles.eyebrow}>Layered experience design</span>
        <h2>Each section pushes attention forward without overwhelming the user.</h2>
      </div>

      <div className={styles.bentoGrid}>
        {featureCards.map((card, index) => (
          <motion.article
            key={card.title}
            className={`${styles.bentoCard} ${toneClassMap[card.tone]}`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
          >
            <div className={styles.bentoIcon} />
            <h3>{card.title}</h3>
            <p>{card.copy}</p>
          </motion.article>
        ))}
      </div>

      <div className={styles.experienceRail}>
        {experienceSteps.map((step, index) => (
          <motion.div
            key={step.title}
            className={styles.railCard}
            initial={prefersReducedMotion ? false : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
          >
            <span>{`0${index + 1}`}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
