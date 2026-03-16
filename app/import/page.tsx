/*import { type Item } from "@/lib/types";
import { jira } from "@/lib/jira";
import data from "./data.json";
import { prisma } from "@/lib/prisma";
import { extractIssueKey, formatDate } from "@/lib/utils";

const rawData: Item[] = [];

const getTimestamps = async (key: string) => {
  try {
    const issue = await jira.issues.getIssue({
      issueIdOrKey: key,
      expand: "changelog",
    });

    const history = issue.changelog?.histories || [];
    return history.reduce(
      (acc, entry) => {
        const change = (entry?.items || []).find((i) => i.field === "status");
        if (!change) return acc;

        if (change.toString === "In Development") {
          return { ...acc, startedAt: formatDate(entry.created || "") };
        }
        if (change.toString === "In Review") {
          return { ...acc, finishedAt: formatDate(entry.created || "") };
        }

        return acc;
      },
      { startedAt: "", finishedAt: "" } as {
        startedAt: string;
        finishedAt: string;
      },
    );
  } catch (error) {
    console.error(`Error fetching issue ${key}:`, error);
    return { startedAt: "", finishedAt: "" };
  }
};

const getUpdatedData = async () => {
  return Promise.all(
    rawData.map(async (item) => {
      const issueKey = extractIssueKey(item.branch);
      if (!issueKey) return item;

      const timestamps = await getTimestamps(issueKey);
      return { ...item, ...timestamps };
    }),
  );
};

const toDate = (dateStr: string): Date | string => {
  if (!dateStr) return "";
  const [day, month, year] = dateStr.trim().split("-");
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
  return isNaN(date.getTime()) ? "" : date;
};

const importData = async () => {
  "use server";
  await prisma.item.createMany({
    data: data.map((item) => ({
      id: extractIssueKey(item.branch) || "",
      branch: item.branch || "",
      status: item.status || "",
      points: item.points || 0,
      board: item.board || "",
      startedAt: item.startedAt || "",
      finishedAt: item.finishedAt || "",
      createdAt: toDate(item.startedAt || ""),
    })),
  });
};*/

export default function Import() {
  //console.log(data);
  //return <Button onClick={importData}>Import Data</Button>;
}
