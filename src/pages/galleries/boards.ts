
import B1 from './boards/b1.jpeg';
import B2 from './boards/b2.jpeg';
import B3 from './boards/b3.jpeg';
import AllBoards from './boards/all_boards.jpeg';
import Exemplar from './boards/boards_landscape.jpeg';

const exemplar = {
  src: Exemplar,
  width: 1512,
  height: 2016,
  alt: 'A collection of 5 handmade charcuterie boards',
}

const images = [
  {
    src: B1,
    width: 1512,
    height: 2016,
    alt: 'A rectangular charcuterie board made of walnut',
  },
  {
    src: B2,
    width: 1512,
    height: 2016,
    alt: 'A curvaceous charcuterie board made of walnut',
  },
  {
    src: B3,
    width: 1512,
    height: 2016,
    alt: 'A charcuterie board in the shape of a whale',
  },
  {
    src: AllBoards,
    width: 1512,
    height: 2016,
    alt: 'A collection of 5 handmade charcuterie boards',
  },
]

const boardsConfig = {
  images,
  exemplar,
  path: 'boards',
  title: 'Christmas boards',
  subtitle: 'I made a few cutting boards to give out as Christmas gifts.',
  description: 'These boards are good baords'
}

export default boardsConfig;
