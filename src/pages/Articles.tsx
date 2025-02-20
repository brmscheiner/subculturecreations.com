import Article from '../components/Article'
import useDocumentTitle from '../hooks/useDocumentTitle'

const data = [
  {
    title: 'Hey',
    subtitle: 'Sup',
    content: 'Ok',
  },
]

export default function Articles() {
  useDocumentTitle('Articles', true)
  return (
    <>
      {data.map(datum => (
        <Article key={datum.title} {...datum} />
      ))}
    </>
  )
}
