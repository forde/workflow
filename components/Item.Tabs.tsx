import { tabs } from "@/lib/constants";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ItemTabs() {
  return (
    <TabsList className='!h-[40px]'>
      {tabs.map((tab) => (
        <TabsTrigger
          key={tab.value}
          className='cursor-pointer'
          value={tab.value}
        >
          {tab.label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
}
