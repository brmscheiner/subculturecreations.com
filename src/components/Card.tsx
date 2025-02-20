import React from 'react'

export default function Card(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <div className='mx-auto mt-12 max-w-xl px-6 first:mt-20'>{children}</div>
  )
}
