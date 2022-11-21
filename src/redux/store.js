import { configureStore } from '@reduxjs/toolkit';
import authorReducer from './homepage/homepage';

export const store = configureStore({
  reducer: {
    authors: authorReducer,
  },
});
