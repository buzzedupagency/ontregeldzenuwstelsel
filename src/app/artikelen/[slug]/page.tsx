import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import styles from './page.module.css'

const artikelen: Record<string, {
  title: string
  category: string
  date: string
  readtime: string
  intro: string
  sections: Array<{
    type: 'body' | 'callout' | 'quote' | 'break'
    label?: string
    text: string
  }>
}> = {
  'waarom-rust-nemen-soms-moeilijker-is-dan-doorgaan': {
    title: 'Waarom rust nemen soms moeilijker is dan doorgaan.',
    category: 'HERSTEL',
    date: '02.09.26',
    readtime: '7 MIN LEZEN',
    intro: 'Er is een reden waarom ik liever een deadline haalde dan een dag niets deed. Die reden had weinig te maken met discipline, en meer met hoe het voelde.',
    sections: [
      {
        type: 'body',
        text: 'Doorgaan is concreet. Je werkt, je levert, je ziet resultaat. Rust is abstract. Je zit. Je denkt. Je vraagt je af of je dit goed doet. Of rust dit is, of luiheid. Of morgen beter wordt als je nu even dit nog afmaakt.',
      },
      {
        type: 'callout',
        label: '// MIJN ERVARING',
        text: 'Ik merkte pas later dat ik rust als iets beschouwde dat je verdiende. Als je genoeg had gedaan, mocht je stoppen. Maar wanneer was dat? Nooit precies genoeg om echt te stoppen.',
      },
      {
        type: 'body',
        text: 'Dit is geen zeldzaam fenomeen. Wanneer het zenuwstelsel langdurig in een hogere staat van activatie zit, kan rust zelf aanvoelen als een bedreiging. Stil zijn betekent ruimte voor gedachten. Geen input betekent ook geen controle.',
      },
      {
        type: 'quote',
        text: 'Rust is niet de afwezigheid van activiteit. Het is de aanwezigheid van veiligheid.',
      },
      {
        type: 'body',
        text: 'Wat hielp: geen "rustdag" maar rust als onderdeel van de dag. Kleine momenten. Niets op de achtergrond. Aanwezig zijn in iets simpels — koffie zetten, lopen, buiten zijn. Niet als herstelstrategie maar als gewoonte.',
      },
      {
        type: 'callout',
        label: '// WAT IK PROBEER',
        text: 'De vraag die ik mezelf soms stel: "Is dit rust, of is dit alleen maar minder druk zijn?" Er zit een verschil.',
      },
      {
        type: 'body',
        text: 'Ik schrijf dit niet omdat ik het opgelost heb. Ik schrijf het omdat de vraag — waarom is stilzitten zo moeilijk? — het waard is om te stellen. Niet als zelfkritiek. Als curiositeit.',
      },
    ],
  },
  'wat-bedoelen-mensen-met-een-ontregeld-zenuwstelsel': {
    title: "Wat bedoelen mensen eigenlijk met een 'ontregeld zenuwstelsel'?",
    category: 'UITLEG',
    date: '02.09.26',
    readtime: '8 MIN LEZEN',
    intro: 'De term duikt overal op. Op TikTok, in podcasts, bij de huisarts. Maar wat bedoelen mensen ermee — en wanneer wordt herkenning een excuus om niet verder te zoeken?',
    sections: [
      {
        type: 'body',
        text: 'Het zenuwstelsel is een systeem dat je lichaam regelt op manieren die je zelf niet bewust aanstuurt. Hartslag, ademhaling, hoe alert je bent, hoe je reageert op stress. Het functioneert grotendeels automatisch.',
      },
      {
        type: 'body',
        text: 'Wanneer mensen spreken van een "ontregeld zenuwstelsel", beschrijven ze doorgaans een staat waarbij dat systeem moeilijk terugkeert naar rust. Het staat te lang aan. Prikkels komen te hard binnen. De overgang van actief naar ontspannen kost moeite.',
      },
      {
        type: 'callout',
        label: '// WAT WE WETEN',
        text: 'Chronische stress heeft meetbare effecten op het lichaam — op cortisol, slaap, concentratie en stemming. Dat is goed gedocumenteerd. Van "chronische stress" naar "jouw specifieke klachten worden veroorzaakt door een ontregeld zenuwstelsel" is een stap die een professional vereist.',
      },
      {
        type: 'body',
        text: 'De term is nuttig als herkenning. Minder nuttig als diagnose. Veel klachten die passen bij een "ontregeld zenuwstelsel" passen ook bij burn-out, ADHD, angststoornissen, slaapstoornissen, of een combinatie daarvan. Herkenning is een beginpunt, geen eindpunt.',
      },
      {
        type: 'quote',
        text: '"Ontregeld zenuwstelsel" is een taal voor een ervaring, geen naam voor een aandoening.',
      },
      {
        type: 'body',
        text: 'Wat ik op deze site probeer: de herkenning serieus nemen — zonder de nuance te verliezen die online soms ontbreekt. Geen wonderen beloven. Geen protocollen. Wel eerlijk schrijven over wat ik zelf heb meegemaakt en wat ik heb gelezen.',
      },
    ],
  },
  'herstellen-zonder-van-herstel-je-volgende-project-te-maken': {
    title: 'Herstellen zonder van herstel je volgende fulltime project te maken.',
    category: 'HERSTEL',
    date: '02.09.26',
    readtime: '6 MIN LEZEN',
    intro: 'Er is een moment waarop de drang om te optimaliseren ook je herstel bereikt. En dan ben je eigenlijk niet aan het herstellen.',
    sections: [
      {
        type: 'body',
        text: 'Ik merkte het bij mezelf: ik las boeken over herstel. Ik luisterde naar podcasts over zenuwstelsel-regulatie. Ik maakte lijsten van supplementen en routines. Ik had een systeem. Ik was bezig.',
      },
      {
        type: 'callout',
        label: '// MIJN ERVARING',
        text: 'Het voelde als herstel. Maar in werkelijkheid was het dezelfde energie in een andere richting. Ik was de expert geworden van mijn eigen probleem — wat comfortabeler voelt dan gewoon stoppen.',
      },
      {
        type: 'body',
        text: 'Herstel vereist iets wat counter-intuïtief is voor mensen die gewend zijn om problemen op te lossen: minder doen. Niet strategisch minder. Gewoon minder.',
      },
      {
        type: 'quote',
        text: 'De neiging om van herstel een project te maken is begrijpelijk. En precies de reden waarom het soms niet werkt.',
      },
      {
        type: 'body',
        text: 'Dit betekent niet dat informatie waardeloos is. Of dat nadenken over je herstel slecht is. Maar er is een grens waarbij informatie verzamelen een manier wordt om je ongemak te managen in plaats van te doorleven.',
      },
    ],
  },
  'hoe-ik-mijn-eigen-herstel-achteraf-ben-gaan-begrijpen': {
    title: 'Hoe ik mijn eigen herstel achteraf ben gaan begrijpen.',
    category: 'PERSOONLIJK',
    date: '02.09.26',
    readtime: '9 MIN LEZEN',
    intro: 'Ik begreep weinig van wat er met me gebeurde terwijl het gebeurde. Achteraf beginnen de stukken op z\'n plek te vallen.',
    sections: [
      {
        type: 'body',
        text: 'Herstel ziet er van binnenuit anders uit dan van buitenaf. Van binnenuit is het vaak niet lineair, niet duidelijk en regelmatig verwarrend. Je doet dingen waarvan je later begrijpt waarom ze hielpen — maar op het moment zelf weet je het niet.',
      },
      {
        type: 'callout',
        label: '// MIJN ERVARING',
        text: 'Ik heb mijn traject pas achteraf kunnen ordenen in iets wat op een tijdlijn lijkt. Terwijl ik er middenin zat, was het meer een soort mist dan een pad.',
      },
      {
        type: 'body',
        text: 'Wat ik nu begrijp: herstel vraagt om condities, niet om controle. De condities creëren — rust, regelmaat, minder prikkels, hulp zoeken — is iets wat je bewust kunt doen. Maar het herstel zelf gaat zijn eigen tempo.',
      },
      {
        type: 'quote',
        text: 'Je kunt herstel niet afdwingen. Je kunt het wel mogelijk maken.',
      },
      {
        type: 'body',
        text: 'Ik schrijf dit omdat ik in de periode dat ik het moeilijk had, zocht naar iemand die eerlijk zei: het is verwarrend, het duurt langer dan je wilt, en je kunt het niet oplossen zoals je een project oplost. Ik had die stem willen lezen.',
      },
    ],
  },
  'waarom-een-normale-dag-soms-pas-de-dag-erna-binnenkomt': {
    title: 'Waarom een normale dag soms pas de dag erna binnenkomt.',
    category: 'UITLEG',
    date: '02.09.26',
    readtime: '5 MIN LEZEN',
    intro: 'Je had een gewone dag. Niet uitzonderlijk druk. Niets bijzonders. Maar de volgende ochtend voel je je leeg.',
    sections: [
      {
        type: 'body',
        text: 'Dit verschijnsel heeft een naam: delayed fatigue, of vertraagde vermoeidheid. Het idee is dat de effecten van inspanning — mentale, sociale of fysieke — soms niet direct voelbaar zijn maar pas uren of een dag later.',
      },
      {
        type: 'callout',
        label: '// WAT WE WETEN',
        text: 'Bij mensen met een overbelast systeem kan de buffer voor stress kleiner zijn. Wat een "normale dag" voor iemand anders is, kan voor jou nabij de limiet zijn — en de kosten komen pas later in rekening.',
      },
      {
        type: 'body',
        text: 'Dit is frustrerend omdat het het lastig maakt om te leren van je eigen grenzen. De feedback komt vertraagd. Je denkt dat je een goede dag had — totdat de volgende dag aantoont dat het toch niet zo was.',
      },
      {
        type: 'callout',
        label: '// MIJN ERVARING',
        text: 'Ik heb lang geprobeerd dit te omzeilen door meer structuur. Maar de oplossing die uiteindelijk hielp was simpeler: eerder stoppen dan ik dacht te hoeven stoppen.',
      },
      {
        type: 'body',
        text: 'Het vraagt om een soort vooruitlopen op je eigen signalen. Niet wachten tot je voelt dat je te ver bent gegaan — maar stoppen voor je dat punt bereikt. Dat gaat tegen alles in wat je hebt geleerd over productiviteit.',
      },
    ],
  },
}

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return Object.keys(artikelen).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artikel = artikelen[params.slug]
  if (!artikel) return {}
  return {
    title: artikel.title,
    description: artikel.intro,
    openGraph: {
      title: artikel.title,
      description: artikel.intro,
      type: 'article',
    },
  }
}

