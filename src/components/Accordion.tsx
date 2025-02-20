import React, { useState } from 'react'
import ChevronDown from './icons/ChevronDown'
import ChevronUp from './icons/ChevronUp'

export default function Accordion(props: {
  title: string
  children: React.ReactNode
}) {
  const { title, children } = props
  const [open, setOpen] = useState(false)
  return (
    <div className='my-2'>
      <div
        className='flex w-full cursor-pointer justify-between border-x-2 border-b-2 p-2 first:border-t-2'
        onClick={() => setOpen(!open)}
      >
        <h4 className='select-none font-bold'>{title}</h4>
        {open ? <ChevronDown /> : <ChevronUp />}
      </div>
      <div className={`${open ? 'block' : 'hidden'} mt-1 p-2`}>{children}</div>
    </div>
  )
}
