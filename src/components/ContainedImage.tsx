import React, { LegacyRef, useCallback, useState } from "react";
import { Link } from "react-router-dom";

interface ContainedImageProps {
  src: string;
  width: number;
  height: number;
  stretch?: boolean;
  href?: string;
  alt?: string;
  ref?: React.MutableRefObject<HTMLImageElement>;
  onClick?: (e: any) => void;
}

const ContainedImage = React.forwardRef(
  (props: ContainedImageProps, ref: LegacyRef<HTMLImageElement>) => {
    const { width, height, stretch, src, alt, href, onClick } = props;
    const [loading, setLoading] = useState(true);
    const handleLoad = useCallback(() => setLoading(false), []);

    const dimensionStyles = {
      width: stretch ? "100%" : width,
      height: stretch ? "unset" : height,
      aspectRatio: stretch ? width / height : "unset",
    };

    const classes = loading ? "loading-gradient" : "";

    const imageProps = {
      onLoad: handleLoad,
      src,
      ref,
      onClick,
    };

    if (href) {
      return (
        <Link to={href} className="cursor-pointer">
          <div style={dimensionStyles} className={classes}>
            <img {...imageProps} alt={alt} />
          </div>
        </Link>
      );
    }

    return (
      <div style={dimensionStyles} className={`${classes} cursor-pointer`}>
        <img {...imageProps} alt={alt} />
      </div>
    );
  }
);

export default ContainedImage;
