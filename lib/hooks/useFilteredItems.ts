import { tabs } from "../constants";
import { Item } from "../types";

interface Props {
  items: Item[];
  tab: (typeof tabs)[number]["value"];
}
export default function useFilteredItems({ items, tab }: Props) {
  return items.filter((item) => {
    if (tab === "all") return true;
    if (tab === "in-progress")
      return ["development", "review", "testing"].includes(item.status);
    return item.status == tab;
  });
}
