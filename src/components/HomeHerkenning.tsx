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

  useEffect(() => {
    const observers = itemRefs.current.map((el) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add(styles.visible)
            obs.disconnect()
          }
        },
        { threshold: 0.15 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((obs) => obs?.disconnect())
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
            ref={(el) => { itemRefs.current[i] = el }}
            className={styles.item}
            data-num={`0${i + 1}`}
            style={{ '--delay': `${i * 80}ms` } as React.CSSProperties}
          >
            <div className="container">
              <div className={styles.itemInner}>
                <span className={`mono ${styles.num}`} aria-hidden="true">0{i + 1}</span>
                <p className={styles.text}>{s}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
