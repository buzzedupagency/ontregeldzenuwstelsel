import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Mijn verhaal',
  description: 'Ik dacht dat ik gewoon harder mijn best moest doen. Dit is hoe ik mijn eigen hersteltraject achteraf probeer te begrijpen.',
  openGraph: {
    title: 'Mijn verhaal — Ontregeld Zenuwstelsel',
    description: 'Een persoonlijk essay over doorgaan, signalen zien en leren herstellen.',
  },
}

const tijdlijn = [
  {
    num: '01',
    titel: 'DOORGAAN',
    tekst: 'Ik functioneerde goed. Of: ik deed het alsof. Werk ging prima. Sociaal leven ging prima. Maar er was een soort constante versnelling die ik normaal was gaan vinden. Altijd een stap voor zijn. Altijd bezig. Altijd presteren.',
    persoonlijk: true,
  },
  {
    num: '02',
    titel: 'SIGNALEN',
    tekst: 'Daarna begonnen er dingen te gebeuren die ik niet goed kon plaatsen. Opeens heel moe na dingen die normaal waren. Concentratieproblemen die ik toeschreef aan slechte slaap. Sociale situaties die me meer kostten dan gewoonlijk. Ik bleef interpreteren in termen van tijdelijk.',
    persoonlijk: true,
  },
  {
    num: '03',
    titel: 'ZOEKEN',
    tekst: 'Ik begon te googelen. Zoals iedereen. En ik vond veel: burn-out, overprikkeling, ontregeld zenuwstelsel, nervus vagus. Het voelde als herkenning. Maar ook als ruis. Ik wist niet wat ik moest geloven.',
    persoonlijk: true,
  },
  {
    num: '04',
    titel: 'STOPPEN',
    tekst: 'Op een gegeven moment lukte doorgaan niet meer. Niet als dramatisch moment, maar als een geleidelijke onmogelijkheid. Mijn hoofd en lichaam werkten niet meer mee in het tempo dat ik gewend was.',
    persoonlijk: true,
  },
  {
    num: '05',
    titel: 'STABILISEREN',
    tekst: 'De eerste maanden van echt stoppen waren raar. Er was weinig structuur. Ik sliep veel. Ik deed weinig. Ik merkte pas later dat dit mijn zenuwstelsel de kans gaf om iets te kalmeren — maar op dat moment voelde het niet als herstel. Het voelde als stilstaan.',
    persoonlijk: true,
  },
  {
    num: '06',
    titel: 'THERAPIE / ADHD',
    tekst: 'Via therapie begon ik beter te begrijpen hoe mijn systeem werkt. Halverwege het traject volgde een ADHD-diagnose. Dat veranderde het verhaal. Niet als excuus, maar als context. Veel dingen die ik als persoonlijk falen zag, werden ineens begrijpelijker.',
    persoonlijk: true,
  },
  {
    num: '07',
    titel: 'WEER BEWEGEN',
    tekst: 'Langzaam begon ik dingen toe te voegen. Lopen. Fietsen. Kleine routine. Niet als prestatiedoel maar als anker. Bewegen hielp — maar anders dan ik had verwacht. Niet als uitlaatklep maar als ritme.',
    persoonlijk: true,
  },
  {
    num: '08',
    titel: 'OPNIEUW OPBOUWEN',
    tekst: 'Terugkeren naar werk en leven ging langzamer dan ik wilde. En bewuster dan daarvoor. Ik merkte dat ik grenzen moest leren kennen die ik eerder negeerde. Dat bleek geen eenmalige oefening.',
    persoonlijk: true,
  },
  {
    num: '09',
    titel: '???',
    tekst: 'Dit verhaal loopt nog. Ik schrijf dit niet vanuit een perfect eindpunt. Er zijn goede weken en moeilijkere. Dat is geen mislukking — het is eerder hoe het er blijkbaar uitziet.',
    persoonlijk: false,
    accent: true,
  },
]

export default function MijnVerhaalPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="mv-heading">
        <div className="container">
          <div className={styles.heroTop}>
            <span className={`mono ${styles.metaItem}`}>// MIJN VERHAAL</span>
          </div>
          <h1 id="mv-heading" className={styles.heroHeading}>
            IK DACHT DAT IK<br />
            GEWOON HARDER<br />
            MIJN BEST<br />
            MOEST DOEN.
          </h1>
          <div className={styles.heroBottom}>
            <p className={styles.heroIntro}>
              Dit is mijn eigen manier om mijn traject achteraf te begrijpen. Geen universeel herstelmodel. Geen blauwdruk voor jou. Wel eerlijk.
            </p>
          </div>
        </div>
      </section>

      {/* ── CENTRAAL STATEMENT ───────────────────────────────── */}
      <div className={styles.statement}>
        <div className="container">
          <blockquote className={styles.statementText}>
            Ik wilde de plek maken die ik zelf had willen vinden.
          </blockquote>
        </div>
      </div>

      {/* ── TIJDLIJN ─────────────────────────────────────────── */}
      <section className={styles.tijdlijn} aria-label="Mijn hersteltraject">
        <div className="container">
          <div className={styles.tijdlijnInner}>

            <div className={styles.tijdlijnNav} aria-hidden="true">
              <div className={styles.tijdlijnLine} />
              {tijdlijn.map((item) => (
                <a key={item.num} href={`#fase-${item.num}`} className={styles.tijdlijnDot} title={item.titel}>
                  <span className={`mono ${styles.dotLabel}`}>{item.num}</span>
                </a>
              ))}
            </div>

            <div className={styles.tijdlijnContent}>
              {tijdlijn.map((item) => (
                <div
                  key={item.num}
                  id={`fase-${item.num}`}
                  className={`${styles.fase} ${item.accent ? styles.faseAccent : ''}`}
                >
                  <div className={styles.faseHeader}>
                    <span className={`mono ${styles.faseNum}`}>{item.num}</span>
                    <h2 className={`${styles.faseTitel} ${item.accent ? styles.faseTitelAccent : ''}`}>
                      {item.titel}
                    </h2>
                    {item.persoonlijk && (
                      <span className={`mono ${styles.faseTag}`}>// MIJN ERVARING</span>
                    )}
                  </div>
                  <p className={styles.faseTekst}>{item.tekst}</p>

                  {item.num === '04' && (
                    <div className={styles.fotoPlaats} role="img" aria-label="Foto placeholder — documentair beeld volgt">
                      <span className={`mono ${styles.fotoLabel}`}>// DOCUMENTAIRE FOTO VOLGT</span>
                    </div>
                  )}

                  {item.num === '07' && (
                    <div className={styles.fotoPlaats} role="img" aria-label="Foto placeholder — buiten bewegen">
                      <span className={`mono ${styles.fotoLabel}`}>// DOCUMENTAIRE FOTO VOLGT</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PAGE NAV ─────────────────────────────────────────── */}
      <nav className={styles.pageNav} aria-label="Volgende pagina">
        <div className="container">
          <div className={styles.pageNavInner}>
            <Link href="/herstel" className={styles.pageNavLink}>
              <span className={`mono ${styles.pageNavLabel}`}>VOLGENDE</span>
              <span className={styles.pageNavTitle}>Herstel →</span>
            </Link>
            <Link href="/artikelen/hoe-ik-mijn-eigen-herstel-achteraf-ben-gaan-begrijpen" className={styles.pageNavLink}>
              <span className={`mono ${styles.pageNavLabel}`}>GERELATEERD ARTIKEL</span>
              <span className={styles.pageNavTitle}>Hoe ik mijn eigen herstel achteraf ben gaan begrijpen →</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
