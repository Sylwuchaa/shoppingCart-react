class ShoppingCart extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 3
  }
  render() {
    return (
      <div>
        <button> - </button>
        <span> {this.state.shoppingCart} </span>
        <button> + </button>
      </div>
    )
  }
}

ReactDOM.render(<ShoppingCart />, document.getElementById('root'))