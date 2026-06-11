import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blog';
import styles from './BlogSection.module.css';

export function BlogSection() {
  return (
    <section className={styles.section} id="recipes" aria-labelledby="recipes-title">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-eyebrow">Stories & Recipes</span>
          <h2 className="section-title" id="recipes-title">
            Gather round for simple hosting ideas and tea-inspired rituals.
          </h2>
        </motion.div>
        <div className={styles.grid}>
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className={styles.imageWrap}>
                <img src={post.image} alt={post.alt} loading="lazy" />
              </div>
              <div className={styles.content}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a className="button-secondary" href={post.href}>
                  Read More
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
