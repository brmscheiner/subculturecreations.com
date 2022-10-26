import React from "react";

export default function Card(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div className="max-w-xl px-10 mx-auto first:mt-20 mt-12">{children}</div>
  );
}
