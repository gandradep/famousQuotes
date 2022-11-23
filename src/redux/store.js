import { configureStore } from '@reduxjs/toolkit';
import authorReducer from './homepage/homepage';
import quotesReducer from './quotes/quotes';

const store = configureStore({
  reducer: {
    authors: authorReducer,
    quotes: quotesReducer,
  },
});
export default store;
