import React from 'react';
import 'photoswipe/dist/photoswipe.css'
import { Gallery as GridGallery, Item } from 'react-photoswipe-gallery'

import { routes } from '../../constants/routes';
import { ButtonLink } from '../../components/Button';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { Gallery } from './types';

export default function GalleryPage(props: { data: Gallery }) {
  const { data } = props;
  useDocumentTitle(data.title, true);
  return (
    <div className="xl:ml-72 p-4 w-5xl">
      <ButtonLink href={routes.galleries} label="Back to photos" />
      <h1 className="mt-2 text-4xl">{data.title}</h1>
      <div className="my-3 max-w-3xl">{typeof data.description === 'string' ? <p>{data.description}</p> : data.description}</div>
      <GridGallery id={data.path} withCaption>
        {data.images.map(image => (
          <Item original={image.src} thumbnail={image.src} width={image.width} height={image.height} caption={image.alt}>
            {({ ref, open }) => (
              /* @ts-expect-error */
              <img ref={ref} onClick={open} src={image.src} alt={image.alt} />
            )}
          </Item>
        ))}
      </GridGallery>
      <ButtonLink href={routes.galleries} label="Back to photos" />
    </div>
  )
}