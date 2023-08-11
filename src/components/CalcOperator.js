import PropTypes from 'prop-types';

const CalcOperator = ({ operator, handleClick }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleClick(operator);
    }
  };

  const isOrange = () => (operator === 'AC' || operator === '%' || operator === '+/-' || operator === '.');

  return (
    <div role="button" className={isOrange() ? 'calc-number' : 'calc-number calc-op'} onClick={() => { handleClick(operator); }} onKeyDown={handleKeyDown} tabIndex={0}>{operator}</div>
  );
};

export default CalcOperator;

CalcOperator.propTypes = {
  operator: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
