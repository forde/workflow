import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Component({ children }: Props) {
  return (
    <h2 className='max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50'>
      {children}
    </h2>
  );
}
