import Link from "next/link";
import Reveal from "@/components/Reveal";
import FloatingNodes from "@/components/FloatingNodes";

const valueProps = [
  {
    title: "Speed to Market",
    description: "Accelerate delivery from months to weeks with composable low-code architectures and reusable accelerators."
  },
  {
    title: "Enterprise Engineering",
    description: "Apply rigorous architecture, DevSecOps, and governance to every low-code and AI implementation."
  },
  {
    title: "AI-Powered Automation",
    description: "Deploy practical AI that streamlines high-volume workflows and human-in-the-loop decisions."
  },
  {
    title: "Scalable Systems",
    description: "Integrate Microsoft ecosystems, data layers, and enterprise business services with resilience."
  }
];

const services = [
  "Low-Code Engineering",
  "Digital Transformation",
  "AI-Augmented Development",
  "Data and Intelligence",
  "Technology Consulting"
];

export default function HomePage() {
  return (
    <div>
      <section className="page-wrap grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <span className="kicker">Speed + Scale + Governance</span>
          <h1 className="hero-title">Build it fast. Build it right.</h1>
          <p className="hero-copy">
            TheDigifac helps global enterprises launch digital capabilities in weeks, modernize legacy platforms with
            low-code + AI, and build governed ecosystems on OutSystems and Microsoft technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact#book" className="btn-primary">
              Book a Consultation
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <FloatingNodes />
        </Reveal>
      </section>

      <section className="page-wrap pt-2">
        <Reveal className="panel">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-3xl font-bold text-ink">3x</p>
              <p className="text-sm text-ink/70">faster solution delivery</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-ink">42%</p>
              <p className="text-sm text-ink/70">average process efficiency gain</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-ink">60%</p>
              <p className="text-sm text-ink/70">reduction in backlog cycle time</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-ink">99.95%</p>
              <p className="text-sm text-ink/70">uptime across managed solutions</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="page-wrap">
        <Reveal>
          <span className="kicker">Value Proposition</span>
          <h2 className="mt-4 text-3xl md:text-5xl">Built for outcomes, engineered for complexity.</h2>
        </Reveal>
        <div className="card-grid-2 lg:grid-cols-4">
          {valueProps.map((item, index) => (
            <Reveal key={item.title} delay={0.08 * index}>
              <article className="card h-full">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-ember">0{index + 1}</p>
                <h3 className="mt-3 text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-wrap">
        <Reveal>
          <span className="kicker">Services Overview</span>
          <h2 className="mt-4 text-3xl md:text-5xl">From strategic design to scalable execution.</h2>
        </Reveal>
        <div className="card-grid-3">
          {services.map((service, index) => (
            <Reveal key={service} delay={0.09 * index}>
              <article className="card h-full">
                <h3 className="text-2xl">{service}</h3>
                <p className="mt-3 text-sm text-ink/70">
                  Purpose-built delivery backed by architecture standards, reusable accelerators, and measurable value.
                </p>
                <Link href="/services" className="mt-5 inline-flex text-sm font-bold uppercase tracking-[0.12em] text-ember">
                  Learn More
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
