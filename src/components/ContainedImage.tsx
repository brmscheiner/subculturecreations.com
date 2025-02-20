import React, { LegacyRef, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

interface ContainedImageProps {
  src: string
  width: number
  height: number
  stretch?: boolean
  twoColumn?: boolean
  href?: string
  alt?: string
  ref?: React.MutableRefObject<HTMLImageElement>
  onClick?: React.MouseEventHandler<HTMLImageElement>
}

const ContainedImage = React.forwardRef(
  (props: ContainedImageProps, ref: LegacyRef<HTMLImageElement>) => {
    ContainedImage.displayName = 'ContainedImage'
    const { width, height, stretch, twoColumn, src, alt, href, onClick } = props
    const [loading, setLoading] = useState(true)
    const handleLoad = useCallback(() => setLoading(false), [])

    const fullWidth = stretch || (twoColumn && width > height)
    const halfWidth = twoColumn && !fullWidth

    const dimensionStyles = {
      width: fullWidth ? '100%' : halfWidth ? 'calc(50% - 0.25rem)' : width,
      height: stretch || twoColumn ? 'unset' : height,
      aspectRatio: stretch ? width / height : 'unset',
    }

    const classes = loading ? 'loading-gradient' : ''

    const Image = (
      <img
        onLoad={handleLoad}
        src={src}
        ref={ref}
        onClick={onClick}
        alt={alt}
      />
    )

    return href ? (
      <Link to={href} className='cursor-pointer'>
        <div style={dimensionStyles} className={classes}>
          {Image}
        </div>
      </Link>
    ) : (
      <div style={dimensionStyles} className={`${classes} cursor-pointer`}>
        {Image}
      </div>
    )
  }
)

export default ContainedImage
