"use server";
import { Item } from "@/lib/types";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { extractIssueKey } from "@/lib/utils";

export async function addItem(formData: FormData) {
  const branch = formData.get("branch") as string;
  const status = formData.get("status") as Item["status"]; // Cast to your Enum type
  const points = Number(formData.get("points"));
  const board = formData.get("board") as Item["board"];

  await prisma.item.create({
    data: {
      id: extractIssueKey(branch) || "",
      branch,
      status,
      points,
      board,
      startedAt: "",
      finishedAt: "",
    },
  });

  revalidatePath("/");
}
