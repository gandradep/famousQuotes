import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Quotes from '../components/Quotes';
import mockFetch from '../components/__mocks__/mockQuotes';

jest.mock('../components/Quotes');

const MockQuote = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Quotes />
    </Provider>
  </BrowserRouter>
);

describe('Quotes', () => {
  beforeEach(() => {
    jest.spyOn(window, 'fetch').mockImplementation(mockFetch);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('Fetching quotes', async () => {
    await render(<MockQuote />);
    const titleElement = await screen.findByText('quote 1');
    expect(titleElement).toBeInTheDocument();
  });
});
