// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice =
  | FeaturesSlice
  | GallerySlice
  | ImageSlice
  | ButtonSlice
  | ListSlice
  | HeroSlice
  | TextSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Title field in *Homepage*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the document
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Description used for SEO
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | ListSlice
  | GallerySlice
  | ButtonSlice
  | HeroSlice
  | TextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the page
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Description used for SEO
   * - **API ID Path**: page.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for the link
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site TItle field in *Settings*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Global title of the site
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  site_title: prismic.TitleField;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;

  /**
   * Logo field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<"Small">;

  /**
   * Favicon field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.favicon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  favicon: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

/**
 * Item in *Watches → Info*
 */
export interface WatchesDocumentDataInfoItem {
  /**
   * Feature field in *Watches → Info*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: watches.info[].feature
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  feature: prismic.KeyTextField;

  /**
   * Info field in *Watches → Info*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: watches.info[].info
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  info: prismic.KeyTextField;
}

type WatchesDocumentDataSlicesSlice =
  | GallerySlice
  | TextSlice
  | ButtonSlice
  | ListSlice
  | HeroSlice;

/**
 * Content for Watches documents
 */
interface WatchesDocumentData {
  /**
   * Title field in *Watches*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: watches.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Watches*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: watches.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Image1 field in *Watches*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: watches.image1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image1: prismic.ImageField<"Preview" | "medium">;

  /**
   * Image2 field in *Watches*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: watches.image2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image2: prismic.ImageField<"Preview">;

  /**
   * Rating field in *Watches*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: 5
   * - **API ID Path**: watches.rating
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  rating: prismic.SelectField<"5" | "4" | "3" | "2" | "1" | "0", "filled">;

  /**
   * Price field in *Watches*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: watches.price
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  price: prismic.KeyTextField;

  /**
   * Availability field in *Watches*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Available
   * - **API ID Path**: watches.availability
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  availability: prismic.SelectField<"Available" | "Sold", "filled">;

  /**
   * Info field in *Watches*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: watches.info[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  info: prismic.GroupField<Simplify<WatchesDocumentDataInfoItem>>;

  /**
   * Slice Zone field in *Watches*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: watches.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<WatchesDocumentDataSlicesSlice>;
}

/**
 * Watches document from Prismic
 *
 * - **API ID**: `watches`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WatchesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<WatchesDocumentData>,
    "watches",
    Lang
  >;

export type AllDocumentTypes =
  | HomepageDocument
  | PageDocument
  | SettingsDocument
  | WatchesDocument;

/**
 * Primary content in *Button → Primary*
 */
export interface ButtonSliceDefaultPrimary {
  /**
   * Button Text field in *Button → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: button.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Button → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: button.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Default variation for Button Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ButtonSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ButtonSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Button*
 */
type ButtonSliceVariation = ButtonSliceDefault;

/**
 * Button Shared Slice
 *
 * - **API ID**: `button`
 * - **Description**: Button
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ButtonSlice = prismic.SharedSlice<"button", ButtonSliceVariation>;

/**
 * Primary content in *Features → Items*
 */
export interface FeaturesSliceDefaultItem {
  /**
   * Icon field in *Features → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: features.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<"Small" | "Medium">;

  /**
   * Text field in *Features → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features.items[].text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for Features Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<FeaturesSliceDefaultItem>
>;

/**
 * Slice variation for *Features*
 */
type FeaturesSliceVariation = FeaturesSliceDefault;

/**
 * Features Shared Slice
 *
 * - **API ID**: `features`
 * - **Description**: Features
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSlice = prismic.SharedSlice<
  "features",
  FeaturesSliceVariation
>;

/**
 * Primary content in *Gallery → Items*
 */
export interface GallerySliceDefaultItem {
  /**
   * Image field in *Gallery → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<"Small" | "Medium">;
}

/**
 * Default variation for Gallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<GallerySliceDefaultItem>
>;

/**
 * Slice variation for *Gallery*
 */
type GallerySliceVariation = GallerySliceDefault;

/**
 * Gallery Shared Slice
 *
 * - **API ID**: `gallery`
 * - **Description**: Gallery
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySlice = prismic.SharedSlice<
  "gallery",
  GallerySliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text displayed adjacent to image
   * - **API ID Path**: hero.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *Hero → Items*
 */
export interface HeroSliceDefaultItem {
  /**
   * Button Link field in *Hero → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for the button
   * - **API ID Path**: hero.items[].button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button Label field in *Hero → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for the button
   * - **API ID Path**: hero.items[].button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  Simplify<HeroSliceDefaultItem>
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceHeroFullscreenPrimary {
  /**
   * Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text displayed adjacent to image
   * - **API ID Path**: hero.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *Hero → Items*
 */
export interface HeroSliceHeroFullscreenItem {
  /**
   * Button Link field in *Hero → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for the button
   * - **API ID Path**: hero.items[].button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button Label field in *Hero → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for the button
   * - **API ID Path**: hero.items[].button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;
}

/**
 * Hero - Fullscreen variation for Hero Slice
 *
 * - **API ID**: `heroFullscreen`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceHeroFullscreen = prismic.SharedSliceVariation<
  "heroFullscreen",
  Simplify<HeroSliceHeroFullscreenPrimary>,
  Simplify<HeroSliceHeroFullscreenItem>
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceHeroFullscreen;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Image → Primary*
 */
export interface ImageSliceDefaultPrimary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<"Small" | "Medium" | "Big" | "Large">;
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault;

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;

/**
 * Primary content in *List → Primary*
 */
export interface ListSliceDefaultPrimary {
  /**
   * Max watches field in *List → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: list.primary.max_watches
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  max_watches: prismic.NumberField;
}

/**
 * Default variation for List Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ListSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *List*
 */
type ListSliceVariation = ListSliceDefault;

/**
 * List Shared Slice
 *
 * - **API ID**: `list`
 * - **Description**: List
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ListSlice = prismic.SharedSlice<"list", ListSliceVariation>;

/**
 * Primary content in *Text → Primary*
 */
export interface TextSliceDefaultPrimary {
  /**
   * Text field in *Text → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text with rich formatting
   * - **API ID Path**: text.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Text*
 */
type TextSliceVariation = TextSliceDefault;

/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSlice = prismic.SharedSlice<"text", TextSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      WatchesDocument,
      WatchesDocumentData,
      WatchesDocumentDataInfoItem,
      WatchesDocumentDataSlicesSlice,
      AllDocumentTypes,
      ButtonSlice,
      ButtonSliceDefaultPrimary,
      ButtonSliceVariation,
      ButtonSliceDefault,
      FeaturesSlice,
      FeaturesSliceDefaultItem,
      FeaturesSliceVariation,
      FeaturesSliceDefault,
      GallerySlice,
      GallerySliceDefaultItem,
      GallerySliceVariation,
      GallerySliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefaultItem,
      HeroSliceHeroFullscreenPrimary,
      HeroSliceHeroFullscreenItem,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceHeroFullscreen,
      ImageSlice,
      ImageSliceDefaultPrimary,
      ImageSliceVariation,
      ImageSliceDefault,
      ListSlice,
      ListSliceDefaultPrimary,
      ListSliceVariation,
      ListSliceDefault,
      TextSlice,
      TextSliceDefaultPrimary,
      TextSliceVariation,
      TextSliceDefault,
    };
  }
}
