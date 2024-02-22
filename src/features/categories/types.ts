import { TableProps } from "antd";

export interface Category {
  _id?: string;
  categoryName?: string;
  description: string;
}

export interface CategoryState {
  list: Category[] | [];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  selected: Category | null;
}
export interface CategoryType {
  key: string;
  _id: string;
  categoryName: string;
  description: string;
}
export const columns: TableProps<CategoryType>["columns"] | any = [
  {
    title: "Id",
    dataIndex: "_id",
    key: "_id",
    render: (text: any) => {
      return text
    },
  },
  {
    title: "Category Name",
    dataIndex: "categoryName",
    key: "categoryName",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  }
];
