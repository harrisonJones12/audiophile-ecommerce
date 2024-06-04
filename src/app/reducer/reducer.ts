import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {RootState} from '../store'

interface ShopState {
    products: object,
    cart: object
}


const initialState: ShopState = {
    products: {},
    cart: {}
};

//TODO change action names 
// export default function reducer(
//     state = initialState,
//     action
// ) {
//     switch (action.type) {
//         case "ACTION1":
//         case "GETPRODUCTSINSTOCK":
//             return { ...state, products: { productsInstock: action.payload } };
//         case "ADDITEMTOCART":
//             return { ...state, cart: {} };
//         case "ACTION3":
//             return { ...state, showModal: false };
//         case "ACTION4":
//             return { ...state, loading: false, fetchResponse: action.jsonFetch };
//         default:
//             return state;
//     }
// }

export const productsSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      getProductsInstock: (state, action) => {
        state.products = action.payload
      },
      addItemsToCart: (state, action) => {
        state.cart = action.payload
      },
      // Use the PayloadAction type to declare the contents of `action.payload`
    //   incrementByAmount: (state, action: PayloadAction<number>) => {
    //     state.value += action.payload
    //   }
    }
  })
  
  export const { getProductsInstock, addItemsToCart } = productsSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const selectProducts = (state: RootState) => state.products

  export default productsSlice.reducer
