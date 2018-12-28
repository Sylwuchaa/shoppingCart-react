class ShoppingCart extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 3
  }
  handleRemoveFromCart = () => {
    this.setState ({
      shoppingCart: this.state.shoppingCart -1
    })
  }
  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart +1
    })
  }
  handleBuyButton = () => {
    this.setState({
      shoppingCart: 0
    })
  }
  render() {
    return (
      <div>
        <button disabled={this.state.shoppingCart === 0? true : false} onClick={this.handleRemoveFromCart}> - </button>
        <span> {this.state.shoppingCart} </span>
        <button disabled={this.state.shoppingCart === this.state.availableProducts? true : false} onClick={this.handleAddToCart}> + </button>
        {this.state.shoppingCart > 0 && <button onClick={this.handleBuyButton}>Kup</button>}
      </div>
    )
 }
}

ReactDOM.render(<ShoppingCart />, document.getElementById('root'))