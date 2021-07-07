import { createAsyncThunk } from '@reduxjs/toolkit';
import productAPI from 'src/api/product.api';
import purchaseAPI from 'src/api/purchase.api';
import { payloadCreator } from 'src/utils/helper';

export const getProductDetail = createAsyncThunk(
  'productDetail/getProductDetail',
  payloadCreator(productAPI.getProductDetail)
);

export const addToCart = createAsyncThunk('productDetail/addToCart', payloadCreator(purchaseAPI.addToCart));
