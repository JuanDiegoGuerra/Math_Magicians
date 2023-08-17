import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from '../../components/Quote';

describe('Quote', () => {
  test('Renders correctly', () => {
    const { container } = render(<Quote />);
    expect(container).toMatchSnapshot();
  });

  test('Displays loading message while fetching quotes', () => {
    const { getByText } = render(<Quote />);
    const loading = getByText('Loading...');
    expect(loading).toBeInTheDocument();
  });
});