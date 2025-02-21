import Page from '../components/Page'
import { Project, ProjectProps } from '../components/Project'

const data: ProjectProps[] = [
  {
    title: 'Githubbify',
    type: 'hosted',
    url: '/githubbify',
    external: false,
    date: '2025+',
    content:
      'A tool to make any image look like the Github contributions heatmap!',
  },
  {
    title: 'MDGO',
    type: 'code',
    url: 'https://github.com/brmscheiner/mdgo',
    external: true,
    date: '2023',
    content:
      'A simple CLI tool that lets you quickly run commands found in Markdown files.',
  },
  {
    title: 'Subculture Creations',
    type: 'code',
    url: 'https://github.com/brmscheiner/subculturecreations.com',
    external: true,
    date: '2022+',
    content:
      'The code for this website. I built it using Typescript, React and Tailwind.',
  },
  {
    title: 'Codex',
    type: 'code',
    url: 'https://github.com/wildmeorg/codex-frontend',
    external: true,
    date: '2020-2022',
    content:
      'An open source platform for conservation research. I worked on the design and development of the UI, first independently and later leading a small team.',
  },
  {
    title: 'UniFi Network',
    type: 'info',
    url: 'https://www.ui.com/wi-fi',
    external: true,
    date: '2019-2020',
    content:
      'A web app used to configure WiFi networks. The app is rich with animations and visualizations and serves millions of users.',
  },
  {
    title: 'MP Studio',
    type: 'info',
    url: 'https://motorizedprecision.com/mp-studio/',
    external: true,
    date: '2017-2018',
    content:
      'An Electron app used to control the motion of robot arms for use in commercials and movies. In most cases, the role of the robot was to hold the camera, acting as a perfectly smooth and precise camera operator.',
  },
]

export default function Projects() {
  return (
    <Page title='Projects'>
      {data.map(datum => (
        <Project key={datum.title} {...datum} />
      ))}
    </Page>
  )
}
