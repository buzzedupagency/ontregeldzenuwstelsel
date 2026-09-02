import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'
import HomeHero from '@/components/HomeHero'
import HomeHerkenning from '@/components/HomeHerkenning'
import HomeHerstel from '@/components/HomeHerstel'

export const metadata: Metadata = {
  title: 'Ontregeld Zenuwstelsel — Over stress, prikkels, ADHD & herstel',
  description: 'Een eerlijk kennisplatform over stress, overprikkeling, ADHD en herstel. Voor mensen die heel lang dachten dat ze zich gewoon even moesten herpakken.',
  openGraph: {
    title: 'Ontregeld Zenuwstelsel',
    description: 'Voor mensen die heel lang dachten dat ze zich gewoon even moesten herpakken.',
  },
}

const sampleArticles = [
  {
    num: '01',
    slug: 'wat-bedoelen-mensen-met-een-ontregeld-zenuwstelsel',
    title: "Wat bedoelen mensen eigenlijk met een 'ontregeld zenuwstelsel'?",
    category: 'UITLEG',
    readtime: '8 MIN',
    isNew: true,
    featured: true,
  },
  {
    num: '02',
    slug: 'waarom-rust-nemen-soms-moeilijker-is-dan-doorgaan',
    title: 'Waarom rust nemen soms moeilijker is dan doorgaan.',
    category: 'HERSTEL',
    readtime: '7 MIN',
    isNew: false,
    featured: false,
  },
  {
    num: '03',
    slug: 'herstellen-zonder-van-herstel-je-volgende-project-te-maken',
    title: 'Herstellen zonder van herstel je volgende fulltime project te maken.',
    category: 'HERSTEL',
    readtime: '6 MIN',
    isNew: false,
    featured: false,
  },
  {
    num: '04',
    slug: 'hoe-ik-mijn-eigen-herstel-achteraf-ben-gaan-begrijpen',
    title: 'Hoe ik mijn eigen herstel achteraf ben gaan begrijpen.',
    category: 'PERSOONLIJK',
    readtime: '9 MIN',
    isNew: false,
    featured: false,
  },
  {
    num: '05',
    slug: 'waarom-een-normale-dag-soms-pas-de-dag-erna-binnenkomt',
    title: 'Waarom een normale dag soms pas de dag erna binnenkomt.',
    category: 'UITLEG',
    readtime: '5 MIN',
    isNew: false,
    featured: false,
  },
]

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeHerkenning />

      {/* ── WAT IS HET ─────────────────────────────────────────── */}
      <section className={styles.watIsHet} aria-labelledby="wat-is-het-heading">
        <div className={`container ${styles.watIsHetInner}`}>
          <div className={styles.watIsHetLeft}>
            <h2 id="wat-is-het-heading" className={styles.watIsHetHeading}>
              OKÉ.<br />
              MAAR WAT ÍS<br />
              EEN ONTREGELD<br />
              ZENUWSTELSEL?
            </h2>
          </div>
          <div className={styles.watIsHetRight}>
            <p className={styles.watIsHetBody}>
              &#8220;Ontregeld zenuwstelsel&#8221; is een term die online heel breed wordt gebruikt — van burn-out tot overprikkeling tot ADHD tot chronische stress.
            </p>
            <p className={styles.watIsHetBody}>
              Deze site probeert juist onderscheid te maken tussen wat we weten, wat mensen ervaren, en waar internettaal begint.
            </p>
            <Link href="/wat-is-het" className={styles.textLink}>
              LEES DE UITLEG →
            </Link>
            <div className={styles.disclaimers}>
              <span className="mono">GEEN DIAGNOSE</span>
              <span className="mono">GEEN WONDERMIDDEL</span>
              <span className="mono accent">WEL UITLEG + ERVARING</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MIJN VERHAAL ───────────────────────────────────────── */}
      <section className={styles.verhaal} aria-labelledby="verhaal-heading">
        <div className={`container ${styles.verhaalInner}`}>
          <div className={styles.verhaalImageBlock}>
            <div className={styles.verhaalPlaceholder} aria-hidden="true">
              <span className={`mono ${styles.placeholderLabel}`}>// FOTO VOLGT</span>
              <p className={styles.placeholderNote}>
                Documentaire fotografie<br />
                van het echte hersteltraject.
              </p>
            </div>
          </div>
          <div className={styles.verhaalContent}>
            <span className={`mono ${styles.sectionLabel}`}>// MIJN VERHAAL</span>
            <h2 id="verhaal-heading" className={styles.verhaalHeading}>
              IK BEGON DIT NIET<br />
              OMDAT IK ZO<br />
              GEÏNTERESSEERD WAS<br />
              IN HET ZENUWSTELSEL.
            </h2>
            <p className={styles.verhaalBody}>
              Ik begon te zoeken omdat mijn lichaam en hoofd op een gegeven moment niet meer vanzelfsprekend meewerkten met het tempo dat ik gewend was.
            </p>
            <Link href="/mijn-verhaal" className={styles.textLink}>
              LEES MIJN VERHAAL →
            </Link>
          </div>
        </div>
      </section>

      <HomeHerstel />

      {/* ── ARTIKELEN ──────────────────────────────────────────── */}
      <section className={styles.artikelen} aria-labelledby="artikelen-heading">
        <div className="container">
          <div className={styles.artikelenHeader}>
            <h2 id="artikelen-heading" className={styles.artikelenTitle}>ARTIKELEN</h2>
            <Link href="/artikelen" className={styles.artikelenLink}>
              ALLES ZIEN →
            </Link>
          </div>

          {/* Featured */}
          <div className={styles.featuredArticle}>
            <Link href={`/artikelen/${sampleArticles[0].slug}`} className={styles.featuredLink}>
              <div className={styles.featuredMeta}>
                <span className={`mono ${styles.newTag}`}>NIEUW</span>
                <span className="mono">{sampleArticles[0].category}</span>
                <span className="mono" style={{ color: 'var(--color-text-muted)' }}>{sampleArticles[0].readtime}</span>
              </div>
              <h3 className={styles.featuredTitle}>{sampleArticles[0].title}</h3>
            </Link>
          </div>

          {/* List */}
          <ol className={styles.articleList} aria-label="Recente artikelen">
            {sampleArticles.slice(1).map((article) => (
              <li key={article.num} className={styles.articleItem}>
                <Link href={`/artikelen/${article.slug}`} className={styles.articleLink}>
                  <span className={`mono ${styles.articleNum}`}>{article.num}</span>
                  <span className={styles.articleTitle}>{article.title}</span>
                  <span className={styles.articleRight}>
                    <span className={`mono ${styles.articleCat}`}>{article.category}</span>
                    <span className={`mono ${styles.articleTime}`}>{article.readtime}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── SLOTSECTIE ─────────────────────────────────────────── */}
      <section className={styles.slot} aria-labelledby="slot-heading">
        <div className={`container ${styles.slotInner}`}>
          <div className={styles.slotLeft}>
            <h2 id="slot-heading" className={styles.slotHeading}>
              NIET ALLES HOEFT<br />
              VANDAAG OPGELOST.
            </h2>
            <p className={styles.slotBody}>
              Deze site groeit mee met wat ik leer, lees en ervaar. Soms is het uitleg. Soms een persoonlijk verhaal. Soms gewoon iets wat handig is om vandaag te proberen.
            </p>
            <div className={styles.slotLinks}>
              <Link href="/artikelen" className={styles.slotCta}>
                LEES DE ARTIKELEN →
              </Link>
            </div>
          </div>
          <div className={styles.slotRight}>
            <p className={`mono ${styles.slotMono}`}>
              // PERSOONLIJK<br />
              // GEEN DIAGNOSE<br />
              // WEL EERLIJK
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
