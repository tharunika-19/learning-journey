import { useState, useEffect } from "react";

// ================== FOOTER ==================
// NOTE: Update the placeholder URLs below (marked with TODO)
// once your LinkedIn and Fiverr links are finalized.

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/tharunika-19",
    icon: "https://cdn.simpleicons.org/github/F3EEE6",
  },
  {
    name: "LinkedIn",
    href: "#", // TODO: add your LinkedIn URL
    icon: "https://cdn.simpleicons.org/${link.icon}/F3EEE6",
  },
  {
    name: "Fiverr",
    href: "#", // TODO: confirm your Fiverr profile URL
    icon: "https://cdn.simpleicons.org/fiverr/F3EEE6",
  },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1B2430] text-[#F3EEE6] pt-20 pb-8 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">

        {/* Top area: brand + links + socials */}
        <div className="grid md:grid-cols-3 gap-12 pb-14 border-b border-[#F3EEE6]/10">

          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl mb-4 tracking-wide">
              beyond<span className="text-[#B8935F]">_</span>tech
            </h3>
            <p className="text-[#F3EEE6]/60 leading-7 max-w-xs">
              AI automation systems that eliminate repetitive work and help
              businesses run leaner, faster, and smarter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="uppercase tracking-[0.3em] text-[#B8935F] text-xs mb-5">
              Quick Links
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#F3EEE6]/70 hover:text-[#B8935F] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Socials */}
          <div>
            <p className="uppercase tracking-[0.3em] text-[#B8935F] text-xs mb-5">
              Connect
            </p>

            <a
              href="mailto:youremail@example.com" // TODO: add your real email
              className="block text-[#F3EEE6]/70 hover:text-[#B8935F] transition-colors duration-300 mb-6"
            >
              tharunikabodasu93.6@gmail.com
            </a>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-[#F3EEE6]/10 flex items-center justify-center hover:bg-[#B8935F] transition-colors duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-4 h-4"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#F3EEE6]/50">
          <p>© {new Date().getFullYear()} beyond_tech. All rights reserved.</p>
          <p>Built with React &amp; Tailwind CSS</p>
        </div>

      </div>

      {/* Back to top button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#B8935F] text-[#1B2430] flex items-center justify-center shadow-lg hover:bg-[#c9ad85] hover:scale-105 transition-all duration-300"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;