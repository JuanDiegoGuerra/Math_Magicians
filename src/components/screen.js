import PropTypes from 'prop-types';

const Screen = ({ render }) => (
  <div className="calc-number calc-screen">
    {' '}
    {render}
    {' '}
  </div>
);

export default Screen;

Screen.propTypes = {
  render: PropTypes.string.isRequired,
};
