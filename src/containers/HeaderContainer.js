import Header from "../components/Header"
import {connect} from 'react-redux'  // it will connect react redux


const mapStateToProps = state =>({
    data:state.cardItems
})

const mapDispatchToProps = dispatch =>({
  
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)