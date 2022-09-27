
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
  title: 'DIY Nook',
  subtitle: 'I made a teak table and cut an old church pew in half to create a breakfast nook.',
  description: 'My first table! I finished the teak with Osmo wood wax and used biscuits to join up the planks. The benches were simple, just a church pew cut in half, but after buying the pew I realized it only had 3 legs! So I had to construct a fourth leg.'
}

export default nookConfig;
