"use client";
import { Content } from "@prismicio/client";
import Bounded from "../../components/Bounded";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { ReviewDocument, WatchesDocument } from "../../../prismicio-types";
import Stars from "@/components/Stars";
import Button from "@/components/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import * as prismic from "@prismicio/client";
import { ContextProps } from "@/app/layout";
import { Fade } from "react-awesome-reveal";

const Card = ({ item }: { item: WatchesDocument }) => {
  const [isHovered, setHover] = useState<boolean>(false);

  function cutText(text: string, len: number): string {
    if (text.length <= len) return text;
    let out = "";
    let n = 0;
    let wordIndex = 0;
    let words = text.split(" ");
    while (true) {
      if (n >= len) break;
      if (wordIndex) out += " ";
      for (let i = 0; i < words[wordIndex].length; i++) {
        const letter = words[wordIndex][i];
        out += letter;
        n++;
      }
      wordIndex++;
    }
    return out + "...";
  }

  return (
    <AnimatePresence>
      <div className="w-full max-w-sm rounded-lg shadow bg-primary transition-all hover:drop-shadow-2xl hover:z-10 hover:-translate-y-2 overflow-hidden">
        <div className="hover:bg-secondary/5 transition-all">
          <div className="relative">
            <div className="p-4 m-auto">
              <PrismicNextImage
                field={item.data.image1.Preview}
                className="rounded-lg"
              />
            </div>
            <div className="absolute top-0">
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <div className="p-4 m-auto">
                    <PrismicNextImage
                      field={item.data.image2.Preview}
                      className="rounded-lg "
                    />
                  </div>
                </motion.div>
              )}
            </div>
            <div
              className="hover__catcher absolute w-full h-full top-0"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            ></div>
          </div>
          <div className="px-5 pb-5">
            <PrismicNextLink document={item} className="text-xl">
              <PrismicRichText field={item.data.title} />
            </PrismicNextLink>
            <div className="flex items-center mt-2.5 mb-5">
              <ul className="flex items-center space-x-1 rtl:space-x-reverse">
                <Stars count={parseInt(item.data.rating)} />
              </ul>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {parseInt(item.data.rating) + ".0"}
              </span>
            </div>
            <p className="mb-4 font-thin ">
              {cutText(prismic.asText(item.data.description), 100)}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {item.data.price}
              </span>
            </div>
            <div className="flex items-center gap-4 justify-between">
              {item.data.availability !== "Sold" && (
                <Link
                  href={prismic.asLink(item)?.replace("watches", "form") || ""}
                >
                  <Button>Mám zájem</Button>
                </Link>
              )}
              <PrismicNextLink document={item}>
                <Button>Více</Button>
              </PrismicNextLink>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

/**
 * Props for `List`.
 */
export type ListProps = SliceComponentProps<Content.ListSlice>;

/**
 * Component for "List" Slices.
 */

interface ListPropsContext extends ListProps {
  context: ContextProps;
}
export const availability = [
  { value: "Available", display: "Dostupné" },
  { value: "Sold", display: "Prodáno" },
];

const Selection = ({
  handleEvent,
  type,
}: {
  handleEvent: (type: string) => void;
  type: {
    value: string;
    display: string;
  };
}) => {
  return (
    <div className="flex items-center mb-4">
      <input
        onChange={() => handleEvent(type.value)}
        id={type.value}
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={type.value}
        className="ms-2 font-medium text-gray-900 dark:text-gray-300"
      >
        {type.display}
      </label>
    </div>
  );
};

const List = ({ slice, context }: ListPropsContext): JSX.Element => {
  const types = [
    { value: "klasické", display: "Klasické" },
    { value: "skeletové", display: "Skeletové" },
    { value: "vojenské/letecké", display: "Vojenské / Letecké" },
    { value: "chronograf", display: "Chronograf" },
    { value: "jiné", display: "Jiné" },
  ];
  const [activeTypes, setActiveTypes] = useState<string[]>([]);
  const [isAvailable, setAvailibility] = useState<string | null>(null);
  const handleTypes = (type: string) => {
    const index = activeTypes.indexOf(type);
    if (index > -1) {
      activeTypes.splice(index, 1);
      setActiveTypes([...activeTypes]);
    } else {
      setActiveTypes([...activeTypes, type]);
    }
  };
  const handleAvailibility=(type:string)=>{
    if(isAvailable===type) setAvailibility(null)
    
  }
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="filter">
        <ul className="flex gap-4">
          {types.map((type, i) => {
            return (
              <li key={i}>
                <Selection handleEvent={handleTypes} type={type} />
              </li>
            );
          })}
        </ul>
        <ul className="flex gap-4">
          {availability.map((type, i) => {
            return (
              <li key={i}>
                <Selection handleEvent={handleTypes} type={type} />
              </li>
            );
          })}
        </ul>
      </div>
      {context.watches && (
        <ul className="flex flex-wrap gap-8 justify-center">
          {context.watches.map((item: WatchesDocument, i: number) => {
            if (slice.primary.max_watches && i >= slice.primary.max_watches)
              return null;
            if (
              activeTypes.length === 0 ||
              activeTypes.includes(item.data.type)
            )
              return (
                <Fade key={i} triggerOnce delay={200 + 50 * i}>
                  <li>
                    <Card item={item} />
                  </li>
                </Fade>
              );
          })}
        </ul>
      )}
    </Bounded>
  );
};

export default List;
