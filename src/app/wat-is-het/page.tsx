import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: "Wat is een ontregeld zenuwstelsel?",
  description: 'Wat bedoelen mensen eigenlijk met een "ontregeld zenuwstelsel"? Geen diagnose, wel eerlijke uitleg over stress, overprikkeling en herstel.',
  openGraph: {
    title: "Wat is een ontregeld zenuwstelsel?",
    description: 'Eerlijke uitleg over stress, overprikkeling en herstel — zonder medische claims.',
  },
}

export default function WatIsHetPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="wih-heading">
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroMeta}>
              <span className={`mono ${styles.metaItem}`}>// UITLEG</span>
              <span className={`mono ${styles.metaItem}`} style={{ color: 'var(--color-text-muted-dark)' }}>LEESTIJD: 10 MIN</span>
            </div>
            <h1 id="wih-heading" className={styles.heroHeading}>
              WAT BEDOELEN<br />
              MENSEN MET EEN<br />
              &#8216;ONTREGELD<br />
              ZENUWSTELSEL&#8217;?
            </h1>
            <div className={styles.heroRight}>
              <p className={styles.heroIntro}>
                De term duikt overal op. Op TikTok, in podcasts, in therapiekamers. Maar wat betekent het precies — en wanneer wordt iets een modewoord?
              </p>
              <p className={styles.heroIntro}>
                Deze pagina probeert onderscheid te maken tussen wat we weten, wat mensen ervaren, en waar internettaal begint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────── */}
      <article className={styles.content} aria-label="Pagina-inhoud">
        <div className="container">
          <div className={styles.contentGrid}>

            {/* Section 01 */}
            <section className={styles.section} aria-labelledby="s01">
              <div className={styles.sectionLabel}>
                <span className={`mono ${styles.sectionNum}`}>01</span>
                <h2 id="s01" className={styles.sectionTitle}>DE KORTE VERSIE</h2>
              </div>
              <div className={styles.sectionBody}>
                <p>Je zenuwstelsel regelt van alles tegelijk: je hartslag, je ademhaling, hoe alert je bent, hoe snel je reageert. Wanneer mensen zeggen dat hun zenuwstelsel &quot;ontregeld&quot; is, bedoelen ze vaak dat dat systeem langere tijd in een staat van activatie zit — en moeilijk terugkomt naar rust.</p>
                <p>Dat is iets wat mensen echt ervaren. De vraag is niet <em>of</em> ze iets voelen, maar <em>wat</em> dat precies is en wat er op de achtergrond speelt.</p>
                <div className={styles.callout}>
                  <span className={`mono ${styles.calloutLabel}`}>// BELANGRIJK</span>
                  <p>&#8220;Ontregeld zenuwstelsel&#8221; is geen formele diagnose. Het is een beschrijving die mensen gebruiken voor een cluster van ervaringen. Dat maakt het nuttig als taal — maar het vervangt geen onderzoek of behandeling.</p>
                </div>
              </div>
            </section>

            {/* Section 02 */}
            <section className={styles.section} aria-labelledby="s02">
              <div className={styles.sectionLabel}>
                <span className={`mono ${styles.sectionNum}`}>02</span>
                <h2 id="s02" className={styles.sectionTitle}>WAAROM DE TERM<br />ZO VEEL WORDT GEBRUIKT</h2>
              </div>
              <div className={styles.sectionBody}>
                <p>De term past op veel ervaringen tegelijk. Burn-out, overprikkeling, angst, PTSS, ADHD, chronische stress — bij al die dingen speelt het zenuwstelsel een rol. De term biedt herkenning zonder een diagnose te vereisen.</p>
                <p>Dat is waardevol. Herkenning is een startpunt. Maar het is niet het eindpunt.</p>
                <p>Wat ik op deze site probeer: de herkenning serieus nemen <em>en</em> de nuance toevoegen die online regelmatig ontbreekt.</p>
              </div>
            </section>

            {/* Section 03 — Stress diagram */}
            <section className={styles.section} aria-labelledby="s03">
              <div className={styles.sectionLabel}>
                <span className={`mono ${styles.sectionNum}`}>03</span>
                <h2 id="s03" className={styles.sectionTitle}>STRESS &amp; ACTIVATIE</h2>
              </div>
              <div className={styles.sectionBody}>
                <p>Stress is geen defect. Het is een systeem dat werkt — je lichaam bereidt zich voor op actie. Cortisol stijgt, hartslag gaat omhoog, spieren spannen zich. Dat is normaal en nuttig.</p>
                <p>Problematisch wordt het wanneer dat systeem langdurig geactiveerd blijft <em>zonder voldoende hersteltijd</em>. Of wanneer de drempel voor activatie steeds lager wordt.</p>

                <div className={styles.diagram} role="img" aria-label="Cyclus van rust naar activatie naar herstel — weergegeven als typografische schaal">
                  <div className={styles.diagramWord} data-state="rust">
                    <span className={`mono ${styles.diagramLabel}`}>01</span>
                    <span className={styles.diagramTerm}>RUST</span>
                  </div>
                  <span className={`mono ${styles.diagramArrow}`} aria-hidden="true">→</span>
                  <div className={styles.diagramWord} data-state="activatie">
                    <span className={`mono ${styles.diagramLabel}`}>02</span>
                    <span className={styles.diagramTerm}>ACTIVATIE</span>
                  </div>
                  <span className={`mono ${styles.diagramArrow}`} aria-hidden="true">→</span>
                  <div className={styles.diagramWord} data-state="herstel">
                    <span className={`mono ${styles.diagramLabel}`}>03</span>
                    <span className={styles.diagramTerm}>HERSTEL</span>
                  </div>
                </div>

                <p>Wanneer herstel structureel uitblijft of onvolledig is, kan het systeem moeite krijgen om terug te keren naar een ruststand. Dat is wat mensen beschrijven als &quot;altijd aan staan&quot;.</p>
              </div>
            </section>

            {/* Section 04 */}
            <section className={styles.section} aria-labelledby="s04">
              <div className={styles.sectionLabel}>
                <span className={`mono ${styles.sectionNum}`}>04</span>
                <h2 id="s04" className={styles.sectionTitle}>HERSTEL</h2>
              </div>
              <div className={styles.sectionBody}>
                <p>Herstel is niet hetzelfde als niets doen. Het is actief de condities creëren waarbij het zenuwstelsel kan terugkeren naar rust. Dat kan via slaap, bewegen, minder prikkels, structuur, gesprekken — maar de mix verschilt per persoon.</p>
                <div className={styles.callout} style={{ borderColor: 'var(--color-border)' }}>
                  <span className={`mono ${styles.calloutLabel}`}>// MIJN ERVARING</span>
                  <p>Ik merkte pas later hoeveel dingen die ik &quot;rust&quot; noemde — series kijken, scrollen, podcasts — eigenlijk meer input waren dan ontspanning. Echt niets doen voelde in het begin ongemakkelijk.</p>
                </div>
              </div>
            </section>

            {/* Section 05 */}
            <section className={styles.section} aria-labelledby="s05">
              <div className={styles.sectionLabel}>
                <span className={`mono ${styles.sectionNum}`}>05</span>
                <h2 id="s05" className={styles.sectionTitle}>OVERPRIKKELING</h2>
              </div>
              <div className={styles.sectionBody}>
                <p>Overprikkeling is wanneer de hoeveelheid binnenkomende informatie of stimuli de verwerkingscapaciteit overstijgt. Dit kan acuut zijn (drukke ruimte, te veel tegelijk) maar ook chronisch — wanneer je dagelijks meer verwerkt dan je systeem aankan.</p>
                <p>Bij mensen met ADHD of hoogsensitiviteit kan de drempel lager liggen. Maar overprikkeling is geen diagnose op zichzelf — het is een symptoom dat meerdere oorzaken kan hebben.</p>
              </div>
            </section>

            {/* Section 06 */}
            <section className={styles.section} aria-labelledby="s06">
              <div className={styles.sectionLabel}>
                <span className={`mono ${styles.sectionNum}`}>06</span>
                <h2 id="s06" className={styles.sectionTitle}>WAT DE TERM<br />NIET BETEKENT</h2>
              </div>
              <div className={styles.sectionBody}>
                <p>Een ontregeld zenuwstelsel is geen levenslange aandoening die je altijd bij je draagt. Het is geen bewijs dat je fundamenteel kapot bent. Het is geen diagnose.</p>
                <p>Online wordt de term soms gebruikt alsof er één universeel herstelpad bestaat — ademhalen, cold showers, vaguszenuw-oefeningen. Sommige dingen helpen bij sommige mensen. Maar er is geen protocol dat voor iedereen werkt.</p>
                <div className={styles.callout} style={{ background: 'transparent', borderColor: 'var(--color-border)' }}>
                  <span className={`mono ${styles.calloutLabel}`}>// WAT WE WETEN</span>
                  <p>Wat het onderzoek wel laat zien: chronische stress heeft een meetbaar effect op het lichaam. Maar van &quot;chronische stress kan klachten geven&quot; naar &quot;jouw specifieke klachten worden veroorzaakt door een ontregeld zenuwstelsel&quot; is een grote stap. Die stap vereist een professional.</p>
                </div>
              </div>
            </section>

            {/* Section 07 */}
            <section className={styles.section} aria-labelledby="s07">
              <div className={styles.sectionLabel}>
                <span className={`mono ${styles.sectionNum}`}>07</span>
                <h2 id="s07" className={styles.sectionTitle}>WANNEER HULP ZOEKEN</h2>
              </div>
              <div className={styles.sectionBody}>
                <p>Wanneer klachten aanhouden, je dagelijks functioneren beïnvloeden, of wanneer je het gevoel hebt dat er iets structureel niet klopt — ga naar een huisarts. Niet als laatste redmiddel, maar als eerste stap.</p>
                <p>Herkenning op een website is een beginpunt. Het is geen diagnose en geen behandelplan.</p>
              </div>
            </section>

            {/* Section 08 — Bronnen */}
            <section className={styles.section} aria-labelledby="s08">
              <div className={styles.sectionLabel}>
                <span className={`mono ${styles.sectionNum}`}>08</span>
                <h2 id="s08" className={styles.sectionTitle}>BRONNEN</h2>
              </div>
              <div className={styles.sectionBody}>
                <ol className={styles.bronnen} aria-label="Bronnenlijst">
                  <li className={styles.bron}>
                    <span className="mono">01 —</span>
                    <div>
                      <p className={styles.bronTitle}>McEwen, B.S. (2008). Central effects of stress hormones in health and disease. <em>European Journal of Pharmacology.</em></p>
                    </div>
                  </li>
                  <li className={styles.bron}>
                    <span className="mono">02 —</span>
                    <div>
                      <p className={styles.bronTitle}>Porges, S.W. (2011). <em>The Polyvagal Theory.</em> W. W. Norton &amp; Company.</p>
                    </div>
                  </li>
                  <li className={styles.bron}>
                    <span className="mono">03 —</span>
                    <div>
                      <p className={styles.bronTitle}>Sapolsky, R.M. (2004). <em>Why Zebras Don&#8217;t Get Ulcers.</em> Henry Holt and Company.</p>
                    </div>
                  </li>
                </ol>
                <Link href="/bronnen-en-werkwijze" className={`mono ${styles.bronLink}`}>
                  BRONNEN &amp; WERKWIJZE VAN DEZE SITE →
                </Link>
              </div>
            </section>

          </div>
        </div>
      </article>

      {/* ── NAVIGATIE ONDER ──────────────────────────────────── */}
      <nav className={styles.pageNav} aria-label="Gerelateerde pagina's">
        <div className="container">
          <div className={styles.pageNavInner}>
            <Link href="/mijn-verhaal" className={styles.pageNavLink}>
              <span className={`mono ${styles.pageNavLabel}`}>VOLGENDE</span>
              <span className={styles.pageNavTitle}>Mijn verhaal →</span>
            </Link>
            <Link href="/artikelen" className={styles.pageNavLink}>
              <span className={`mono ${styles.pageNavLabel}`}>OOK INTERESSANT</span>
              <span className={styles.pageNavTitle}>Artikelen →</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
