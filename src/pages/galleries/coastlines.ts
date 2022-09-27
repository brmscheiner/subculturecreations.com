import Photo1 from './coastlines/1.jpg';
import Photo2 from './coastlines/2.jpg';
import Photo3 from './coastlines/3.jpg';
import Photo4 from './coastlines/4.jpg';
import Photo5 from './coastlines/5.jpg';
import Photo6 from './coastlines/6.jpg';
import Photo7 from './coastlines/7.jpg';
import Photo8 from './coastlines/8.jpg';
import Photo9 from './coastlines/9.jpg';
import Photo10 from './coastlines/10.jpg';
import Exemplar from './coastlines/coastlines_landscape.jpg';

const images = [
  {
    src: Photo1,
    width: 1512,
    height: 2016,
    alt: 'Photograph 1 of 10',
  },
  {
    src: Photo2,
    width: 1512,
    height: 2016,
    alt: 'Photograph 2 of 10',
  },
  {
    src: Photo3,
    width: 1512,
    height: 2016,
    alt: 'Photograph 3 of 10',
  },
  {
    src: Photo4,
    width: 1512,
    height: 2016,
    alt: 'Photograph 4 of 10',
  },
  {
    src: Photo5,
    width: 1512,
    height: 2016,
    alt: 'Photograph 5 of 10',
  },
  {
    src: Photo6,
    width: 1512,
    height: 2016,
    alt: 'Photograph 6 of 10',
  },
  {
    src: Photo7,
    width: 1512,
    height: 2016,
    alt: 'Photograph 7 of 10',
  },
  {
    src: Photo8,
    width: 1512,
    height: 2016,
    alt: 'Photograph 8 of 10',
  },
  {
    src: Photo9,
    width: 1512,
    height: 2016,
    alt: 'Photograph 9 of 10',
  },
  {
    src: Photo10,
    width: 1512,
    height: 2016,
    alt: 'Photograph 10 of 10',
  },
]

const galleryConfig = {
  images,
  exemplar: {
    src: Exemplar,
    width: 2016,
    height: 1512,
    alt: 'Patterns in the sand'
  },
  path: 'coastlines',
  title: 'Coastlines',
  subtitle: 'A series of black and white photos taken on the Oregon coast.',
  description: 'I love spending time on the coast observing all of the different textures formed in the sand. Erosion comes from so many different forces - lapping waves, harsh wind, heavy rain, tributaries flowing out to sea... Often the most interesting patterns are formed where these forces intersect. I used high-contrast, black and white filters to magnify the patterns I observed.'
}

export default galleryConfig;
