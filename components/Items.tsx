import { HTMLAttributes, ReactNode } from "react";
import Item, { ItemInterface } from "./Item";

interface Props extends HTMLAttributes<HTMLDivElement> {
  status?: ItemInterface["status"];
  points?: ItemInterface["points"];
  board?: ItemInterface["board"];
}

export default function Items({ status, points, board }: Props) {
  return <ul></ul>;
}
