import React from 'react';
import { Link } from 'react-router-dom';

interface ContainedImageProps {
  src: string,
  width: number,
  height: number,
  stretch?: boolean,
  href?: string,
  alt?: string,
}

function Image(props: { src: string, alt?: string }) {
  return <img src={props.src} alt={props.alt} />
}

export default function ContainedImage(props: ContainedImageProps) {
  const dimensionStyles = {
    maxWidth: props.stretch ? '100%' : props.width,
    maxHeight: props.height,
  }

  if (props.href) {
    return <Link to={props.href} style={dimensionStyles}>
      <Image src={props.src} alt={props.alt} />
    </Link>
  }

  return <div style={dimensionStyles}>
    <Image src={props.src} alt={props.alt} />
  </div>
}