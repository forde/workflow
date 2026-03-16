"use server";
import { ItemInterface } from "@/components/Item";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createItem(data: ItemInterface) {
  await prisma.item.create({
    data: {
      branch: data.branch,
      status: data.status,
      points: data.points,
      board: data.board,
    },
  });

  revalidatePath("/");
}
