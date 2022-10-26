import React from "react";

import { routes } from "../../constants/routes";
import Page from "../../components/Page";
import Card from "../../components/Card";
import { ButtonLink, ButtonColors } from "../../components/Button";
import ContainedImage from "../../components/ContainedImage";
import coastlines from "./coastlines";
import nook from "./nook";
import boards from "./boards";
import squirrels from "./squirrels";
import { Gallery } from "./types";

export const galleries = [coastlines, boards, nook, squirrels];

function GalleryStub(props: Gallery) {
  const { title, subtitle, exemplar, path } = props;
  const href = `${routes.galleries}/${path}`;
  return (
    <Card>
      <p className="text-2xl mb-0.5">{title}</p>
      <ContainedImage
        stretch
        href={href}
        src={exemplar.paths.medium}
        alt={exemplar.alt}
        width={exemplar.sizes.medium.width}
        height={exemplar.sizes.medium.height}
      />
      {subtitle && <p className="mt-2 mb-1">{subtitle}</p>}
      <ButtonLink href={href} color={ButtonColors.Black} label="View all" />
    </Card>
  );
}

export default function Photos() {
  return (
    <Page title="Photos">
      {galleries.map((gallery) => (
        <GalleryStub key={gallery.path} {...gallery} />
      ))}
    </Page>
  );
}
