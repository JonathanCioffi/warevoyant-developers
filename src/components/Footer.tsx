import Link from "next/link";
import Image from "next/image";
import { PORTAL_URL } from "@/lib/constants";

const footerLinks = [
  { href: "/docs", label: "Docs" },
  { href: "/getting-started", label: "Getting Started" },
  { href: "/rate-limits", label: "Rate Limits" },
  {
    href: PORTAL_URL,
    label: "Portal",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--wv-bg)]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Image
              src="/warevoyant-logo.png"
              alt="WareVoyant"
              width={120}
              height={21}
              className="h-5 w-auto opacity-60"
            />
            <div className="flex flex-wrap items-center gap-6">
              {footerLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--wv-text-muted)] transition-colors hover:text-[var(--wv-text)]"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[var(--wv-text-muted)] transition-colors hover:text-[var(--wv-text)]"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-sm text-[var(--wv-text-muted)]">
              &copy; 2026 WareVoyant
            </p>
            <p className="mt-1 text-xs text-[var(--wv-text-muted)]/50">
              Built with WareVoyant
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
