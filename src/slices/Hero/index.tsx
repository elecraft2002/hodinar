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
          "max-h-[80vh]",
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
          <PrismicRichText field={slice.primary.text} />
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
          className="max-h-[80vh] overflow-hidden"
        >
          <PrismicNextImage
            field={slice.primary.image}
            sizes="100vw"
            priority={true}
            className="w-full rounded-xl h-full object-cover"
          />
        </motion.div>
      </div>
    </Bounded>
  );
};

export default Hero;
