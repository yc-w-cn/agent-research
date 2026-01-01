import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-12 mb-6 text-black">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-10 mb-5 text-black">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mt-8 mb-4 text-black">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold mt-6 mb-3 text-black">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-lg leading-relaxed mb-6 text-black">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-black underline hover:text-zinc-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-6 text-black space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 text-black space-y-2">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-lg leading-relaxed">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-black pl-6 my-6 italic text-zinc-700">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-zinc-100 px-2 py-1 rounded text-sm font-mono text-black">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-zinc-100 p-6 rounded-lg overflow-x-auto mb-6">
        {children}
      </pre>
    ),
    ...components,
  };
}
