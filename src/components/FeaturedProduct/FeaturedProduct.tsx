import { motion } from 'framer-motion';
import { featuredProduct } from '../../data/products';
import styles from './FeaturedProduct.module.css';

export function FeaturedProduct() {
  return (
    <section className={styles.section} aria-labelledby="featured-title">
      <div className={`container ${styles.panel}`}>
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.ring} aria-hidden="true" />
          <img src={featuredProduct.image} alt={featuredProduct.alt} loading="lazy" />
        </motion.div>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{featuredProduct.eyebrow}</span>
          <h2 className="section-title" id="featured-title">
            {featuredProduct.title}
          </h2>
          <p className="section-copy">{featuredProduct.description}</p>
          <a className="button-primary" href="#contact">
            {featuredProduct.ctaLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
