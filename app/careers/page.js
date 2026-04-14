import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Careers | TheDigifac",
  description: "Build your career with TheDigifac across leadership, early talent, and experienced professional tracks."
};

const tracks = [
  {
    title: "Leaders",
    text: "For transformation leaders who can drive complex programs, shape strategy, and mentor high-performance teams."
  },
  {
    title: "New Talent",
    text: "For graduates and early-career professionals ready to accelerate with modern engineering practices and platform depth."
  },
  {
    title: "Experienced Professionals",
    text: "For engineers, analysts, and consultants who want to solve meaningful enterprise challenges at scale."
  }
];

export default function CareersPage() {
  return (
    <div className="page-wrap">
      <Reveal>
        <span className="kicker">Careers</span>
        <h1 className="hero-title">Build the future of enterprise transformation with us.</h1>
        <p className="hero-copy">
          We are building teams that blend engineering excellence, low-code innovation, and practical AI execution.
        </p>
      </Reveal>

      <div className="card-grid-3">
        {tracks.map((track, index) => (
          <Reveal key={track.title} delay={index * 0.08}>
            <article className="card h-full">
              <h2 className="text-3xl">{track.title}</h2>
              <p className="mt-3 text-sm text-ink/70">{track.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 panel">
        <h2 className="text-3xl">Apply</h2>
        <p className="mt-3 text-ink/70">Share your profile at careers@thedigifac.com</p>
      </Reveal>
    </div>
  );
}
