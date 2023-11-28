"use client";
import { Content } from "@prismicio/client";
import Bounded from "../../components/Bounded";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { WatchesDocument } from "../../../prismicio-types";
import Stars from "@/components/Stars";
import Button from "@/components/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import * as prismic from "@prismicio/client";

const Card = ({ item }: { item: WatchesDocument }) => {
  const [isHovered, setHover] = useState<boolean>(false);
  return (
    <AnimatePresence>
      <div className="w-full max-w-sm rounded-lg shadow bg-primary transition-all hover:drop-shadow-2xl hover:z-10 hover:-translate-y-2">
        <div className="relative">
          <PrismicNextImage
            field={item.data.image1.Preview}
            className="p-4 rounded-lg m-auto"
          />
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
                <PrismicNextImage
                  field={item.data.image2.Preview}
                  className="p-4 rounded-lg m-auto"
                />
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
          <PrismicNextLink document={item}>
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
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {item.data.price}
            </span>
          </div>
          <div className="flex items-center gap-4 justify-between">
            {item.data.availability !== "Sold" && (
              <Button>
                <Link
                  href={prismic.asLink(item)?.replace("watches", "form") || ""}
                >
                  Mám zájem
                </Link>
              </Button>
            )}
            <Button>
              <PrismicNextLink document={item}>Více</PrismicNextLink>
            </Button>
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
  context: { watches?: WatchesDocument[] };
}

const List = ({ slice, context }: ListPropsContext): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* <span>
        <PrismicRichText field={slice.primary.description} />
      </span> */}
      {context.watches && (
        <ul>
          {context.watches.map((item: WatchesDocument, i: number) => {
            return (
              <li key={i}>
                <Card item={item} />
              </li>
            );
          })}
        </ul>
      )}
    </Bounded>
  );
};

export default List;
