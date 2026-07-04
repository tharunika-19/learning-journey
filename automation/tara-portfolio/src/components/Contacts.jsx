import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xnjklkqb", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const links = [
    {
      name: "LinkedIn",
      sub: "Connect professionally",
      href: "https://www.linkedin.com/in/tharunika-bodasu/",
      icon: "linkedin",
    },
    {
      name: "tharunikabodasu93.6@gmail.com",
      sub: "Direct inbox",
      href: "mailto:tharunikabodasu93.6@gmail.com",
      icon: "gmail",
    },
    {
      name: "Fiverr",
      sub: "View gigs & reviews",
      href: "https://www.fiverr.com/users/tharunikabodasu/",
      icon: "fiverr",
    },
  ];

  return (
    <section id="contact" className="bg-[#F3EEE6] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-[#1B2430] mb-4 text-center">
          Let's Build Something
        </h2>

        <p className="font-body text-[#1B2430]/70 mb-16 max-w-xl mx-auto text-center">
          Reach out directly, or send a message right from this page.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT */}
          <div className="flex flex-col divide-y divide-[#1B2430]/10">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 py-5 group"
              >
                <span className="w-10 h-10 rounded-full bg-[#B8935F]/15 flex items-center justify-center shrink-0">
                  <img
                    src={`https://cdn.simpleicons.org/${link.icon}/B8935F`}
                    alt={link.name}
                    className="w-5 h-5"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </span>

                <div>
                  <p className="font-display text-[#1B2430] text-base group-hover:text-[#B8935F] transition-colors duration-200">
                    {link.name}
                  </p>

                  <p className="font-body text-[#1B2430]/60 text-xs">
                    {link.sub}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* RIGHT */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#e0cbab] rounded-2xl p-8 flex flex-col gap-5"
          >
            <div>
              <label className="font-body text-xs text-[#1B2430]/70 uppercase tracking-wide">
                Name
              </label>

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-lg bg-[#F3EEE6] font-body text-sm text-[#1B2430] border-2 border-[#1B2430]/15 focus:outline-none focus:border-[#B8935F]"
              />
            </div>

            <div>
              <label className="font-body text-xs text-[#1B2430]/70 uppercase tracking-wide">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-lg bg-[#F3EEE6] font-body text-sm text-[#1B2430] border-2 border-[#1B2430]/15 focus:outline-none focus:border-[#B8935F]"
              />
            </div>

            <div>
              <label className="font-body text-xs text-[#1B2430]/70 uppercase tracking-wide">
                Message
              </label>

              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me what you're looking to automate..."
                className="w-full mt-1 px-4 py-3 rounded-lg bg-[#F3EEE6] font-body text-sm text-[#1B2430] border-2 border-[#1B2430]/15 focus:outline-none focus:border-[#B8935F] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-[#1B2430] text-[#F3EEE6] font-body text-sm font-semibold px-6 py-3 rounded-full mt-2 border-2 border-[#1B2430] transition-transform duration-200 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-green-700 text-sm">
                ✅ Message sent! I'll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-700 text-sm">
                ❌ Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;