import { useEffect } from 'react';

const siteName = 'subculture';

export default function useDocumentTitle(
  title: string,
  appendSitename: boolean,
): void {
  useEffect(
    () => {
      if (appendSitename && siteName) {
        document.title = `${title} | ${siteName}`;
      } else {
        document.title = title;
      }
    },
    [title, appendSitename],
  );
}
