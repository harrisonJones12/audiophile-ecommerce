import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

interface ShopState {
  products: object;
  cart: object;
}

const initialState: ShopState = {
  products: [],
  cart: [],
};

export const productsSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getProductsInstock: (state, action) => {
      state.products = action.payload.data.products;
    },
    addItemsToCart: (state, action) => {
      state.cart = { ...state.cart, ...action.payload };
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    //   incrementByAmount: (state, action: PayloadAction<number>) => {
    //     state.value += action.payload
    //   }
  },
});

export const { getProductsInstock, addItemsToCart } = productsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
