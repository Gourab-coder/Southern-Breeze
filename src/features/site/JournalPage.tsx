import homeStyles from '../home/homeStyles.module.css';
import { JournalSection } from '../home/components/sections/JournalSection';
import { MagneticButton } from '../home/components/MagneticButton';
import { journalNotes } from './siteContent';
import siteStyles from './siteStyles.module.css';

export function JournalPage() {
  return (
    <>
      <section className={`${homeStyles.section} ${siteStyles.pageHero}`}>
        <div className={siteStyles.pageHeroGrid}>
          <div className={siteStyles.pageHeroCopy}>
            <span className={homeStyles.eyebrow}>Tea inspiration</span>
            <h1 className={siteStyles.pageHeroTitle}>Tea inspiration for everyday moments.</h1>
            <p className={siteStyles.pageHeroLead}>
              Explore simple ideas for serving, sharing, and enjoying sweet tea in ways that feel
              warm, relaxed, and naturally Southern.
            </p>
          </div>
          <div className={siteStyles.pageHeroPanel}>
            <strong>Small ideas can make everyday moments feel special</strong>
            <p>
              From brunch tables to summer afternoons, these stories help bring more flavor and
              hospitality into the way you serve and enjoy sweet tea.
            </p>
            <MagneticButton href="#/contact" label="Stay Connected" />
          </div>
        </div>
      </section>

      <JournalSection />

      <section className={homeStyles.section}>
        <div className={homeStyles.sectionHeading}>
          <span className={homeStyles.eyebrow}>Everyday inspiration</span>
          <h2>Simple ways to bring more Southern charm to the table.</h2>
        </div>
        <div className={siteStyles.detailGrid}>
          {journalNotes.map((item) => (
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
