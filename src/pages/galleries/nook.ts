
import GluePhoto from './nook/glueup.jpeg';
import NookPhoto from './nook/nook.jpeg';
import TablePhoto from './nook/table.jpeg';

const exemplar = {
  src: NookPhoto,
  width: 1512,
  height: 2016,
  alt: 'Finished nook',
}

const images = [
  {
    src: GluePhoto,
    width: 1512,
    height: 2016,
    alt: 'Panel after glue-up and planing',
  },
  {
    src: TablePhoto,
    width: 1512,
    height: 2016,
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
