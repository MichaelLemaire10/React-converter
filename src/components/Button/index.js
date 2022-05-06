import PropTypes from 'prop-types';
import './styles.scss';

export default function Button({ toggleOpen }) {
  return (
    <>
      <button type="button" onClick={toggleOpen}> Toggle currencies</button>
    </>
  );
}

Button.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
};
