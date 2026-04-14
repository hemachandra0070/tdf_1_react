import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Services | TheDigifac",
  description:
    "Explore TheDigifac services: low-code engineering, digital transformation, AI-augmented development, data analytics, technology consulting, and team extension."
};

const services = [
  "Low-Code Engineering (OutSystems)",
  "Digital Transformation",
  "AI-Augmented Development",
  "Data and Analytics",
  "Technology Consulting",
  "Team Extension"
];

export default function ServicesPage() {
  return (
    <div className="page-wrap">
      <Reveal>
        <span className="kicker">Services</span>
        <h1 className="hero-title">Capability depth with enterprise execution discipline.</h1>
        <p className="hero-copy">
          Every engagement combines business outcomes, architecture rigor, and delivery acceleration so teams move from
          intent to implementation faster.
        </p>
      </Reveal>

      <div className="card-grid-2">
        {services.map((service, index) => (
          <Reveal key={service} delay={index * 0.07}>
            <article className="card h-full">
              <h2 className="text-3xl">{service}</h2>
              <p className="mt-3 text-sm leading-7 text-ink/70">
                Strategy, delivery governance, and implementation support tailored to enterprise complexity and measurable
                value realization.
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 panel">
        <h2 className="text-3xl">Need an execution-focused transformation partner?</h2>
        <p className="mt-3 max-w-3xl text-ink/70">
          Share your priorities and we will propose a practical delivery blueprint in a focused consultation.
        </p>
        <Link href="/contact#book" className="btn-primary mt-5">
          Book a Consultation
        </Link>
      </Reveal>
    </div>
  );
}
