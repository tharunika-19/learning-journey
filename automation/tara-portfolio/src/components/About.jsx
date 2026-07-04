const stats = [
  { number: "3+", label: "Automation Systems Shipped" },
  { number: "n8n", label: "Core Specialization" },
  { number: "100%", label: "Focus on Production-Ready Workflows" },
];

const About = () => {
  return (
    <section id="about" className="bg-[--color-ivory] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Pitch */}
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-3xl md:text-4xl text-[--color-navy] mb-6">
            About
          </h2>

          <p className="font-body text-[--color-navy]/80 leading-relaxed mb-4">
            I'm an AI automation engineer building n8n workflows that solve real
            operational problems — lead qualification, appointment booking,
            customer support — the kind of systems businesses actually run on,
            not demos that stay in a portfolio.
          </p>

          <p className="font-body text-[--color-navy]/80 leading-relaxed mb-4">
            I'm currently a student, but I don't build like one. Every project
            I ship is scoped, tested, and handed off the way a production
            system should be — because the client's business doesn't care
            what year I'm in, it cares that the workflow works.
          </p>

          <p className="font-body text-[--color-navy]/80 leading-relaxed">
            My approach is systems-first: understand the actual bottleneck,
            design the simplest automation that removes it, and build
            something that keeps running long after the handoff.
          </p>
        </div>

        {/* Right: Stat callouts */}
        <div className="flex flex-col gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#e0cbab]  rounded-2xl p-6
                         flex items-center gap-6
                         transition-transform duration-200 hover:scale-[1.02]"
            >
              <span className="font-display text-3xl md:text-4xl text-[--color-brass]">
                {stat.number}
              </span>
              <span className="font-body text-[--color-navy]/80 text-sm md:text-base">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;