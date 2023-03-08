import PropTypes from 'prop-types';

const SharedButton = ({ children, version, type, isDisabled }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

SharedButton.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
};

SharedButton.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};
export default SharedButton;
