"use client"
import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as prismic from "@prismicio/client";

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  return (
    <Bounded
      as="section"
      className=""
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-16">
        <div className="relative max-w-xs md:col-span-5 md:max-w-none">
          <div className="absolute -left-6 -top-6 w-2/3">
            <div className="aspect-h-1 aspect-w-1 bg-slate-100/50" />
          </div>
          {prismic.isFilled.image(slice.primary.image) && (
            <PrismicNextImage
              field={slice.primary.image.Medium}
              sizes="100vw"
              className="relative w-full"
            />
          )}
        </div>
        <div className="max-w-prose self-end leading-relaxed md:col-span-7">
          <PrismicRichText field={slice.primary.text} />
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
