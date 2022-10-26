import React from "react";
import { Link } from "react-router-dom";

export enum ButtonColors {
  Blue = "#3F8CFF",
  Purple = "#933FFF",
  Green = "#24CA09",
  Black = "#000",
}

interface ButtonBaseProps {
  color?: ButtonColors;
  label: string;
  onClick?: () => void;
}

interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  external?: boolean;
}

function ButtonBase(props: ButtonBaseProps) {
  const { color = ButtonColors.Blue, label, onClick = undefined } = props;
  return (
    <button
      className="px-2 py-1 shadow-md hover:shadow-lg hover:brightness-90 uppercase text-xs text-white"
      style={{ background: color }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export function ButtonLink(props: ButtonLinkProps) {
  const { href, external = false, ...rest } = props;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        <ButtonBase {...rest} />
      </a>
    );
  }
  return (
    <Link to={href}>
      <ButtonBase {...rest} />
    </Link>
  );
}

export default function Button(props: ButtonBaseProps) {
  return <ButtonBase {...props} />;
}
