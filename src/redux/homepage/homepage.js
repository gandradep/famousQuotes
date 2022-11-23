import { createAsyncThunk } from '@reduxjs/toolkit';

const AUTHORS_FETCHED = 'quotes/homepage/AUTHORS_FETCHED';
const urlApi = 'https://quotable.io/authors?sortBy=quoteCount&order=desc&page=3';

export const getAuthors = createAsyncThunk(
  AUTHORS_FETCHED,
  async () => {
    const data = await fetch(urlApi)
      .then((response) => response.json());
    const authorList = [];    
    data.results.forEach((item) => {
      const authorData = {
        name: item.name,
        slug: item.slug,
        id: item._id,
        quotes: item.quoteCount,
        description: item.description,
      };
      authorList.push(authorData);
    });
    return authorList;
  },
);

const authorReducer = (state = [], action) => {
  switch (action.type) {
    case `${AUTHORS_FETCHED}/fulfilled`:
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
};

export default authorReducer;
