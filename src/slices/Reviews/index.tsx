"use client";
import { ContextProps } from "@/app/layout";
import Stars from "@/components/Stars";
import parseDate from "@/utils/parseDate";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Reviews`.
 */
export type ReviewsProps = SliceComponentProps<Content.ReviewsSlice>;

/**
 * Component for "Reviews" Slices.
 */

interface ReviewsPropsContext extends ReviewsProps {
  context: ContextProps;
}

const Reviews = ({ slice, context }: ReviewsPropsContext): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ul className="flex w-full flex-wrap justify-evenly gap-6 px-4">
        {context.reviews?.map((item, index) => {
          return (
            <li key={index} className="w-full max-w-sm">
              <article>
                <div className="mb-16 flex items-center space-x-4">
                  <figure className="aspect-1 overflow-hidden rounded-full max-w-[100px]">
                    <PrismicNextImage
                      className="h-full w-full object-cover"
                      field={item.data.image.small}
                    />
                  </figure>
                  <div className="space-y-1 font-medium">
                    <span>
                      <PrismicRichText field={item.data.name} />

                      <ul className="flex">
                        <Stars count={parseInt(item.data.stars)} />
                      </ul>
                    </span>
                    <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                      {item.data.date && (
                        <p>
                          <time dateTime={item.data.date}>
                            {parseDate(item.data.date)}
                          </time>
                        </p>
                      )}
                    </footer>
                  </div>
                </div>

                <span className="text-left">
                  <PrismicRichText field={item.data.text} />
                </span>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Reviews;
