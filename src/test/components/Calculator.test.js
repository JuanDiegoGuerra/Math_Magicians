import { render } from '@testing-library/react';
import Calculator from '../../components/calculator';

describe('Calculator', () => {
  it('Renders calculator correctly', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });
});
