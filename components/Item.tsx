import { HTMLAttributes, ReactNode } from "react";

export interface ItemInterface {
  branch: string;
  status: "development" | "review" | "testing" | "done";
  points: number;
  board: "marketing" | "team-one";
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  item: ItemInterface;
}

export default function Item({ item }: Props) {
  return (
    <li className='flex items-center gap-2'>
      <div className='bg-gray-200 p-2 rounded-md'>{item.branch}</div>
      <div className='bg-gray-200 p-2 rounded-md'>{item.status}</div>
      <div className='bg-gray-200 p-2 rounded-md'>{item.points}</div>
      <div className='bg-gray-200 p-2 rounded-md'>{item.board}</div>
    </li>
  );
}
