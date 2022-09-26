import React, { useState } from 'react'
import ChevronDown from './icons/ChevronDown';
import ChevronUp from './icons/ChevronUp';

export default function Accordion(props: { title: string, children: React.ReactNode }) {
  const { title, children } = props;
  const [open, setOpen] = useState(false);
  return (
    <div className="my-2">
      <div className="w-full cursor-pointer p-2 flex justify-between border-x-2 border-b-2 first:border-t-2" onClick={() => setOpen(!open)}>
        <h4 className="font-bold select-none">
          {title}
        </h4>
        {open ? <ChevronDown /> : <ChevronUp />}
      </div>
      <div className={`${open ? 'block' : 'hidden'} p-2`}>
        {children}
      </div>
    </div>
  )
}