'use client'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
const baseURL = process.env.NEXT_PUBLIC_SERVER_URL

export const fetchAllBlogData = createAsyncThunk(
  'data/fetchAllBlogData',
  async (params, thunkAPI) => {
    const response = await fetch(`${baseURL}/getdata`);
    const data = await response.json();
    return data;
  }
);
const initialState= {
  blogPosts: null,
  loading: false,
  error: null,
};

export const blogPostSlice = createSlice({
  name: 'blogPostReducer',
  initialState,
  reducers: {
    remove: (state) => {
      state.blogPosts = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBlogData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllBlogData.fulfilled, (state, action) => {
        state.blogPosts = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAllBlogData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { remove } = blogPostSlice.actions;

export default blogPostSlice.reducer;
