import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <section className={styles.section} aria-labelledby="404-heading">
      <div className={`container ${styles.inner}`}>
        <span className={`mono ${styles.code}`}>404</span>
        <h1 id="404-heading" className={styles.heading}>
          MIJN ZENUWSTELSEL<br />
          WEET OOK NIET WAAR<br />
          DEZE PAGINA IS.
        </h1>
        <p className={styles.sub}>
          Waarschijnlijk een link die niet meer klopt, of een url die nooit heeft bestaan.
        </p>
        <Link href="/" className={styles.cta}>
          TERUG NAAR IETS DAT WEL BESTAAT →
        </Link>
      </div>
    </section>
  )
}
