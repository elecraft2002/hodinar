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
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextLink field={slice.primary.button_link}>
        <ButtonComponent>{slice.primary.button_text}</ButtonComponent>
      </PrismicNextLink>
    </section>
  );
};

export default Button;
