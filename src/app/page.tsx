import { Metadata } from "next";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");
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

  return (
    <SliceZone
      slices={page.data.slices}
      components={components}
      context={{ watches }}
    />
  );
}