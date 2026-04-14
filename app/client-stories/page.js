import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Client Stories | TheDigifac",
  description:
    "Explore enterprise client stories from TheDigifac with measurable transformation outcomes in speed, cost, and efficiency."
};

const stories = [
  {
    client: "Tier-1 global bank",
    problem: "Loan onboarding took 28 days with fragmented legacy systems and manual compliance checks.",
    impact: ["58% faster onboarding", "35% lower processing cost", "2.1x higher throughput"]
  },
  {
    client: "Global manufacturer",
    problem: "Service issue escalations relied on email chains and disconnected data sources.",
    impact: ["31% lower escalation cost", "44% faster response time", "27% fewer SLA breaches"]
  },
  {
    client: "Regional healthcare network",
    problem: "Referral and care coordination workflows were manual, creating delays and poor communication.",
    impact: ["49% faster referral processing", "23% capacity gain", "18% higher satisfaction"]
  }
];

export default function ClientStoriesPage() {
  return (
    <div className="page-wrap">
      <Reveal>
        <span className="kicker">Client Stories</span>
        <h1 className="hero-title">Transformation stories with real business impact.</h1>
        <p className="hero-copy">
          Programs are measured against outcomes that matter: speed, cost efficiency, and operational resilience.
        </p>
      </Reveal>

      <div className="mt-10 space-y-5">
        {stories.map((story, index) => (
          <Reveal key={story.client} delay={index * 0.08}>
            <article className="panel">
              <h2 className="text-3xl">{story.client}</h2>
              <p className="mt-3 text-ink/70">
                <span className="font-semibold text-ink">Problem:</span> {story.problem}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {story.impact.map((point) => (
                  <div key={point} className="story-metric">
                    <p className="text-sm font-semibold text-ink">{point}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
