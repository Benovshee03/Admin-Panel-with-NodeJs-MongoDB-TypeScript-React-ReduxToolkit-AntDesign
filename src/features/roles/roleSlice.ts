import { createAsyncThunk } from "@reduxjs/toolkit";
import { RoleState } from "./types";
import { RoleService } from "../../network/services/RoleService";
import Role from "../../network/models/Role";
import createBaseSlice from "../../network/reducers/core/BaseSlice";


const initialState: RoleState = {
  list: [],
  status: "idle",
  error: null,
  selected: null,
};

let roleService = new RoleService();

export const addRole = createAsyncThunk(
  "roles/addRole",
  async (role:Role) => {
    const response = await roleService.add(role);
    return response.data;
  }
);

export const fetchRoles = createAsyncThunk(
  "roles/fetchRoles",
  async () => {
    const response = await roleService.getAll();
    return response.data;
  }
);

export const deleteRole = createAsyncThunk(
  "roles/deleteRole",
  async (id: string) => {
    const response = await roleService.delete(id);
    return response.data;
  }
);

export const fetchRole = createAsyncThunk(
  "roles/fetchRole",
  async (id: string) => {
    const response = await roleService.get(id); 
    return response.data;
  }
);

export const updateRole = createAsyncThunk(
  "roles/updateRole",
  async (role:Role) => {
    const response = await roleService.update(role._id, role);
    return response.data;
  }
);

const roleSlice = createBaseSlice<RoleState>("role", initialState, [
  {
    thunk: fetchRoles,
    onFulfilled: (state, action) => {
      state.list = action.payload;
    },
  },
  {
    thunk: addRole,
    onFulfilled: (state, action) => state.list.push(action.payload),
  },
  {
    thunk: deleteRole,
    onFulfilled: (state, action) => {
      state.list = state.list.filter(
        (role) => role._id !== action.payload
      );
    },
  },
  {
    thunk: fetchRole,
    onFulfilled: (state, action) => {
      state.selected = action.payload;
    },
  },
  {
    thunk: updateRole,
    onFulfilled: (state, action) => {
      state.list = state.list.map((role) =>
        role._id === action.payload._id ? action.payload : role
      );
    },
  },
]);

export default roleSlice.reducer;
 