import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractIssueKey = (branch: string) => {
  const match = branch.match(/^[A-Z]+-\d+/);
  return match ? match[0] : null;
};

export const formatDate = (dateString?: string) => {
  const date = dateString ? new Date(dateString) : new Date();
  return date
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-");
};

export const mrUrl = (storyId: string) =>
  `https://codehub.digitalarsenal.net/nord-projects/nordprotect/frontend/nordprotect-website/-/merge_requests/?sort=created_date&state=all&search=${storyId}&first_page_size=20`;

export const storyUrl = (storyId: string) =>
  `https://nordsec.atlassian.net/browse/${storyId}`;

export const isValidDate = (date: Date) => !isNaN(date.getTime());

export const pretyDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split("-");
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  if (!isValidDate(date)) return "";
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "2-digit",
  });
};
