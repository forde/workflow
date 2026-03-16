"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ItemForm from "./ItemForm";

export default function AddItem() {
  const [addingItem, setAddingItem] = useState<boolean>(false);
  return (
    <>
      <Button className='cursor-pointer' onClick={() => setAddingItem(true)}>
        New item
      </Button>
      {addingItem && <ItemForm onClose={() => setAddingItem(false)} />}
    </>
  );
}
