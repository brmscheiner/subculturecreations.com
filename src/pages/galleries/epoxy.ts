import { galleryImages } from "../../constants/galleryImages";

const exemplar = {
  ...galleryImages["epoxy1.jpg"],
  alt: "Before and after cookie table",
};

const images = [
  {
    ...galleryImages["epoxy1.jpg"],
    alt: "Before and after cookie table",
  },
  {
    ...galleryImages["epoxy2.jpg"],
    alt: "Applying citri-strip to remove the old finish",
  },
  {
    ...galleryImages["epoxy3.jpg"],
    alt: "The live edge had a lot of gummy old finish and some rotted areas",
  },
  {
    ...galleryImages["epoxy5.jpg"],
    alt: "I used caulk to create dams where I wanted to pour instead of building a mold around the entire piece",
  },
  {
    ...galleryImages["epoxy6.jpg"],
    alt: "I used epoxy tape to keep the epoxy from running out of the bottom",
  },
  {
    ...galleryImages["epoxy7.jpg"],
    alt: "Here is the table after pouring the epoxy",
  },
  {
    ...galleryImages["epoxy8.jpg"],
    alt: "I used black CA glue to fill hundreds of small holes and cracks",
  },
  {
    ...galleryImages["epoxy9.jpg"],
    alt: "A close-up of the black epoxy stains",
  },
  {
    ...galleryImages["epoxy10.jpg"],
    alt: "The finished table in my basement",
  },
  {
    ...galleryImages["epoxy11.jpg"],
    alt: "The finished table in its new home",
  },
  {
    ...galleryImages["epoxy12.jpg"],
    alt: "A close-up of the finished table",
  },
];

const epoxyPageConfig = {
  images,
  exemplar,
  path: "epoxy",
  title: "My first epoxy table",
  subtitle: "My brother found this wood at a thrift store for $24!",
  description:
    "My brother gifted me this really cool cookie he found at a thrift store for just $24. I thought the cracks and crevices would look great filled with lakes of black epoxy, so I set to work on my first deep pour epoxy project. The wood was in rough shape, with an old oil-based finish that was peeling off and gummy in places. I was able to remove the existing finish from the top and bottom of the table, but the edge proved to be more of a problem. I couldn't think of a good way to remove the finish from the craggy live edge, so I made the difficult decision to cut the edge off. In the end I think I did the right thing. This was my first experience trying to build something with epoxy and I made some mistakes. I should have sealed the entire surface with a clear coat before pouring the black, but instead I only sealed the places I was planning to pour. So unfortunately I wound up with some black stains here and there. But since the figure of the wood is so beautifully distracting I don't find the stains to be too noticeable. I sanded the table to 320 grit and finished it with Odie's oil. Does anyone know what kind of wood this is? I would love to know!",
};

export default epoxyPageConfig;
