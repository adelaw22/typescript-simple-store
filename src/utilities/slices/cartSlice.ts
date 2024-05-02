import { createSlice } from "@reduxjs/toolkit";
// import cartItem from "../../components/cartItem";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        cartItem: []
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cartItem.find((item) => item.id === action.payload.id);
            if (itemInCart) {
              itemInCart.quantity++;
            } else {
              state.cartItem.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cartItem.find((item) => item.id === action.payload);
            item.quantity++;
          },
        decrementQuantity: (state, action) => {
            const item = state.cartItem.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
              item.quantity = 1
            } else {
              item.quantity--;
            }
          },
        removeItem: (state, action) => {
            const removeItem = state.cartItem.filter((item) => item.id !== action.payload);
            state.cartItem = removeItem;
          },
    }
})

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;
