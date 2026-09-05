'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import styles from './not-found.module.css'

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?@#'

export default function NotFound() {
  const codeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = codeRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let rafId: number
    const tick = () => {
      el.textContent = '404'.split('').map(() =>
        SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
      ).join('')
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <section className={styles.section} aria-labelledby="404-heading">
      <div className={`container ${styles.inner}`}>
        <span className={`mono ${styles.code}`} ref={codeRef} aria-label="Pagina niet gevonden">404</span>
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
