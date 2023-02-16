import Home from "../components/Home"
import {connect} from 'react-redux'  // it will connect react redux
import{addToCart, removeFromCart} from '../service/actions/actions'  // getting addToCart function from actions.js file

const mapStateToProps = state =>({
  // cardData: state
})

const mapDispatchToProps = dispatch =>({
  addToCartHandler : data =>dispatch(addToCart(data)),  // Handler fn will be called from React Component , it will recieve some data   , addToCart action will be performed
  removeFromCartHandler : data =>dispatch(removeFromCart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)