import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Wrap default elements with WareVoyant styling
    h1: ({ children }) => (
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-[var(--wv-dark)]">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 text-2xl font-semibold text-[var(--wv-dark)]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 text-xl font-semibold text-[var(--wv-dark)]">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-7 text-[var(--wv-text)]">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc space-y-2 text-[var(--wv-text)]">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2 text-[var(--wv-text)]">
        {children}
      </ol>
    ),
    code: ({ children, ...props }) => {
      // Inline code (not inside a <pre>)
      const isInline = typeof children === "string";
      if (isInline) {
        return (
          <code
            className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-[var(--wv-dark)]"
            {...props}
          >
            {children}
          </code>
        );
      }
      return <code {...props}>{children}</code>;
    },
    pre: ({ children }) => (
      <pre className="mb-6 overflow-x-auto rounded-lg bg-gray-950 p-4 text-sm">
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border-b border-gray-200 bg-gray-50 px-4 py-2 text-left font-semibold text-[var(--wv-dark)]">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border-b border-gray-100 px-4 py-2 text-[var(--wv-text)]">
        {children}
      </td>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-[var(--wv-blue)] underline decoration-[var(--wv-blue)]/30 underline-offset-2 hover:decoration-[var(--wv-blue)]"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mb-4 border-l-4 border-[var(--wv-blue)] bg-blue-50/50 py-2 pl-4 text-[var(--wv-text)]">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
