"use client";
import { PrismicNextLink } from "@prismicio/next";
import {
  JSXFunctionSerializer,
  JSXMapSerializer,
  PrismicProvider,
} from "@prismicio/react";

const richTextComponents: JSXMapSerializer | JSXFunctionSerializer = {
  heading1: ({ children }) => (
    <h1 className="max-w-lg text-6xl mb-8 font-title last:mb-0">
      {children}
    </h1>
  ),
  heading2: ({ children }) => (
    <h2 className="mb-2 font-title text-3xl  last:mb-0">{children}</h2>
  ),
  heading3: ({ children }) => (
    <h3 className="mb-2  text-xl font-title last:mb-0">{children}</h3>
  ),
  heading4: ({ children }) => (
    <h4 className="mb-2  text-lg last:mb-0">{children}</h4>
  ),
  heading5: ({ children }) => (
    <h5 className="mb-2  text-base last:mb-0">{children}</h5>
  ),
  paragraph: ({ children }) => <p className="mb-7 last:mb-0 ">{children}</p>,
  oList: ({ children }) => (
    <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }) => (
    <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  preformatted: ({ children }) => (
    <pre className="mb-7 rounded p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicNextLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicNextLink>
  ),
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <PrismicProvider richTextComponents={richTextComponents}>
      {children}
    </PrismicProvider>
  );
}
