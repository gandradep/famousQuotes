import * as React from 'react';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import store from '../redux/store';
import { render, screen } from '@testing-library/react';

import Homepage from '../components/Homepage';

describe('Homepage', () => {
  beforeEach(() => {
    // console.log("RUNS BEFORE EACH TEST")
    jest.mock("../__mocks__/fetchAuthors")
})
  it('Homepage snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Homepage />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
