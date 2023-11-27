import "./globals.css";

import Link from "next/link";
import { asText } from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";

import { createClient, repositoryName } from "@/prismicio";
import { useState } from "react";
import { SettingsDocument } from "../../prismicio-types";
import Header from "@/components/Header";
import Head from "next/head";
import * as prismic from "@prismicio/client";

export async function generateMetadata() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: asText(settings.data.site_title),
    icons: { icon: prismic.asImageSrc(settings.data.favicon) || "" },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <html lang="cs">
      <body className="bg-primary text-secondary min-h-screen flex flex-col justify-between">
        <Header settings={settings} />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <footer className="bg-white px-6 py-10 text-slate-500">
      <div className="mx-auto w-full max-w-5xl text-center text-xs">
        <PrismicText field={settings.data.site_title} /> &mdash; Powered by
        Prismic
      </div>
    </footer>
  );
}
