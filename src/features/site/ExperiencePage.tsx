import homeStyles from '../home/homeStyles.module.css';
import { ExperienceSection } from '../home/components/sections/ExperienceSection';
import { MagneticButton } from '../home/components/MagneticButton';
import { experiencePrinciples } from './siteContent';
import siteStyles from './siteStyles.module.css';

export function ExperiencePage() {
  return (
    <>
      <section className={`${homeStyles.section} ${siteStyles.pageHero}`}>
        <div className={siteStyles.pageHeroGrid}>
          <div className={siteStyles.pageHeroCopy}>
            <span className={homeStyles.eyebrow}>Why Southern Breeze</span>
            <h1 className={siteStyles.pageHeroTitle}>Real tea. Naturally sweet. Always refreshing.</h1>
            <p className={siteStyles.pageHeroLead}>
              Southern Breeze is made to fit real life, from family meals and picnics to quiet
              afternoons when you just want something cold, smooth, and comforting.
            </p>
          </div>
          <div className={siteStyles.pageHeroPanel}>
            <strong>Enjoy Southern Breeze in three simple steps</strong>
            <p>
              Pick your favorite flavor, chill it well, and share the moment with the people who
              make it feel even sweeter.
            </p>
            <MagneticButton href="#/reviews" label="See What Fans Say" />
          </div>
        </div>
      </section>

      <ExperienceSection />

      <section className={homeStyles.section}>
        <div className={homeStyles.sectionHeading}>
          <span className={homeStyles.eyebrow}>Easy moments</span>
          <h2>Why it feels good to keep Southern Breeze nearby.</h2>
        </div>
        <div className={siteStyles.detailGrid}>
          {experiencePrinciples.map((item) => (
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
