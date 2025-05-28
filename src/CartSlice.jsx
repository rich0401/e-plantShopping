import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    incrementQuantity: (state, action) => {
        const existingItem = state.items.find(item => item.name === action.payload.name);
        if (existingItem) {
            existingItem.quantity += 1;
        }
    },
    decrementQuantity: (state, action) => {
        const existingItem = state.items.find(item => item.name === action.payload.name);
        if (existingItem && existingItem.quantity > 1) {
            existingItem.quantity -= 1;
        }
        else{
            state.items = state.items.filter(item => item.name !== action.payload);
        }
    },
  },
});

export const { addItem, removeItem, decrementQuantity, incrementQuantity } = CartSlice.actions;

export default CartSlice.reducer;
