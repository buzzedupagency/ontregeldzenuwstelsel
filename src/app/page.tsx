import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'
import HomeHero from '@/components/HomeHero'
import HomeHerkenning from '@/components/HomeHerkenning'
import HomeHerstel from '@/components/HomeHerstel'
import SignalStrip from '@/components/SignalStrip'

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
      {/* STATE 01 — RUST / LATENTE SPANNING */}
      <HomeHero />

      {/* STATE 02 — ACTIVATIE */}
      <HomeHerkenning />

      {/* STATE 03 — OVERGANG */}
      <SignalStrip />

      {/* STATE 04 — BEGRIJPEN ─────────────────────────────────────── */}
      <section className={styles.watIsHet} aria-label="Wat is een ontregeld zenuwstelsel?">
        <div className="container">

          {/* Compositional heading: oversized ONTREGELD + right-aligned ZENUWSTELSEL? */}
          <div className={styles.watIsHetCompose}>
            <span className={`mono ${styles.watIsHetContext}`}>// OKÉ. MAAR WAT ÍS EEN</span>
            <h2 className={styles.watIsHetBig}>ONTREGELD</h2>
            <span className={styles.watIsHetSub}>ZENUWSTELSEL?</span>
          </div>

          <div className={styles.watIsHetBody}>
            <div className={styles.watIsHetLeft}>
              <p className={styles.watIsHetBodyText}>
                &#8220;Ontregeld zenuwstelsel&#8221; is een term die online heel breed wordt gebruikt — van burn-out tot overprikkeling tot ADHD tot chronische stress.
              </p>
              <p className={styles.watIsHetBodyText}>
                Deze site probeert juist onderscheid te maken tussen wat we weten, wat mensen ervaren, en waar internettaal begint.
              </p>
              <Link href="/wat-is-het" className={styles.textLink}>
                LEES DE UITLEG →
              </Link>
            </div>
            <div className={styles.watIsHetRight}>
              <div className={styles.disclaimers}>
                <span className={styles.disclaimerItem}>GEEN DIAGNOSE.</span>
                <span className={styles.disclaimerItem}>GEEN WONDERMIDDEL.</span>
                <span className={`${styles.disclaimerItem} ${styles.accent}`}>WEL UITLEG + ERVARING.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STATE 05 — PERSOONLIJK ─────────────────────────────────────── */}
      <section className={styles.verhaal} aria-label="Mijn verhaal">
        <div className={`container ${styles.verhaalInner}`}>

          {/* Art-directed photo frame — placeholder for documentary photography */}
          <div className={styles.photoFrame} role="img" aria-label="Foto volgt — documentaire fotografie">
            <div className={styles.frameCropTL} aria-hidden="true" />
            <div className={styles.frameCropTR} aria-hidden="true" />
            <div className={styles.frameCropBL} aria-hidden="true" />
            <div className={styles.frameCropBR} aria-hidden="true" />
            <span className={styles.frameIndex} aria-hidden="true">FOTO 001</span>
            <span className={styles.frameGhost} aria-hidden="true">001</span>
            <div className={styles.frameFooter} aria-hidden="true">
              <span className={styles.frameLabel}>// FOTO VOLGT</span>
              <span className={styles.frameCoords}>51°N 4°E</span>
            </div>
          </div>

          <div className={styles.verhaalContent}>
            <span className={`mono ${styles.sectionLabel}`}>// MIJN VERHAAL</span>
            <h2 className={styles.verhaalStatement}>
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

      {/* STATE 06 — HERSTEL */}
      <HomeHerstel />

      {/* STATE 07 — VERDIEPING ──────────────────────────────────────── */}
      <section className={styles.artikelen} aria-labelledby="artikelen-heading">
        <div className="container">

          <div className={styles.artikelenHeader}>
            <span className={`mono ${styles.artikelenTitle}`}>// ARTIKELEN</span>
            <Link href="/artikelen" className={styles.artikelenLink}>
              ALLES ZIEN →
            </Link>
          </div>

          {/* Featured — editorial poster */}
          <div className={styles.featuredArticle}>
            <span className={styles.featuredNum} aria-hidden="true">01</span>
            <Link href={`/artikelen/${sampleArticles[0].slug}`} className={styles.featuredLink}>
              <div className={styles.featuredMeta}>
                <span className={`mono ${styles.newTag}`}>NIEUW</span>
                <span className="mono" style={{ color: 'var(--text-muted)', fontSize: 'var(--text-xs)', letterSpacing: '0.06em' }}>{sampleArticles[0].category}</span>
                <span className="mono" style={{ color: 'var(--text-muted)', fontSize: 'var(--text-xs)', letterSpacing: '0.06em' }}>{sampleArticles[0].readtime}</span>
              </div>
              <h2 id="artikelen-heading" className={styles.featuredTitle}>{sampleArticles[0].title}</h2>
            </Link>
          </div>

          {/* List */}
          <ol className={styles.articleList} aria-label="Recente artikelen">
            {sampleArticles.slice(1).map((article) => (
              <li key={article.num} className={styles.articleItem}>
                <Link href={`/artikelen/${article.slug}`} className={styles.articleLink}>
                  <span className={styles.articleNum} aria-hidden="true">{article.num}</span>
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

      {/* STATE 08 — RELEASE ─────────────────────────────────────────── */}
      <section className={styles.slot} aria-label="Niet alles hoeft vandaag opgelost">
        <div className={`container ${styles.slotInner}`}>

          {/* Poster: fill / outline / fill */}
          <div className={styles.slotTypography}>
            <span className={styles.slotLine1}>NIET ALLES HOEFT</span>
            <span className={styles.slotLineOutline}>VANDAAG</span>
            <span className={styles.slotLine3}>OPGELOST.</span>
          </div>

          <div className={styles.slotBottom}>
            <p className={styles.slotBodyText}>
              Deze site groeit mee met wat ik leer, lees en ervaar. Soms is het uitleg. Soms een persoonlijk verhaal. Soms gewoon iets wat handig is om vandaag te proberen.
            </p>
            <div className={styles.slotLinks}>
              <Link href="/artikelen" className={styles.slotCta}>
                LEES DE ARTIKELEN →
              </Link>
              <p className={`mono ${styles.slotMono}`}>
                // PERSOONLIJK<br />
                // GEEN DIAGNOSE<br />
                // WEL EERLIJK
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
