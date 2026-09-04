'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from './HomeHero.module.css'

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const SCRAMBLE_TARGET = 'SYSTEEM ONLINE'

// wdth axis: 75 (condensed) → 100 (normal/baseline)
// Cursor = pressure → letters condense. Cursor leaves → letters settle back to wide.
const WDTH_REST = 100
const WDTH_PRESS = 75
const PROXIMITY_RADIUS = 200 // px

function CharSpans({ text }: { text: string }) {
  return (
    <>
      {text.split('').map((char, i) => (
        <span key={i} className={styles.char} data-char>
          {char}
        </span>
      ))}
    </>
  )
}

export default function HomeHero() {
  const [loaded, setLoaded] = useState(false)
  const scrambleRef = useRef<HTMLSpanElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const lineWrap1Ref = useRef<HTMLSpanElement>(null)
  const lineWrap2Ref = useRef<HTMLSpanElement>(null)

  // ── Load reveal trigger
  useEffect(() => {
    const t = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(t)
  }, [])

  // ── SYSTEEM ONLINE scramble
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

  // ── Pointer proximity (fine pointer / desktop only, starts after reveal)
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let rafId: number
    let mouseX = 0
    let mouseY = 0
    let active = false

    const getChars = (): NodeListOf<HTMLElement> =>
      hero.querySelectorAll<HTMLElement>('[data-char]')

    const updateChars = () => {
      getChars().forEach(char => {
        const rect = char.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dist = Math.hypot(mouseX - cx, mouseY - cy)
        const ratio = Math.max(0, 1 - dist / PROXIMITY_RADIUS)
        const wdth = (WDTH_REST - ratio * (WDTH_REST - WDTH_PRESS)).toFixed(1)
        char.style.fontVariationSettings = `'wdth' ${wdth}, 'wght' 700`
      })
      if (active) rafId = requestAnimationFrame(updateChars)
    }

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!active) {
        active = true
        rafId = requestAnimationFrame(updateChars)
      }
    }

    const onLeave = () => {
      active = false
      cancelAnimationFrame(rafId)
      const chars = getChars()
      chars.forEach(char => {
        char.classList.add(styles.charSettling)
        char.style.fontVariationSettings = `'wdth' ${WDTH_REST}, 'wght' 700`
      })
      setTimeout(() => {
        chars.forEach(char => char.classList.remove(styles.charSettling))
      }, 500)
    }

    // Delay start until reveal animation is done
    const initTimer = setTimeout(() => {
      hero.addEventListener('mousemove', onMove, { passive: true })
      hero.addEventListener('mouseleave', onLeave)
    }, 1100)

    return () => {
      clearTimeout(initTimer)
      hero.removeEventListener('mousemove', onMove)
      hero.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafId)
    }
  }, [])

  // ── Scroll drift: two lines move in opposite directions as hero exits
  useEffect(() => {
    const wrap1 = lineWrap1Ref.current
    const wrap2 = lineWrap2Ref.current
    const hero = heroRef.current
    if (!wrap1 || !wrap2 || !hero) return
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onScroll = () => {
      const rect = hero.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.55)))
      const drift = progress * 40
      wrap1.style.transform = `translateX(${-drift}px)`
      wrap2.style.transform = `translateX(${drift}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={heroRef} className={styles.hero} aria-labelledby="hero-heading">
      <div className={`container ${styles.inner}`}>
        <div className={styles.topRow}>
          <span className={`mono ${styles.label}`}>// OVER STRESS, PRIKKELS, ADHD &amp; HERSTEL</span>
          <div className={styles.statusBadge} aria-label="Platform online">
            <span className={styles.dot} aria-hidden="true">●</span>
            <span className="mono" ref={scrambleRef}>SYSTEEM ONLINE</span>
          </div>
        </div>

        <h1 id="hero-heading" className={styles.heading}>
          <span ref={lineWrap1Ref} className={styles.lineWrap} aria-label="Ontregeld">
            <span className={`${styles.line} ${loaded ? styles.in : ''}`} aria-hidden="true">
              <CharSpans text="ONTREGELD" />
            </span>
          </span>
          <span ref={lineWrap2Ref} className={styles.lineWrap} aria-label="Zenuwstelsel">
            <span className={`${styles.line} ${styles.lineDelay} ${loaded ? styles.in : ''}`} aria-hidden="true">
              <CharSpans text="ZENUW" />
              <span className={styles.break}>
                <CharSpans text="STELSEL" />
              </span>
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
