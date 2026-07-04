const techStack = [
  { name: "n8n", slug: "n8n", color: "EA4B71" },
  { name: "Zapier", slug: "zapier", color: "FF4A00" },
  { name: "Make", slug: "make", color: "6D00CC" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "TensorFlow", slug: "tensorflow", color: "FF6F00" },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "Git", slug: "git", color: "F05032" },
];
const TechStack = () => {
  return (
    <section id="tech-stack" className="bg-[--color-ivory] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-[--color-navy] mb-4">
          Tech Stack
        </h2>
        <p className="font-body text-[--color-navy]/70 mb-12 max-w-2xl">
          Tools I build with — from automation platforms to the ML stack
          behind the AI layer.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {techStack.map((tech, i) => (
            <div
              key={i}
              className="bg-[#e0cbab] hover:bg-[#c9ad85] rounded-2xl p-6
           flex flex-col items-center justify-center gap-3
           transition-all duration-200 hover:scale-[1.02]"
            >
              <img
                src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                alt={`${tech.name} logo`}
                className="w-10 h-10"
              />
              <span className="font-body text-sm text-[--color-navy] font-medium text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;