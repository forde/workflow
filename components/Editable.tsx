"use client";
import { Item } from "@/lib/types";
import { ReactNode, useState } from "react";
import ItemForm from "./ItemForm";

interface Props {
  children: ReactNode;
  item: Item;
}

export default function Editable({ item, children }: Props) {
  const [editedItem, setEditedItem] = useState<Item | undefined>(undefined);

  return (
    <>
      <span className='cursor-pointer' onClick={() => setEditedItem(item)}>
        {children}
      </span>
      {editedItem && (
        <ItemForm item={item} onClose={() => setEditedItem(undefined)} />
      )}
    </>
  );
}
