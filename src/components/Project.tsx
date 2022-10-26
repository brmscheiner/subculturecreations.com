import React from "react";
import Card from "./Card";
import { ButtonLink, ButtonColors } from "./Button";

export default function Project(props: {
  title: string;
  repoUrl?: string;
  infoUrl?: string;
  content: string;
}) {
  const { title, repoUrl, infoUrl, content } = props;
  return (
    <Card>
      <p className="text-2xl mb-0.5" style={{ overflowWrap: "anywhere" }}>
        {title}
      </p>
      {repoUrl && (
        <ButtonLink
          external
          href={repoUrl}
          color={ButtonColors.Purple}
          label="View code"
        />
      )}
      {infoUrl && (
        <ButtonLink
          external
          href={infoUrl}
          color={ButtonColors.Blue}
          label="More info"
        />
      )}
      <p className="mt-2">{content}</p>
    </Card>
  );
}
