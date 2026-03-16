import { Badge } from "@/components/ui/badge";
import { ArrowUpRightIcon } from "lucide-react";

export default function BadgeLink({
  label,
  url,
  disabled,
}: {
  label: string;
  url: string;
  disabled?: boolean;
}) {
  return (
    <Badge
      variant={disabled ? "secondary" : undefined}
      render={
        <a
          href={url}
          target='_blank'
          className={`cursor-${disabled ? "default" : "pointer"}`}
          onClick={(e) => disabled && e.preventDefault()}
        >
          {label} <ArrowUpRightIcon data-icon='inline-end' />
        </a>
      }
    />
  );
}
