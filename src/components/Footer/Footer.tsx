import logo from '../../assets/images/logo/southern-breeze-logo.png';
import styles from './Footer.module.css';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Recipes', href: '#recipes' },
];

export function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={`container ${styles.layout}`}>
        <div className={styles.brandBlock}>
          <a className={styles.brand} href="#home" aria-label="Southern Breeze home">
            <img src={logo} alt="Southern Breeze logo" />
            <span>Southern Breeze</span>
          </a>
          <p>
            Premium sweet tea with a hospitable spirit, crafted for modern gatherings and easy
            everyday rituals.
          </p>
        </div>

        <nav aria-label="Footer" className={styles.links}>
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.contact}>
          <p>hello@southernbreeze.com</p>
          <p>1 (800) 555-TEA1</p>
          <div className={styles.socials} aria-label="Social media links">
            <a href="#home" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a href="#home" aria-label="Pinterest">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3a8.5 8.5 0 0 0-3 16.4l1.4-5.2c-.3-.6-.5-1.4-.5-2.2 0-2 1.2-3.5 2.8-3.5 1.3 0 1.9 1 1.9 2.1 0 1.3-.8 3.2-1.2 5-.3 1.5.8 2.7 2.2 2.7 2.6 0 4.4-3.4 4.4-7.1 0-2.9-2-5.1-5.7-5.1-4.1 0-6.6 3-6.6 6.4 0 1.2.4 2.1 1 2.8.3.3.3.4.2.8l-.3 1.1c-.1.4-.5.6-.9.4-1.6-.7-2.7-2.8-2.7-5.6C4.7 7 7.8 3 12 3Z" />
              </svg>
            </a>
            <a href="#home" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 21v-7h2.5l.5-3h-3V9.3c0-.8.3-1.5 1.5-1.5h1.7V5.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4.1V11H8v3h2.5v7h3Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className={`container ${styles.legal}`}>
        <p>© 2026 Southern Breeze. All rights reserved.</p>
      </div>
    </footer>
  );
}
