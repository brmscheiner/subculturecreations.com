import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { clickableText } from '../constants/compositeStyles'

export default function Link(props: {
  href: string
  className?: string
  label?: string
  external?: boolean
  children?: React.ReactNode
}) {
  const { className, href, label, children, external = false } = props
  const classes = className ? `${clickableText} ${className}` : clickableText
  if (external) {
    return (
      <a className={classes} href={href} target='_blank' rel='noreferrer'>
        {label || children}
      </a>
    )
  }
  return (
    <RouterLink className={classes} to={href}>
      {label || children}
    </RouterLink>
  )
}
