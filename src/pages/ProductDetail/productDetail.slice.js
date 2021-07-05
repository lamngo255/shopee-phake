import { createAsyncThunk } from '@reduxjs/toolkit';
import productAPI from 'src/api/product.api';
import { payloadCreator } from 'src/utils/helper';

export const getProductDetail = createAsyncThunk(
  'productDetail/getProductDetail',
  payloadCreator(productAPI.getProductDetail)
);
