'use client';

import { useEffect, useState } from 'react';

import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

type MDXComponentProps = {
  children?: React.ReactNode;
  [key: string]: unknown;
};

type MDXComponents = Record<string, React.ComponentType<MDXComponentProps>>;

const mdxComponents: MDXComponents = {
  h1: (props: { children?: React.ReactNode }) => (
    <h1 className="text-4xl font-bold mt-12 mb-6 text-black">
      {props.children}
    </h1>
  ),
  h2: (props: { children?: React.ReactNode }) => (
    <h2 className="text-3xl font-bold mt-10 mb-5 text-black">
      {props.children}
    </h2>
  ),
  h3: (props: { children?: React.ReactNode }) => (
    <h3 className="text-2xl font-bold mt-8 mb-4 text-black">
      {props.children}
    </h3>
  ),
  h4: (props: { children?: React.ReactNode }) => (
    <h4 className="text-xl font-bold mt-6 mb-3 text-black">{props.children}</h4>
  ),
  p: (props: { children?: React.ReactNode }) => (
    <p className="text-lg leading-relaxed mb-6 text-black">{props.children}</p>
  ),
  a: (props: { href?: string; children?: React.ReactNode }) => (
    <a
      href={props.href}
      className="text-black underline hover:text-zinc-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  ),
  ul: (props: { children?: React.ReactNode }) => (
    <ul className="list-disc list-inside mb-6 text-black space-y-2">
      {props.children}
    </ul>
  ),
  ol: (props: { children?: React.ReactNode }) => (
    <ol className="list-decimal list-inside mb-6 text-black space-y-2">
      {props.children}
    </ol>
  ),
  li: (props: { children?: React.ReactNode }) => (
    <li className="text-lg leading-relaxed">{props.children}</li>
  ),
  blockquote: (props: { children?: React.ReactNode }) => (
    <blockquote className="border-l-4 border-black pl-6 my-6 italic text-zinc-700">
      {props.children}
    </blockquote>
  ),
  code: (props: { children?: React.ReactNode }) => (
    <code className="bg-zinc-100 px-2 py-1 rounded text-sm font-mono text-black">
      {props.children}
    </code>
  ),
  pre: (props: { children?: React.ReactNode }) => (
    <pre className="bg-zinc-100 p-6 rounded-lg overflow-x-auto mb-6">
      {props.children}
    </pre>
  ),
};

interface MDXContentProps {
  content: string;
}

export default function MDXContent({ content }: MDXContentProps) {
  const [mdxSource, setMdxSource] = useState<Awaited<
    ReturnType<typeof serialize>
  > | null>(null);

  useEffect(() => {
    void serialize(content).then(setMdxSource);
  }, [content]);

  if (!mdxSource) {
    return null;
  }

  return (
    <div className="prose prose-zinc max-w-none">
      <MDXRemote {...mdxSource} components={mdxComponents} />
    </div>
  );
}
