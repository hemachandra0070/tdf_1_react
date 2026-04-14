import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Insights | TheDigifac",
  description:
    "Enterprise insights from TheDigifac on low-code engineering, practical AI, and digital transformation execution."
};

const posts = [
  {
    tag: "Low-Code Engineering",
    title: "Enterprise Low-Code Governance: 7 Controls That Preserve Speed"
  },
  {
    tag: "AI in Operations",
    title: "From Copilot to Agent: Building AI Workflows That Execute"
  },
  {
    tag: "Digital Transformation",
    title: "Modernizing Legacy Systems Without Business Disruption"
  },
  {
    tag: "OutSystems",
    title: "How to Scale OutSystems Delivery Across Distributed Teams"
  },
  {
    tag: "Microsoft Ecosystem",
    title: "Power Platform vs OutSystems: Choosing the Right Enterprise Fit"
  },
  {
    tag: "Transformation Strategy",
    title: "Why Transformation Programs Stall and How to Avoid It"
  }
];

export default function InsightsPage() {
  return (
    <div className="page-wrap">
      <Reveal>
        <span className="kicker">Insights</span>
        <h1 className="hero-title">Practical perspectives for digital leaders.</h1>
        <p className="hero-copy">
          SEO-focused articles on low-code execution, AI adoption, and enterprise transformation strategies.
        </p>
      </Reveal>

      <div className="card-grid-3">
        {posts.map((post, index) => (
          <Reveal key={post.title} delay={index * 0.07}>
            <article className="card h-full">
              <span className="kicker !px-2 !py-0.5">{post.tag}</span>
              <h2 className="mt-4 text-2xl">{post.title}</h2>
              <p className="mt-3 text-sm text-ink/70">Actionable guidance for engineering leaders and transformation teams.</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
