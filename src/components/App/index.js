/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
// == Import
import React from 'react';
import Header from '../Header';
import Button from '../Button';
import Currencies from '../Currencies';
import Footer from '../Footer';

// scss
import './styles.scss';

// data
import currenciesdata from '../../data/currencies';

// == Composant
export default class App extends React.Component {
  // Code legacy
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     open: true,
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // handleClick() {
  //   this.state.open = false;
  // }
state = {
  open: true,
  baseAmount: 1,
  currencies: currenciesdata,
  currency: 'United States Dollar',
  search: '',
}

componentDidMount() {
  document.title = `Euro to ${this.state.currency}`;
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') this.toggleOpen();
  });
}

componentDidUpdate(prevProps, prevState) {
  const { currency } = this.state;
  if (prevState.currency !== currency) {
    document.title = `Euro to ${currency}`;
  }
}

// componentWillUnmount() {
//   console.log('componentWillUnmount');
// }

toggleOpen = () => {
  // Interdite, on ne doit pas changer les valeurs du state
  // directement
  // this.state.open = false;
  const { open } = this.state;
  // Pour changer un state, il faut passer par le setState
  open === true ? this.setState({ open: false }) : this.setState({ open: true });
}

// Function search value
setSearch = (e) => this.setState({ search: e.target.value });

// Function for modify my state
setCurrency = (e) => this.setState({ currency: e.target.textContent });

// function filter on search
filterCurrencies = () => {
  const { currencies, search } = this.state;
  if (!search) currencies;
  const filter = currencies.filter((obj) => obj.name.toLowerCase().includes(search.toLowerCase()));
  return filter;
};

// Function modify rate in function baseAmout
makeConversion = () => {
  const {
    baseAmount, currencies, currency,
  } = this.state;
  // Conversion = taux de change * montant de base
  const foundCurrency = currencies.find((data) => data.name === currency);
  return Number(foundCurrency.rate * baseAmount).toFixed(2);
}

// function modify baseAmount
setAmount = (e) => this.setState({ baseAmount: Math.abs(+e.target.value) });

render() {
  const {
    open,
    baseAmount,
    // currencies,
    currency,
    search,
  } = this.state;

  const value = this.makeConversion();
  const filterCurrencies = this.filterCurrencies();
  return (
    <div className="app">
      <Header baseAmount={baseAmount} onChangeInputValue={this.setAmount} />
      <Button toggleOpen={this.toggleOpen} />
      {open && (
      <Currencies
        currencies={filterCurrencies}
        onCurrencyClick={this.setCurrency}
        inputValue={search}
        onChangeInputValue={this.setSearch}
      />
      )}
      <Footer
        value={value}
        currency={currency}
      />
    </div>
  );
}
}
