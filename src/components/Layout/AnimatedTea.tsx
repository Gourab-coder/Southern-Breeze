import { motion } from 'framer-motion';
import styles from './AnimatedTea.module.css';

export function AnimatedTea() {
  return (
    <div className={styles.container} data-parallax="0.3">
      {/* Tea Cup */}
      <motion.div
        className={styles.teaCup}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 120 140" className={styles.cupSvg}>
          {/* Cup body */}
          <path
            d="M 20 50 Q 20 80 30 110 Q 35 125 50 130 L 100 130 Q 115 125 120 110 Q 130 80 130 50 Z"
            fill="none"
            stroke="#e8e8f0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Cup handle */}
          <path
            d="M 130 60 Q 155 60 155 90 Q 155 120 130 120"
            fill="none"
            stroke="#e8e8f0"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Tea Splash */}
      <motion.div
        className={styles.splash}
        animate={{
          y: [0, -30, 0],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg viewBox="0 0 200 100" className={styles.splashSvg}>
          {/* Splash wave */}
          <path
            d="M 0 60 Q 25 40 50 50 T 100 50 T 150 50 T 200 60 L 200 80 Q 100 120 0 80 Z"
            fill="url(#teaGradient)"
            opacity="0.9"
          />
          <defs>
            <linearGradient id="teaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d4a574" stopOpacity="1" />
              <stop offset="100%" stopColor="#b8860b" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Splash Droplets */}
      <motion.div className={styles.dropletContainer}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.droplet}
            style={{
              left: `${30 + i * 20}%`,
            }}
            animate={{
              y: [0, -60 - i * 10, 20],
              opacity: [1, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeOut',
            }}
          />
        ))}
      </motion.div>

      {/* Floating Tea Leaves */}
      <motion.div
        className={styles.leaf}
        style={{
          left: '15%',
          top: '-20px',
        }}
        animate={{
          x: [0, 20, 0],
          y: [0, 30, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg viewBox="0 0 40 40" className={styles.leafSvg}>
          <ellipse cx="20" cy="20" rx="12" ry="18" fill="#2d5a3d" opacity="0.7" />
          <path d="M 20 2 Q 20 20 20 38" stroke="#1a3a1f" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>

      <motion.div
        className={styles.leaf}
        style={{
          right: '20%',
          top: '-15px',
        }}
        animate={{
          x: [0, -15, 0],
          y: [0, 40, 0],
          rotate: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 0.5,
          ease: 'easeInOut',
        }}
      >
        <svg viewBox="0 0 40 40" className={styles.leafSvg}>
          <ellipse cx="20" cy="20" rx="12" ry="18" fill="#4a7c59" opacity="0.7" />
          <path d="M 20 2 Q 20 20 20 38" stroke="#2d5a3d" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>

      {/* Lemon Slice */}
      <motion.div
        className={styles.lemon}
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg viewBox="0 0 60 60" className={styles.lemonSvg}>
          {/* Lemon circle */}
          <circle cx="30" cy="30" r="28" fill="#ffd700" />
          {/* Segments */}
          <circle cx="30" cy="30" r="24" fill="none" stroke="#ffed4e" strokeWidth="1" opacity="0.6" />
          <line x1="30" y1="6" x2="30" y2="54" stroke="#ffed4e" strokeWidth="1" opacity="0.6" />
          <line x1="6" y1="30" x2="54" y2="30" stroke="#ffed4e" strokeWidth="1" opacity="0.6" />
          {/* Segments radial */}
          <line x1="30" y1="6" x2="50" y2="50" stroke="#ffed4e" strokeWidth="1" opacity="0.6" />
          <line x1="30" y1="6" x2="10" y2="50" stroke="#ffed4e" strokeWidth="1" opacity="0.6" />
        </svg>
      </motion.div>

      {/* Daisy Flowers */}
      <motion.div
        className={styles.flower}
        style={{
          left: '25%',
          top: '-30px',
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          delay: 1,
          ease: 'easeInOut',
        }}
      >
        <svg viewBox="0 0 50 50" className={styles.flowerSvg}>
          {/* Petals */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x1 = 25 + 8 * Math.cos(angle);
            const y1 = 25 + 8 * Math.sin(angle);
            const x2 = 25 + 15 * Math.cos(angle);
            const y2 = 25 + 15 * Math.sin(angle);
            return (
              <ellipse
                key={i}
                cx={x2}
                cy={y2}
                rx="4"
                ry="8"
                fill="#e8f0ff"
                stroke="#a8d8f0"
                strokeWidth="0.5"
                transform={`rotate(${(i * 45 - 90)} 25 25)`}
              />
            );
          })}
          {/* Center */}
          <circle cx="25" cy="25" r="5" fill="#ffd700" />
        </svg>
      </motion.div>

      <motion.div
        className={styles.flower}
        style={{
          right: '15%',
          top: '-25px',
        }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 1.5,
          ease: 'easeInOut',
        }}
      >
        <svg viewBox="0 0 50 50" className={styles.flowerSvg}>
          {/* Petals */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x2 = 25 + 15 * Math.cos(angle);
            const y2 = 25 + 15 * Math.sin(angle);
            return (
              <ellipse
                key={i}
                cx={x2}
                cy={y2}
                rx="4"
                ry="8"
                fill="#e8f0ff"
                stroke="#a8d8f0"
                strokeWidth="0.5"
                transform={`rotate(${(i * 45 - 90)} 25 25)`}
              />
            );
          })}
          {/* Center */}
          <circle cx="25" cy="25" r="5" fill="#ffd700" />
        </svg>
      </motion.div>
    </div>
  );
}
