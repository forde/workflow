import { Badge } from "@/components/ui/badge";
import { Item } from "@/lib/types";
import { badgeColors } from "@/lib/constants";

interface Props {
  item: Item;
}

export default function StatusBadge({ item }: Props) {
  const color = (() => {
    switch (item.status) {
      case "development":
        return badgeColors.sky;
      case "review":
        return badgeColors.amber;
      case "testing":
        return badgeColors.pink;
      case "done":
        return badgeColors.green;
      default:
        return "";
    }
  })();

  return (
    <Badge variant='secondary' className={color}>
      {item.status}
    </Badge>
  );
}
