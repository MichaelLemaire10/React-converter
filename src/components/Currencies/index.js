import PropTypes from 'prop-types';
import './styles.scss';

export default function Currencies({
  currencies,
  onCurrencyClick,
  inputValue,
  onChangeInputValue,
}) {
  return (
    <>
      <input
        type="text"
        placeholder="Recherche une devise"
        value={inputValue}
        onChange={onChangeInputValue}
      />
      <ul>
        <li>Currencies</li>
        {currencies.map(({ name }) => <li onClick={onCurrencyClick} key={name}>{name}</li>)}
      </ul>
    </>
  );
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  onCurrencyClick: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
};
