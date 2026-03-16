export type ItemStatus = "development" | "review" | "testing" | "done";
export type BoardType = "marketing" | "team-one";

export interface Item {
  id?: number;
  branch: string;
  status: ItemStatus;
  points: number;
  board: BoardType;
}
