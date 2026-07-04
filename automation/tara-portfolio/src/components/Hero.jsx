import { TAGLINE } from '../constants'
import profilePic from '../assets/logo.jpeg'

function Hero() {
  return (
    <section id="hero" className="px-8 py-24 flex items-center justify-between gap-12">
      
      <div className="flex flex-col items-start gap-6 max-w-xl">
        <span className="text-sm font-semibold uppercase tracking-wide text-brass">
          {TAGLINE}
        </span>

        <h1 className="text-5xl font-display font-bold text-ink leading-tight">
          I build systems that run your business while you sleep.
        </h1>

        <p className="text-lg text-ink/70">
          n8n workflows for lead qualification, appointment booking, and customer support — built for businesses that want automation without hiring a full dev team.
        </p>

        
         <a href="#projects"
          className="mt-2 bg-brass text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          View Projects →
        </a>
      </div>

      <img
        src={profilePic}
        alt="Tharunika"
        className="w-72 h-72 rounded-2xl object-cover shadow-lg"
      />

    </section>
  )
}

export default Hero