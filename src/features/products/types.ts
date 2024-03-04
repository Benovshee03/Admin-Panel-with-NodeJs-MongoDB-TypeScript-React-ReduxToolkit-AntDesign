import React from "react";

import Product from "../../network/models/Product";

export interface ProductState {
  list: Product[] | any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  selected: Product | null;
}

export interface ProductType {
  key: string;
  _id: string;
  productName: string;
  description?: string;
  unitPrice:number;
  unitsInStock: number;
  categoryId: string;
  settings?: React.ReactNode;
  // tags: string[];
}