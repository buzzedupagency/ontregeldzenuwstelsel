import type { Metadata } from 'next'
import '../styles/globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://ontregeldzzenuwstelsel.nl'),
  title: {
    default: 'Ontregeld Zenuwstelsel — Over stress, prikkels, ADHD & herstel',
    template: '%s — Ontregeld Zenuwstelsel',
  },
  description: 'Een eerlijk en persoonlijk kennisplatform over stress, overprikkeling, ADHD en herstel. Voor mensen die heel lang dachten dat ze zich gewoon even moesten herpakken.',
  keywords: ['ontregeld zenuwstelsel', 'stress', 'overprikkeling', 'ADHD', 'herstel', 'burnout'],
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Ontregeld Zenuwstelsel',
    title: 'Ontregeld Zenuwstelsel — Over stress, prikkels, ADHD & herstel',
    description: 'Een eerlijk en persoonlijk kennisplatform over stress, overprikkeling, ADHD en herstel.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <a href="#main-content" className="skip-nav">Naar inhoud</a>
        <Nav />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
