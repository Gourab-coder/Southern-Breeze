import { useState, type ChangeEvent, type FormEvent } from 'react';
import homeStyles from '../home/homeStyles.module.css';
import { ContactSection } from '../home/components/sections/ContactSection';
import { contactReasons } from './siteContent';
import siteStyles from './siteStyles.module.css';

export function ContactPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setSubmitted(true);
    setEmail('');
  };

  return (
    <>
      <section className={`${homeStyles.section} ${siteStyles.pageHero}`}>
        <div className={siteStyles.pageHeroGrid}>
          <div className={siteStyles.pageHeroCopy}>
            <span className={homeStyles.eyebrow}>Stay connected</span>
            <h1 className={siteStyles.pageHeroTitle}>Stay connected to the sweet side of life.</h1>
            <p className={siteStyles.pageHeroLead}>
              Be the first to hear about new flavors, seasonal favorites, easy recipes, and
              special offers from Southern Breeze.
            </p>
          </div>
          <div className={siteStyles.pageHeroPanel}>
            <strong>What you get when you join</strong>
            <ul className={siteStyles.bulletList}>
              {contactReasons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection
        email={email}
        submitted={submitted}
        onEmailChange={handleEmailChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}
