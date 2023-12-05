import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import * as prismic from "@prismicio/client";
import Button from "@/components/Button";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import Stars from "@/components/Stars";
import PrismicGalleryImage from "@/components/PrismicGalleryImage";



type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("watches", params.uid)
    .catch(() => notFound());
  const watches = await client.getAllByType("watches");
  const reviews = await client.getAllByType("review");
  return (
    <>
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg   mb-4 overflow-hidden">
                <PrismicGalleryImage field={page.data.image1.Preview} />
              </div>
              {/* {page.data.availability !== "Sold" && (
                <div className="flex -mx-2 mb-4">
                  <Link
                    href={
                      prismic.asLink(page)?.replace("watches", "form") || ""
                    }
                  >
                    <Button>Mám zájem</Button>
                  </Link>
                </div>
              )} */}
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold  mb-2">
                {prismic.asText(page.data.title)}
              </h2>

              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold ">Cena:</span>
                  <span className="text-tertiary"> {page.data.price}</span>
                </div>
                <div>
                  <span className="font-bold">Dostupnost:</span>
                  <span> {page.data.availability}</span>
                </div>
              </div>
              <div className="flex items-center mt-2.5 mb-5">
                <ul className="flex items-center space-x-1 rtl:space-x-reverse">
                  <Stars count={parseInt(page.data.rating)} />
                </ul>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {parseInt(page.data.rating) + ".0"}
                </span>
              </div>
              <div className="w-full my-4 flex justify-center">
                {page.data.availability !== "Sold" && (
                  <Link
                    href={
                      prismic.asLink(page)?.replace("watches", "form") || ""
                    }
                  >
                    <Button>Mám zájem</Button>
                  </Link>
                )}
              </div>
              {/* <ul>
                {page.data.info.map((item, i) => {
                  if (i > 3) return null;
                  return (
                    <li
                      key={i}
                      className="w-full flex justify-between flex-wrap border-b border-secondary/20 pt-8 first-of-type:pt-4 gap-4 hover:bg-secondary/10 transition-all"
                    >
                      <p>{item.feature}</p>
                      <p>{item.info}</p>
                    </li>
                  );
                })}
              </ul> */}
              {/* {page.data.info.length > 3 && (
                <div className="w-full my-4 flex justify-center">
                  <Link href={"#info"}>
                    <Button type="tertiary">Více info</Button>
                  </Link>
                </div>
              )} */}
              <div>
                <span className="font-bold">Popis:</span>
                <span>
                  <PrismicRichText field={page.data.description} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SliceZone
        slices={page.data.slices}
        components={components}
        context={{ watches, reviews }}
      />
      <div id="info">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tightsm:text-4xl">
              Technické Specifikace
            </h2>
            <span>
              <PrismicRichText field={page.data.description} />
            </span>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {page.data.info.map((item, i) => {
              return (
                <div className="border-t border-gray-200 pt-4" key={i}>
                  <dt className="font-medium">{item.feature}</dt>
                  <dd className="mt-2 text-sm opacity-70">{item.info}</dd>
                </div>
              );
            })}
          </dl>
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
      " — " +
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
