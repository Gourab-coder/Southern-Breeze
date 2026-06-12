import type { ChangeEvent, FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../../homeStyles.module.css';

type ContactSectionProps = {
  email: string;
  submitted: boolean;
  onEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function ContactSection({
  email,
  submitted,
  onEmailChange,
  onSubmit,
}: ContactSectionProps) {
  return (
    <motion.section
      className={`${styles.section} ${styles.contactSection}`}
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.contactPanel}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>Stay connected</span>
          <h2>Stay connected to the sweet side of life.</h2>
          <p>
            Be the first to hear about new flavors, seasonal favorites, recipes, and special
            offers from Southern Breeze.
          </p>
        </div>

        <form className={styles.signupForm} onSubmit={onSubmit}>
          <label className={styles.inputShell}>
            <span>Email address</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={onEmailChange}
              required
            />
          </label>

          <button className={styles.submitButton} type="submit">
            Join the Southern Breeze Family
          </button>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.p
                key="submitted"
                className={styles.formMessage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                You're in. We'll keep you posted with fresh tea news, recipes, and special offers.
              </motion.p>
            ) : (
              <motion.p
                key="idle"
                className={styles.formHint}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                New flavors, seasonal favorites, and sweet tea inspiration delivered with care.
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </div>
    </motion.section>
  );
}
