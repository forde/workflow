import StoryIcon from "./StoryIcon";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function BranchName({ children }: { children: string }) {
  return (
    <div className='flex items-center gap-2'>
      <StoryIcon />
      <Tooltip>
        <TooltipTrigger
          className='cursor-pointer'
          onClick={async () => {
            await navigator.clipboard.writeText(children);
          }}
        >
          {children}
        </TooltipTrigger>
        <TooltipContent>Click to copy branch name</TooltipContent>
      </Tooltip>
    </div>
  );
}
