import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.15, 0.4] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Mayur home">
          <span className="brand-mark">M</span>
          <span>mayur<span className="brand-dot">.</span></span>
        </a>

        <div className="nav-links desktop-nav-links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? 'nav-link-active' : undefined}
              aria-current={active === link.href ? 'location' : undefined}
            >
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact">Let’s talk <span>↗</span></a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-navigation"
              className="nav-links mobile-nav-links"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={active === link.href ? 'nav-link-active' : undefined}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035 }}
                >
                  {link.label}<span className="mobile-link-arrow">↗</span>
                </motion.a>
              ))}
              <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <span>↗</span></a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
