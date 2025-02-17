import React from "react";

export default function Card({ children, className = ''}: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`max-w-xl px-6 mx-auto first:mt-20 mt-12 ${className}`}>{children}</div>
  );
}
