import Category from "../../network/models/Category";

export interface CategoryState {
  list: Category[] | any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  selected: Category | null;
}
export interface CategoryType {
  key: string;
  _id: string;
  categoryName: string;
  description: string;
  delete:string
}


