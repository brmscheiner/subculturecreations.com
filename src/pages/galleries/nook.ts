
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
    src: TablePhoto,
    width: 1512,
    height: 2016,
    alt: 'New table in the garage',
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
