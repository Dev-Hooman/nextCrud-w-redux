'use client';

import { configureStore } from '@reduxjs/toolkit';
import blogPostReducer  from './Features/posts/postSlice';

export const store = configureStore({
    reducer: {
        blogPostSlice: blogPostReducer
    }
})
