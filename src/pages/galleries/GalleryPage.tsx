import React from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery as GridGallery, Item } from "react-photoswipe-gallery";

import { routes } from "../../constants/routes";
import { ButtonLink, ButtonColors } from "../../components/Button";
import ContainedImage from "../../components/ContainedImage";
import Page from "../../components/Page";
import { Gallery } from "./types";

export default function GalleryPage(props: { data: Gallery }) {
  const { data } = props;
  return (
    <Page title={data.title}>
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="mt-2 text-4xl">{data.title}</h1>
        <div className="my-3">
          {typeof data.description === "string" ? (
            <p>{data.description}</p>
          ) : (
            data.description
          )}
        </div>
        <GridGallery id={data.path} withCaption>
          <div className="flex flex-wrap mb-4 gap-2">
            {data.images.map((image) => (
              <Item
                key={image.filename}
                original={image.paths.medium}
                thumbnail={image.paths.small}
                width={image.sizes.medium.width}
                height={image.sizes.medium.height}
                caption={image.alt}
              >
                {({ ref, open }) => (
                  <ContainedImage
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                    twoColumn
                    stretch={image?.stretch}
                    src={image.paths.small}
                    width={image.sizes.small.width}
                    height={image.sizes.small.height}
                    alt={image.alt}
                  />
                )}
              </Item>
            ))}
          </div>
        </GridGallery>
        <ButtonLink
          color={ButtonColors.Black}
          href={`/${routes.galleries}`}
          label="Back to all photos"
        />
      </div>
    </Page>
  );
}
