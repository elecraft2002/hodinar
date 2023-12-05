"use client";
import React from "react";
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
import * as prismic from "@prismicio/client";
import { PrismicNextImage, PrismicNextImageProps } from "@prismicio/next";

export default function PrismicGalleryImage(props: PrismicNextImageProps) {
  console.log(props.field);
  //   return <PrismicNextImage {...props} className="w-full h-full object-cover" />;
  return (
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames=""
    >
      <a href={props.field?.url || ""}>
        <PrismicNextImage
          {...props}
          className="w-full h-full object-cover rounded-lg"
        />
      </a>
    </LightGallery>
  );
}
