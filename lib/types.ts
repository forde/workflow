export type ItemStatus = "development" | "review" | "testing" | "done";
export type BoardType = "marketing" | "team-one";

export interface Item {
  id: string;
  branch: string;
  status: ItemStatus;
  points: number;
  board: BoardType;
  startedAt: string;
  finishedAt: string;
  createdAt: Date;
}

export interface Tab {
  value: string;
  label: string;
}
