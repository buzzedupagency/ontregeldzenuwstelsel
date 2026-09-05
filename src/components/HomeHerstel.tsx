'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './HomeHerstel.module.css'

const items = [
  { num: '01', label: 'RUST', href: '/herstel#rust', freq: 'low' as const, desc: 'Leren dat rust geen beloning is die je eerst moet verdienen.' },
  { num: '02', label: 'BEWEGEN', href: '/herstel#bewegen', freq: 'mid' as const, desc: 'Beweging als tool, niet als prestatie.' },
  { num: '03', label: 'PRIKKELS', href: '/herstel#prikkels', freq: 'high' as const, desc: 'Begrijpen wat er binnen komt en wat dat doet.' },
  { num: '04', label: 'SLAAP', href: '/herstel#slaap', freq: 'low' as const, desc: 'Niet alleen uren maar ook kwaliteit en ritme.' },
  { num: '05', label: 'STRUCTUUR', href: '/herstel#structuur', freq: 'mid' as const, desc: 'Kleine vaste punten als houvast, niet als discipline.' },
  { num: '06', label: 'THERAPIE', href: '/herstel#therapie', freq: 'low' as const, desc: 'Wat het kan zijn, en waarom het soms ook niet past.' },
  { num: '07', label: 'ADHD', href: '/herstel#adhd', freq: 'high' as const, desc: 'Een diagnose halverwege het traject, en wat dat veranderde.' },
  { num: '08', label: 'WERK / OPNIEUW OPBOUWEN', href: '/herstel#werk', freq: 'mid' as const, desc: 'Terugkeren — langzamer, maar bewuster.' },
]

export default function HomeHerstel() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  return (
    <section className={styles.section} aria-labelledby="herstel-heading">
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <span className={`mono ${styles.label}`}>// HERSTELONDERDELEN</span>
          <h2 id="herstel-heading" className={styles.title}>
            HERSTELLEN BLEEK<br />
            VOORAL MINDER LINEAIR<br />
            DAN IK DACHT.
          </h2>
        </div>

        <div className={styles.body}>
          <ul className={styles.list} role="list">
            {items.map((item, i) => (
              <li
                key={item.num}
                className={`${styles.item} ${activeIdx === i ? styles.active : ''}`}
                data-freq={item.freq}
                onMouseEnter={() => setActiveIdx(i)}
                onMouseLeave={() => setActiveIdx(null)}
              >
                <Link href={item.href} className={styles.itemLink}>
                  <span className={`mono ${styles.num}`}>{item.num}</span>
                  <span className={styles.itemLabel}>{item.label}</span>
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.desc} aria-live="polite" aria-atomic="true">
            {activeIdx !== null ? (
              <>
                <p className={styles.descNum} aria-hidden="true">{items[activeIdx].num}</p>
                <p className={styles.descText}>{items[activeIdx].desc}</p>
              </>
            ) : (
              <p className={styles.descPlaceholder}>
                Beweeg over een onderdeel om meer te lezen.
              </p>
            )}
            <Link href="/herstel" className={`mono ${styles.herstelLink}`}>
              ALLES OVER HERSTEL →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
