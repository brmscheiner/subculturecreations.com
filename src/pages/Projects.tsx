import React from "react";
import Page from "../components/Page";
import Project from "../components/Project";

const data = [
  {
    title: "Subculture Creations",
    repoUrl: "https://github.com/brmscheiner/subculturecreations.com",
    content:
      "The code for this very website. I used Typescript, React, Tailwind, and Netlify.",
  },
  {
    title: "Codex",
    repoUrl: "https://github.com/wildmeorg/codex-frontend",
    content:
      "An open source platform for conservation research. I worked on the design and development of the UI from 2020 to late 2022.",
  },
  {
    title: "MP Studio",
    infoUrl: "https://motorizedprecision.com/mp-studio/",
    content:
      "An Electron app used to control the motion of robot arms for use in commercials and movies. I worked on this application in 2017 and 2018.",
  },
];

export default function Projects() {
  return (
    <Page title="Projects">
      {data.map((datum) => (
        <Project key={datum.title} {...datum} />
      ))}
    </Page>
  );
}
