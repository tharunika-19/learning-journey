import { useState } from 'react'
import { BRAND_NAME } from '../constants'
import logo from '../assets/logo.jpeg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-brass px-6 py-4 md:px-8 md:py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt={BRAND_NAME} className="w-9 h-9 rounded-full object-cover" />
          <span className="text-xl font-bold font-display text-ink">{BRAND_NAME}</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 text-sm text-ink">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors duration-200 hover:text-ivory">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button - mobile only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`block w-6 h-0.5 bg-ink transition-transform duration-200 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-transform duration-200 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 mt-4' : 'max-h-0'}`}>
        <ul className="flex flex-col gap-4 text-sm text-ink pb-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              
                <a href={link.href}
                onClick={closeMenu}
                className="block transition-colors duration-200 hover:text-ivory"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar