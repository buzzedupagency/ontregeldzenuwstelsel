import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.wordmarkBlock}>
            <Link href="/" className={styles.wordmark}>
              <span>ONTREGELD</span>
              <span>ZENUWSTELSEL</span>
            </Link>
            <p className={styles.tagline}>
              Voor mensen die heel lang dachten<br />
              dat ze zich gewoon even moesten herpakken.
            </p>
          </div>

          <nav className={styles.links} aria-label="Footer navigatie">
            <div className={styles.linkGroup}>
              <span className={`mono ${styles.groupLabel}`}>Pagina's</span>
              <Link href="/wat-is-het">Wat is het?</Link>
              <Link href="/mijn-verhaal">Mijn verhaal</Link>
              <Link href="/herstel">Herstel</Link>
              <Link href="/artikelen">Artikelen</Link>
            </div>
            <div className={styles.linkGroup}>
              <span className={`mono ${styles.groupLabel}`}>Meer</span>
              <Link href="/bronnen-en-werkwijze">Bronnen & werkwijze</Link>
              <Link href="/privacy">Privacy</Link>
              <a href="mailto:bart.wiendels98@gmail.com">Contact</a>
            </div>
            <div className={styles.linkGroup}>
              <span className={`mono ${styles.groupLabel}`}>Social</span>
              <a href="#" rel="noopener noreferrer">Instagram ↗</a>
              <a href="#" rel="noopener noreferrer">TikTok ↗</a>
            </div>
          </nav>
        </div>

        <div className={styles.bottom}>
          <span className="mono" style={{ color: 'var(--color-text-muted-dark)' }}>
            © {year} Ontregeld Zenuwstelsel
          </span>
          <span className="mono" style={{ color: 'var(--color-text-muted-dark)' }}>
            Geen arts. Geen behandelaar. Wel eerlijk.
          </span>
        </div>
      </div>
    </footer>
  )
}
