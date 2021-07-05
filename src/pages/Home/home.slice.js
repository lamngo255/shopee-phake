import { createAsyncThunk } from '@reduxjs/toolkit';
import categoryAPI from 'src/api/category.api';
import productAPI from 'src/api/product.api';
import { payloadCreator } from 'src/utils/helper';

export const getCategories = createAsyncThunk('home/getCategories', payloadCreator(categoryAPI.getCategories));
export const getProducts = createAsyncThunk('home/getProducts', payloadCreator(productAPI.getProducts));
