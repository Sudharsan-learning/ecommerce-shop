import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const existingProduct = state.find(
        (product) => product.uniq_id === action.payload.uniq_id
      );
      existingProduct
        ? (existingProduct.quantity += 1)
        : state.push({ ...action.payload, quantity: 1 });
      toast.success("product added successfully!", {
        position: "bottom-right",
        theme: "dark",
      });
    },
    emptyCart(state, action) {
      return [];
    },
    removeFromCart(state, action) {
      toast.warning("product removed successfully!", {
        position: "bottom-right",
      });
      return state.filter((item) => item.uniq_id !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.find((product) => product.uniq_id === action.payload);
      item.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const item = state.find((product) => product.uniq_id === action.payload);
      item.quantity > 1 && (item.quantity -= 1);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  emptyCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
