import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Component({ children, ...rest }: Props) {
  const { className, ...props } = rest;
  return (
    <h2
      className={`text-2xl font-semibold leading-10 tracking-tight ${className || ""}`}
      {...props}
    >
      {children}
    </h2>
  );
}
