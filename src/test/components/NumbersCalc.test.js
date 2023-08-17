import { render, fireEvent } from '@testing-library/react';
import NumbersCalc from '../../components/NumbersCalc.js';

describe('NumbersCalc component', () => {
  const onClickMock = jest.fn();

  it('should renders correctly', () => {
    const { container } = render(
      <NumbersCalc number={2} handleClick={onClickMock} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('click event calls the provided function', () => {
    const { getByRole } = render(
      <NumbersCalc number={2} handleClick={onClickMock} />,
    );

    const element = getByRole('button');
    fireEvent.click(element);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
