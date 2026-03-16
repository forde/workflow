import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractIssueKey = (branch: string) => {
  const match = branch.match(/^[A-Z]+-\d+/);
  return match ? match[0] : null;
};
