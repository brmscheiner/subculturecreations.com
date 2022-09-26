import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { clickableText } from '../constants/compositeStyles';

export default function Link(props: { href: string, label: string, external?: boolean }) {
  const { href, label, external = false } = props;
  if (external) {
    return (
      <a className={clickableText} href={href} target="_blank" rel="noreferrer">{label}</a>
    )
  }
  return (
    <RouterLink className={clickableText} to={href}>{label}</RouterLink>
  )
}
