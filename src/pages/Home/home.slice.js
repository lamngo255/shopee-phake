import { createAsyncThunk } from '@reduxjs/toolkit';
import categoryAPI from 'src/api/category.api';
import { payloadCreator } from 'src/utils/helper';

export const getCategories = createAsyncThunk('home/getCategories', payloadCreator(categoryAPI.getCategories));
