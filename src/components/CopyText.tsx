import React, { useCallback, useState } from "react";
import Clipboard from "./icons/Clipboard";
import ClipboardSuccess from "./icons/ClipboardSuccess";

enum IconTypes {
  Default,
  Success,
}

const classes = "ml-2";

export default function CopyText(props: {
  children?: React.ReactNode;
  value: string;
}) {
  const { children, value } = props;
  const [iconType, setIconType] = useState(IconTypes.Default);
  const handleCopy = useCallback(() => {
    if (iconType === IconTypes.Default) {
      navigator.clipboard.writeText(value || "").then(() => {
        setIconType(IconTypes.Success);
        setTimeout(() => setIconType(IconTypes.Default), 2000);
      });
    }
  }, [value, iconType]);

  return (
    <span className="flex">
      {children || value}
      {iconType === IconTypes.Default ? (
        <Clipboard className={classes} onClick={handleCopy} />
      ) : (
        <ClipboardSuccess className={classes} />
      )}
    </span>
  );
}
