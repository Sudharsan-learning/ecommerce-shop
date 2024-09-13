import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    addOrder(state, action) {
      state.push({ ...action.payload });
      toast.success("order done successfully!", {
        position: "bottom-right",
        theme: "dark",
      });
    },
  },
});

export const { addOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
