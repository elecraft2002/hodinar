"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Fade } from "react-awesome-reveal";
import * as prismic from "@prismicio/client";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Bounded from "@/components/Bounded";

/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Component for "Gallery" Slices.
 */
const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center"
    >
      <ul>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4"
        >
          {slice.items.map((item, index) => {
            return (
              <Fade triggerOnce key={index}>
                <li data-src={prismic.asImageSrc(item.image.Medium)}>
                  <a
                    className="gallery-item"
                    href={prismic.asImageSrc(item.image.Medium)||""}
                  >
                    <PrismicNextImage
                      className="h-auto max-w-full rounded-lg transition-all hover:scale-105"
                      field={item.image.Small}
                    />
                  </a>
                </li>
              </Fade>
            );
          })}
        </LightGallery>
      </ul>
    </Bounded>
  );
};

export default Gallery;
