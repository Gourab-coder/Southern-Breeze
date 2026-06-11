import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/images/logo/southern-breeze-logo.png';
import styles from './Navbar.module.css';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Recipes', href: '#recipes' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Adds the "glass on scroll" treatment once the page moves past the hero edge.
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Resets the mobile menu when switching back to desktop layout.
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className={`container ${styles.inner}`}>
        <a className={styles.brand} href="#home" aria-label="Southern Breeze home">
          <img className={styles.logo} src={logo} alt="Southern Breeze logo" />
          <span className={styles.wordmark}>Southern Breeze</span>
        </a>

        {/* Mobile-only trigger. Desktop navigation stays visible all the time. */}
        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>

        <nav aria-label="Primary" className={styles.nav}>
          {/* The same link list is reused for desktop and mobile; CSS controls presentation. */}
          <ul
            className={`${styles.navList} ${menuOpen ? styles.navListOpen : ''}`}
            role="list"
            id="primary-menu"
          >
            {links.map((link) => (
              <li key={link.label}>
                <a className={styles.navLink} href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Primary conversion action stays separate from the navigation links. */}
        <a className={`${styles.cta} button-primary`} href="#products">
          Shop Now
        </a>
      </div>
    </motion.header>
  );
}
