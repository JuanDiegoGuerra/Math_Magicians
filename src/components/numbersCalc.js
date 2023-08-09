import PropTypes from 'prop-types';

const NumbersCalc = ({ number }) => (
  <div className={`calc-number calc-${number}`}>{number}</div>
);

export default NumbersCalc;

NumbersCalc.propTypes = {
  number: PropTypes.number.isRequired,
};
