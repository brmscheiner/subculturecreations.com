import { galleryImages } from '../../constants/galleryImages'

const exemplar = {
  ...galleryImages['galapagos3.jpg'],
  alt: 'Colleen and I on a brief island hike',
}

const images = [
  {
    ...galleryImages['galapagos1.jpg'],
    alt: 'Two rainbow marine iguanas sharing a rock',
  },
  {
    ...galleryImages['galapagos3.jpg'],
    alt: 'Colleen and I on a brief island hike',
  },
  {
    ...galleryImages['galapagos4.jpg'],
    alt: 'Archipelago vista',
  },
  {
    ...galleryImages['galapagos5.jpg'],
    alt: 'Sea lions are so much fun to watch. I would like to be reincarnated as one',
  },
  {
    ...galleryImages['galapagos2.jpg'],
    alt: 'A Nazca boobie stretching its wings',
  },
  {
    ...galleryImages['galapagos7.jpg'],
    alt: 'A blue footed boobie disapproves of my presence',
  },
  {
    ...galleryImages['galapagos8.jpg'],
    alt: 'Among Ecaudorians, the Galapagos are famous for scorpionfish dinners. We spotted these fish camouflaged underwater as well',
  },
  {
    ...galleryImages['galapagos6.jpg'],
    alt: 'This sea lion charged me. I had to run right after taking this photo',
  },
  {
    ...galleryImages['galapagos13.jpg'],
    alt: "After snorkeling about a dozen times, I discovered I had seen almost all of the blennies in the Galapagos. Only one fish evaded me - the Galapagos four-eyed blenny. I would never see it snorkeling because it doesn't live on reefs, it lives in tide pools. So I set out one day to find it, and after hours of tide pooling, success!",
  },
  {
    ...galleryImages['galapagos14.jpg'],
    alt: 'The Galapagos four-eyed blenny is a unique creature. It can breathe on land and has been observed travelling as far as 30 meters from the sea. It can jump remarkably high to evade threats, which is what it did when it had enough of me trying to photograph it!',
  },
  {
    ...galleryImages['galapagos10.JPG'],
    alt: 'Here I am scuba diving with a turtle. They were all over the place',
  },
  {
    ...galleryImages['galapagos11.JPG'],
    alt: 'Our most exciting underwater sighting - a fever of golden cownose rays',
  },
  {
    ...galleryImages['galapagos15.jpg'],
    alt: 'A final dinner before flying home. We watched baby sharks hunt in the moonlight off the pier',
  },
]

const galapagosConfig = {
  images,
  exemplar,
  path: 'galapagos',
  title: 'Good times in the Galapagos',
  subtitle: 'These islands are magical - go if you get the chance.',
  description:
    'We had the adventure of a lifetime this summer, spending almost three weeks in the Galapagos! The wildlife is unreal, and the people are incredible custodians of the land. Go if you get the chance.',
}

export default galapagosConfig
