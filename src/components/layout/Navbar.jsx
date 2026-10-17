import { useEffect, useState } from 'react'
import { nav } from '@/data/data'
import { IMG } from '@/data/images'
import Icon from '@/components/ui/Icon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(scrollY > 20)
    f(); addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-in">
        <a href="#top" className="brand"><img src={IMG.logo} alt="eLearna" /></a>
        <nav className={`links ${open ? 'open' : ''}`} aria-label="Main">
          {nav.map((n) => (
            <div className="dd" key={n.label}>
              <button className="dd-btn">{n.label}<i /></button>
              <ul className="dd-menu">{n.items.map((i) => <li key={i}><a href="#top" onClick={() => setOpen(false)}>{i}</a></li>)}</ul>
            </div>
          ))}
        </nav>
        <div className="nav-right">
          <button className="cart" aria-label="Cart"><Icon name="cart" size={20} /><b>0</b></button>
          <div className="auth"><a href="#top">Login</a><i /><a href="#top">Register</a></div>
          <button className={`burger ${open ? 'x' : ''}`} aria-label="Menu" onClick={() => setOpen(!open)}><span /><span /></button>
        </div>
      </div>
    </header>
  )
}
