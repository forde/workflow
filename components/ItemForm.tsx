import { Item } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { addItem, saveItem, deleteItem } from "@/app/actions";
import Select from "@/components/Select";
import Title from "./Title";
import { useEffect } from "react";

interface Props {
  item?: Item;
  onClose: () => void;
}

export default function ItemForm({ item, onClose }: Props) {
  const formAction = !item ? addItem : saveItem;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-sm bg-card' showCloseButton={false}>
        <form action={formAction} onSubmit={onClose} className='space-y-6'>
          <DialogHeader>
            <Title>{item ? "Update work item" : "New work item"}</Title>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Input
                id='branch'
                placeholder='Branch name'
                required
                name='branch'
                defaultValue={item?.branch}
              />
            </Field>
            <div className='flex items-center gap-4'>
              <Field>
                <Select
                  id='status'
                  defaultValue={item?.status || "development"}
                  name='status'
                  label='Status'
                  items={[
                    { label: "Development", value: "development" },
                    { label: "Review", value: "review" },
                    { label: "Testing", value: "testing" },
                    { label: "Done", value: "done" },
                  ]}
                />
              </Field>
              <Field className='w-20'>
                <Select
                  id='points'
                  defaultValue={item?.points ? String(item.points) : "1"}
                  name='points'
                  label='Points'
                  items={[
                    { label: "1", value: "1" },
                    { label: "2", value: "2" },
                    { label: "3", value: "3" },
                    { label: "5", value: "5" },
                  ]}
                />
              </Field>
              <Field>
                <Select
                  id='board'
                  defaultValue={item?.board || "marketing"}
                  name='board'
                  label='Board'
                  items={[
                    { label: "Marketing", value: "marketing" },
                    { label: "Team One", value: "team-one" },
                  ]}
                />
              </Field>
            </div>
          </FieldGroup>
          <Button type='submit' className='w-full cursor-pointer'>
            {item ? "Save changes" : "Create item"}
          </Button>
          {item && (
            <Button
              variant='destructive'
              onClick={() => deleteItem(item.id)}
              className='w-full cursor-pointer'
            >
              Delete item
            </Button>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
