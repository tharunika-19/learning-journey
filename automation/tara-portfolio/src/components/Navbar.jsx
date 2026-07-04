import { BRAND_NAME } from '../constants'
import logo from '../assets/logo.jpeg'
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-5 bg-brass">
      <div className="flex items-center gap-2">
        <img src={logo} alt={BRAND_NAME} className="w-9 h-9 rounded-full object-cover" />
        <span className="text-xl font-bold font-display text-ink">{BRAND_NAME}</span>
      </div>
      <ul className="flex gap-6 text-sm text-ink">
        <li><a href="#about" className="transition-colors duration-200 hover:text-ivory">About</a></li>
        <li><a href="#services" className="transition-colors duration-200 hover:text-ivory">Services</a></li>
        <li><a href="#projects" className="transition-colors duration-200 hover:text-ivory">Projects</a></li>
        <li><a href="#contact" className="transition-colors duration-200 hover:text-ivory">Contact</a></li>
      </ul>
    </nav>
  )
}
export default Navbar