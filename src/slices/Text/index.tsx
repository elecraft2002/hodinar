"use client"
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Fade } from "react-awesome-reveal";

/**
 * Props for `Text`.
 */
export type TextProps = SliceComponentProps<Content.TextSlice>;

/**
 * Component for "Text" Slices.
 */
const Text = ({ slice }: TextProps): JSX.Element => {
  return (
    <section className="px-6 py-28 md:px-10">
      <Fade delay={500} triggerOnce className="mx-auto grid w-full max-w-6xl gap-6">
        <PrismicRichText
          field={slice.primary.text}
          /* components={{
            heading3: ({ children }) => (
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-300">
                {children}
              </p>
            ),
            heading1: ({ children }) => (
              <h2 className="text-4xl font-semibold text-slate-800">
                {children}
              </h2>
            ),
          }} */
        />
      </Fade>
    </section>
  );
};

export default Text;
