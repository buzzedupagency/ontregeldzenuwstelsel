'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'

const navLinks = [
  { href: '/wat-is-het', label: 'Wat is het?' },
  { href: '/mijn-verhaal', label: 'Mijn verhaal' },
  { href: '/herstel', label: 'Herstel' },
  { href: '/artikelen', label: 'Artikelen' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const darkPages = ['/mijn-verhaal']
  const isDark = darkPages.includes(pathname) && !scrolled

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${isDark ? styles.dark : ''}`} role="banner">
        <div className={styles.inner}>
          <Link href="/" className={styles.wordmark} aria-label="Ontregeld Zenuwstelsel — naar homepage">
            <span>ONTREGELD</span>
            <span>ZENUWSTELSEL</span>
          </Link>

          <nav className={styles.desktopNav} aria-label="Hoofdnavigatie">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href || pathname.startsWith(link.href + '/') ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/artikelen" className={styles.navCta} aria-label="Begin lezen">
              ↗
            </Link>
          </nav>

          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
          >
            {menuOpen ? 'SLUIT' : 'MENU'}
          </button>
        </div>
      </header>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobiele navigatie">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              style={{ '--delay': `${i * 60}ms` } as React.CSSProperties}
            >
              <span className={styles.mobileLinkNum}>0{i + 1}</span>
              {link.label}
              <span className={styles.mobileLinkArrow}>↗</span>
            </Link>
          ))}
        </nav>
        <div className={styles.mobileFooter}>
          <span className="mono" style={{ color: 'var(--color-text-muted-dark)' }}>● SYSTEEM ONLINE</span>
        </div>
      </div>
    </>
  )
}
