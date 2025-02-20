import { ButtonColors, ButtonLink } from './Button'
import Card from './Card'

const labelMap = {
  hosted: 'View project',
  info: 'More info',
  code: 'View code',
}
const colorMap = {
  hosted: ButtonColors.Green,
  info: ButtonColors.Purple,
  code: ButtonColors.Blue,
}

export interface ProjectProps {
  title: string
  date?: string
  url: string
  type: 'code' | 'info' | 'hosted'
  content: string
  external: boolean
}
export function Project({
  title,
  date,
  url,
  type,
  content,
  external,
}: ProjectProps) {
  return (
    <Card>
      <div className='flex flex-wrap items-end justify-between'>
        <p className='mb-0.5 text-2xl' style={{ overflowWrap: 'anywhere' }}>
          {title}
        </p>
        <div>{date}</div>
      </div>
      <ButtonLink
        external={external}
        href={url}
        color={colorMap[type]}
        label={labelMap[type]}
      />
      <p className='mt-2'>{content}</p>
    </Card>
  )
}
