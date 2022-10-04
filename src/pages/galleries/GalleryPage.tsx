import React from 'react';
import 'photoswipe/dist/photoswipe.css'
import { Gallery as GridGallery, Item } from 'react-photoswipe-gallery'

import { routes } from '../../constants/routes';
import { ButtonLink, ButtonColors } from '../../components/Button';
import Page from '../../components/Page';
import { Gallery } from './types';

export default function GalleryPage(props: { data: Gallery }) {
  const { data } = props;
  return (
    <Page title={data.title}>
      <div className="xl:ml-72 p-4 w-5xl">
        <h1 className="mt-2 text-4xl">{data.title}</h1>
        <div className="my-3 max-w-3xl">{typeof data.description === 'string' ? <p>{data.description}</p> : data.description}</div>
        <GridGallery id={data.path} withCaption>
          <div className="flex flex-wrap gap-2 mb-4">
            {data.images.map(image => (
              <Item
                key={image.filename}
                original={image.paths.medium}
                thumbnail={image.paths.small}
                width={image.sizes.medium.width}
                height={image.sizes.medium.height}
                caption={image.alt}
              >
                {({ ref, open }) => (
                  <img
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    className="cursor-pointer"
                    onClick={open}
                    src={image.paths.small}
                    alt={image.alt}
                  />
                )}
              </Item>
            ))}
          </div>
        </GridGallery>
        <ButtonLink color={ButtonColors.Black} href={routes.galleries} label="Back to all photos" />
      </div>
    </Page>
  )
}