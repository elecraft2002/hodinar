import React from "react";
import { SettingsDocument } from "../../prismicio-types";
import * as prismic from "@prismicio/client";
import Link from "next/link";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export default function Footer({ settings }: { settings: SettingsDocument }) {
  return (
    <footer className="rounded-lg shadow bg-gray-900 p-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center justify-center sm:justify-between flex-wrap gap-8">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <PrismicNextImage
              className="h-8"
              field={settings.data.logo.Small}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-tertiary">
              {prismic.asText(settings.data.site_title)}
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0  gap-4">
            {settings.data.navigation.map((item) => (
              <li key={item.label}>
                <PrismicNextLink field={item.link}>
                  {item.label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0  gap-4">
            {settings.data.socials.map((item, i) => (
              <li key={i}>
                <PrismicNextLink field={item.link}>
                  <PrismicNextImage field={item.icon} className="h-8 w-8 p-2" />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center ">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            {prismic.asText(settings.data.site_title)}
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
