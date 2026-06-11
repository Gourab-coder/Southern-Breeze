import { motion } from 'framer-motion';
import styles from './FloatingDecorations.module.css';

export function FloatingDecorations() {
  return (
    <div className={styles.decorationsContainer}>
      {/* Left side tea leaves */}
      <motion.div
        className={styles.leafGroup}
        data-parallax="0.4"
        style={{ left: '2%', top: '15%' }}
        animate={{
          y: [0, 20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 40 40" className={styles.leaf}>
          <ellipse cx="20" cy="20" rx="14" ry="20" fill="#2d5a3d" opacity="0.6" />
          <path d="M 20 0 Q 20 20 20 40" stroke="#1a3a1f" strokeWidth="1.5" fill="none" />
          <path d="M 15 15 Q 12 20 15 25" stroke="#1a3a1f" strokeWidth="0.8" fill="none" />
          <path d="M 25 15 Q 28 20 25 25" stroke="#1a3a1f" strokeWidth="0.8" fill="none" />
        </svg>
      </motion.div>

      {/* Right side tea leaves */}
      <motion.div
        className={styles.leafGroup}
        data-parallax="0.35"
        style={{ right: '2%', top: '35%' }}
        animate={{
          y: [0, -25, 0],
          rotate: [0, -8, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, delay: 0.5, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 40 40" className={styles.leaf}>
          <ellipse cx="20" cy="20" rx="14" ry="20" fill="#4a7c59" opacity="0.5" />
          <path d="M 20 0 Q 20 20 20 40" stroke="#2d5a3d" strokeWidth="1.5" fill="none" />
          <path d="M 15 15 Q 12 20 15 25" stroke="#2d5a3d" strokeWidth="0.8" fill="none" />
          <path d="M 25 15 Q 28 20 25 25" stroke="#2d5a3d" strokeWidth="0.8" fill="none" />
        </svg>
      </motion.div>

      {/* Left side floating bubbles - top */}
      <motion.div
        className={styles.bubbleGroup}
        data-parallax="0.25"
        style={{ left: '3%', top: '25%' }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`bubble-left-${i}`}
            className={styles.bubble}
            style={{
              top: `${i * 30}px`,
              left: `${i * 15}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* Right side floating bubbles - middle */}
      <motion.div
        className={styles.bubbleGroup}
        data-parallax="0.3"
        style={{ right: '3%', top: '50%' }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`bubble-right-${i}`}
            className={styles.bubble}
            style={{
              bottom: `${i * 25}px`,
              right: `${i * 12}px`,
            }}
            animate={{
              y: [20, -20, 20],
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.6,
            }}
          />
        ))}
      </motion.div>

      {/* Left side bottom leaves */}
      <motion.div
        className={styles.leafGroup}
        data-parallax="0.2"
        style={{ left: '1%', bottom: '20%' }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, 12, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, delay: 1, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 40 40" className={styles.leaf}>
          <ellipse cx="20" cy="20" rx="12" ry="18" fill="#3d6b4a" opacity="0.55" />
          <path d="M 20 0 Q 20 20 20 40" stroke="#1a3a1f" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>

      {/* Right side bottom leaves */}
      <motion.div
        className={styles.leafGroup}
        data-parallax="0.28"
        style={{ right: '1.5%', bottom: '35%' }}
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 0.8, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 40 40" className={styles.leaf}>
          <ellipse cx="20" cy="20" rx="12" ry="18" fill="#5a8c6a" opacity="0.6" />
          <path d="M 20 0 Q 20 20 20 40" stroke="#2d5a3d" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>

      {/* Top floating bubbles - left */}
      <motion.div
        className={styles.bubbleGroup}
        data-parallax="0.32"
        style={{ left: '5%', top: '5%' }}
      >
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`bubble-top-left-${i}`}
            className={styles.bubble}
            style={{
              top: `${i * 40}px`,
            }}
            animate={{
              y: [-30, 10, -30],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Top floating bubbles - right */}
      <motion.div
        className={styles.bubbleGroup}
        data-parallax="0.27"
        style={{ right: '5%', top: '10%' }}
      >
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`bubble-top-right-${i}`}
            className={styles.bubble}
            style={{
              top: `${i * 35}px`,
            }}
            animate={{
              y: [20, -15, 20],
              opacity: [0.3, 0.7, 0.3],
              scale: [0.9, 1.2, 0.9],
            }}
            transition={{
              duration: 5.5 + i * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.7,
            }}
          />
        ))}
      </motion.div>

      {/* Bottom floating bubbles - left */}
      <motion.div
        className={styles.bubbleGroup}
        data-parallax="0.22"
        style={{ left: '4%', bottom: '5%' }}
      >
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`bubble-bottom-left-${i}`}
            className={styles.bubble}
            style={{
              bottom: `${i * 35}px`,
            }}
            animate={{
              y: [-25, 15, -25],
              opacity: [0.25, 0.65, 0.25],
            }}
            transition={{
              duration: 6.5 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* Bottom floating bubbles - right */}
      <motion.div
        className={styles.bubbleGroup}
        data-parallax="0.33"
        style={{ right: '4%', bottom: '10%' }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`bubble-bottom-right-${i}`}
            className={styles.bubble}
            style={{
              bottom: `${i * 30}px`,
            }}
            animate={{
              y: [15, -20, 15],
              opacity: [0.35, 0.75, 0.35],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 5 + i * 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.6,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
