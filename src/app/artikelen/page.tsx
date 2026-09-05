'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.css'

const categories = ['ALLES', 'UITLEG', 'HERSTEL', 'PERSOONLIJK', 'PRIKKELS', 'ADHD', 'WERK']

const artikelen = [
  {
    num: '01',
    slug: 'wat-bedoelen-mensen-met-een-ontregeld-zenuwstelsel',
    title: "Wat bedoelen mensen eigenlijk met een 'ontregeld zenuwstelsel'?",
    category: 'UITLEG',
    readtime: '8 MIN',
    date: '02.09.26',
    isNew: true,
  },
  {
    num: '02',
    slug: 'waarom-rust-nemen-soms-moeilijker-is-dan-doorgaan',
    title: 'Waarom rust nemen soms moeilijker is dan doorgaan.',
    category: 'HERSTEL',
    readtime: '7 MIN',
    date: '02.09.26',
    isNew: true,
  },
  {
    num: '03',
    slug: 'herstellen-zonder-van-herstel-je-volgende-project-te-maken',
    title: 'Herstellen zonder van herstel je volgende fulltime project te maken.',
    category: 'HERSTEL',
    readtime: '6 MIN',
    date: '02.09.26',
    isNew: false,
  },
  {
    num: '04',
    slug: 'hoe-ik-mijn-eigen-herstel-achteraf-ben-gaan-begrijpen',
    title: 'Hoe ik mijn eigen herstel achteraf ben gaan begrijpen.',
    category: 'PERSOONLIJK',
    readtime: '9 MIN',
    date: '02.09.26',
    isNew: false,
  },
  {
    num: '05',
    slug: 'waarom-een-normale-dag-soms-pas-de-dag-erna-binnenkomt',
    title: 'Waarom een normale dag soms pas de dag erna binnenkomt.',
    category: 'UITLEG',
    readtime: '5 MIN',
    date: '02.09.26',
    isNew: false,
  },
]

export default function ArtikelenPage() {
  const [activeFilter, setActiveFilter] = useState('ALLES')

  const filtered = activeFilter === 'ALLES'
    ? artikelen
    : artikelen.filter(a => a.category === activeFilter)

  const featured = activeFilter === 'ALLES' ? filtered[0] : null
  const listItems = featured ? filtered.slice(1) : filtered

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <span className={`mono ${styles.metaItem}`}>// ARTIKELEN</span>
            <h1 className={styles.heroHeading}>
              ALLE<br />ARTIKELEN
            </h1>
            <p className={styles.heroSub}>
              Uitleg, ervaringen en dingen die hielpen.<br />
              Persoonlijk gefilterd — niet gesponsord.
            </p>
          </div>
        </div>
      </section>

      {/* ── FILTERS ──────────────────────────────────────────── */}
      <div className={styles.filters}>
        <div className="container">
          <div className={styles.filtersInner} role="group" aria-label="Filter op categorie">
            {categories.map(cat => (
              <button
                key={cat}
                className={`mono ${styles.filter} ${activeFilter === cat ? styles.filterActive : ''}`}
                onClick={() => setActiveFilter(cat)}
                aria-pressed={activeFilter === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── LIJST ────────────────────────────────────────────── */}
      <section className={styles.lijst} aria-label="Artikelen">
        <div className="container">
          {filtered.length === 0 ? (
            <p className={styles.leeg}>
              Niks gevonden. Kan ook een keer lekker zijn.
            </p>
          ) : (
            <>
              {featured && (
                <div className={styles.featuredWrap}>
                  <span className={styles.featuredNumBg} aria-hidden="true">{featured.num}</span>
                  <Link href={`/artikelen/${featured.slug}`} className={styles.featuredLink}>
                    <div className={styles.featuredMeta}>
                      {featured.isNew && <span className={`mono ${styles.newBadge}`}>NIEUW</span>}
                      <span className={`mono ${styles.artikelCat}`}>{featured.category}</span>
                      <span className={`mono ${styles.artikelTime}`}>{featured.readtime}</span>
                    </div>
                    <h2 className={styles.featuredTitle}>{featured.title}</h2>
                  </Link>
                </div>
              )}
              <ol className={styles.artikelList} aria-label={`Artikelen: ${activeFilter}`}>
                {listItems.map((artikel) => (
                  <li key={artikel.num} className={styles.artikelItem}>
                    <Link href={`/artikelen/${artikel.slug}`} className={styles.artikelLink}>
                      <div className={styles.artikelLeft}>
                        <span className={`mono ${styles.artikelNum}`}>{artikel.num}</span>
                        <div className={styles.artikelInfo}>
                          {artikel.isNew && (
                            <span className={`mono ${styles.newBadge}`}>NIEUW</span>
                          )}
                          <h2 className={styles.artikelTitle}>{artikel.title}</h2>
                        </div>
                      </div>
                      <div className={styles.artikelRight}>
                        <span className={`mono ${styles.artikelCat}`}>{artikel.category}</span>
                        <span className={`mono ${styles.artikelDate}`}>{artikel.date}</span>
                        <span className={`mono ${styles.artikelTime}`}>{artikel.readtime}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>
      </section>
    </>
  )
}
