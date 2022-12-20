import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

import Page from '../../components/Page';
import Room from './Room';
import Extension from './Extension';

export default function Home() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = debounce(() => setScroll(window.scrollY), 10, { leading: true });
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [setScroll]);
  
  return <Page title="Home">
    <div className="flex flex-nowrap">
      <Room scroll={scroll} />
      <Extension />
    </div>
  </Page>
}