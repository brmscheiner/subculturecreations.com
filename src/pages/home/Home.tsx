import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

import Card from '../../components/Card';
import Page from '../../components/Page';
import Link from '../../components/Link';
import Room from './Room';
import Extension from './Extension';

import Dog from './Dog';
import Laptop from './Laptop';
import Monitor from './Monitor';

function Widget(props: { children: React.ReactNode, title: string, href: string }) {
  return (
    <Card>
      <Link href={props.href}>
        {props.children}
        <h3 className="mt-1 text-2xl text-center">{props.title}</h3>
      </Link>
    </Card>
  )
}

export default function Home() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = debounce(() => setScroll(window.scrollY), 10, { leading: true });
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [setScroll]);
  
  return <Page title="Home">
    {true ? (
      <div>
      <Widget title="About" href="/about">
        <Dog />
      </Widget>
      <Widget title="Photos" href="/photos">
        <Laptop />      
      </Widget>
      <Widget title="Projects" href="/projects">
        <Monitor />
      </Widget>
      </div>
    ) : <div className="flex flex-nowrap">
    <Room scroll={scroll} />
    <Extension /></div>}
  </Page>
}