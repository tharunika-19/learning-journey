import { TAGLINE } from '../constants'
import profile from '../assets/profile.jpeg'

function Hero() {
  return (
    <section
      id="hero"
      className="px-6 py-16 md:px-8 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12"
    >
      <div className="flex flex-col items-start gap-6 max-w-xl">
        <span className="text-sm font-semibold uppercase tracking-wide text-brass">
          {TAGLINE}
        </span>
        <p className="text-ink/60 text-sm font-medium">
                         Tharunika Bodasu
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-ink leading-tight">
          I build systems that run your business while you sleep.
        </h1>
        <p className="text-base md:text-lg text-ink/70">
          n8n workflows for lead qualification, appointment booking, and customer support — built for businesses that want automation without hiring a full dev team.
        </p>

        
          <a href="#projects"
          className="mt-2 bg-brass text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          View Projects →
        </a>
      </div>

      <img
        src={profile}
        alt="Tharunika"
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-2xl object-cover shadow-lg shrink-0"
      />
    </section>
  )
}

export default Hero