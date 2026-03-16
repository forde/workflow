/*import { type Item } from "@/lib/types";
import { jira } from "@/lib/jira";
import data from "./data.json";
import { prisma } from "@/lib/prisma";
import { extractIssueKey } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const rawData: Item[] = [];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-");
};

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
    })),
  });
};*/

export default function Import() {
  //console.log(data);
  //return <Button onClick={importData}>Import Data</Button>;
}
