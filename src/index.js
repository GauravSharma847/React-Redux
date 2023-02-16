 import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Redux
import {legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';  // Provider wraps the application 
// what it does is it flows the redux data through out the application
import rootReducer from './service/reducers/index'
const store = createStore(rootReducer)   // here we are keeping all the reducers in store
console.warn("store" ,store)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // actions se reducer me data jata hai, reducer se store me data jata hai
  // rootReducer me hamare sare reducer agaye the
  // so Provide store ke andar ham reducer ka data put karenge 
 <Provider store ={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
