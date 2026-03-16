import StoryIcon from "./StoryIcon";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Editable from "./Editable";
import { Item } from "@/lib/types";

export default function BranchName({ item }: { item: Item }) {
  return (
    <div className='flex items-center gap-2'>
      <Editable item={item}>
        <StoryIcon />
      </Editable>
      <Tooltip>
        <TooltipTrigger
          className='cursor-pointer'
          onClick={async () => {
            await navigator.clipboard.writeText(item.branch);
          }}
        >
          {item.branch}
        </TooltipTrigger>
        <TooltipContent>Click to copy branch name</TooltipContent>
      </Tooltip>
    </div>
  );
}
