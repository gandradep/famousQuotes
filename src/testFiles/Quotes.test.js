import * as React from 'react';
import '@testing-library/jest-dom'
import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import { Provider } from 'react-redux';
import Quotes from '../components/Quotes';
import mockFetch from '../__mocks__/fetchQuotes';

let windowFetchSpy;

const MockQuote = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Quotes />
    </Provider>
  </BrowserRouter>
);

const MockobjThunk = {
  slug: 'slugd',
  quotes: 9,
}
describe('Homepage', () => {
  beforeEach(() => {
    // console.log("RUNS BEFORE EACH TEST")
    windowFetchSpy = jest.spyOn(window, 'fetch').mockImplementation(mockFetch);
  })
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('Fetching', async () => {
    await render(<MockQuote />);
    const titleElement = await screen.findByTestId("author-0");
    screen.debug();
    // expect(titleElement).toBeInTheDocument();
  });
});