import { useState, useEffect } from 'react';

const mediaQueryList = window.matchMedia('(max-width: 760px)')

export default function(): boolean {
  const [smallScreen, setSmallScreen] = useState(mediaQueryList.matches);
  useEffect(
    () => {
      function onChange() {
        if (mediaQueryList.matches && !smallScreen) {
          setSmallScreen(true);
        } else if (!mediaQueryList.matches && smallScreen) {
          setSmallScreen(false);
        }
      }

      mediaQueryList.addEventListener('change', onChange);

      return () => {
        mediaQueryList.removeEventListener('change', onChange);
      }
    },
    [],
  );
  return smallScreen;
}
