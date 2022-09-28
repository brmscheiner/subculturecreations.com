import React from "react";

export interface Image {
  src: string,
  alt: string,
  width: number,
  height: number,
}

export interface Gallery {
  images: Image[],
  exemplar: Image,
  path: string,
  title: string,
  subtitle?: string,
  description: React.ReactNode,
}
