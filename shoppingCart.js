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
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: 0
    })
  }
  render() {
    const style = this.state.shoppingCart === 0 ? {opacity: 0.3} : {};
    const {shoppingCart, availableProducts } = this.state
    return (
      <div>
        <button disabled={shoppingCart === 0? true : false} onClick={this.handleRemoveFromCart}> - </button>
        <span style={style}> {shoppingCart}</span>
        <button disabled={shoppingCart === availableProducts? true : false} onClick={this.handleAddToCart}> + </button>
        {shoppingCart > 0 && <button onClick={this.handleBuyButton}>Kup</button>}
      </div>
    )
 }
}

ReactDOM.render(<ShoppingCart />, document.getElementById('root'))