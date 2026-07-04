const services = [
  {
    title: "Workflow Automation",
    description:
      "Custom n8n workflows that connect your tools and eliminate repetitive manual work — built to run reliably, not just demo well.",
  },
  {
    title: "AI Agent Integration",
    description:
      "AI-driven decision-making layered into your workflows — lead qualification, smart routing, response generation — so automations make judgment calls, not just move data.",
  },
  {
    title: "Process Consulting",
    description:
      "Not sure what to automate first? I audit your current workflow and pinpoint the highest-impact automation opportunities before any code gets written.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[--color-sand] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-[--color-navy] mb-4">
          Services
        </h2>
        <p className="font-body text-[--color-navy]/70 mb-12 max-w-2xl">
          What I help clients build — from single workflows to full
          automation strategy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#e0cbab]  rounded-2xl p-8
                         transition-all duration-200 hover:scale-[1.02] hover:bg-[--color-brass]/15"
            >
              <div className="w-10 h-10 rounded-full bg-[--color-brass] mb-6
                              flex items-center justify-center">
                <span className="font-display text-[--color-ivory] text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="font-display text-xl text-[--color-navy] mb-3">
                {service.title}
              </h3>
              <p className="font-body text-[--color-navy]/80 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;