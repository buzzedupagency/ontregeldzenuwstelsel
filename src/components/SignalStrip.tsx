'use client'

import { useEffect, useRef } from 'react'
import styles from './SignalStrip.module.css'

const BASE = 'AAN — PRIKKELS — ACTIVATIE — HERSTEL — RUST — '

// Scroll down → strip moves left. Scroll up → strip moves right.
// Speed is proportional to scroll velocity. Fully stops when user stops.
// No autoplay. The user is the prikkel.

export default function SignalStrip() {
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef = useRef(0)
  const velRef = useRef(0)
  const lastYRef = useRef(0)
  const unitWidthRef = useRef(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const track = trackRef.current
    if (!track) return

    lastYRef.current = window.scrollY

    const onScroll = () => {
      const dy = window.scrollY - lastYRef.current
      velRef.current += dy * 2.8
      lastYRef.current = window.scrollY
    }

    const tick = () => {
      // Measure unit width on first tick (font guaranteed loaded by then)
      if (unitWidthRef.current === 0) {
        const first = track.firstElementChild as HTMLElement | null
        if (first) unitWidthRef.current = first.offsetWidth
      }

      velRef.current *= 0.87 // friction — decelerates to full stop
      posRef.current += velRef.current

      const unit = unitWidthRef.current
      if (unit > 0) {
        // Bidirectional seamless wrap
        posRef.current = ((posRef.current % unit) + unit) % unit
      }

      track.style.transform = `translateX(-${posRef.current}px)`
      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Each unit is repeated enough to guarantee the strip is always filled
  // even on wide viewports. Two units = seamless bidirectional loop.
  const content = BASE.repeat(10)

  return (
    <div className={styles.strip} aria-hidden="true">
      <div ref={trackRef} className={styles.track}>
        <span className={styles.unit}>{content}</span>
        <span className={styles.unit}>{content}</span>
      </div>
    </div>
  )
}
