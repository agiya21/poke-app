/** @jsxRuntime classic /
/* @jsx jsx */

import React from "react"
import Header from "./components/Header"
import PokemonList from "./components/PokemonList"
import MyPokemonList from "./components/MyPokemonList"
import { BrowserRouter as Router, Route } from "react-router-dom"
import PokemonDetail from "./components/PokemonDetail"
import { css, jsx } from '@emotion/react'
import NavBarFooter from "./components/NavBarFooter"
import pokeball from './img/pokeball.png'

function App() {

  return (
    <div css={{
      backgroundColor: "#1FAA59"
    }}>

      <div>
        <h1 css={css`
        padding : 12px;
        text-align : center;
        color : white`}>

          <img css={css` width : 50px; 
          padding-bottom : 10px; 
          padding-right : 5px;
          filter : invert(100%)`} src={pokeball} alt="Pokeball" />Pokemon App</h1>
      </div>

      <Router>
        <main css={css`
          padding-bottom : 45px`}>
          <Route exact path="/">
            <PokemonList />
          </Route>

          <Route path="/MyPokemonList">
            <MyPokemonList />
          </Route>

          <Route path="/PokemonDetail/:name" component={PokemonDetail} />
        </main>
        <NavBarFooter />
      </Router>

    </div>

  )
}



export default App
