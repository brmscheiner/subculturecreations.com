import React from "react";
import Card from "./Card";
import { ButtonLink, ButtonColors } from "./Button";

export default function Project(props: {
  title: string;
  date?: string;
  repoUrl?: string;
  infoUrl?: string;
  content: string;
}) {
  const { title, date, repoUrl, infoUrl, content } = props;
  return (
    <Card>
      <div className="flex flex-wrap justify-between items-end">
       <p className="text-2xl mb-0.5" style={{ overflowWrap: "anywhere" }}>
          {title}
        </p>
        <div>
          {date}
        </div>
      </div>

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
