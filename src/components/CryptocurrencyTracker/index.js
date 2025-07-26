import {Component} from 'react'
import './index.css'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {cryptoList: []}

  componentDidMount() {
    return this.fetchcurrency()
  }

  fetchcurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const crypto = await response.json()
    const updateCrypto = crypto.map(item => ({
      currencyLogo: item.currency_logo,
      currencyName: item.currency_name,
      euroValue: item.euro_value,
      id: item.id,
      usdValue: item.usd_value,
    }))
    this.setState = {cryptoList: updateCrypto}
  }

  render() {
    const {cryptoList} = this.state
    return (
      <div className="main-div">
        <CryptocurrenciesList />
      </div>
    )
  }
}

export default CryptocurrencyTracker
