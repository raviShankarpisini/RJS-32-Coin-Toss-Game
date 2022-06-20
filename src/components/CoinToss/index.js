// Write your code here
import {Component} from 'react'
import './index.css'

const imageUrl = [
  'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  'https://assets.ccbp.in/frontend/react-js/tails-img.png',
]

class CoinToss extends Component {
  state = {count: 0, headsCount: 0, tailsCount: 0, url: imageUrl[0]}

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.setState(prevState => ({count: prevState.count + 1}))

    if (tossResult === 0) {
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
        url: imageUrl[0],
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
        url: imageUrl[1],
      }))
    }
  }

  render() {
    const {count, headsCount, tailsCount, url} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="card-heading">Coin Toss Game</h1>
          <p className="card-description">Heads (or) Tails</p>
          <img src={url} alt="toss result" className="image" />
          <button className="button" type="button" onClick={this.onClickToss}>
            Toss Coin
          </button>
          <div className="items-container">
            <p className="results">Total:{count}</p>
            <p className="results">Heads:{headsCount}</p>
            <p className="results">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
