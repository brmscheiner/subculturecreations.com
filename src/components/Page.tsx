import React from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Navigation from './Navigation'

export default function Page(props: {
  children: React.ReactNode
  title: string
}) {
  const { title, children } = props
  useDocumentTitle(title, true)
  return (
    <div className='mb-40 font-mono'>
      <Navigation />
      {children}
    </div>
  )
}
