import React from 'react';

import { routes } from '../../constants/routes';
import Card from '../../components/Card';
import { ButtonLink, ButtonColors } from '../../components/Button';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import coastlines from './coastlines';
import nook from './nook';
import boards from './boards';
import squirrels from './squirrels';
import { Gallery } from './types';

export const galleries = [coastlines, boards, nook, squirrels];

function GalleryStub(props: Gallery) {
  const { title, subtitle, exemplar, path } = props;
  return (
    <Card>
    <p className="text-2xl mb-0.5">{title}</p>
    <img className="w-full" src={exemplar.src} alt={exemplar.alt} />
    {subtitle && <p className="mt-2 mb-1">{subtitle}</p>}
    <ButtonLink href={`${routes.galleries}/${path}`} color={ButtonColors.Black} label="View all" />
    </Card>
  )
}

export default function Photos() {
  useDocumentTitle('Photos', true);
  return (
    <>
      {galleries.map(gallery => (
        <GalleryStub key={gallery.path} {...gallery} />
      ))}
    </>
  )
}