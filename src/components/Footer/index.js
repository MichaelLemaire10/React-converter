import PropTypes from 'prop-types';
import './styles.scss';

export default function Footer({ value, currency }) {
  return (
    <footer>
      <h1 key={value}>{value}</h1>
      <p>{currency}</p>
    </footer>
  );
}

Footer.propTypes = {
  value: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
