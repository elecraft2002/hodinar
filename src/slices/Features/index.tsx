"use client"
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Fade } from "react-awesome-reveal";

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ul className="mt-20 flex flex-wrap items-center justify-center gap-20 md:gap-10">
        {slice.items.map((item, index) => {
          return (
            <Fade key={index} delay={index * 200} triggerOnce>
              <li className="flex min-w-[200px] max-w-[40vw] justify-center md:max-w-[30vw] lg:max-w-[12rem]">
                <figure className=" flex w-auto flex-col justify-between gap-6 text-center">
                  <PrismicNextImage
                    field={item.icon.Medium}
                    className="m-auto w-1/2 transition hover:scale-105"
                  />
                  <figcaption className=" tracking-[.3em]">
                    <PrismicRichText
                      field={item.text}
                      components={{
                        heading3: ({ children }) => (
                          <h3 className="m-auto  w-max text-center text-base last:mb-0">
                            {children}
                          </h3>
                        ),
                      }}
                    />
                  </figcaption>
                </figure>
              </li>
            </Fade>
          );
        })}
      </ul>
    </section>
  );
};

export default Features;
