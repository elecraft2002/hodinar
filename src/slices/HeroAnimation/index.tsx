"use client";
import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Button from "@/components/Button";
import clsx from "clsx";
import * as prismic from "@prismicio/client";

/**
 * Props for `HeroAnimation`.
 */
export type HeroAnimationProps =
  SliceComponentProps<Content.HeroAnimationSlice>;

/**
 * Component for "HeroAnimation" Slices.
 */
const HeroAnimation = ({ slice }: HeroAnimationProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        className="w-full"
        navigation
        loop
        speed={1500}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        style={
          {
            "--swiper-pagination-color": "#fff",
            "--swiper-navigation-color": "#fff",
          } as any
        }
      >
        {slice.items.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="lg:w-3/4 m-auto">
                <article className="md:grid grid-cols-2 gap-4 md:gap-8 lg:gap-16 h-[80vh] relative">
                  <div className="z-10 md:z-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:static flex flex-col justify-center items-end gap-8">
                    <span
                      className={clsx(
                        "max-w-lg text-end relative pb-4",
                        prismic.isFilled.link(item.button_link) &&
                          "after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-secondary after:left-0 after:rounded-sm after:bottom-0"
                      )}
                    >
                      <PrismicRichText field={item.text} />
                    </span>
                    <PrismicNextLink field={item.button_link}>
                      <Button>{item.button_text}</Button>
                    </PrismicNextLink>
                  </div>
                  <div>
                    <figure className="h-[80vh]">
                      <PrismicNextImage
                        field={item.image.Medium}
                        className="rounded-lg w-full h-full object-cover opacity-30 md:opacity-100"
                      />
                    </figure>
                  </div>
                </article>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Bounded>
  );
};

export default HeroAnimation;
