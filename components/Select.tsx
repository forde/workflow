import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Item {
  label: string;
  value: string | null;
}

interface Props extends Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "defaultValue" | "value"
> {
  items: Item[];
  defaultValue?: string | string[] | null | undefined;
  value?: string | string[] | null | undefined;
  label?: string;
}

export default function SelectComponent({ items, label, ...props }: Props) {
  return (
    <Select items={items} {...props}>
      <SelectTrigger className='w-full max-w-48'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
