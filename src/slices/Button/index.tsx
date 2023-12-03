import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { default as ButtonComponent } from "@/components/Button";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Button`.
 */
export type ButtonProps = SliceComponentProps<Content.ButtonSlice>;

/**
 * Component for "Button" Slices.
 */
const Button = ({ slice }: ButtonProps): JSX.Element => {
  console.log();
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center py-8"
    >
      <PrismicNextLink field={slice.primary.button_link}>
        <ButtonComponent type={slice.primary.type}>
          {slice.primary.button_text}
        </ButtonComponent>
      </PrismicNextLink>
    </section>
  );
};

export default Button;
