import PropTypes from 'prop-types';

const NumbersCalc = ({ number, handleClick }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleClick(number);
    }
  };

  return (
    <div role="button" className={`calc-number calc-${number}`} onClick={() => { handleClick(`${number}`); }} onKeyDown={handleKeyDown} tabIndex={0}>{number}</div>
  );
};

export default NumbersCalc;

NumbersCalc.propTypes = {
  number: PropTypes.number.isRequired,
};
