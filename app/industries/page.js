import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Industries | TheDigifac",
  description:
    "Industry solutions from TheDigifac across financial services, manufacturing, supply chain, healthcare, retail, and energy."
};

const industries = [
  "Financial Services",
  "Manufacturing",
  "Supply Chain",
  "Healthcare",
  "Retail",
  "Energy"
];

export default function IndustriesPage() {
  return (
    <div className="page-wrap">
      <Reveal>
        <span className="kicker">Industries</span>
        <h1 className="hero-title">Domain-aware transformation for complex enterprise contexts.</h1>
        <p className="hero-copy">
          Cross-industry platforms combined with sector-specific delivery expertise where speed and governance both
          matter.
        </p>
      </Reveal>

      <div className="card-grid-2">
        {industries.map((industry, index) => (
          <Reveal key={industry} delay={index * 0.08}>
            <article className="card h-full">
              <h2 className="text-3xl">{industry}</h2>
              <p className="mt-3 text-sm leading-7 text-ink/70">
                We design and deliver sector-aligned systems with enterprise-grade architecture, compliance, and
                measurable operational impact.
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
