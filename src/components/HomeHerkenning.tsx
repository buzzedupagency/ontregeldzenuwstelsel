'use client'

import { useEffect, useRef } from 'react'
import styles from './HomeHerkenning.module.css'

const statements = [
  'Moe zijn terwijl je niks hebt gedaan.',
  'Niet kunnen ontspannen wanneer je eindelijk vrij bent.',
  'Een vol hoofd na een normale dag.',
  'Schuldgevoel wanneer je rust.',
  'Sociale dingen leuk vinden. En er daarna compleet leeg van zijn.',
]

export default function HomeHerkenning() {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const isMobileRef = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    isMobileRef.current = !window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const triggerDistort = (el: HTMLLIElement) => {
      if (reducedMotion) return
      el.classList.remove(styles.distorting)
      // Force reflow to restart animation when re-entering
      void el.offsetWidth
      el.classList.add(styles.distorting)
    }

    const observers = itemRefs.current.map((el, i) => {
      if (!el) return null

      // Scroll reveal + mobile prikkel trigger
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add(styles.visible)
            // On touch devices: trigger prikkel once when item enters view
            if (isMobileRef.current) {
              setTimeout(() => triggerDistort(el), 350 + i * 80)
            }
            obs.disconnect()
          }
        },
        { threshold: 0.25 }
      )
      obs.observe(el)
      return obs
    })

    // Desktop hover handlers attached imperatively so we can control animation restart
    if (!isMobileRef.current) {
      const handlers: (() => void)[] = []

      itemRefs.current.forEach((el) => {
        if (!el) return
        const onEnter = () => triggerDistort(el)
        el.addEventListener('mouseenter', onEnter)
        handlers.push(() => el.removeEventListener('mouseenter', onEnter))
      })

      return () => {
        observers.forEach(obs => obs?.disconnect())
        handlers.forEach(cleanup => cleanup())
      }
    }

    return () => observers.forEach(obs => obs?.disconnect())
  }, [])

  return (
    <section id="herkenning" className={styles.section} aria-labelledby="herkenning-heading">
      <div className="container">
        <span className={`mono ${styles.label}`} id="herkenning-heading">// HERKENBAAR?</span>
      </div>

      <ul className={styles.list} role="list" aria-label="Herkenbare ervaringen">
        {statements.map((s, i) => (
          <li
            key={i}
            ref={el => { itemRefs.current[i] = el }}
            className={styles.item}
            data-num={`0${i + 1}`}
            style={{ '--delay': `${i * 80}ms` } as React.CSSProperties}
          >
            <div className="container">
              <div className={styles.itemInner}>
                <span className={`mono ${styles.num}`} aria-hidden="true">0{i + 1}</span>
                <p className={styles.text} data-text={s}>{s}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
