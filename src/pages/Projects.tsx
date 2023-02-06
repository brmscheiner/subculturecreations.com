import React from "react";
import Page from "../components/Page";
import Project from "../components/Project";

const data = [
  {
    title: "MDGO",
    repoUrl: "https://github.com/brmscheiner/mdgo",
    date: "2023+",
    content:
      "A simple CLI tool that lets you quickly run commands found in Markdown files.",
  },
  {
    title: "Subculture Creations",
    repoUrl: "https://github.com/brmscheiner/subculturecreations.com",
    date: "2022+",
    content:
      "The code for this website. Built using Typescript, React and Tailwind. Deployed via Netlify.",
  },
  {
    title: "Codex",
    repoUrl: "https://github.com/wildmeorg/codex-frontend",
    date: "2020-2022",
    content:
      "An open source platform for conservation research. I worked on the design and development of the UI, first independently and later leading a small team.",
  },
  {
    title: "UniFi Network",
    infoUrl: "https://www.ui.com/wi-fi",
    date: "2019-2020",
    content:
      "A web app used to configure WiFi networks. The app has millions of users and features many animations and visualizations.",
  },
  {
    title: "MP Studio",
    infoUrl: "https://motorizedprecision.com/mp-studio/",
    date: "2017-2018",
    content:
      "An Electron app used to control the motion of robotic arms for use in commercials and movies.",
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
