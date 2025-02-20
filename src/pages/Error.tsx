import { useRouteError } from 'react-router-dom'

import errorLogo from '../assets/error.svg'
import { ButtonColors, ButtonLink } from '../components/Button'
import Card from '../components/Card'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Error(props: { title?: string; message?: string }) {
  const { title = 'Something went wrong', message } = props
  const error = useRouteError()
  const errorString = error?.toString() || 'Could not stringify error'
  const errorMessage = message || errorString
  useDocumentTitle('Error', true)
  return (
    <Card>
      <div className='flex gap-2'>
        <img
          className='float-left h-44 w-auto'
          src={errorLogo}
          alt='An error occurred'
        />
        <div className='mt-2'>
          <h4 className='text-lg font-bold'>{title}</h4>
          <p className='mt-4 mb-2 text-sm'>{errorMessage}</p>
          <ButtonLink color={ButtonColors.Black} label='Return home' href='/' />
        </div>
      </div>
    </Card>
  )
}
