import { galleryImages } from '../../constants/galleryImages';

const exemplar = {
  ...galleryImages['nook3.jpeg'],
  alt: 'Finished nook',
}

const images = [
  {
    ...galleryImages['nook1.jpeg'],
    alt: 'Panel after glue-up and planing',
  },
  {
    ...galleryImages['nook2.jpeg'],
    alt: 'Table after rounding off and applying wax',
  },
  exemplar,
]

const nookConfig = {
  images,
  exemplar,
  path: 'nook',
  title: 'My first table',
  subtitle: 'Our DIY breakfast nook',
  description: 'After moving in to our new house, we decided to build a breakfast nook. I found a church pew on Craigslist and cut it in half to make the benches. The pew only had 3 legs so I had to create a fourth. Then, I built this table from teak boards. I joined the planks with biscuits, ran the table through a planer, cut the curve and finished it with Osmo wood wax.'
}

export default nookConfig;
