
import React from "react";
function Header(props){
    console.warn("Home_props",props.data)     // here we have got addToCartHandler
    // console.warn(props.data.length)
  return(
    <div>
      <div className = "add-to-cart">
         <span className="cart-count">{props.data.length}</span>
        <img src ="https://st.depositphotos.com/1005920/1832/i/600/depositphotos_18323389-stock-photo-shopping-cart-green-glossy-icon.jpg"/>
      </div>
   
    </div>
  )
}

export default Header