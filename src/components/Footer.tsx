import Link from "next/link";
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
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-wrap items-center gap-6">
            {footerLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--wv-text-muted)] transition-colors hover:text-[var(--wv-dark)]"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--wv-text-muted)] transition-colors hover:text-[var(--wv-dark)]"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
          <div className="text-center sm:text-right">
            <p className="text-sm text-[var(--wv-text-muted)]">
              &copy; 2026 WareVoyant
            </p>
            <p className="mt-1 text-xs text-gray-400">
              Built with WareVoyant
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
