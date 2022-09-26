import React from 'react';

import Accordion from '../components/Accordion';
import Card from '../components/Card';
import Link from '../components/Link';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { clickableText } from '../constants/compositeStyles';

function Referral(props: { url: string, label: string }) {
  const { url, label } = props;
  return (
    <p className="mb-1">
      <Link external href={url} label={label} />
    </p>
  )
}

export default function About() {
  useDocumentTitle('About', true);
  return (
    <Card>
      <p className="mb-6">Ben is a frontend developer based in Portland, Oregon. In 2022, he purchased <span className={clickableText}>subculturecreations.com</span> because <span className={clickableText}>benscheiner.com</span> was taken and <span className={clickableText}>ben.com</span> was very expensive. He wanted a place on the internet to call his own, where he could ramble freely and put his creations on display.</p>

      <Accordion title="Skills">
        <p>
          - 6 years of frontend development
        </p>
        <p>
          - 2 years of wrangling data
        </p>
        <p className="mb-2">
          - 2 years of UX design
        </p>
        <p className="mb-2">
          Languages: Typescript, Javascript, HTML, CSS, Python
        </p>
        <p className="mb-2">
          Ecosystems: React, Material-UI, d3.js 
        </p>
        <p>
          Software: Figma
        </p>
      </Accordion>

      <Accordion title="Interests">
        <p className="mb-2">
          - Working with non-profits, B Corps and local businesses
        </p>
        <p className="mb-2">
          - Data visualization 
        </p>
        <p className="mb-2">
          - UX design work
        </p>
      </Accordion>
      <Accordion title="Contact">
        <Referral url="https://github.com/brmscheiner" label="Github" />
        <Referral url="https://www.linkedin.com/in/brmscheiner/" label="LinkedIn" />
        <Referral url="mailto:brmscheiner@gmail.com" label="brmscheiner@gmail.com" />
      </Accordion>
    </Card>
  )
}