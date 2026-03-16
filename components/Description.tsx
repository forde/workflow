import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Component({ children }: Props) {
  return (
    <p className='max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400'>
      {children}
    </p>
  );
}
