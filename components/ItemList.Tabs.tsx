import { tabs } from "@/lib/constants";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Item } from "@/lib/types";

interface Props {
  items: Item[];
}

export default function ItemListTabs({ items }: Props) {
  const counts = items.reduce(
    (acc, item) => {
      return {
        ...acc,
        [item.status]: acc[item.status] + 1,
        "in-progress": ["development", "review", "testing"].includes(
          item.status,
        )
          ? acc["in-progress"] + 1
          : acc["in-progress"],
        all: acc.all + 1,
      };
    },
    tabs.reduce((acc, t) => ({ ...acc, [t.value]: 0 }), {}) as Record<
      string,
      number
    >,
  );

  return (
    <TabsList className='!h-[40px]'>
      {tabs.map((tab) => (
        <TabsTrigger
          key={tab.value}
          className='cursor-pointer px-3'
          value={tab.value}
        >
          {tab.label}
          <Badge variant='ghost'>{counts[tab.value]}</Badge>
        </TabsTrigger>
      ))}
    </TabsList>
  );
}
