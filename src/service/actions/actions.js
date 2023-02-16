import {ADD_TO_CART,REMOVE_FROM_CART} from "../constants"
  export const addToCart = (data)=>{
    console.warn("action",data)
    return{
      //type:'ADD_TO_CART', hame type string me nhi dena chahiye kyuki ise ham kai jagah use karenge to koi syntax problem na ho isliye is ham ek file me declare karlenge .... example ham ise contants.js file me declare kardenge aur wha se get karlenge  
      type:ADD_TO_CART,   // type tells where the data belongs to weather addToCart or removefrom cart
      data:data            
    }
  }
  export const removeFromCart = ()=>{
    // console.warn("action",data)
    return{
      
      type:REMOVE_FROM_CART,   
                 
    }
  }