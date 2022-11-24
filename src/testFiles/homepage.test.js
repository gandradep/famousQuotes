import * as React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/store';

import Homepage from '../components/Homepage';

describe('Homepage', () => {
  it('Homepage snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Homepage />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
