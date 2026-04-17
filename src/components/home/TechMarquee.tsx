"use client";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "FastAPI",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "TailwindCSS",
  "Three.js",
  "Framer Motion",
  "Node.js",
  "Docker",
  "AWS",
  "Figma",
  "GraphQL",
  "Redis",
  "Solidity",
  "TensorFlow",
];

export default function TechMarquee() {
  const doubled = [...techStack, ...techStack];

  return (
    <section className="relative pb-20  border-white/[0.06] overflow-hidden bg-zinc-950 /20">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((tech, i) => (
          <span
            key={i}
            className="mx-6 md:mx-10 text-sm md:textbase font-light [family-name:var(--font-mono)] text-zinc-400 uppercase tracking-[0.2em] flex items-center gap-3 select-none"
          >
            <span className="w-1 h-1 rounded-full bg-orange-500/60" />
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
