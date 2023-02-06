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
            text: "Typescript",
          },
          {
            text: "Javascript",
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
        items={[
          {
            text: "Working with non-profits, B Corps and local businesses",
          },
          {
            text: "More design work!",
          },
          {
            text: "Data visualization",
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
        <h3 className="font-bold text-lg my-2">Why Subculture Creations?</h3>
        <p className="mb-6">
          Well, for one, <Link external href="https://www.benscheiner.com/" label="benscheiner.com" /> was taken by a different Ben (who admittedly seems like a pretty cool guy).{" "}
          But as a lover of racquetball, ultimate frisbee, synthesizers, and so many other fringe activities, I wanted to pay homage to the subculture. I honestly believe that{" "}
          subcultures are what make life interesting an drive humanity forward. The best ideas are usually found in the margins.
        </p>
        <h3 className="font-bold text-lg my-2">Why make a website in the first place?</h3>
        <p className="mb-6">
          I am a software engineer and a web designer, so it felt weird not to have a site of my own. Plus I don't really maintain a social media presence, so I wanted a{" "}
          place to share my thoughts and creations.
        </p>
        <h3 className="font-bold text-lg my-2">More about Ben</h3>
        <Tabs items={tabItems} />
      </Card>
    </Page>
  );
}
