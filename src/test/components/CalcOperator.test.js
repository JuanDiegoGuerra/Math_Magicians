import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import CalcOperator from '../../components/CalcOperator';

describe('The CalcOperator component', () => {
  const handleClick = jest.fn();

  it('Renders orrectly', () => {
    render(<CalcOperator operator="+/-" handleClick={handleClick} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Matches the snapShot', () => {
    const tree = renderer.create(<CalcOperator operator="AC" handleClick={handleClick} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Calls the eventHandler when clicked', () => {
    render(<CalcOperator operator="%" handleClick={handleClick} />);
    const operatorBtn = screen.getByRole('button', {
      name: '%',
    });
    userEvent.click(operatorBtn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
