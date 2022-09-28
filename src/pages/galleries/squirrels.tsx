
import photo1 from './squirrels/1.jpeg';
import photo2 from './squirrels/2.jpeg';
import photo3 from './squirrels/3.jpeg';
import photo4 from './squirrels/4.jpeg';
import photo5 from './squirrels/5.jpeg';
import photo6 from './squirrels/6.jpeg';
import photo7 from './squirrels/7.jpeg';
import photo8 from './squirrels/8.jpeg';
import photo9 from './squirrels/9.jpeg';
import photo10 from './squirrels/10.jpeg';
import photo11 from './squirrels/11.jpg';
import photo12 from './squirrels/12.jpeg';
import photo13 from './squirrels/13.jpeg';
import photo14 from './squirrels/14.jpg';
import photo15 from './squirrels/15.jpeg';
import photo16 from './squirrels/16.jpeg';
import photo17 from './squirrels/17.jpeg';
import Landscape from './squirrels/landscape.jpeg';

const exemplar = {
  src: Landscape,
  width: 1512,
  height: 2016,
  alt: 'Penelope and Squiggles sitting on a fleece blanket',
}

const images = [
  {
    src: photo1,
    width: 1512,
    height: 2016,
    alt: "Squiggles clinging to Ben's arm",
  },
  {
    src: photo2,
    width: 1512,
    height: 2016,
    alt: "Squiggles nibbling on Ben's finger",
  },
  {
    src: photo3,
    width: 1512,
    height: 2016,
    alt: 'Squiggles in a shoe box full of towels and food',
  },
  {
    src: photo4,
    width: 1512,
    height: 2016,
    alt: "Squiggles in the palm of Ben's hand",
  },
  {
    src: photo5,
    width: 1512,
    height: 2016,
    alt: "Cricket's reaction to Squiggles in the house",
  },
  {
    src: photo6,
    width: 1512,
    height: 2016,
    alt: 'Squiggles drinking milk',
  },
  {
    src: photo7,
    width: 1512,
    height: 2016,
    alt: 'Colleen with Squiggles on her shoulder',
  },
  {
    src: photo8,
    width: 1512,
    height: 2016,
    alt: 'Squiggles on a fleece blanket',
  },
  {
    src: photo9,
    width: 1512,
    height: 2016,
    alt: 'Philae meets Squiggles',
  },
  {
    src: photo10,
    width: 1512,
    height: 2016,
    alt: 'Ben with Squiggles on his shoulder',
  },
  {
    src: photo11,
    width: 1512,
    height: 2016,
    alt: 'Ben with Squiggles on his shoulder',
  },
  {
    src: photo13,
    width: 1512,
    height: 2016,
    alt: 'Penelope and Squiggles on a fleece blanket',
  },
  {
    src: photo14,
    width: 1512,
    height: 2016,
    alt: 'Penelope curled up in a ball',
  },
  {
    src: photo15,
    width: 1512,
    height: 2016,
    alt: 'Penelope stretching',
  },
  {
    src: photo12,
    width: 1512,
    height: 2016,
    alt: 'Squiggles stares into the camera',
  },
  {
    src: photo16,
    width: 1512,
    height: 2016,
    alt: 'Squiggles eating a block',
  },
  {
    src: photo17,
    width: 1512,
    height: 2016,
    alt: 'Penelope playing the garage',
  },
]

const boardsConfig = {
  images,
  exemplar,
  path: 'squirrels',
  title: 'Inviting squirrels into your home',
  subtitle: "Meet Squiggles and Penelope",
  description: (
    <>
      <p>
        One day I was out for a walk and a squirrel started to follow me. He was persistent enough to follow me for at least two blocks and even cross the street. A cat noticed his strange behavior and attacked him. I shooed the cat away and took the squirrel home in a shoebox.
      </p>
      <p className="mt-3">
        I named him Squiggles. After doing some research I took Squiggles to The Squirrel Refuge, a local non-profit that helps squirrels with troubled pasts. They offered to take him in, but gave me the option to start his rehabilitation myself. But apparently, if squirrels grow up alone they never learn to socialize and will ultimately get rejected by the pack.
      </p>
      <p className="mt-3">
        So I came home with a cage, food, blankets and two squirrels. I named our new squirrel Penelope. Colleen and I bottle fed the squirrels for a few months, watching them develop and grow. Once they reached their target weights, I returned them to the refuge for the next chapter of their adventure.
      </p>
    </>
  )
}

export default boardsConfig;
