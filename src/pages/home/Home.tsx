import debounce from 'lodash/debounce'
import { useEffect, useState } from 'react'

import Card from '../../components/Card'
import Link from '../../components/Link'
import Page from '../../components/Page'
import Extension from './Extension'
import Room from './Room'

import Dog from './Dog'
import Laptop from './Laptop'
import Monitor from './Monitor'

const mobileView = true // todo: finish desktop layout

function Widget(props: {
  children: React.ReactNode
  title: string
  href: string
}) {
  return (
    <Card>
      <Link href={props.href}>
        {props.children}
        <h3 className='mt-1 text-center text-2xl'>{props.title}</h3>
      </Link>
    </Card>
  )
}

export default function Home() {
  const [scroll, setScroll] = useState(0)
  useEffect(() => {
    const onScroll = debounce(() => setScroll(window.scrollY), 10, {
      leading: true,
    })
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [setScroll])

  return (
    <Page title='Home'>
      {mobileView ? (
        <div>
          <Widget title='About' href='/about'>
            <Dog />
          </Widget>
          <Widget title='Photos' href='/photos'>
            <Laptop />
          </Widget>
          <Widget title='Projects' href='/projects'>
            <Monitor />
          </Widget>
        </div>
      ) : (
        <div className='flex flex-nowrap'>
          <Room scroll={scroll} />
          <Extension />
        </div>
      )}
    </Page>
  )
}
