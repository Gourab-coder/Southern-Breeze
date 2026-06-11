import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { products } from '../../data/products';
import styles from './ProductShowcase.module.css';

export function ProductShowcase() {
  return (
    <section className={styles.section} id="products" aria-labelledby="products-title">
      <div className="container">
        {/* Section header is separate so copy can change without touching card markup. */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Flavor Collection</span>
          <h2 className={`${styles.headerTitle} section-title`} id="products-title">
            Each with its own Southern personality.
          </h2>
          <p className={`${styles.headerCopy} section-copy`}>
            From porch-classic original to fruit-forward favorites.
          </p>
        </motion.div>
        <div className={styles.grid}>
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              className={styles.card}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              {/* Accent color comes from the data file so each product can theme itself. */}
              <div
                className={styles.media}
                style={{ '--product-accent': product.accent } as CSSProperties}
              >
                <span className={styles.badge} style={{ color: product.accent }}>
                  {product.badge}
                </span>
                <img
                  className={styles.image}
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                />
              </div>
              <div className={styles.content}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <a className={styles.link} href="#contact">
                  Discover Flavor
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
