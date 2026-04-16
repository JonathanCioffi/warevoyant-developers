import Link from "next/link";
import CopyButton from "@/components/CopyButton";
import { API_BASE_URL, PORTAL_URL } from "@/lib/constants";

const curlExample = `curl -H "Authorization: Bearer wv_live_YOUR_KEY_HERE" \\
  ${API_BASE_URL}/api/sites`;

const features = [
  {
    title: "439 API endpoints",
    description:
      "Full coverage of sites, spaces, equipment, audits, lifecycle, monitoring, and more.",
  },
  {
    title: "Fine-grained scopes",
    description:
      "54 permission atoms across 16 categories. Grant only the access each key needs.",
  },
  {
    title: "24h rotation grace",
    description:
      "Rotate keys without downtime. Old keys remain valid for 24 hours after rotation.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--wv-bg)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[var(--wv-text)] sm:text-5xl">
              Build with the WareVoyant API
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--wv-text-muted)]">
              Automate AV commissioning workflows, manage sites, equipment, and
              audits programmatically.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/getting-started"
                className="rounded-lg bg-[var(--wv-green)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--wv-green-hover)]"
              >
                Get started
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-[var(--wv-text)] shadow-sm transition-colors hover:border-white/30 hover:bg-white/10"
              >
                View API docs
              </Link>
              <a
                href={`${PORTAL_URL}/settings/developer`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-[var(--wv-text)] shadow-sm transition-colors hover:border-white/30 hover:bg-white/10"
              >
                Manage keys
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="bg-[var(--wv-bg)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-[var(--wv-orange)]/50"
              >
                <h3 className="text-lg font-semibold text-[var(--wv-text)]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--wv-text-muted)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code sample */}
      <section className="bg-[var(--wv-bg)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-2 text-center text-2xl font-semibold text-[var(--wv-text)]">
              Start in seconds
            </h2>
            <p className="mb-8 text-center text-sm text-[var(--wv-text-muted)]">
              One API key. One HTTP call. That is all it takes.
            </p>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
                <span className="font-mono text-xs text-[var(--wv-text-muted)]">
                  bash
                </span>
                <CopyButton text={curlExample} />
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-gray-300">
                <code>{curlExample}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
