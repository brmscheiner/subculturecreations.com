import mapValues from "lodash/mapValues";

import imageMetadata from "../imageMetadata.json";

interface Dimensions {
  width: number;
  height: number;
}

interface Paths {
  medium: string;
  original: string;
  small: string;
}

interface Sizes {
  medium: Dimensions;
  original: Dimensions;
  small: Dimensions;
}

export interface GalleryImage {
  filename: string;
  format: string;
  paths: Paths;
  sizes: Sizes;
  alt?: string;
}

export const galleryImages = mapValues(imageMetadata, (d): GalleryImage => {
  return {
    ...d,
    paths: {
      original: require(`../assets/galleries/originals/${d.filename}`),
      medium: require(`../assets/galleries/medium/${d.filename}`),
      small: require(`../assets/galleries/small/${d.filename}`),
    },
  };
});
