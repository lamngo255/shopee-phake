import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { payloadCreator } from '@/utils/helper';
import { logout } from '../Auth/auth.slice';
import purchaseAPI from '@/api/purchase.api';

export const getCartPurchases = createAsyncThunk('cart/getCartPurchases', payloadCreator(purchaseAPI.getCartPurchases));
export const updatePurchase = createAsyncThunk('cart/updatePurchase', payloadCreator(purchaseAPI.updatePurchase));
export const deletePurchases = createAsyncThunk('cart/deletePurchases', payloadCreator(purchaseAPI.deletePurchases));
export const buyPurchases = createAsyncThunk('cart/buyPurchases', payloadCreator(purchaseAPI.buyPurchases));

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
