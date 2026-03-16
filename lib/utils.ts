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
