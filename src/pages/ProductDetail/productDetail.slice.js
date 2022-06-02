import { createAsyncThunk } from '@reduxjs/toolkit';
import productAPI from '@/api/product.api';
import purchaseAPI from '@/api/purchase.api';
import { payloadCreator } from '@/utils/helper';

export const getProductDetail = createAsyncThunk(
  'productDetail/getProductDetail',
  payloadCreator(productAPI.getProductDetail)
);

export const addToCart = createAsyncThunk('productDetail/addToCart', payloadCreator(purchaseAPI.addToCart));
