import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/Header';

describe('Header', () => {
  test('Renders the header', () => {
    const { container } = render(
      <Router>
        <Header />
      </Router>,

    );
    expect(container).toMatchSnapshot();
  });
});
