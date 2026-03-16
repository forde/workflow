"use server";
import { ItemInterface } from "@/components/Item";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addItem(formData: FormData) {
  const branch = formData.get("branch") as string;
  const status = formData.get("status") as ItemInterface["status"]; // Cast to your Enum type
  const points = Number(formData.get("points"));
  const board = formData.get("board") as ItemInterface["board"];

  await prisma.item.create({
    data: {
      branch,
      status,
      points,
      board,
    },
  });

  revalidatePath("/");
}
