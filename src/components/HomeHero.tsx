'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './HomeHero.module.css'

export default function HomeHero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(t)
  }, [])

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={`container ${styles.inner}`}>
        <div className={styles.topRow}>
          <span className={`mono ${styles.label}`}>// OVER STRESS, PRIKKELS, ADHD &amp; HERSTEL</span>
          <div className={styles.statusBadge} aria-label="Platform online">
            <span className={styles.dot} aria-hidden="true">●</span>
            <span className="mono">SYSTEEM ONLINE</span>
          </div>
        </div>

        <h1 id="hero-heading" className={styles.heading}>
          <span className={`${styles.line} ${loaded ? styles.in : ''}`} aria-label="Ontregeld">
            ONTREGELD
          </span>
          <span className={`${styles.line} ${styles.lineDelay} ${loaded ? styles.in : ''}`} aria-label="Zenuwstelsel">
            ZENUW<span className={styles.break}>STELSEL</span>
          </span>
        </h1>

        <div className={styles.bottom}>
          <p className={styles.subtext}>
            Voor mensen die heel lang dachten<br className={styles.desktopBreak} />
            dat ze zich gewoon even moesten herpakken.
          </p>
          <div className={styles.bottomRight}>
            <Link href="#herkenning" className={styles.cta} aria-label="Begin hier — scroll naar inhoud">
              BEGIN HIER ↓
            </Link>
            <span className={`mono ${styles.metaLabel}`}>PERSOONLIJK KENNISPLATFORM</span>
          </div>
        </div>
      </div>
    </section>
  )
}
