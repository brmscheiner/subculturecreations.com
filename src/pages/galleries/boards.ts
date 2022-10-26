import { galleryImages } from "../../constants/galleryImages";

const exemplar = {
  ...galleryImages["boardsLandscape.jpeg"],
  alt: "A collection of 5 handmade charcuterie boards",
};

const images = [
  {
    ...galleryImages["board1.jpeg"],
    alt: "A rectangular charcuterie board made of walnut",
  },
  {
    ...galleryImages["board2.jpeg"],
    alt: "A curvaceous charcuterie board made of walnut",
  },
  {
    ...galleryImages["board3.jpeg"],
    alt: "A charcuterie board in the shape of a whale",
  },
  {
    ...galleryImages["boardsAll.jpeg"],
    alt: "A collection of 5 handmade charcuterie boards",
  },
];

const boardsConfig = {
  images,
  exemplar,
  path: "boards",
  title: "Charcuterie boards",
  subtitle: "I made some charcuterie boards from black walnut",
  description:
    "These boards were fun to make and wound up being great Christmas presents. The bird was certainly the most challenging. Next time I might try to make a seal or a snake.",
};

export default boardsConfig;
