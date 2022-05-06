import PropTypes from 'prop-types';

import './styles.scss';

export default function Header({ baseAmount, onChangeInputValue }) {
  return (
    <header>
      <h1>Converter</h1>
      <p>
        <input
          type="number"
          placeholder=""
          min="0"
          max="1000"
          value={baseAmount}
          onChange={onChangeInputValue}
        />
        euro
      </p>
    </header>
  );
}

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
};
