// rootReducer  -> it combines all the reducers as one project can have only one store
import {combineReducers} from 'redux'
import cardItems from './reducer'
// combine Reducers is high level component to combine all  reducers
export default combineReducers({
  cardItems,
});