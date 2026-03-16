import Title from "@/components/Title";
import { Tab } from "@/lib/types";
import { type Item as ItemType } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { badgeColors, tabs } from "@/lib/constants";
import useFilteredItems from "@/lib/hooks/useFilteredItems";

interface Props {
  activeTab: Tab;
  items: ItemType[];
}

export default function ItemListTitle({ activeTab, items }: Props) {
  const filteredItems = useFilteredItems({
    items,
    tab: activeTab.value,
  });
  const count = filteredItems.length;

  const points = filteredItems.reduce((acc, item) => (acc += item.points), 0);

  const labels = {
    development: "Items in development",
    review: "Items in review",
    testing: "Items in testing",
    done: "Done Items",
    "in-progress": "Items in progress",
    all: "All Items",
  } as Record<(typeof tabs)[number]["value"], string>;

  return (
    <Title className='flex items-center gap-4 mb-5'>
      {labels[activeTab.value]}
      <Badge variant='secondary' className={badgeColors.blue}>
        {count} item{count > 1 ? "s" : ""}
      </Badge>
      <Badge variant='secondary' className={badgeColors.green}>
        {points} point{points > 1 ? "s" : ""}
      </Badge>
    </Title>
  );
}
