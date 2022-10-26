import React from "react";
import { GalleryImage } from "../../constants/galleryImages";

export interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Gallery {
  images: GalleryImage[];
  exemplar: GalleryImage;
  path: string;
  title: string;
  subtitle?: string;
  description: React.ReactNode;
}
