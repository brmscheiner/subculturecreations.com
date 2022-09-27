
import B1 from './squirrels/2.jpg';
import B2 from './squirrels/3.jpg';
import Landscape from './squirrels/squirrels_landscape.jpg';

const exemplar = {
  src: Landscape,
  width: 1512,
  height: 2016,
  alt: 'Ben with a squirrel',
}

const images = [
  {
    src: B1,
    width: 1512,
    height: 2016,
    alt: 'New table in the garage',
  },
  {
    src: B2,
    width: 1512,
    height: 2016,
    alt: 'New table in the garage',
  },
  exemplar,
]

const boardsConfig = {
  images,
  exemplar,
  path: 'squirrels',
  title: 'A temporary addition to the family',
  subtitle: "That's right, I adopted a squirrel! (Well, technically two squirrels).",
  description: 'These boards are good baords'
}

export default boardsConfig;
