import Link from "next/link";
import { footerColumns } from "@/data/siteContent";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#ece9df]">
      <div className="mx-auto grid w-[min(1150px,calc(100%-2rem))] gap-8 py-14 md:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl text-ink">TheDigifac</h3>
          <p className="mt-3 text-sm text-ink/70">
            Engineering-led low-code, AI, and digital transformation consulting for global enterprise teams.
          </p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-ink/60">{column.title}</h4>
            <div className="mt-3 flex flex-col gap-2">
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-ink transition hover:text-ember"
                  target={link.href.startsWith("https") ? "_blank" : undefined}
                  rel={link.href.startsWith("https") ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-black/10 py-4">
        <div className="mx-auto flex w-[min(1150px,calc(100%-2rem))] flex-col gap-2 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
          <span>Copyright {new Date().getFullYear()} TheDigifac.</span>
          <span>Built for speed, scale, and governance.</span>
        </div>
      </div>
    </footer>
  );
}
