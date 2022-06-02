import { createAsyncThunk } from '@reduxjs/toolkit';
import categoryAPI from '@/api/category.api';
import productAPI from '@/api/product.api';
import { payloadCreator } from '@/utils/helper';

export const getCategories = createAsyncThunk('home/getCategories', payloadCreator(categoryAPI.getCategories));
export const getProducts = createAsyncThunk('home/getProducts', payloadCreator(productAPI.getProducts));
