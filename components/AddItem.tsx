"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { addItem } from "@/app/actions";
import Select from "@/components/Select";
import Title from "@/components/Title";
import { useState } from "react";

export default function AddItem() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={<Button className='cursor-pointer'>New item</Button>}
      />
      <DialogContent className='sm:max-w-sm bg-card' showCloseButton={false}>
        <form
          action={addItem}
          onSubmit={() => setOpen(false)}
          className='space-y-6'
        >
          <DialogHeader>
            <Title>New work item</Title>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Input
                id='branch'
                placeholder='Branch name'
                required
                name='branch'
              />
            </Field>
            <div className='flex items-center gap-4'>
              <Field>
                <Select
                  id='status'
                  defaultValue='development'
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
                  defaultValue='1'
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
                  defaultValue='marketing'
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
            Add item
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
