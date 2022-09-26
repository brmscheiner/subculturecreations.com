import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Article from '../components/Article';

const data = [
  {
    title: 'Hey',
    subtitle: 'Sup',
    content: 'Ok'
  }
]

export default function Articles() {
  useDocumentTitle('Articles', true);
  return (
    <>
      {data.map(datum => (
        <Article key={datum.title} {...datum} />
      ))}
    </>
  )
}