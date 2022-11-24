import * as React from 'react';
import '@testing-library/jest-dom'
import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import { Provider } from 'react-redux';
import Homepage from '../components/Homepage';
import mockFetch from '../components/__mocks__/fetchAuthors';

let windowFetchSpy;

const MockHomepage = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Homepage />
    </Provider>
  </BrowserRouter>
);


describe('Homepage', () => {
  beforeEach(() => {
    // console.log("RUNS BEFORE EACH TEST")
    windowFetchSpy = jest.spyOn(window, 'fetch').mockImplementation(mockFetch);
  })
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('Fetching', async () => {
    await render(<MockHomepage />);
    const titleElement = await screen.findByTestId("author-0");
    // screen.debug();
    expect(titleElement).toBeInTheDocument();
  });
  it('Test number elements', async () => {
    await act( async () => render(<MockHomepage />));
    const titleElement = await screen.findAllByTestId(/author-/i);
    // screen.debug();
    expect(titleElement.length).toBe(2);
  });
});