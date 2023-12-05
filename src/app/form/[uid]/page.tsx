import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import * as prismic from "@prismicio/client";
import Button from "@/components/Button";
import { PrismicNextImage } from "@prismicio/next";
import { motion } from "framer-motion";
import Link from "next/link";
import Stars from "@/components/Stars";
import Form from "@/components/Form";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("watches", params.uid)
    .catch(() => notFound());
  return (
    <>
      <div className="grid md:grid-cols-2">
        <div className="md:h-screen">
          <PrismicNextImage
            field={page.data.image1.medium}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="m-4 md:flex md:items-center">
          {page.data.availability === "Sold" ? (
            <h2 className="text-center w-full font-semibold text-3xl">
              Zboží není k dispozici.
            </h2>
          ) : (
            <Form product={prismic.asText(page.data.title)} />
          )}
        </div>
      </div>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("watches", params.uid)
    .catch(() => notFound());
  const settings = await client.getSingle("settings");

  return {
    title:
      prismic.asText(settings.data.site_title) +
      " - Formulář — " +
      prismic.asText(page.data.title),
    description: prismic.asText(page.data.description),
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("watches");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
