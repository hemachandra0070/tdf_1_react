import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contact | TheDigifac",
  description: "Book a consultation with TheDigifac for low-code, AI, and digital transformation initiatives."
};

export default function ContactPage() {
  return (
    <div className="page-wrap">
      <Reveal>
        <span className="kicker">Contact</span>
        <h1 id="book" className="hero-title">Book your enterprise transformation consultation.</h1>
        <p className="hero-copy">
          Tell us your strategic priorities, timeline, and constraints. Our team will respond with a focused next-step
          plan.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <section className="panel">
            <h2 className="text-3xl">Lead Capture Form</h2>
            <form className="mt-5 grid gap-4">
              <label className="grid gap-1 text-sm font-semibold text-ink/80">
                Full Name
                <input className="rounded-xl border border-black/15 bg-white px-3 py-2" type="text" required />
              </label>
              <label className="grid gap-1 text-sm font-semibold text-ink/80">
                Work Email
                <input className="rounded-xl border border-black/15 bg-white px-3 py-2" type="email" required />
              </label>
              <label className="grid gap-1 text-sm font-semibold text-ink/80">
                Company
                <input className="rounded-xl border border-black/15 bg-white px-3 py-2" type="text" required />
              </label>
              <label className="grid gap-1 text-sm font-semibold text-ink/80">
                Project Brief
                <textarea
                  className="min-h-28 rounded-xl border border-black/15 bg-white px-3 py-2"
                  placeholder="Describe goals, current challenges, and timeline."
                  required
                />
              </label>
              <button type="submit" className="btn-primary w-full sm:w-fit">
                Request Consultation
              </button>
            </form>
          </section>
        </Reveal>

        <div className="space-y-5">
          <Reveal delay={0.1}>
            <article className="card">
              <h3 className="text-2xl">Consultation Booking</h3>
              <p className="mt-3 text-sm text-ink/70">Typical first session: 45 minutes with a transformation architect and delivery lead.</p>
            </article>
          </Reveal>
          <Reveal delay={0.15}>
            <article className="card">
              <h3 className="text-2xl">Direct Contact</h3>
              <p className="mt-3 text-sm text-ink/70">hello@thedigifac.com</p>
              <p className="text-sm text-ink/70">TheDigifac on LinkedIn</p>
            </article>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
