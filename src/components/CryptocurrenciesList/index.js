import {Component} from 'react'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {cryptoList: []}

  componentDidMount() {
    this.fetchcurrency()
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
    this.setState({cryptoList: updateCrypto})
  }

  render() {
    const {cryptoList} = this.state
    return (
      <div>
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <div className="image-div">
          <img
            className="currency-img"
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="currency"
          />
        </div>
        <div className="crypto-list">
          <div className="crypto-header">
            <span>Coin Type</span>
            <span>USD</span>
            <span>EURO</span>
          </div>
          {cryptoList.map(item => (
            <CryptocurrencyItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
