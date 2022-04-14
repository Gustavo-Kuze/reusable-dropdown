import React from 'react';
import Dropdown from '../index';
import { render } from '@testing-library/react';
import App from '../../../App';

it('renders without crashing', () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId('dropdown')).toBeInTheDocument();
});