import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Herstel',
  description: 'Herstellen is geen terugreis naar wie je hiervoor was. Over rust, bewegen, prikkels, slaap, therapie en opnieuw opbouwen.',
}

const onderdelen = [
  {
    num: '01',
    id: 'rust',
    titel: 'RUST',
    intro: 'Leren dat rust geen beloning is die je eerst moet verdienen.',
    tekst: 'Ik had een vrij duidelijk idee van wat rust was: series kijken, scrollen, een biertje. Pas later begreep ik dat dit allemaal input was. Echt herstellen vroeg om iets anders — soms gewoon zitten zonder agenda. Dat voelde lang als verspilling.',
    tag: 'MIJN ERVARING',
  },
  {
    num: '02',
    id: 'bewegen',
    titel: 'BEWEGEN',
    intro: 'Beweging als tool, niet als prestatie.',
    tekst: 'Bewegen hielp. Maar anders dan ik dacht. Niet als manier om iets te presteren of calorieën te verbranden. Meer als manier om in mijn lichaam terug te komen. Lopen werkte goed. Fietsen ook. Niet te intensief.',
    tag: 'MIJN ERVARING',
  },
  {
    num: '03',
    id: 'prikkels',
    titel: 'PRIKKELS',
    intro: 'Begrijpen wat er binnenkomt en wat dat doet.',
    tekst: 'Ik moest leren onderscheid te maken tussen prikkels die me energy geven en prikkels die me uitputten. Social media hoorde bij de tweede categorie — maar dat duurde even voor ik dat erkende. Minder schermtijd hielp meer dan ik had verwacht.',
    tag: 'MIJN ERVARING',
  },
  {
    num: '04',
    id: 'slaap',
    titel: 'SLAAP',
    intro: 'Niet alleen uren maar ook kwaliteit en ritme.',
    tekst: 'Slaap is niet alleen een kwestie van genoeg uur. Regelmaat maakt een groot verschil — zeker wanneer je een onregelmatig systeem probeert te kalmeren. Consistente slaaptijden werkten voor mij beter dan lange maar onregelmatige nachten.',
    tag: 'MIJN ERVARING',
  },
  {
    num: '05',
    id: 'structuur',
    titel: 'STRUCTUUR',
    intro: 'Kleine vaste punten als houvast, niet als discipline.',
    tekst: 'Structuur voelde eerst als een beperking. Later merkte ik dat vaste punten op de dag — opstijden, eten, bewegen — het voor mijn hoofd makkelijker maakten. Minder beslissingen hoeven nemen geeft ruimte.',
    tag: 'MIJN ERVARING',
  },
  {
    num: '06',
    id: 'therapie',
    titel: 'THERAPIE',
    intro: 'Wat het kan zijn, en waarom het soms ook niet past.',
    tekst: 'Therapie hielp me begrijpen hoe mijn patronen in elkaar staken. Dat is iets anders dan iemand die je vertelt wat je moet doen. Cognitieve gedragstherapie was een begin. Later kwamen er andere benaderingen bij. Niet alles werkte, en dat is ook informatie.',
    tag: 'MIJN ERVARING',
  },
  {
    num: '07',
    id: 'adhd',
    titel: 'ADHD',
    intro: 'Een diagnose halverwege het traject, en wat dat veranderde.',
    tekst: 'De ADHD-diagnose veranderde hoe ik naar mijn verleden keek. Veel dingen die ik als falen beschouwde werden begrijpelijker als contextueel. Dat was moeilijk en opluchting tegelijk. Medicatie hielp bij concentratie — maar het loste niet alles op.',
    tag: 'MIJN ERVARING',
  },
  {
    num: '08',
    id: 'werk',
    titel: 'WERK / OPNIEUW OPBOUWEN',
    intro: 'Terugkeren — langzamer, maar bewuster.',
    tekst: 'Terugkeren naar werk ging in kleine stappen. Ik merkte dat ik capaciteit op een andere manier moest beoordelen dan daarvoor. Niet "hoeveel kan ik doen" maar "wat kost hoeveel". Dat is een andere mindset — en ik oefen er nog steeds mee.',
    tag: 'MIJN ERVARING',
  },
]

const traject = [
  { label: 'DOORGAAN', size: 'sm' },
  { label: 'SIGNALEN', size: 'md' },
  { label: 'STOPPEN', size: 'lg' },
  { label: 'STABILISEREN', size: 'md' },
  { label: 'OPBOUWEN', size: 'md' },
  { label: '???', size: 'unknown' },
] as const

export default function HerstellPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="herstel-heading">
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroLeft}>
              <span className={`mono ${styles.metaItem}`}>// HERSTEL</span>
              <h1 id="herstel-heading" className={styles.heroHeading}>
                HERSTELLEN IS GEEN<br />
                TERUGREIS NAAR WIE<br />
                JE HIERVOOR WAS.
              </h1>
            </div>
            <div className={styles.heroRight}>
              <p className={styles.heroSubtext}>
                Ik dacht eerst vooral: wanneer kan ik weer alles? Een nuttigere vraag bleek uiteindelijk: wat heb ik nodig om duurzaam meer aan te kunnen?
              </p>
              <div className={styles.traject} aria-label="Mijn hersteltraject schematisch">
                <span className={`mono ${styles.trajectLabel}`}>// MIJN TRAJECT</span>
                {traject.map((step, i) => (
                  <div key={step.label} className={styles.trajectItem}>
                    <span className={styles.trajectStep} data-size={step.size}>{step.label}</span>
                    {i < traject.length - 1 && <span className={`mono ${styles.trajectArrow}`} aria-hidden="true">↓</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ONDERDELEN ───────────────────────────────────────── */}
      <section className={styles.onderdelen} aria-label="Herstelonderdelen">
        <div className="container">
          {onderdelen.map((item) => (
            <div key={item.num} id={item.id} className={styles.onderdeel}>
              <div className={styles.onderdeelHeader}>
                <span className={`mono ${styles.onderdeelNum}`}>{item.num}</span>
                <h2 className={styles.onderdeelTitel}>{item.titel}</h2>
                <span className={`mono ${styles.onderdeelTag}`}>// {item.tag}</span>
              </div>
              <div className={styles.onderdeelBody}>
                <p className={styles.onderdeelIntro}>{item.intro}</p>
                <p className={styles.onderdeelTekst}>{item.tekst}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PAGE NAV ─────────────────────────────────────────── */}
      <nav className={styles.pageNav} aria-label="Gerelateerde pagina's">
        <div className="container">
          <div className={styles.pageNavInner}>
            <Link href="/artikelen" className={styles.pageNavLink}>
              <span className={`mono ${styles.pageNavLabel}`}>VOLGENDE</span>
              <span className={styles.pageNavTitle}>Artikelen →</span>
            </Link>
            <Link href="/mijn-verhaal" className={styles.pageNavLink}>
              <span className={`mono ${styles.pageNavLabel}`}>TERUG</span>
              <span className={styles.pageNavTitle}>Mijn verhaal →</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
