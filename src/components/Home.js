
import React from "react";
function Home(props){
    console.warn("Home_props",props)     // here we have got addToCartHandler
  return(
    <div>
     
    <h1>Home Component</h1>
      <div className = "cartWrapper">
      <div className="imgWrapper item">
        <img src= "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"/>
      </div>
      <div className="textWrapper item">
        <span>I phone 12</span>
        <br/>
        <span>Price : 1000$</span>
      </div>
      <div className="buttonWrapper item">
        <button onClick={()=>props.addToCartHandler({price :1000, name :'i phone 11'})}>Add to Cart</button>
        <button className ="remove-from-cart" onClick={()=>props.removeFromCartHandler()}>Remove From Cart</button>
        {/*action will be called on this click
        and data will be recieved in actions */}
      </div>
      </div>
    </div>
  )
}

export default Home