import * as React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import { Provider } from 'react-redux';
import Homepage from '../components/Homepage';
import mockFetch from '../__mocks__/fetchAuthors';

let windowFetchSpy;

describe('Homepage', () => {
  beforeEach(() => {
    // console.log("RUNS BEFORE EACH TEST")
    windowFetchSpy = jest.spyOn(window, 'fetch').mockImplementation(mockFetch);
  })
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('Fetching', async () => {
    await render(
      <BrowserRouter>
      <Provider store={store}>
        <Homepage />
      </Provider>
      </BrowserRouter>,
    );
    const titleElement = await screen.findByTestId("author-0");
    screen.debug();
    expect(titleElement).toBeInTheDocument();
  });
});