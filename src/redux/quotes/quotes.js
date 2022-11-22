import { createAsyncThunk } from '@reduxjs/toolkit';

const QUOTES_FETCHED = 'quotes/homepage/QUOTES_FETCHED';
const urlBase = 'https://quotable.io/quotes?author=';

export const getQuotes = createAsyncThunk(
    QUOTES_FETCHED,
    async (objThunk) => {        
        const { slug, quotes} = Object.values({objThunk})[0];
        const urlInfo= `${urlBase}${slug}&limit=${quotes}`;
        const data = await fetch(urlInfo)
        .then((response) => response.json());        
        const quotesList = [];
        data.results.forEach((item) => {
            const quoteData = {
                content: item.content,                
                id: item._id,               
            };
            quotesList.push(quoteData);
        });               
        return quotesList;
    },
);

const quotesReducer = (state = [], action) => {
    switch (action.type) {
        case `${QUOTES_FETCHED}/fulfilled`:
            return [
                ...action.payload,
            ];
        default: 
            return state;
    }
};

export default quotesReducer;