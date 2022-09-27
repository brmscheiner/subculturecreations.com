import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Project from '../components/Project';

const data = [
  {
    title: 'Subculture Creations',
    repoUrl: 'https://github.com/brmscheiner/supplecreations.com',
    content: 'The code for this very website. I used Typescript, React, Tailwind, and Netlify.'
  },
  {
    title: 'Codex',
    repoUrl: 'https://github.com/wildmeorg/codex-frontend',
    content: 'An open source platform for conservation research. I worked on the design and development of the UI from 2020 to late 2022.'
  },
  {
    title: 'MP Studio',
    infoUrl: 'https://motorizedprecision.com/mp-studio/',
    content: 'An Electron app used to control the motion of massive robot arms. I developed this application from 2017-2018.'
  },
]

export default function Projects() {
  useDocumentTitle('Projects', true);
  return (
    <>
      {data.map(datum => (
        <Project key={datum.title} {...datum} />
      ))}
    </>
  )
}