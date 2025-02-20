import React from 'react'

export default function Card({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto mt-12 max-w-xl px-6 first:mt-20 ${className}`}>
      {children}
    </div>
  )
}
