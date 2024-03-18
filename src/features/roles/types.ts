import React from "react";
import Role from "../../network/models/Role";
 
export interface RoleState {
  list: Role[] | any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  selected: Role | null;
}

export interface RoleType {
  key: string;
  _id: string;
  name: string,
  normalizedName: string,
  settings?: React.ReactNode;
  // tags: string[];
}