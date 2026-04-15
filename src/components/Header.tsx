"use client";

import { useState } from "react";
import Link from "next/link";
import { PORTAL_URL } from "@/lib/constants";

const navLinks = [
  { href: "/docs", label: "Docs" },
  { href: "/getting-started", label: "Getting Started" },
  { href: "/rate-limits", label: "Rate Limits" },
  { href: "/changelog", label: "Changelog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-[var(--wv-dark)]">
            WareVoyant
          </span>
          <span className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-[var(--wv-text-muted)]">
            Developers
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--wv-text-muted)] transition-colors hover:text-[var(--wv-dark)]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`${PORTAL_URL}/settings/developer`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[var(--wv-blue)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Manage keys
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[var(--wv-text-muted)] hover:bg-gray-100 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <nav className="border-t border-gray-200 bg-white px-4 pb-4 pt-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-sm font-medium text-[var(--wv-text-muted)] hover:text-[var(--wv-dark)]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`${PORTAL_URL}/settings/developer`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-lg bg-[var(--wv-blue)] px-4 py-2 text-center text-sm font-medium text-white"
            onClick={() => setMobileOpen(false)}
          >
            Manage keys
          </a>
        </nav>
      )}
    </header>
  );
}
