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
          <span className={styles.eyebrow}>High-conviction close</span>
          <h2>Invite people into the next launch, drop, or tasting moment.</h2>
          <p>
            The signup surface keeps the same glass glow language while giving the form clear
            feedback and a confident final call to action.
          </p>
        </div>

        <form className={styles.signupForm} onSubmit={onSubmit}>
          <label className={styles.inputShell}>
            <span>Email address</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={email}
              onChange={onEmailChange}
              required
            />
          </label>

          <button className={styles.submitButton} type="submit">
            Join the Launch List
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
                You're on the list for the next Southern Breeze drop.
              </motion.p>
            ) : (
              <motion.p
                key="idle"
                className={styles.formHint}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                Product launches, retail news, and immersive campaign previews.
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </div>
    </motion.section>
  );
}
