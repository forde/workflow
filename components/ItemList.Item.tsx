"use client";
import { HTMLAttributes } from "react";
import { type Item } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BranchName from "./BranchName";
import { badgeColors } from "@/lib/constants";
import BadgeLink from "./BadgeLink";
import { mrUrl, storyUrl, pretyDate } from "@/lib/utils";
import StatusBadge from "./StatusBadge";
import Editable from "./Editable";

interface Props extends HTMLAttributes<HTMLDivElement> {
  item: Item;
}

export default function ItemListItem({ item }: Props) {
  return (
    <Card>
      <CardContent className='flex items-center flex-wrap justify-between gap-5 bg-card rounded-[12px]'>
        <div className='flex items-center gap-5 w-full lg:w-auto'>
          <BranchName item={item} />
          <Editable item={item}>
            <StatusBadge item={item} />
          </Editable>
        </div>
        <div className='flex items-center gap-5'>
          <BadgeLink label='User story' url={storyUrl(item.id)} />
          <BadgeLink
            label='Merge request'
            url={mrUrl(item.id)}
            disabled={item.status === "development"}
          />
          <Editable item={item}>
            <Badge className={`${badgeColors.green} w-16`}>
              {item.points} point{item.points > 1 ? "s" : ""}
            </Badge>
          </Editable>
          <Editable item={item}>
            <Badge variant='secondary' className='w-20'>
              {item.board}
            </Badge>
          </Editable>
          <Badge variant='secondary' className='w-32'>
            Started: {pretyDate(item.startedAt)}
          </Badge>
          <Badge variant='secondary' className='w-32 justify-start'>
            Finished: {pretyDate(item.finishedAt)}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
