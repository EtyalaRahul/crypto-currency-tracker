import {Component} from 'react'
import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {item} = this.props
    const {currencyLogo, currencyName, euroValue, usdValue} = item
    return (
      <div className="crypto-item">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <div className="currency-details">
          <p>{currencyName}</p>
          <p>USD: {usdValue}</p>
          <p>EUR: {euroValue}</p>
        </div>
      </div>
    )
  }
}

export default CryptocurrencyItem
