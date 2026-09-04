'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from './HomeHero.module.css'

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const SCRAMBLE_TARGET = 'SYSTEEM ONLINE'

export default function HomeHero() {
  const [loaded, setLoaded] = useState(false)
  const scrambleRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const t = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(t)
  }, [])

  useEffect(() => {
    const el = scrambleRef.current
    if (!el) return
    let frame = 0
    let rafId: number

    const tick = () => {
      el.textContent = SCRAMBLE_TARGET.split('').map((char, i) => {
        if (char === ' ') return ' '
        if (i < frame / 2) return char
        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
      }).join('')
      frame++
      if (frame <= SCRAMBLE_TARGET.length * 2) {
        rafId = requestAnimationFrame(tick)
      } else {
        el.textContent = SCRAMBLE_TARGET
      }
    }

    const timer = setTimeout(() => { rafId = requestAnimationFrame(tick) }, 350)
    return () => { clearTimeout(timer); cancelAnimationFrame(rafId) }
  }, [])

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={`container ${styles.inner}`}>
        <div className={styles.topRow}>
          <span className={`mono ${styles.label}`}>// OVER STRESS, PRIKKELS, ADHD &amp; HERSTEL</span>
          <div className={styles.statusBadge} aria-label="Platform online">
            <span className={styles.dot} aria-hidden="true">●</span>
            <span className="mono" ref={scrambleRef}>SYSTEEM ONLINE</span>
          </div>
        </div>

        <h1 id="hero-heading" className={styles.heading}>
          <span className={styles.lineWrap} aria-label="Ontregeld">
            <span className={`${styles.line} ${loaded ? styles.in : ''}`} aria-hidden="true">
              ONTREGELD
            </span>
          </span>
          <span className={styles.lineWrap} aria-label="Zenuwstelsel">
            <span className={`${styles.line} ${styles.lineDelay} ${loaded ? styles.in : ''}`} aria-hidden="true">
              ZENUW<span className={styles.break}>STELSEL</span>
            </span>
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
