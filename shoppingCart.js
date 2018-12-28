class ShoppingCart extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 3
  }
  removeFromCart = () => {
    this.setState ({
      shoppingCart: this.state.shoppingCart -1
    })
  }
  render() {
    return (
      <div>
        <button disabled={this.state.shoppingCart === 0? true : false} onClick={this.removeFromCart}> - </button>
        <span> {this.state.shoppingCart} </span>
        <button> + </button>
      </div>
    )
  }
}

ReactDOM.render(<ShoppingCart />, document.getElementById('root'))