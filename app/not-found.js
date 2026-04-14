import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-wrap text-center">
      <span className="kicker">404</span>
      <h1 className="hero-title">Page not found</h1>
      <p className="hero-copy mx-auto">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className="btn-primary mt-6">
        Back to Home
      </Link>
    </section>
  );
}
