import { ButtonColors, ButtonLink } from '../../components/Button'
import Card from '../../components/Card'
import ContainedImage from '../../components/ContainedImage'
import Page from '../../components/Page'
import boards from './boards'
import coastlines from './coastlines'
import epoxy from './epoxy'
import galapagos from './galapagos'
import nook from './nook'
import squirrels from './squirrels'
import { Gallery } from './types'

export const galleries = [galapagos, epoxy, coastlines, boards, nook, squirrels]

function GalleryStub(props: Gallery) {
  const { title, subtitle, exemplar, path } = props

  return (
    <Card>
      <p className='mb-0.5 text-2xl'>{title}</p>
      <ContainedImage
        stretch
        href={path}
        src={exemplar.paths.medium}
        alt={exemplar.alt}
        width={exemplar.sizes.medium.width}
        height={exemplar.sizes.medium.height}
      />
      {subtitle && <p className='mt-2 mb-1'>{subtitle}</p>}
      <ButtonLink href={path} color={ButtonColors.Black} label='View all' />
    </Card>
  )
}

export default function Photos() {
  return (
    <Page title='Photos'>
      {galleries.map(gallery => (
        <GalleryStub key={gallery.path} {...gallery} />
      ))}
    </Page>
  )
}
