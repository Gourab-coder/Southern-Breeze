import homeStyles from '../home/homeStyles.module.css';
import { ReviewsSection } from '../home/components/sections/ReviewsSection';
import { MagneticButton } from '../home/components/MagneticButton';
import { reviewHighlights } from './siteContent';
import siteStyles from './siteStyles.module.css';

export function ReviewsPage() {
  return (
    <>
      <section className={`${homeStyles.section} ${siteStyles.pageHero}`}>
        <div className={siteStyles.pageHeroGrid}>
          <div className={siteStyles.pageHeroCopy}>
            <span className={homeStyles.eyebrow}>Sweet tea fans everywhere</span>
            <h1 className={siteStyles.pageHeroTitle}>Loved by sweet tea fans everywhere.</h1>
            <p className={siteStyles.pageHeroLead}>
              People come back to Southern Breeze for the smooth taste, the refreshing flavors,
              and the way it fits naturally into everyday life.
            </p>
          </div>
          <div className={siteStyles.pageHeroPanel}>
            <strong>Sweet, smooth, and easy to love</strong>
            <p>
              From first sip to family gatherings, these reactions reflect the comfort and flavor
              Southern Breeze brings to the table.
            </p>
            <MagneticButton href="#/journal" label="Read Tea Inspiration" />
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className={homeStyles.section}>
        <div className={homeStyles.sectionHeading}>
          <span className={homeStyles.eyebrow}>At a glance</span>
          <h2>The kind of sweet tea story people love to come back to.</h2>
        </div>
        <div className={siteStyles.statGrid}>
          {reviewHighlights.map((item) => (
            <article key={item.label} className={siteStyles.statCard}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
