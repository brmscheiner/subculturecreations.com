import { galleryImages } from "../../constants/galleryImages";

const exemplar = {
  ...galleryImages["squirrelsLandscape.jpeg"],
  alt: "Penelope and Squiggles sitting on a fleece blanket",
};

const images = [
  {
    ...galleryImages["squirrels1.jpeg"],
    alt: "Squiggles clinging to Ben's arm",
  },
  {
    ...galleryImages["squirrels2.jpeg"],
    alt: "Squiggles nibbling on Ben's finger",
  },
  {
    ...galleryImages["squirrels3.jpeg"],
    alt: "Squiggles in a shoe box full of towels and food",
  },
  {
    ...galleryImages["squirrels4.jpeg"],
    alt: "Squiggles in the palm of Ben's hand",
  },
  {
    ...galleryImages["squirrels5.jpeg"],
    alt: "Cricket's reaction to Squiggles in the house",
  },
  {
    ...galleryImages["squirrels6.jpeg"],
    alt: "Squiggles drinking milk",
  },
  {
    ...galleryImages["squirrels7.jpeg"],
    alt: "Colleen with Squiggles on her shoulder",
    stretch: true,
  },
  {
    ...galleryImages["squirrels8.jpeg"],
    alt: "Squiggles on a fleece blanket",
  },
  {
    ...galleryImages["squirrels9.jpeg"],
    alt: "Philae meets Squiggles",
  },
  {
    ...galleryImages["squirrels10.jpeg"],
    alt: "Ben with Squiggles on his shoulder",
    stretch: true,
  },
  {
    ...galleryImages["squirrels11.jpg"],
    alt: "Ben with Squiggles on his shoulder",
  },
  {
    ...galleryImages["squirrels13.jpeg"],
    alt: "Penelope and Squiggles on a fleece blanket",
  },
  {
    ...galleryImages["squirrels14.jpg"],
    alt: "Penelope curled up in a ball",
  },
  {
    ...galleryImages["squirrels15.jpeg"],
    alt: "Penelope stretching",
  },
  {
    ...galleryImages["squirrels12.jpeg"],
    alt: "Squiggles stares into the camera",
  },
  {
    ...galleryImages["squirrels16.jpeg"],
    alt: "Squiggles eating a block",
  },
  {
    ...galleryImages["squirrels17.jpeg"],
    alt: "Penelope playing the garage",
  },
];

const boardsConfig = {
  images,
  exemplar,
  path: "squirrels",
  title: "Inviting squirrels into your home",
  subtitle: "Meet Squiggles and Penelope",
  description: (
    <>
      <p>
        One day I was out for a walk and a squirrel started to follow me. He was
        persistent enough to follow me for at two full blocks and fearless enough to cross
        the street. A cat noticed his strange behavior and attacked him. I
        shooed the cat away and took the squirrel home in a shoebox.
      </p>
      <p className="mt-3">
        I named him Squiggles. After doing some research I took Squiggles to The
        Squirrel Refuge, a local non-profit that helps squirrels with troubled
        pasts. They offered to take him in, but gave me the option to start his
        rehabilitation myself. But apparently, if squirrels grow up alone they
        never learn to socialize and will ultimately get rejected by the pack.
      </p>
      <p className="mt-3">
        So I came home with a cage, food, blankets and two squirrels. I named
        our new squirrel Penelope. Colleen and I bottle fed the squirrels for a
        few months, watching them develop and grow. Once they reached their
        target weights, I returned them to the refuge for the next chapter of
        their adventure.
      </p>
    </>
  ),
};

export default boardsConfig;
