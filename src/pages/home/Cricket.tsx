import React from "react";

function getX(start: number, end: number, scroll: number) {
  const scalar = Math.sin(scroll * 0.03);
  const n = scalar * start + (1 - scalar) * end;
  return `rgb(${n}, ${n}, ${n})`;
}

function getY(start: number, end: number, scroll: number) {
  const scalar = Math.cos(scroll * 0.03);
  const n = scalar * start + (1 - scalar) * end;
  return `rgb(${n}, ${n}, ${n})`;
}

export const cricketGradientId = 'cricket-gradient';

export function CricketGradient(props: { scroll: number }) {
  return (
    <radialGradient
    id="cricket-gradient"
    cx="0"
    cy="0"
    r="1"
    gradientTransform="matrix(212.71305 138.94327 -147.34425 225.5744 1329.52 1171.07)"
    gradientUnits="userSpaceOnUse"
  >
    <stop stopColor={getX(97, 151, props.scroll)}></stop>
    <stop offset="0.35" stopColor={getY(97, 151, props.scroll)}></stop>
    <stop offset="1"></stop>
  </radialGradient>
  )
}

function Cricket(props: { scroll: number }) {
  return (
    <path
    fill="url(#paint0_radial_24_7)"
    d="M1362.99 1256.58l-1.84-14.64a4 4 0 00-2.96-3.37l-.28-.08c-.2-.05-.41-.09-.62-.11l-2.85-.28-4.25-.77-3.42-.73c-.2-.04-.41-.07-.61-.08l-3.22-.19c-.45-.03-.9-.13-1.32-.3l-1.68-.71c-.61-.26-1.14-.65-1.55-1.16l-2.22-2.71-2.34-3.51-1.85-2.41c-.29-.39-.65-.72-1.07-.97l-2.69-1.67c-.34-.21-.71-.36-1.09-.46l-2.62-.69-2.68-.87-1.67-.7c-.32-.13-.67-.23-1.02-.27l-1.72-.23a5.22 5.22 0 00-.79-.03l-.65.05-2.61.17-1.96.13c-.43.03-.85.13-1.25.29l-.67.27c-.17.08-.34.16-.51.26l-1.02.6c-.49.29-1.05.46-1.62.49-.79.06-1.58-.15-2.24-.58l-.93-.61c-.16-.1-.31-.21-.45-.34l-.55-.48c-.59-.52-1.33-.85-2.11-.95l-.72-.1a3.88 3.88 0 00-1.44.08l-1.8.42c-.39.09-.76.24-1.1.44l-1.5.88-.54.41c-.62.48-1.38.77-2.17.82l-1.53.1c-.26.02-.52.01-.78-.02l-2.26-.3-1.14-.2c-.64-.12-1.31-.08-1.93.12l-1.1.36-.55.22c-.61.25-1.06.8-1.17 1.45-.12.67.12 1.35.63 1.8l.12.11c.11.09.21.2.3.32l.77 1.01c.16.2.34.4.54.57l2.49 2.18 1.67 1.46 1.37 1.2c.2.17.38.36.54.57l1.32 1.72c.45.58.5 1.38.13 2.02a1.8 1.8 0 01-.96.8l-2.43.88c-.35.12-.72.2-1.09.22l-2.44.17c-.43.02-.86-.02-1.28-.12l-1.38-.36c-.78-.21-1.6-.17-2.36.1l-1.89.68c-.35.13-.72.2-1.09.23l-2.13.14c-.29.02-.59.01-.87-.04l-4.34-.66-4.34-.99c-.65-.15-1.24-.46-1.74-.89l-1.75-1.53c-.55-.48-1.21-.8-1.92-.93l-2.07-.37c-.71-.13-1.38-.45-1.92-.93l-.69-.6c-.46-.4-1.02-.7-1.62-.86l-2.29-.59-2.68-.7c-.34-.09-.66-.26-.93-.49-.45-.4-1.04-.6-1.65-.56l-1.14.08-1.7.11c-.26.02-.52.01-.78-.03l-1.11-.14c-.75-.1-1.45-.42-2.02-.92a3.76 3.76 0 01-1.12-1.7l-.2-.63a3.84 3.84 0 00-.36-.8l-.63-1.08c-.22-.37-.5-.7-.82-.98l-.47-.42c-.47-.41-.83-.92-1.07-1.49l-.39-.96a3.96 3.96 0 01-.17-2.52l.21-.81c.19-.72.58-1.37 1.11-1.89l1.87-1.77c.18-.18.37-.33.58-.47l4.21-2.72 4.56-2.4 6.13-2.5 9.19-3.76 3.67-1.6a2.936 2.936 0 001.16-4.49l-3.93-3.93-3.93-3.94-3.41-3.96-1.59-1.74c-.44-.48-1-.85-1.62-1.07l-2.42-.85c-.26-.09-.53-.16-.81-.19l-4.02-.53c-.56-.08-1.1-.27-1.58-.57l-2.69-1.66c-.27-.17-.56-.3-.87-.4l-4.56-1.48c-.23-.07-.45-.17-.66-.28l-3.63-1.95c-.27-.14-.52-.31-.74-.51l-4.28-3.75c-.26-.22-.49-.48-.68-.77l-3.52-5.2c-.17-.26-.32-.54-.43-.84l-1.75-4.67-4.21 1.24c-.28.08-.56.13-.86.15l-2.04.14c-.43.02-.86-.02-1.28-.12l-2.57-.68-3.45-1.03c-.55-.17-1.05-.45-1.48-.82l-1.58-1.38-2.85-2.5c-.33-.28-.69-.51-1.09-.68l-2.64-1.1-3.76-1.33-4.11-.18c-.41-.02-.82.03-1.22.14l-3.68.99c-.57.16-1.17.18-1.76.08l-3.36-.61a3.554 3.554 0 01-1.91 2.32l-1.04.5-1.21.71c-.53.31-1.14.49-1.76.54l-2.71.18-2.8.18c-.22.02-.44.01-.66-.01l-2.84-.28-3.72-.8-1.39-.18c-.79-.11-1.49-.57-1.9-1.26l-.06-.11a2.273 2.273 0 01.48-2.88l1.17-1.01c.18-.15.38-.29.58-.41l1.71-1.01-1.22-1.07c-.65-.57-1.47-.91-2.34-.97l-2.36-.18-4.24-.77-1.61-.52c-.7-.23-1.32-.64-1.8-1.2l-.79-.92c-.12-.14-.26-.28-.4-.4l-2.36-2.06c-.14-.13-.29-.24-.45-.34l-1.16-.76c-.52-.34-.96-.8-1.27-1.33l-.71-1.2-.9-.79a5.18 5.18 0 01-.4-.41l-.65-.75c-.56-.66-.9-1.48-.95-2.34l-.05-.76-.08-1.09c-.06-.94.38-1.85 1.15-2.39l1.26-.87 2.99-2.3 4-2.89 4.56-2.4 5.87-2.4c.17-.07.34-.15.5-.25l2.47-1.45c.21-.12.41-.26.59-.41l.82-.71c.58-.5 1.01-1.15 1.23-1.88l.95-3.17 1.36-3.23 1.35-2.35c.34-.61.84-1.11 1.44-1.46l4.13-2.42 3.94-3.02c.37-.28.77-.5 1.21-.64l3.03-.97c.28-.09.55-.21.8-.36l3.66-2.15 3.79-2.22c.16-.09.33-.18.51-.25l4.33-1.77 5.63-1.95-.86-.76a2.587 2.587 0 01-.76-2.74l.38-1.15c.2-.64.78-1.09 1.45-1.13.3-.02.59-.12.83-.29l2.13-1.48 1.6-1.11a4.03 4.03 0 012.01-.71l1.09-.07c.62-.04 1.22-.22 1.76-.54l2.21-1.3 2.5-1.74.98-.83c.65-.57 1.48-.9 2.34-.96h.07c.79-.06 1.57.12 2.26.52l1.68.97c.36.2.68.46.96.76l1.56 1.7c.19.21.35.44.5.68l1.56 2.66 1.44 2.08c.2.28.36.6.48.93l.94 2.63c.11.3.25.59.43.86l2.07 3.11 3.8-1.22c.2-.07.4-.15.59-.25l2.53-1.29a3.99 3.99 0 011.55-.43l4.37-.29c.37-.02.74 0 1.1.08l2.66.57c.35.08.68.2.99.36l2.24 1.15 2.23 1.27c.68.4 1.47.58 2.25.53l1.16-.08c.51-.03 1-.16 1.46-.38l1.85-.89 1.37-.66c.76-.36 1.61-.48 2.44-.33l.54.1c.21.04.41.09.61.16l2.69.95c.51.18 1.05.25 1.59.21l4.1-.27c.2-.01.4-.04.6-.09l6.12-1.36c.2-.04.4-.07.6-.09l4.36-.29c.37-.02.74.01 1.11.08l2.56.56c.41.08.8.23 1.15.44l.5.28c.4.23.83.39 1.28.47l2.68.48c.58.11 1.18.08 1.75-.07l.8-.22c.6-.16 1.23-.18 1.84-.06l4.42.9c.33.07.65.17.95.32l2.44 1.18c.59.29 1.1.72 1.49 1.26l2.03 2.82c.18.24.38.47.61.67l1.83 1.59c.4.36.88.63 1.39.8l1.17.38c.48.15.99.22 1.5.18l.6-.04c.48-.03.95-.15 1.38-.34l3.17-1.44c.16-.07.33-.13.5-.18a3.33 3.33 0 013.64 1.37l1.01 1.52 2.3 2.99 4.74 5.52c.25.29.53.54.85.75l6.1 3.96 3.05 2.22c.17.12.33.26.48.41l3.33 3.33c.25.25.53.47.84.64l2.31 1.33c.33.19.69.33 1.07.42l5.97 1.41c.26.06.51.15.75.26l5.13 2.37c.3.14.59.32.85.53l7.55 6.16c.25.21.53.38.82.52l4.43 2.09 14.69 7.93 16.32 8.88 24.53 14.1 16.57 12.53 10.91 9.54c.15.14.29.28.42.43l7.78 9.2 12 14.93 8.49 12.69c.16.24.3.51.41.78l5.54 14.41 6.41 17.4 3 7.35c.09.21.15.42.2.64l1.36 6.09c.04.2.07.4.09.6l.46 7.02c.03.34.01.68-.06 1.01l-2.62 13.84-2.02 9.05-.9 10.02-.32 18.9 1.5 22.45 1.08 16.18-.25 12.08.26 3.84c.12 1.75-.92 3.37-2.56 4l-1.77.67c-1.32.51-2.8.28-3.9-.59l-3.75-2.95-5.81-5.08c-.57-.5-.99-1.15-1.2-1.88l-2.39-8.14-4.63-14.38-2.78-10.3-3.03-13.95-4.28-17.02-1.07-8.76c-.05-.4-.04-.81.03-1.2l.27-1.53.24-2.76c.06-.65.28-1.29.63-1.84l.57-.87c.21-.32.46-.6.75-.85l.75-.65c.52-.45.92-1.02 1.16-1.67l.62-1.72.76-2.34c.08-.23.17-.44.28-.65.42-.81 1.54-2.98 2.13-4.56.61-1.64 1.99-1.56 2.29-3.28.1-.58.26-1.27.42-1.93.17-.65-.69-1.12-1.13-.62-.02.03-.05.05-.07.07l-3.44 2.83-3.74 2.69c-.18.13-.36.24-.56.34l-5.47 2.72c-.22.11-.45.2-.68.26l-6.44 1.84c-.27.08-.55.12-.83.14l-8.15.55c-.2.01-.41.01-.61-.01l-6.26-.54c-.19-.02-.39-.05-.58-.09l-5.67-1.34c-.64-.15-1.22-.46-1.72-.89l-2.03-1.78-1.66-1.73a3.944 3.944 0 00-2.85-1.24l-4.82-.05c-.21-.01-.41.01-.62.04l-4.77.69c-1.07.15-2.03.73-2.67 1.6l-1.03 1.43c-.25.34-.55.64-.9.89l-2.31 1.67c-.76.54-1.3 1.33-1.53 2.23l-1.23 4.71c-.05.2-.09.41-.11.62l-.45 4.6c-.09.89.26 1.77.93 2.36.72.63 1.06 1.58.92 2.52l-.3 1.94c-.13.85.02 1.73.43 2.5l2.36 4.39 2.33 3.97c.38.64.3 1.45-.19 2.01-.4.45-1.01.67-1.6.56l-2.43-.44c-1.05-.19-1.79 1.02-1.13 1.87.27.36.32.84.11 1.25l-.57 1.11a2.85 2.85 0 01-2.61 1.55l-4.51-.1c-.44-.02-.89.05-1.32.19l-.75.24c-.43.14-.84.35-1.21.63l-2.44 1.88-3.45 3.37-2.78 2.14c-.62.48-1.38.76-2.17.81l-.84.06a3.91 3.91 0 01-1.59-.22l-2.21-.77c-.51-.18-1.06-.26-1.6-.22l-1.97.13c-.57.04-1.12.2-1.62.47l-4 2.15c-.53.28-.99.68-1.35 1.17l-1.66 2.29c-.14.18-.28.35-.44.51l-2.49 2.44c-.47.46-1.05.8-1.68.98l-3 .88c-.44.13-.9.18-1.36.16l-2.57-.15c-.6-.04-1.18.21-1.57.66-.23.26-.53.46-.86.56l-3.13 1.01c-.31.1-.63.16-.96.18l-1.31.09a4.02 4.02 0 01-2.45-.64l-.53-.34c-.36-.24-.76-.41-1.17-.52l-3.66-.96c-.34-.09-.67-.22-.98-.4l-2.81-1.61-2.67-1.3c-.72-.35-1.29-.96-1.59-1.7l-.26-.63a2.199 2.199 0 00-1.9-1.36l-.41-.02a1.872 1.872 0 01-1.67-2.45c.07-.25.2-.47.37-.66l2.69-3.07c.31-.36.68-.65 1.09-.88l5.52-3.01c.29-.15.6-.28.91-.36l7.77-2 9.78-2.75 8.74-2.67 4.16-1.08c.73-.18.63-1.25-.13-1.29l-5.81-.66-5.25-.18-7.26-.48c-.43-.03-.85.01-1.26.12l-7.63 1.96-5.51 2.11c-.74.28-1.37.79-1.81 1.46-.49.75-1.23 1.31-2.09 1.56l-2.87.84c-.28.08-.57.13-.86.15l-2.09.14a2.3 2.3 0 01-2.28-1.42 2.287 2.287 0 00-2.27-1.42l-.26.02c-.46.03-.92-.06-1.34-.27l-3.16-1.53-.37-.12a4 4 0 01-2.71-3.15l-.47-2.79-.26-3.87c-.07-1.19.38-2.34 1.24-3.16l.21-.21a4.02 4.02 0 013.28-1.07l3.01.4c.26.03.52.04.78.02l5.26-.35c.41-.03.8-.11 1.18-.26l6.66-2.58c.62-.24 1.3-.32 1.97-.23l4.27.56 9.42.36c.38.01.76-.02 1.13-.12l10.18-2.56c.4-.1.79-.26 1.14-.48l5.63-3.5c.89-.56 1.53-1.44 1.77-2.46l1.6-6.64c.05-.2.08-.4.1-.6l.79-9.54c.03-.47-.01-.93-.13-1.38l-1.9-7.05-3.9-12.5c-.07-.23-.12-.46-.15-.69z"
  />
  );
}

export default Cricket;
