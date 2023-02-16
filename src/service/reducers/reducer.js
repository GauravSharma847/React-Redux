import { ADD_TO_CART , REMOVE_FROM_CART} from "../constants";
const initialState ={
    cardData : []
  }
  
  export default function cardItems(state = [],action)  // actions are called automatically, we dont need to import them anywhere
    {
      switch(action.type){  // it sees what type has been recieved here
          case ADD_TO_CART:
            console.warn("reducer",action);  // here we recieve two data from action-> 1. type and 2. data 
          return[
            ...state,    // previous data of state
            {cardData:action.data}  // cardData will recieve data from action Data
          ]
          case REMOVE_FROM_CART:
            console.warn("reducer",action);
            state.pop();
            return[
              ...state
              
            ]
          break;
      default :
          return state
      }
    }