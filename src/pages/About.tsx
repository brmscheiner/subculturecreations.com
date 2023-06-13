import Page from "../components/Page";
import Card from "../components/Card";
import Link from "../components/Link";
import Tabs, { TabItem } from "../components/Tabs";
import CopyText from "../components/CopyText";


// Consistent content height keeps page from jumping when switching tabs
const tabContentMinHeight = 700;

const tabItems: TabItem[] = [
  { label: 'Skills', id: 'skills', default: true, renderContent: () => {
    return (
      <div style={{ minHeight: tabContentMinHeight }}>
      <List
        title="Experience"
        items={[
          {
            text: "9 years of programming",
          },
          {
            text: "7 years of frontend development",
          },
          {
            text: "3 years of UX design",
          },
          {
            text: "2 years of data analysis",
          },
        ]}
      />
      <List
        title="Languages"
        items={[
          {
            text: "Typescript/Javascript",
          },
          {
            text: "HTML/CSS",
          },
          {
            text: "Python",
          },
        ]}
      />
      <List
        title="Ecosystems"
        items={[
          {
            text: "React",
          },
          {
            text: "Material-UI",
          },
          {
            text: "Fluent",
          },
          {
            text: "d3.js",
          },
        ]}
      />
      <List
        title="Software"
        items={[
          {
            text: "Figma",
          },
        ]}
      />
      </div>
    )
  } },
  { label: 'Interests', id: 'interests', renderContent: () => {
    return (
      <div style={{ minHeight: tabContentMinHeight }}>
      <List
        title="Yes, please!"
        items={[
          {
            text: "Working with artists, scientists and local businesses",
          },
          {
            text: "Ambitious data visualization and animation projects",
          },
          {
            text: "Mission-driven organizations",
          },
        ]}
      />
        <List
          title="No thank you"
          items={[
            {
              text: "Fintech (including crypto)",
            },
            {
              text: "Advertising",
            },
          ]}
        />
      </div>
    )
  } },
  { label: 'Contact', id: 'contact', renderContent: () => {
    return (
      <div style={{ minHeight: tabContentMinHeight }}>
      <Referral url="https://github.com/brmscheiner" label="Github" />
      <Referral
        url="https://www.linkedin.com/in/brmscheiner/"
        label="LinkedIn"
      />
      <Referral
        url="mailto:brmscheiner@gmail.com"
        label="brmscheiner@gmail.com"
        copyable
      />
      </div>
    )
  } },
];

function Referral(props: { url: string; label: string; copyable?: boolean }) {
  const { url, label, copyable } = props;
  return (
    <p className="mb-1">
      {copyable ? (
        <CopyText value={label}>
          <Link external href={url} label={label} />
        </CopyText>
      ) : (
        <Link external href={url} label={label} />
      )}
    </p>
  );
}

interface ListItem {
  key?: string;
  text: string;
}

function List(props: { title?: string; items: ListItem[] }) {
  return (
    <p>
      {props.title}
      <ul className="list-disc mb-3 ml-4 leading-6">
        {props.items.map((item) => (
          <li key={item.key || item.text}>{item.text}</li>
        ))}
      </ul>
    </p>
  );
}

export default function About() {
  return (
    <Page title="About">
      <Card>
        <h3 className="font-bold text-lg my-2">Hello, I'm Ben =)</h3>
        <p className="mb-6">
          I'm a software engineer and UX designer based in Portland, Oregon.
        </p>
        <h3 className="font-bold text-lg my-2">Why Subculture Creations?</h3>
        <p className="mb-6">
          As a lover of racquetball, synthesizers, ultimate frisbee, woodworking, and so many other fringe activities, I pass my time hopping from one subculture to the next. I sincerely believe that the best and brightest people are found in the margins.
        </p>
        <h3 className="font-bold text-lg my-2">More about Ben</h3>
        <Tabs items={tabItems} />
      </Card>
    </Page>
  );
}
