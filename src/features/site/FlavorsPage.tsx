import homeStyles from '../home/homeStyles.module.css';
import { FlavorsSection } from '../home/components/sections/FlavorsSection';
import { MagneticButton } from '../home/components/MagneticButton';
import { flavorSpotlights } from './siteContent';
import siteStyles from './siteStyles.module.css';

export function FlavorsPage() {
  return (
    <>
      <section className={`${homeStyles.section} ${siteStyles.pageHero}`}>
        <div className={siteStyles.pageHeroGrid}>
          <div className={siteStyles.pageHeroCopy}>
            <span className={homeStyles.eyebrow}>Explore our flavors</span>
            <h1 className={siteStyles.pageHeroTitle}>A sweet tea for every mood and every moment.</h1>
            <p className={siteStyles.pageHeroLead}>
              From classic Southern refreshment to bright fruit favorites, every bottle is made
              to feel smooth, refreshing, and easy to share.
            </p>
          </div>
          <div className={siteStyles.pageHeroPanel}>
            <strong>Meet Peach Tea, our most loved flavor</strong>
            <p>
              Bright peach flavor meets smooth brewed tea for a refreshing drink that's perfect
              for sunny afternoons, family gatherings, or a quiet moment to yourself.
            </p>
            <MagneticButton href="https://southernbreezesweettea.com" label="Find a Store" />
          </div>
        </div>
      </section>

      <FlavorsSection />

      <section className={homeStyles.section}>
        <div className={homeStyles.sectionHeading}>
          <span className={homeStyles.eyebrow}>Flavor notes</span>
          <h2>Find the flavor that fits your day best.</h2>
        </div>
        <div className={siteStyles.detailGrid}>
          {flavorSpotlights.map((item) => (
            <article key={item.title} className={siteStyles.detailCard}>
              <strong>{item.title}</strong>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
