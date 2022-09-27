import React from 'react';
import { Gallery as GridGallery } from 'react-grid-gallery';

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
      <p className="my-3 max-w-3xl">{data.description}</p>
      <GridGallery images={data.images} enableImageSelection={false} rowHeight={420} />
      <ButtonLink href={routes.galleries} label="Back to photos" />
    </div>
  )
}