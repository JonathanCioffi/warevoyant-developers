import type { Metadata } from "next";
import PhaseA from "./entries/2026-04-15-phase-a.mdx";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Latest updates to the WareVoyant API and developer platform.",
};

interface ChangelogEntry {
  date: string;
  slug: string;
  component: React.ComponentType;
}

const entries: ChangelogEntry[] = [
  {
    date: "April 15, 2026",
    slug: "phase-a",
    component: PhaseA,
  },
];

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-[var(--wv-dark)]">
        Changelog
      </h1>
      <p className="mb-12 text-[var(--wv-text-muted)]">
        Latest updates to the WareVoyant API and developer platform.
      </p>

      <div className="space-y-16">
        {entries.map((entry) => (
          <article
            key={entry.slug}
            className="border-l-2 border-[var(--wv-blue)] pl-6"
          >
            <time className="text-sm font-medium text-[var(--wv-text-muted)]">
              {entry.date}
            </time>
            <div className="mt-4 prose-sm">
              <entry.component />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
