import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('The Footer', () => {
  it('Matches the snapShot', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders content correctly', () => {
    render(<Footer />);
    expect(screen.getByRole('heading', {
      name: '© 2023 JD Guerra. All rights reserved.',
    })).toBeInTheDocument();
  });
});
