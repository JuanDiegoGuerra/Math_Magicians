import PropTypes from 'prop-types';

const Screen = ({ render }) => (
  <div className="calc-number calc-screen" data-testid="screen-element">
    {' '}
    {render}
    {' '}
  </div>
);

export default Screen;

Screen.propTypes = {
  render: PropTypes.string.isRequired,
};
