import {Component} from 'react'
import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    return (
      <div>
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <div className="image-div">
          <img
            className="currency-img"
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
            alt="currency-image"
          />
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
