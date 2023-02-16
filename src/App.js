import React from 'react'
import './App.css'
import HomeContainer from "./containers/HomeContainer"
import HeaderContainer from "./containers/HeaderContainer"
export default function App() {
  return (
    <div className = "App">
      <HeaderContainer />
    <HomeContainer/>
    </div>
  );
}

