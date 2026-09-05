'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import styles from './HomeHero.module.css'

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const SCRAMBLE_TARGET = 'SYSTEEM ONLINE'

// wdth axis: 100 (baseline/wide) → 75 (condensed under cursor pressure)
const WDTH_REST = 100
const WDTH_PRESS = 75
const PROXIMITY_RADIUS = 200

const CHAR_STAGGER = 15       // ms between each character in a word
const LINE2_DELAY = 150       // ms — ZENUWSTELSEL line starts after ONTREGELD begins
const ZENUW_LEN = 5           // chars in "ZENUW" — used to calculate STELSEL offset

function CharSpans({ text, startDelay = 0 }: { text: string; startDelay?: number }) {
  return (
    <>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={styles.char}
          data-char={char}
          style={{ '--char-delay': `${startDelay + i * CHAR_STAGGER}ms` } as React.CSSProperties}
        >
          {char}
        </span>
      ))}
    </>
  )
}

export default function HomeHero() {
  const scrambleRef = useRef<HTMLSpanElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const lineWrap1Ref = useRef<HTMLSpanElement>(null)
  const lineWrap2Ref = useRef<HTMLSpanElement>(null)
  const stripRef = useRef<HTMLDivElement>(null)

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

  // ── Blood Orange strip: positioned vertically behind the ZENUWSTELSEL line
  useEffect(() => {
    const hero = heroRef.current
    const lineWrap2 = lineWrap2Ref.current
    const strip = stripRef.current
    if (!hero || !lineWrap2 || !strip) return

    const setPosition = () => {
      const heroRect = hero.getBoundingClientRect()
      const lineRect = lineWrap2.getBoundingClientRect()
      strip.style.top = `${lineRect.top - heroRect.top + lineRect.height * 0.2}px`
    }

    setPosition()
    window.addEventListener('resize', setPosition)
    return () => window.removeEventListener('resize', setPosition)
  }, [])

  // ── Pointer proximity — secondary interaction, activates after letter drop
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

    // Wait for letter drop to settle before attaching proximity
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

  // ── Scroll drift: lines separate as hero exits viewport
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
      {/* Blood Orange compositional band — enters from left, then static */}
      <div ref={stripRef} className={styles.accentStrip} aria-hidden="true" />

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
            <span aria-hidden="true">
              <CharSpans text="ONTREGELD" startDelay={0} />
            </span>
          </span>
          <span ref={lineWrap2Ref} className={styles.lineWrap} aria-label="Zenuwstelsel">
            <span aria-hidden="true">
              <CharSpans text="ZENUW" startDelay={LINE2_DELAY} />
              <span className={styles.break}>
                <CharSpans text="STELSEL" startDelay={LINE2_DELAY + ZENUW_LEN * CHAR_STAGGER} />
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
