"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Button from "@/components/Button";
import clsx from "clsx";
import { motion } from "framer-motion";
import Bounded from "@/components/Bounded";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded>
      <div
        className={clsx(
          slice.variation === "default" &&
            "mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-20",
          slice.variation === "heroFullscreen" &&
            "flex justify-center items-center"
        )}
      >
        <div
          className={clsx(
            "grid gap-6",
            slice.variation === "heroFullscreen" && "absolute z-10"
          )}
        >
          <PrismicRichText
            field={slice.primary.text}
            components={{
              heading3: ({ children }) => (
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                  {children}
                </p>
              ),
              heading1: ({ children }) => (
                <h1 className="max-w-lg text-6xl font-semibold text-white">
                  {children}
                </h1>
              ),
            }}
          />
          {slice.items.length > 0 ? (
            <ul className="flex flex-wrap gap-4">
              {slice.items.map((item) => (
                <li key={item.button_label}>
                  <Button type="primary">
                    <PrismicNextLink field={item.button_link}>
                      {item.button_label}
                    </PrismicNextLink>
                  </Button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <PrismicNextImage
            field={slice.primary.image}
            sizes="100vw"
            priority={true}
            className="w-full rounded-xl bg-slate-700"
          />
        </motion.div>
      </div>
    </Bounded>
  );
};

export default Hero;
