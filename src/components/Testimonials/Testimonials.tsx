import { motion } from 'framer-motion';
import { A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonials } from '../../data/testimonials';
import styles from './Testimonials.module.css';
import 'swiper/css';
import 'swiper/css/pagination';

export function Testimonials() {
  return (
    <section className={styles.section} id="reviews" aria-labelledby="reviews-title">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-eyebrow">Guest Reviews</span>
          <h2 className="section-title" id="reviews-title">
            Loved by hosts, brunch regulars, and sweet tea loyalists.
          </h2>
        </motion.div>

        <Swiper
          className={styles.slider}
          modules={[Pagination, A11y]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1.1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className={styles.slide}>
              <motion.article whileHover={{ y: -6 }} className={styles.card}>
                <div className={styles.rating} aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
                <p className={styles.quote}>"{testimonial.quote}"</p>
                <div className={styles.person}>
                  <img src={testimonial.image} alt={testimonial.alt} loading="lazy" />
                  <div>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.location}</p>
                  </div>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
