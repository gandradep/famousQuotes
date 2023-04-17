import { createAsyncThunk } from '@reduxjs/toolkit';
import pictures from './picturesLinks';

const AUTHORS_FETCHED = 'quotes/homepage/AUTHORS_FETCHED';
const urlApi = 'https://quotable.io/authors?sortBy=quoteCount&order=desc&page=3';

export const getAuthors = createAsyncThunk(
  AUTHORS_FETCHED,
  async () => {
    const data = await fetch(urlApi)
      .then((response) => response.json());
    const authorList = [];
    data.results.forEach((item) => {
      let link = '';
      if (pictures.get(item.slug)) {
        link = item.slug;
      } else {
        link = 'template';
      }
      const authorData = {
        name: item.name.toUpperCase(),
        slug: item.slug,
        /* eslint-disable-next-line no-underscore-dangle */
        id: item._id,
        quotes: item.quoteCount,
        description: item.description,
        picture: pictures.get(link),
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
