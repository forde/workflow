import { Badge } from "@/components/ui/badge";
import { Item } from "@/lib/types";

interface Props {
  item: Item;
}

export default function StatusBadge({ item }: Props) {
  const color = (() => {
    switch (item.status) {
      case "development":
        return "bg-sky-950 text-sky-300";
      case "review":
        return "bg-[#543a0a] text-amber-300";
      case "testing":
        return "bg-fuchsia-950 text-fuchsia-300";
      case "done":
        return "bg-green-950 text-green-300";
      default:
        return "";
    }
  })();

  return (
    <Badge variant='secondary' className={color}>
      {item.status.toUpperCase()}
    </Badge>
  );
}
