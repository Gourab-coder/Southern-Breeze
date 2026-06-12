import type { CSSProperties } from 'react';
import styles from '../homeStyles.module.css';

export function BackgroundCanvas() {
  return (
    <div className={styles.backgroundCanvas} aria-hidden="true">
      <div className={styles.mesh} />
      <div className={styles.aurora} />
      <div className={styles.noise} />
      <div className={styles.lightRay} />
      {Array.from({ length: 18 }).map((_, index) => (
        <span
          key={index}
          className={styles.particle}
          style={
            {
              '--delay': `${index * 0.38}s`,
              '--duration': `${8 + (index % 5) * 2}s`,
              '--left': `${4 + index * 5.2}%`,
              '--size': `${(index % 4) + 0.45}rem`,
            } as CSSProperties
          }
        />
      ))}
      <span className={`${styles.blob} ${styles.blobOne}`} />
      <span className={`${styles.blob} ${styles.blobTwo}`} />
      <span className={`${styles.blob} ${styles.blobThree}`} />
    </div>
  );
}
