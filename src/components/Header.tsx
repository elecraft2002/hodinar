"use client";
import React, { useState } from "react";
import { SettingsDocument } from "../../prismicio-types";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import Hamburger from "hamburger-react";
import * as prismic from "@prismicio/client";

export default function Header({ settings }: { settings: SettingsDocument }) {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <header className="bg-primary/80 text-secondary md:px-10 fixed w-screen z-[99999999] backdrop-blur-2xl">
      <nav className=" border-tertiary ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <PrismicNextImage
              className="h-8"
              field={settings.data.logo.Small}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-tertiary">
              {prismic.asText(settings.data.site_title)}
            </span>
          </a>
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <div
            className={clsx(isOpen || "hidden", "w-full md:block md:w-auto")}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              {settings.data.navigation.map((item) => (
                <li key={item.label}>
                  <PrismicNextLink field={item.link}>
                    {item.label}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