export default function ArtikelPage({ params }: Props) {
  const artikel = artikelen[params.slug]
  if (!artikel) notFound()

  return (
    <>
      {/* ── ARTIKEL HEADER ───────────────────────────────────── */}
      <header className={styles.header} role="banner">
        <div className="container">
          <div className={styles.headerMeta}>
            <span className={`mono ${styles.metaCat}`}>// {artikel.category}</span>
            <span className={`mono ${styles.metaDate}`}>{artikel.date}</span>
            <span className={`mono ${styles.metaTime}`}>{artikel.readtime}</span>
          </div>
          <h1 className={styles.titel}>{artikel.title}</h1>
          <p className={styles.intro}>{artikel.intro}</p>
        </div>
      </header>

      {/* ── ARTIKEL BODY ─────────────────────────────────────── */}
      <article className={styles.body}>
        <div className={`container ${styles.bodyInner}`}>
          {artikel.sections.map((section, i) => {
            if (section.type === 'body') {
              return <p key={i} className={styles.bodyText}>{section.text}</p>
            }
            if (section.type === 'callout') {
              return (
                <div key={i} className={styles.callout}>
                  <span className={`mono ${styles.calloutLabel}`}>{section.label}</span>
                  <p className={styles.calloutText}>{section.text}</p>
                </div>
              )
            }
            if (section.type === 'quote') {
              return (
                <blockquote key={i} className={styles.quote}>
                  <p>&#8220;{section.text}&#8221;</p>
                </blockquote>
              )
            }
            return null
          })}
        </div>
      </article>

      {/* ── MEER ARTIKELEN ───────────────────────────────────── */}
      <nav className={styles.meer} aria-label="Meer artikelen">
        <div className="container">
          <div className={styles.meerInner}>
            <span className={`mono ${styles.meerLabel}`}>// MEER LEZEN</span>
            <Link href="/artikelen" className={styles.meerLink}>
              ALLE ARTIKELEN →
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
