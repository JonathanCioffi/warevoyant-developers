import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Wrap default elements with WareVoyant dark-theme styling
    h1: ({ children }) => (
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-[var(--wv-text)]">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[var(--wv-text)]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 text-xl font-semibold text-[var(--wv-text)]">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-7 text-[var(--wv-text-muted)]">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc space-y-2 text-[var(--wv-text-muted)]">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2 text-[var(--wv-text-muted)]">
        {children}
      </ol>
    ),
    code: ({ children, ...props }) => {
      // Inline code (not inside a <pre>)
      const isInline = typeof children === "string";
      if (isInline) {
        return (
          <code
            className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-[var(--wv-cyan)]"
            {...props}
          >
            {children}
          </code>
        );
      }
      return <code {...props}>{children}</code>;
    },
    pre: ({ children }) => (
      <pre className="mb-6 overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4 text-sm">
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border-b border-white/10 bg-white/5 px-4 py-2 text-left font-semibold text-[var(--wv-text)]">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border-b border-white/5 px-4 py-2 text-[var(--wv-text-muted)]">
        {children}
      </td>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-[var(--wv-cyan)] underline decoration-[var(--wv-cyan)]/30 underline-offset-2 hover:decoration-[var(--wv-cyan)]"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mb-4 border-l-4 border-[var(--wv-cyan)] bg-white/5 py-2 pl-4 text-[var(--wv-text-muted)]">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
