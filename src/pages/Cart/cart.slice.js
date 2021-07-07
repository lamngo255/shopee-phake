import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { payloadCreator } from 'src/utils/helper';
import { logout } from '../Auth/auth.slice';
import purchaseAPI from 'src/api/purchase.api';

export const getCartPurchases = createAsyncThunk('cart/getCartPurchases', payloadCreator(purchaseAPI.getCartPurchases));

export const updatePurchase = createAsyncThunk('cart/updatePurchase', payloadCreator(purchaseAPI.updatePurchase));

const cart = createSlice({
  name: 'cart',
  initialState: {
    purchases: [],
  },
  extraReducers: {
    [getCartPurchases.fulfilled]: (state, action) => {
      state.purchases = action.payload.data;
    },
    [logout.fulfilled]: state => {
      state.purchases = [];
    },
  },
});

const cartReducer = cart.reducer;
export default cartReducer;
