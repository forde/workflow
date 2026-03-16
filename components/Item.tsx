import { HTMLAttributes } from "react";
import { type Item } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";

interface Props extends HTMLAttributes<HTMLDivElement> {
  item: Item;
}

export default function Item({ item }: Props) {
  return (
    <Card>
      <CardContent className='flex items-center gap-2 bg-card rounded-[12px]'>
        <div className=''>{item.id}</div>
        <div className=''>{item.branch}</div>
        <div className=''>{item.status}</div>
        <div className=''>{item.points}</div>
        <div className=''>{item.board}</div>
      </CardContent>
    </Card>
  );
}
