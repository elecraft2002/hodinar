import { Metadata } from "next";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");
  // const page = { data: { title: null, meta_description: "xdd" } };
  const settings = await client.getSingle("settings");

  return {
    title: asText(page.data.title || settings.data.site_title),
    description: page.data.meta_description,
  };
}

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("homepage");
  const watches = await client.getAllByType("watches");
  const reviews = await client.getAllByType("review");

  return (
    <SliceZone
      slices={page.data.slices}
      components={components}
      context={{ watches,reviews }}
    />
  );
}
