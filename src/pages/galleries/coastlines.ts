import { galleryImages } from "../../constants/galleryImages";

const images = [
  {
    ...galleryImages["coastlines1.jpg"],
    alt: "Photograph 1 of 10",
  },
  {
    ...galleryImages["coastlines2.jpg"],
    height: 2016,
    alt: "Photograph 2 of 10",
  },
  {
    ...galleryImages["coastlines3.jpg"],
    alt: "Photograph 3 of 10",
  },
  {
    ...galleryImages["coastlines4.jpg"],
    alt: "Photograph 4 of 10",
  },
  {
    ...galleryImages["coastlines5.jpg"],
    alt: "Photograph 5 of 10",
  },
  {
    ...galleryImages["coastlines6.jpg"],
    alt: "Photograph 6 of 10",
  },
  {
    ...galleryImages["coastlines7.jpg"],
    alt: "Photograph 7 of 10",
  },
  {
    ...galleryImages["coastlines8.jpg"],
    alt: "Photograph 8 of 10",
  },
  {
    ...galleryImages["coastlines9.jpg"],
    alt: "Photograph 9 of 10",
  },
  {
    ...galleryImages["coastlines10.jpg"],
    alt: "Photograph 10 of 10",
  },
];

const galleryConfig = {
  images,
  exemplar: {
    ...galleryImages["coastlinesLandscape.jpg"],
    alt: "Patterns in the sand",
  },
  path: "coastlines",
  title: "Coastlines",
  subtitle: "A series of black and white photos taken on the Oregon coast",
  description:
    "I love spending time on the coast and seeing all of the different patterns that form in the sand. So many things cause erosion - waves, wind, raindrops, rivers... Often the most interesting patterns emerge in places where these forces intersect.",
};

export default galleryConfig;
