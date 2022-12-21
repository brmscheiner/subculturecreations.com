import Accordion from "../components/Accordion";
import Page from "../components/Page";
import Card from "../components/Card";
import Link from "../components/Link";
import CopyText from "../components/CopyText";
import { clickableText } from "../constants/compositeStyles";

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

interface Item {
  key?: string;
  text: string;
}

function List(props: { title?: string; items: Item[] }) {
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
        <p className="mb-6">
          Ben is a frontend developer and UX designer based in Portland, Oregon. In 2022, he
          purchased this domain because{" "}
          <Link external href="https://www.benscheiner.com/" label="benscheiner.com" /> was taken by a different Ben who admittedly seems like a pretty cool guy. This Ben
          wanted a place on the internet to call his own, where he could ramble
          freely and put his creations on display.
        </p>

        <Accordion title="Skills">
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
        </Accordion>

        <Accordion title="Interests">
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
        </Accordion>
        <Accordion title="Contact">
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
        </Accordion>
      </Card>
    </Page>
  );
}
