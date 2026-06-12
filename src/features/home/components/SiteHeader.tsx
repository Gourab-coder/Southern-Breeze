import logo from '../../../assets/images/logo/southern-breeze-logo.png';
import { navLinks } from '../homeContent';
import styles from '../homeStyles.module.css';
import { MagneticButton } from './MagneticButton';

type SiteHeaderProps = {
  activeSection: string;
  menuOpen: boolean;
  onCloseMenu: () => void;
  onToggleMenu: () => void;
};

export function SiteHeader({
  activeSection,
  menuOpen,
  onCloseMenu,
  onToggleMenu,
}: SiteHeaderProps) {
  return (
    <header className={`${styles.navbar} ${menuOpen ? styles.navbarOpen : ''}`}>
      <div className={styles.navInner}>
        <a className={styles.brand} href="#home" aria-label="Southern Breeze home">
          <img className={styles.brandMark} src={logo} alt="Southern Breeze logo" />
          <div>
            <strong>Southern Breeze</strong>
            <span>Modern Southern tea ritual</span>
          </div>
        </a>

        <button
          className={styles.menuToggle}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={onToggleMenu}
        >
          <span />
          <span />
        </button>

        <nav className={styles.navMenu} id="site-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`${styles.navLink} ${activeSection === link.id ? styles.navLinkActive : ''}`}
              onClick={onCloseMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <MagneticButton href="#contact" label="Pour Into Launch" className={styles.navCta} />
      </div>
    </header>
  );
}
