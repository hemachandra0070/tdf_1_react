import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About Us | TheDigifac",
  description: "Learn about TheDigifac, our mission, values, and engineering-led philosophy for low-code and AI transformation."
};

const values = ["Quality", "Trust", "Learning", "Value Creation", "Respect"];

export default function AboutPage() {
  return (
    <div className="page-wrap">
      <Reveal>
        <span className="kicker">About TheDigifac</span>
        <h1 className="hero-title">Engineering rigor for modern enterprise transformation.</h1>
        <p className="hero-copy">
          We help enterprise teams modernize faster with low-code, practical AI, and delivery governance designed for
          scale.
        </p>
      </Reveal>

      <div className="card-grid-2">
        <Reveal>
          <article className="card">
            <h2 className="text-3xl">Who We Are</h2>
            <p className="mt-3 text-ink/70">
              TheDigifac is an engineering-led transformation partner. We combine OutSystems and Microsoft ecosystem
              expertise with strong architecture and execution discipline.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.1}>
          <article className="card">
            <h2 className="text-3xl">How We Work</h2>
            <p className="mt-3 text-ink/70">
              Fast by default. Structured by design. Every program is shaped around measurable business outcomes and
              sustainable operating models.
            </p>
          </article>
        </Reveal>
      </div>

      <div className="card-grid-3">
        {values.map((value, index) => (
          <Reveal key={value} delay={0.08 * index}>
            <article className="card">
              <h3 className="text-2xl">{value}</h3>
              <p className="mt-2 text-sm text-ink/70">A foundational principle that guides delivery, collaboration, and outcomes.</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
